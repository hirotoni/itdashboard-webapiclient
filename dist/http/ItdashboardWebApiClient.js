"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItdashboardWebApiClient = void 0;
const HttpClient_1 = require("./HttpClient");
const BASEURL = "https://itdashboard.cio.go.jp/PublicApi/getData.json";
class ItdashboardWebApiClient {
    constructor() {
        this.httpClient = new HttpClient_1.HttpClient();
        this.baseUrl = BASEURL;
    }
    get(dataset, filterByFields, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = Object.assign(Object.assign({ dataset: dataset }, filterByFields), options);
            const queryParamsString = this.pathBuilder(queryParams);
            const path = this.baseUrl + "?" + queryParamsString;
            const data = yield this.httpClient.get(path);
            const aaaaaaa = JSON.parse(data);
            return aaaaaaa;
        });
    }
    pathBuilder(queryParams) {
        const obj = new URLSearchParams(queryParams);
        return obj.toString();
    }
}
exports.ItdashboardWebApiClient = ItdashboardWebApiClient;
//# sourceMappingURL=ItdashboardWebApiClient.js.map