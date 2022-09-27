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
  year: number;
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

export interface OdGroup {
  opendata_id: number;
  group_title: string;
  group_name: string;
  description: string;
  group_type_code: string;
  group_type: string;
  year: number;
}

export interface OdDataset {
  opendata_id: number;
  dataset_id: number;
  dataset_title: string;
  dataset_name: string;
  organization_code: string;
  organization: string;
  publisher: string;
  author: string;
  frequency_code: string;
  frequency: string;
  description: string;
  release_day: string;
}
