import {
  BasicInformation,
  OrganizationMaster,
  SystemArchitecture,
  SystemArchitectureMaster,
  SystemClassMaster,
  SystemField,
  SystemFieldMaster,
} from "./BasicInformation";
import { BasicInformationAll } from "./BasicInformationAll";
import { Budget, PfMaster, ReductionMaster } from "./Budget";
import { BusinessBudget, BusinessInformation, BusinessSpending } from "./BusinessInformation";
import { CostReduction5BillionSystems, CostReductionAllSystems, CostReductionViewPoint } from "./CostReduction";
import { InvestmentByExpense, InvestmentPlan } from "./InvestmentPlan";
import {
  DataFormatMaster,
  DataFormatTotal,
  FrequencyMaster,
  GroupTypeMaster,
  LanguageMaster,
  LanguageTotal,
  OdAllTotal,
  OdDataset,
  OdGroup,
  ResourceTotal,
  TagRelation,
} from "./OpenData";

interface BasicInformationAllDatasets {
  BasicInformationAll: Partial<BasicInformationAll>;
}
interface BasicInformationDatasets {
  BasicInformation: Partial<BasicInformation>;
  SystemField: Partial<SystemField>;
  SystemArchitecture: Partial<SystemArchitecture>;
  OrganizationMaster: Partial<OrganizationMaster>;
  SystemClassMaster: Partial<SystemClassMaster>;
  SystemFieldMaster: Partial<SystemFieldMaster>;
  SystemArchitectureMaster: Partial<SystemArchitectureMaster>;
}
interface BudgetDatasets {
  Budget: Partial<Budget>;
  ReductionMaster: Partial<ReductionMaster>;
  PfMaster: Partial<PfMaster>;
}
interface BusinessInformationDatasets {
  BusinessInformation: Partial<BusinessInformation>;
  BusinessSpending: Partial<BusinessSpending>;
  BusinessBudget: Partial<BusinessBudget>;
}
interface InvestmentPlanDatasets {
  InvestmentPlan: Partial<InvestmentPlan>;
  InvestmentByExpense: Partial<InvestmentByExpense>;
}
interface CostReductionDatasets {
  CostReductionAllSystems: Partial<CostReductionAllSystems>;
  CostReduction5BillionSystems: Partial<CostReduction5BillionSystems>;
  CostReductionViewPoint: Partial<CostReductionViewPoint>;
}
interface OpenDataDatasets {
  OdGroup: Partial<OdGroup>;
  OdDataset: Partial<OdDataset>;
  ResourceTotal: Partial<ResourceTotal>;
  DataFormatTotal: Partial<DataFormatTotal>;
  LanguageTotal: Partial<LanguageTotal>;
  TagRelation: Partial<TagRelation>;
  GroupTypeMaster: Partial<GroupTypeMaster>;
  FrequencyMaster: Partial<FrequencyMaster>;
  DataFormatMaster: Partial<DataFormatMaster>;
  LanguageMaster: Partial<LanguageMaster>;
  OdAllTotal: Partial<OdAllTotal>;
}

export interface Datasets {
  BasicInformationAllDatasets: BasicInformationAllDatasets;
  BasicInformationDatasets: BasicInformationDatasets;
  BudgetDatasets: BudgetDatasets;
  BusinessInformationDatasets: BusinessInformationDatasets;
  InvestmentPlanDatasets: InvestmentPlanDatasets;
  CostReductionDatasets: CostReductionDatasets;
  OpenDataDatasets: OpenDataDatasets;
}
