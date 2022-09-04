import axios, { AxiosResponse } from "axios";

export class AxiosClient {
  constructor() {}

  async get(path: string, params?: object) {
    const response = await axios.get(path);
    return response.data;
  }
}
