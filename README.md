# Description

Javascript/Typescript web api client module for the site below.

> https://cio.go.jp/itdashboard/webapi

# Available Datasets

情報システム全体

- [x] BasicInformationAll

情報システム基本情報

- [x] BasicInformation
- [x] SystemField
- [x] SystemArchitecture
- [x] OrganizationMaster
- [x] SystemClassMaster
- [x] SystemFieldMaster
- [x] SystemArchitectureMaster

情報システム予算

- [x] Budget
- [x] ReductionMaster
- [x] PfMaster

オープンデータ

- [x] OdGroup
- [x] OdDataset
- [x] ResourceTotal
- [x] DataFormatTotal
- [x] LanguageTotal
- [x] TagRelation
- [x] GroupTypeMaster
- [x] FrequencyMaster
- [x] DataFormatMaster
- [x] LanguageMaster
- [x] OdAllTotal

投資計画

- [x] InvestmentPlan
- [x] InvestmentByExpense

契約情報

- [x] BusinessInformation
- [x] BusinessSpending
- [x] BusinessBudget

運用コスト削減状況

- [x] CostReductionAllSystems
- [x] CostReduction5BillionSystems
- [x] CostReductionViewPoint

# Features

- Configurable client-side cache to avoid frequent requests

# Features in the bucket list

- Configurable http header

# Installation

```json
"dependencies": {
    // the package name could be anything for now.
    "itdashboard-webapiclient": "https://github.com/hirotoni/itdashboard-webapiclient.git#master",
},
```

# Usage

```typescript
import { ApiRequest, ApiResponse, ItdashboardWebApiClient } from "itdashboard-webapiclient/dist";
import { BasicInformation } from "itdashboard-webapiclient/dist/client/models/BasicInformation";

const EXPIRATION_TIME = 600000;

// initialization
const client = new ItdashboardWebApiClient();

// api request object
const apiRequest: ApiRequest<"BasicInformationDatasets", "BasicInformation"> = {
  datasetGroup: "BasicInformationDatasets",
  dataset: "BasicInformation",
  options: {
    fieldsToGet: ["organization", "system_class", "system_name", "year"],
    filterByFields: { year: 2013 },
  },
  urlCacheExpirationTime: EXPIRATION_TIME,
};

// api call
client.get(apiRequest).then((data: ApiResponse<Partial<BasicInformation>>) => {
  console.log(data);
});
```

## Client-side Url Cache

In order to lower the frequency of sending request to the server, in-memory url cache is implemented on this api client. Default cache expiration time is 60000 milliseconds.

Url cache is tied with each api client instance, which means that in the environment where multi-processes, multi-threads or on browsers, caching works on each individual instances separately.

This might raise the complexity of your applications in cache-wise. In React, for example, you can build your own cache implementation using React States, Contexts, Memos and etc...

In that case, you can disable caching of this api client by providing config with 0 millisecond at initialization, or on each request.

```ts
// disabling caching at initialization
import { ClientConfig } from "itdashboard-webapiclient/dist";

const clientConfig: ClientConfig = { urlCacheDefaultExpirationTime: 0 };
const client = new ItdashboardWebApiClient(clientConfig);

// disabling caching on each request
client.get({
  ...
  urlCacheExpirationTime: 0
});
```
