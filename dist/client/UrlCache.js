"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlCache = exports.DEFAULT_EXPIRATION_TIME = void 0;
const crypto_1 = require("crypto");
exports.DEFAULT_EXPIRATION_TIME = 60000;
class UrlCache {
    constructor(defaultExpirationTime = exports.DEFAULT_EXPIRATION_TIME) {
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
                const data = Object.assign(Object.assign({}, value[1]), { takenFromCache: true });
                return data;
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
exports.UrlCache = UrlCache;
//# sourceMappingURL=UrlCache.js.map