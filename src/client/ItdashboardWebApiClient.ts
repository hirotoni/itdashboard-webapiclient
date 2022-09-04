import { AxiosClient as DefaultHttpClient } from "../http/AxiosClient";
import { BasicInformationAllModel, BasicInformationModel, BudgetModel } from "./models";

const BASEURL = "https://itdashboard.cio.go.jp/PublicApi/getData.json";

export type ApiResponse<T> = {
  info: { api_verison: string; dataset: string };
  raw_data: T[];
};

export interface Datasets {
  BasicInformationAll: Partial<BasicInformationAllModel>;
  BasicInformation: Partial<BasicInformationModel>;
  Budget: Partial<BudgetModel>;
}

export type Options = {
  option?: "count";
};

export class ItdashboardWebApiClient {
  private baseUrl;
  private httpClient;

  constructor(httpClient = new DefaultHttpClient(), baseUrl = BASEURL) {
    this.baseUrl = baseUrl;
    this.httpClient = httpClient;
  }

  async get<Key extends keyof Datasets>(
    dataset: Key,
    filterByFields?: Datasets[Key],
    options?: Options
  ): Promise<ApiResponse<Datasets[Key]>> {
    const queryParamsString = this.pathBuilder({ dataset, ...filterByFields, ...options });
    const path = this.baseUrl + "?" + queryParamsString;
    const data = await this.httpClient.get(path);
    return data;
  }

  private pathBuilder(queryParams: {}) {
    const obj = new URLSearchParams(queryParams);
    return obj.toString();
  }
}
