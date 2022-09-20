# Description

Javascript/Typescript web api client module for the site below.

> https://cio.go.jp/itdashboard/webapi

# Available Datasets

Checked ones are already available through this api client.
Unchecked ones are to be implemented in the near future.

情報システム全体

- [x] BasicInformationAll

情報システム基本情報

- [x] BasicInformation
- [ ] SystemField
- [ ] SystemArchitecture
- [ ] OrganizationMaster
- [ ] SystemClassMaster
- [ ] SystemFieldMaster
- [ ] SystemArchitectureMaster

情報システム予算

- [x] Budget
- [ ] ReductionMaster
- [ ] PfMaster

オープンデータ

- [ ] OdDataset
- [ ] ResourceTotal
- [ ] DataFormatTotal
- [ ] LanguageTotal
- [ ] TagRelation
- [ ] GroupTypeMaster
- [ ] FrequencyMaster
- [ ] DataFormatMaster
- [ ] LanguageMaster
- [ ] OdAllTotal

投資計画

- [ ] InvestmentPlan
- [ ] InvestmentByExpense

契約情報

- [ ] BusinessInformation
- [ ] BusinessSpending
- [ ] BusinessBudget

運用コスト削減状況

- [ ] CostReductionAllSystems
- [ ] CostReduction5BillionSystems
- [ ] CostReductionViewPoint

# Features in the bucket list

- Implement the interfaces of the above unchecked datasets.
- Configurable client-side local cache to avoid frequent requests

# Installation

```json
"dependencies": {
    // the package name could be anything for now.
    "itdashboard-webapiclient": "https://github.com/hirotoni/itdashboard-webapiclient.git#master",
},
```

# Usage

```typescript
import { ApiResponse, ItdashboardWebApiClient } from "itdashboard-webapiclient/dist";
import { BasicInformationAllModel } from "itdashboard-webapiclient/dist/client/models";

let resData: ApiResponse<BasicInformationAllModel>;
const client = new ItdashboardWebApiClient();
client.get("BasicInformationAll").then((d) => {
  resData = d;
});
```
