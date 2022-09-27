import { AxiosHttpClient as DefaultHttpClient } from "../http/AxiosClient";
import { BasicInformationAllModel, BasicInformationModel, BudgetModel, OdDataset, OdGroup } from "./models";
import { createHash } from "crypto";

const BASEURL = "https://itdashboard.cio.go.jp/PublicApi/getData.json";
const DEFAULT_EXPIRATION_TIME = 60000;

export type ApiResponse<T> = {
  info: { api_verison: string; dataset: string };
  raw_data: T[];
  takenFromCache?: boolean;
};

export interface Datasets {
  BasicInformationAll: Partial<BasicInformationAllModel>;
  BasicInformation: Partial<BasicInformationModel>;
  Budget: Partial<BudgetModel>;
  OdGroup: Partial<OdGroup>;
  OdDataset: Partial<OdDataset>;
}

export type Options<Key extends keyof Datasets> = {
  fieldsToGet?: (keyof Datasets[Key])[];
  filterByFields?: Datasets[Key];
  option?: "count";
};

export class ItdashboardWebApiClient {
  private baseUrl;
  private httpClient;
  private urlCache;

  constructor(httpClient = new DefaultHttpClient(), baseUrl = BASEURL) {
    this.baseUrl = baseUrl;
    this.httpClient = httpClient;
    this.urlCache = new UrlCache();
  }

  async get<Key extends keyof Datasets>(
    dataset: Key,
    options?: Options<Key>,
    cacheExpirationTime?: number
  ): Promise<ApiResponse<Datasets[Key]>> {
    const queryParamsString = this.buildQueryString(dataset, options);
    const path = this.baseUrl + "?" + queryParamsString;

    const cachedData = this.urlCache.get(path);

    if (cachedData) {
      console.log("returning cached result: ", cachedData);
      return cachedData as ApiResponse<Datasets[Key]>;
    }

    const data = await this.httpClient.get(path);

    const cache = { data, ...{ takenFromCache: true } };
    this.urlCache.add(path, cache, cacheExpirationTime);

    return data;
  }

  private buildQueryString<Key extends keyof Datasets>(dataset: Key, options?: Options<Key>) {
    const queryObject = {
      dataset: dataset,
    };

    if (options?.fieldsToGet) {
      const fieldsToGet = options.fieldsToGet?.join(",");
      Object.assign(queryObject, {
        field: fieldsToGet,
      });
    }

    if (options?.filterByFields) {
      Object.assign(queryObject, {
        ...options.filterByFields,
      });
    }

    const obj = new URLSearchParams(queryObject);
    return obj.toString();
  }
}

class UrlCache {
  private urlCache: { [aaa: string]: {}[] };
  private defaultExpirationTime;

  constructor(defaultExpirationTime: number = DEFAULT_EXPIRATION_TIME) {
    this.urlCache = {};
    this.defaultExpirationTime = defaultExpirationTime;
  }

  private generateHashKey(url: string) {
    const hash = createHash("md5").update(url).digest("hex");
    return hash;
  }

  get(url: string) {
    const hashKey = this.generateHashKey(url);
    const value = this.urlCache[hashKey];
    if (value) {
      if (Date.now() < value[0]) {
        return value[1];
      } else {
        delete this.urlCache[hashKey];
      }
    }
    return;
  }

  add(url: string, response: any, expirationTime?: number) {
    const hashKey = this.generateHashKey(url);
    const time = expirationTime ? expirationTime : this.defaultExpirationTime;
    const expiration = Date.now() + time;

    Object.assign(this.urlCache, {
      [hashKey]: [expiration, response],
    });
  }
}
