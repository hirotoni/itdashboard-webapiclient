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

- [x] OdGroup
- [x] OdDataset
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

# Features

- Configurable client-side cache to avoid frequent requests

# Features in the bucket list

- Implement the interfaces of all of the above unchecked datasets.

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
import { BasicInformationModel } from "itdashboard-webapiclient/dist/client/models";

// initialization
const client = new ItdashboardWebApiClient();
let resData: ApiResponse<BasicInformationModel>;

// api call options
const fieldsToGet: (keyof Datasets["BasicInformation"])[] = ["organization", "year"];
const filterByFields = { year: 2013 };
const cacheExpirationTime = 60000;

// api call
client
  .get(
    "BasicInformation",
    {
      fieldsToGet,
      filterByFields,
    },
    cacheExpirationTime
  )
  .then((d) => {
    resData = d;
  });
```

## Client-side Url Cache

In order to lower the frequency of sending request to the server, in-memory url cache is implemented on this api client. Default cache expiration time is 60000 milliseconds.

Url cache is tied with each api client instance, which means that in the environment where this api client runs on multiple processes/threads or on browsers, caching works on each individual instances separately.

This might raise the complexity of your applications in cache-wise. In React, for example, you can build your own cache of api responses within the react contexts by using States, Contexts, Memos and etc...

In that case, you can disable caching of this api client by providing config with 0 millisecond at initialization, or on each request.

```ts
// disabling caching at initialization
const clientConfig: ClientConfig = { urlCacheDefaultExpirationTime: 0 };
const client = new ItdashboardWebApiClient(clientConfig);

// disabling caching on each request
const cacheExpirationTime = 0;
client.get("BasicInformation", {}, cacheExpirationTime);
```
