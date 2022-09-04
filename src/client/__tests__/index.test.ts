import { Datasets, ItdashboardWebApiClient } from "..";
import { FetchClient } from "../../http";

describe("Fetch Client", () => {
  const httpclient = new FetchClient();
  const client = new ItdashboardWebApiClient(httpclient);
  test("test 1", () => {
    client.get("BasicInformation").then((result) => {
      expect(result.info.dataset).toBe("基本情報");
    });
  });
});

describe("Axios Client", () => {
  const client = new ItdashboardWebApiClient();

  test("BasicInformationのテスト", () => {
    client.get("BasicInformation").then((result) => {
      expect(result.info.dataset).toBe("基本情報");
    });
  });

  test("Filterのテスト", () => {
    client.get("BasicInformation", { year: "2013" }).then((data) => {
      // check if there are only the value specified
      const isAll2013 = data.raw_data.every((x: Datasets["BasicInformation"]) => x.year === "2013");
      expect(isAll2013).toBe(true);
    });
  });
});
