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
const AxiosClient_1 = require("../http/AxiosClient");
const crypto_1 = require("crypto");
const BASEURL = "https://itdashboard.cio.go.jp/PublicApi/getData.json";
const DEFAULT_EXPIRATION_TIME = 60000;
class ItdashboardWebApiClient {
    constructor({ baseUrl = BASEURL, httpClient = new AxiosClient_1.AxiosHttpClient(), urlCacheDefaultExpirationTime = DEFAULT_EXPIRATION_TIME, } = {}) {
        this.baseUrl = baseUrl;
        this.httpClient = httpClient;
        this.urlCache = new UrlCache(urlCacheDefaultExpirationTime);
    }
    get(dataset, options, urlCacheExpirationTime) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsString = this.buildQueryString(dataset, options);
            const path = this.baseUrl + "?" + queryParamsString;
            const cachedData = this.urlCache.get(path);
            if (cachedData) {
                console.log("returning cached result: ", cachedData);
                return cachedData;
            }
            const data = yield this.httpClient.get(path);
            const cache = Object.assign({ data }, { takenFromCache: true });
            this.urlCache.add(path, cache, urlCacheExpirationTime);
            return data;
        });
    }
    buildQueryString(dataset, options) {
        var _a;
        const queryObject = {
            dataset: dataset,
        };
        if (options === null || options === void 0 ? void 0 : options.fieldsToGet) {
            const fieldsToGet = (_a = options.fieldsToGet) === null || _a === void 0 ? void 0 : _a.join(",");
            Object.assign(queryObject, {
                field: fieldsToGet,
            });
        }
        if (options === null || options === void 0 ? void 0 : options.filterByFields) {
            Object.assign(queryObject, Object.assign({}, options.filterByFields));
        }
        const obj = new URLSearchParams(queryObject);
        return obj.toString();
    }
    clearUrlCache() {
        this.urlCache.clear();
    }
}
exports.ItdashboardWebApiClient = ItdashboardWebApiClient;
class UrlCache {
    constructor(defaultExpirationTime = DEFAULT_EXPIRATION_TIME) {
        this.urlCache = {};
        this.defaultExpirationTime = defaultExpirationTime;
    }
    generateHashKey(url) {
        const hash = (0, crypto_1.createHash)("md5").update(url).digest("hex");
        return hash;
    }
    get(url) {
        const hashKey = this.generateHashKey(url);
        const value = this.urlCache[hashKey];
        if (value) {
            if (Date.now() < value[0]) {
                return value[1];
            }
            else {
                delete this.urlCache[hashKey];
            }
        }
        return;
    }
    add(url, response, expirationTime) {
        const hashKey = this.generateHashKey(url);
        const time = expirationTime !== undefined && !isNaN(expirationTime) ? expirationTime : this.defaultExpirationTime;
        const expiration = Date.now() + time;
        Object.assign(this.urlCache, {
            [hashKey]: [expiration, response],
        });
    }
    clear() {
        this.urlCache = {};
    }
}
//# sourceMappingURL=ItdashboardWebApiClient.js.map