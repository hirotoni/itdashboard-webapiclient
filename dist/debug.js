"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client");
const client = new client_1.ItdashboardWebApiClient();
client.get("BasicInformation").then((data) => console.log(data.info));
//# sourceMappingURL=debug.js.map