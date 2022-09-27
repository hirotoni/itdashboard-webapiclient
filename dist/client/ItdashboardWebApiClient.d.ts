import { AxiosHttpClient as DefaultHttpClient } from "../http/AxiosClient";
import { BasicInformationAllModel, BasicInformationModel, BudgetModel, OdDataset, OdGroup } from "./models";
export declare type ApiResponse<T> = {
    info: {
        api_verison: string;
        dataset: string;
    };
    raw_data: T[];
};
export interface Datasets {
    BasicInformationAll: Partial<BasicInformationAllModel>;
    BasicInformation: Partial<BasicInformationModel>;
    Budget: Partial<BudgetModel>;
    OdGroup: Partial<OdGroup>;
    OdDataset: Partial<OdDataset>;
}
export declare type Options<Key extends keyof Datasets> = {
    fieldsToGet?: (keyof Datasets[Key])[];
    filterByFields?: Datasets[Key];
    option?: "count";
};
export declare class ItdashboardWebApiClient {
    private baseUrl;
    private httpClient;
    constructor(httpClient?: DefaultHttpClient, baseUrl?: string);
    get<Key extends keyof Datasets>(dataset: Key, options?: Options<Key>): Promise<ApiResponse<Datasets[Key]>>;
    private buildQueryString;
}
