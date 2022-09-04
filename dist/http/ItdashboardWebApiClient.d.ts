import { BasicInformationAllModel, BasicInformationModel, BudgetModel } from "./models";
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
}
export declare type Options = {
    option?: "count";
};
export declare class ItdashboardWebApiClient {
    private httpClient;
    private baseUrl;
    constructor();
    get<Key extends keyof Datasets>(dataset: Key, filterByFields?: Datasets[Key], options?: Options): Promise<any>;
    private pathBuilder;
}
