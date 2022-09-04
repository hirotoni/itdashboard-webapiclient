import { ItdashboardWebApiClient } from "./client";

const client = new ItdashboardWebApiClient();
client.get("BasicInformation").then((data) => console.log(data.info));
