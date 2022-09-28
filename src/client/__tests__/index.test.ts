import { Datasets, ItdashboardWebApiClient } from "..";
import { FetchHttpClient } from "../../http";

describe("Fetch Http Client", () => {
  const httpclient = new FetchHttpClient();
  const client = new ItdashboardWebApiClient({ httpClient: httpclient });
  test("should get something", async () => {
    const result = await client.get("BasicInformation");
    expect(result.info.dataset).toBe("基本情報");
  });
});

describe("Axios Http Client", () => {
  jest.setTimeout(10000);

  describe("BasicInformationAll", () => {
    test("should get something", async () => {
      const client = new ItdashboardWebApiClient();
      const result = await client.get("BasicInformationAll");
      expect(result.info.dataset).toBe("基本情報全項目");
      expect(result.raw_data).toBeTruthy();
    });
  });

  describe("BasicInformation", () => {
    test("should get something", async () => {
      const client = new ItdashboardWebApiClient();
      const result = await client.get("BasicInformation");
      expect(result.info.dataset).toBe("基本情報");
      expect(result.raw_data).toBeTruthy();
    });

    test("should get only year 2013 records", async () => {
      const client = new ItdashboardWebApiClient();
      const result = await client.get("BasicInformation", {
        filterByFields: {
          year: 2013,
        },
      });
      const isAll2013 = result.raw_data.every((x: Datasets["BasicInformation"]) => x.year === 2013);
      expect(isAll2013).toBe(true);
    });

    test("should get only specified fields", async () => {
      const client = new ItdashboardWebApiClient();
      const fieldsToGet = ["organization", "year"] as (keyof Datasets["BasicInformation"])[];

      const result = await client.get("BasicInformation", {
        fieldsToGet: fieldsToGet,
      });

      const fields = Object.keys(result.raw_data[0]);
      expect(fields).toStrictEqual(fieldsToGet);
    });

    test("should get only specified fields and only year 2013 combined", async () => {
      const client = new ItdashboardWebApiClient();
      const fieldsToGet: (keyof Datasets["BasicInformation"])[] = ["organization", "year"];
      const filterByFields = { year: 2013 };

      const result = await client.get("BasicInformation", {
        fieldsToGet: fieldsToGet,
        filterByFields: filterByFields,
      });

      const fields = Object.keys(result.raw_data[0]);
      expect(fields).toStrictEqual(fieldsToGet);
      const isAll2013 = result.raw_data.every((x: Datasets["BasicInformation"]) => x.year === filterByFields.year);
      expect(isAll2013).toBe(true);
    });
  });

  describe("OdGroup", () => {
    test("should get something", async () => {
      const client = new ItdashboardWebApiClient();
      const result = await client.get("OdGroup");
      expect(result.raw_data).toBeTruthy();
    });
  });

  describe("OdDataset", () => {
    test("should get response from cache", async () => {
      const client = new ItdashboardWebApiClient();
      const EXPIRATION_TIME = 10000;

      const resultToBeCached = await client.get("OdDataset", {}, EXPIRATION_TIME);
      expect(resultToBeCached.raw_data).toBeTruthy();

      const resultFromCache = await client.get("OdDataset");
      expect(resultFromCache.takenFromCache).toBe(true);

      setTimeout(async () => {
        const resultFromFresh = await client.get("OdDataset");
        expect(resultFromFresh.takenFromCache).toBe(undefined);
      }, EXPIRATION_TIME);
    });

    test("should get response without client-side cache", async () => {
      const client = new ItdashboardWebApiClient();
      const EXPIRATION_TIME = 0;

      const resultToBeCached = await client.get("OdDataset", {}, EXPIRATION_TIME);
      expect(resultToBeCached.raw_data).toBeTruthy();

      const resultFromCache = await client.get("OdDataset");
      expect(resultFromCache.takenFromCache).toBe(undefined);
    });
  });
});
