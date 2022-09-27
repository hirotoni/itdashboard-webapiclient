import { AxiosHttpClient as DefaultHttpClient } from "../http/AxiosClient";
import { BasicInformationAllModel, BasicInformationModel, BudgetModel, OdDataset, OdGroup } from "./models";

const BASEURL = "https://itdashboard.cio.go.jp/PublicApi/getData.json";

export type ApiResponse<T> = {
  info: { api_verison: string; dataset: string };
  raw_data: T[];
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

  constructor(httpClient = new DefaultHttpClient(), baseUrl = BASEURL) {
    this.baseUrl = baseUrl;
    this.httpClient = httpClient;
  }

  async get<Key extends keyof Datasets>(dataset: Key, options?: Options<Key>): Promise<ApiResponse<Datasets[Key]>> {
    const queryParamsString = this.buildQueryString(dataset, options);

    const path = this.baseUrl + "?" + queryParamsString;
    const data = await this.httpClient.get(path);
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
