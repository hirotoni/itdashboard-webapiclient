import { ItdashboardWebApiClient } from ".";

const client = new ItdashboardWebApiClient();
client.get("BasicInformation").then((data) => console.log(data.info));
client.get("Budget").then((d) => d.raw_data);
