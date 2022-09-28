import { AxiosHttpClient } from "../http/AxiosClient";
import { BasicInformationAllModel, BasicInformationModel, BudgetModel, OdDataset, OdGroup } from "./models";
import { FetchHttpClient } from "../http";
export declare type ApiResponse<T> = {
    info: {
        api_verison: string;
        dataset: string;
    };
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
export declare type ClientConfig = {
    baseUrl?: string;
    httpClient?: AxiosHttpClient | FetchHttpClient;
    urlCacheDefaultExpirationTime?: number;
};
export declare type ApiOptions<Key extends keyof Datasets> = {
    fieldsToGet?: (keyof Datasets[Key])[];
    filterByFields?: Datasets[Key];
    option?: "count";
};
export declare class ItdashboardWebApiClient {
    private baseUrl;
    private httpClient;
    private urlCache;
    constructor({ baseUrl, httpClient, urlCacheDefaultExpirationTime, }?: ClientConfig);
    get<Key extends keyof Datasets>(dataset: Key, options?: ApiOptions<Key>, urlCacheExpirationTime?: number): Promise<ApiResponse<Datasets[Key]>>;
    private buildQueryString;
    clearUrlCache(): void;
}
