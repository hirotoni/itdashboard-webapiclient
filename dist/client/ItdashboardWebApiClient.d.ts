import { AxiosHttpClient } from "../http/AxiosClient";
import { FetchHttpClient } from "../http";
import { Datasets } from "./models";
export declare type ClientConfig = {
    baseUrl?: string;
    httpClient?: AxiosHttpClient | FetchHttpClient;
    urlCacheDefaultExpirationTime?: number;
};
export declare type ApiRequest<K extends keyof Datasets, V extends keyof Datasets[K]> = {
    datasetGroup: K;
    dataset: V;
    options?: ApiOptions<K, V>;
    urlCacheExpirationTime?: number;
    headers?: {};
};
export declare type ApiOptions<K extends keyof Datasets, V extends keyof Datasets[K]> = {
    fieldsToGet?: (keyof Datasets[K][V])[];
    filterByFields?: Datasets[K][V];
    option?: "count" | undefined;
};
export declare type ApiResponse<T> = {
    info: {
        api_verison: string;
        dataset: string;
    };
    raw_data: T[];
    takenFromCache?: boolean;
};
export declare class ItdashboardWebApiClient {
    private baseUrl;
    private httpClient;
    private urlCache;
    constructor({ baseUrl, httpClient, urlCacheDefaultExpirationTime, }?: ClientConfig);
    get<K extends keyof Datasets, V extends keyof Datasets[K]>(apiRequest: ApiRequest<K, V>): Promise<ApiResponse<Datasets[K][V]>>;
    private buildQueryString;
    clearUrlCache(): void;
}
