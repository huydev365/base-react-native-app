import axios from "axios";
import qs from "qs";
import { getToken } from "./storage.helper";
import Toast from "@remobile/react-native-toast";

const instance = axios.create({
  timeout: 30000
});

const handleError = error => {
  if (error.response) {
    Toast.show(error.response.data);
  } else if (error.request) {
    Toast.show("Please check network connection and try again!");
  } else {
    Toast.show("An unknown error occurred!");
  }
};

export default class RequestHelper {
  static async getHeader(config = {}): void {
    const token = await getToken();
    return {
      "Content-Type": "application/json",
      Authorization: token && `Bearer ${token}`,
      ...config
    };
  }

  static async getHeaderUploadFile(): void {
    const token = await getToken();
    return {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
      Authorization: token && `Bearer ${token}`
    };
  }

  static async get(url: string, params: {}): void {
    const header = await this.getHeader();
    return instance
      .get(url, {
        headers: header,
        params: params,
        paramsSerializer: params => {
          return qs.stringify(params, { arrayFormat: "repeat" });
        }
      })
      .then(data => {
        return data.data;
      })
      .catch(e => {
        handleError(e);
        throw e;
      });
  }

  static async post(url: string, data: {}, config): void {
    return instance({
      method: "POST",
      url: url,
      headers: await this.getHeader(config),
      data: data
    })
      .then(data => {
        return data.data;
      })
      .catch(e => {
        handleError(e);
        throw e;
      });
  }

  static async put(apiUrl: string, data: {}): void {
    return instance({
      method: "PUT",
      url: apiUrl,
      headers: await this.getHeader(),
      data: data
    })
      .then(data => {
        return data.data;
      })
      .catch(e => {
        handleError(e);
        throw e;
      });
  }

  static async putUploadFile(apiUrl: string, file: {}): void {
    let body = new FormData();
    body.append("user[profile_picture]", file);
    return instance({
      method: "PUT",
      url: apiUrl,
      headers: await this.getHeader(),
      data: body
    })
      .then(res => {
        return res.data;
      })
      .catch(error => {
        handleError(error, apiUrl, file);
        throw error;
      });
  }

  static async postUploadFile(apiUrl: string, data: {}): void {
    return instance({
      method: "POST",
      url: apiUrl,
      headers: await this.getHeaderUploadFile(),
      data: data
    })
      .then(res => {
        return res.data;
      })
      .catch(error => {
        handleError(error);
        throw error;
      });
  }

  static async delete(apiUrl: string, data: {}): void {
    return instance({
      method: "DELETE",
      url: apiUrl,
      headers: await this.getHeader(),
      data: data
    })
      .then(data => {
        return data.data;
      })
      .catch(e => {
        handleError(e);
        throw e;
      });
  }
}
