class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(url) {
    const response = await fetch(url);
    return response.json();
  }
}

export default HttpClient;
