export class FetchClient {
  constructor() {}

  async get(path: string, params?: object) {
    const response = await fetch(path);
    const data = JSON.parse(await response.text());
    return data;
  }
}
