import { Datasets, ItdashboardWebApiClient } from "..";
import { FetchHttpClient } from "../../http";

describe("Fetch Http Client", () => {
  const httpclient = new FetchHttpClient();
  const client = new ItdashboardWebApiClient(httpclient);
  test("should get something", async () => {
    const result = await client.get("BasicInformation");
    expect(result.info.dataset).toBe("基本情報");
  });
});

describe("Axios Http Client", () => {
  const client = new ItdashboardWebApiClient();
  jest.setTimeout(10000);

  describe("BasicInformationAll", () => {
    test("should get something", async () => {
      const result = await client.get("BasicInformationAll");
      expect(result.info.dataset).toBe("基本情報全項目");
      expect(result.raw_data).toBeTruthy();
    });
  });

  describe("BasicInformation", () => {
    test("should get something", async () => {
      const result = await client.get("BasicInformation");
      expect(result.info.dataset).toBe("基本情報");
      expect(result.raw_data).toBeTruthy();
    });

    test("should get only year 2013 records", async () => {
      const result = await client.get("BasicInformation", {
        filterByFields: {
          year: 2013,
        },
      });
      const isAll2013 = result.raw_data.every((x: Datasets["BasicInformation"]) => x.year === 2013);
      expect(isAll2013).toBe(true);
    });

    test("should get only specified fields", async () => {
      const fieldsToGet = ["organization", "year"] as (keyof Datasets["BasicInformation"])[];

      const result = await client.get("BasicInformation", {
        fieldsToGet: fieldsToGet,
      });

      const fields = Object.keys(result.raw_data[0]);
      expect(fields).toStrictEqual(fieldsToGet);
    });

    test("should get only specified fields and only year 2013 combined", async () => {
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
      const result = await client.get("OdGroup");
      expect(result.raw_data).toBeTruthy();
    });
  });

  describe("OdDataset", () => {
    test("should get something", async () => {
      const result = await client.get("OdDataset");
      expect(result.raw_data).toBeTruthy();
    });
  });
});
