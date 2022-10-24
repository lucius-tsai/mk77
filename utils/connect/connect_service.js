import axios from "axios";

class ConnectService {
  constructor() {
    const axiosInstance = axios.create({
      timeout: 1000,
    });
    this._axios = axiosInstance;
  }
  get = (url, params, config = {}) => {
    if (params) {
      config.params = params;
    }
    return this._axios.get(url, config);
  };
  delete = (url, params, config = {}) => {
    if (params) {
      config.params = params;
    }
    return this._axios.delete(url, config);
  };
  post = (url, params, config = {}) => {
    return this._axios.post(url, params, config);
  };
  put = (url, params, config = {}) => {
    return this._axios.put(url, params, config);
  };
}

export default new ConnectService();
