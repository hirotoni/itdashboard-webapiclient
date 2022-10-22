export declare const DEFAULT_EXPIRATION_TIME = 60000;
export declare class UrlCache {
    private urlCache;
    private defaultExpirationTime;
    constructor(defaultExpirationTime?: number);
    private generateHashKey;
    get(url: string): {
        takenFromCache: boolean;
    } | undefined;
    add(url: string, response: any, expirationTime?: number): void;
    clear(): void;
}
