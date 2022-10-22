import { AxiosHttpClient, AxiosHttpClient as DefaultHttpClient } from "../http/AxiosClient";
import { FetchHttpClient } from "../http";
import { Datasets } from "./models";
import { DEFAULT_EXPIRATION_TIME, UrlCache } from "./UrlCache";

const BASEURL = "https://itdashboard.cio.go.jp/PublicApi/getData.json";

export type ClientConfig = {
  baseUrl?: string;
  httpClient?: AxiosHttpClient | FetchHttpClient;
  urlCacheDefaultExpirationTime?: number;
};

export type ApiRequest<K extends keyof Datasets, V extends keyof Datasets[K]> = {
  datasetGroup: K;
  dataset: V;
  options?: ApiOptions<K, V>;
  urlCacheExpirationTime?: number;
  headers?: {};
};

export type ApiOptions<K extends keyof Datasets, V extends keyof Datasets[K]> = {
  fieldsToGet?: (keyof Datasets[K][V])[];
  filterByFields?: Datasets[K][V];
  option?: "count" | undefined;
};

export type ApiResponse<T> = {
  info: { api_verison: string; dataset: string };
  raw_data: T[];
  takenFromCache?: boolean;
};

export class ItdashboardWebApiClient {
  private baseUrl;
  private httpClient;
  private urlCache;

  constructor({
    baseUrl = BASEURL,
    httpClient = new DefaultHttpClient(),
    urlCacheDefaultExpirationTime = DEFAULT_EXPIRATION_TIME,
  }: ClientConfig = {}) {
    this.baseUrl = baseUrl;
    this.httpClient = httpClient;
    this.urlCache = new UrlCache(urlCacheDefaultExpirationTime);
  }

  async get<K extends keyof Datasets, V extends keyof Datasets[K]>(
    apiRequest: ApiRequest<K, V>
  ): Promise<ApiResponse<Datasets[K][V]>> {
    const queryParamsString = this.buildQueryString(apiRequest.dataset, apiRequest.options);
    const path = this.baseUrl + "?" + queryParamsString;
    const cachedData = this.urlCache.get(path);
    if (cachedData) {
      console.log("returning cached result: ", cachedData);
      return cachedData as ApiResponse<Datasets[K][V]>;
    }
    const data = await this.httpClient.get(path);
    this.urlCache.add(path, data, apiRequest.urlCacheExpirationTime);

    return data;
  }

  private buildQueryString<K extends keyof Datasets, V extends keyof Datasets[K]>(
    dataset: V,
    options?: ApiOptions<K, V>
  ) {
    const queryObject = { dataset: dataset as string };

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

  clearUrlCache() {
    this.urlCache.clear();
  }
}
