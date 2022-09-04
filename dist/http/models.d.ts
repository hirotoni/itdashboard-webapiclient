export interface BasicInformationAllModel {
    system_id: string;
    system_name: string;
    system_class_code: string;
    system_class: string;
    organization_code: string;
    organization: string;
    system_field_code: string;
    system_field: string;
    architecture_code: string;
    architecture: string;
    reduction_code: string;
    reduction: string;
    pf_code: string;
    pf: string;
    year: string;
}
export interface BasicInformationModel {
    system_id: string;
    system_name: string;
    system_class_code: string;
    system_class: string;
    organization_code: string;
    organization: string;
    year: string;
}
export interface BudgetModel {
    system_id: string;
    system_name: string;
    system_class_code: string;
    system_class: string;
    organization_code: string;
    organization: string;
    year: string;
    reduction_code: string;
    reduction: string;
    pf_code: string;
    pf: string;
    operating_budget: string;
    development_budget: string;
    sum_budget: string;
}
