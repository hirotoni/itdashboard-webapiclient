"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const client = new _1.ItdashboardWebApiClient();
client.get("BasicInformation").then((data) => console.log(data.info));
client.get("Budget").then((d) => d.raw_data);
//# sourceMappingURL=debug.js.map