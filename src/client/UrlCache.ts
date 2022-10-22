import { createHash } from "crypto";

export const DEFAULT_EXPIRATION_TIME = 60000;

export class UrlCache {
  private urlCache: { [urlPath: string]: {}[] };
  private defaultExpirationTime: number;

  constructor(defaultExpirationTime: number = DEFAULT_EXPIRATION_TIME) {
    this.urlCache = {};
    this.defaultExpirationTime = defaultExpirationTime;
  }

  private generateHashKey(url: string) {
    const hash = createHash("md5").update(url).digest("hex");
    return hash;
  }

  get(url: string) {
    const hashKey = this.generateHashKey(url);
    const value = this.urlCache[hashKey];
    if (value) {
      if (Date.now() < value[0]) {
        const data = {
          ...value[1],
          ...{ takenFromCache: true },
        };
        return data;
      } else {
        delete this.urlCache[hashKey];
      }
    }
    return;
  }

  add(url: string, response: any, expirationTime?: number) {
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
