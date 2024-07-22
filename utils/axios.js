import axios from "axios";

const axiosConfig = {
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,DELETE,PATCH,POST,PUT",
    "Access-Control-Allow-Headers":
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  },
};
const api = axios.create(axiosConfig);

export const post = async (url, jsonObj, headers = {}) => {
  return api
    .post(url, jsonObj, { headers: { ...axiosConfig.headers, ...headers } })
    .then(
      (response) => response,
      (error) => {
        throw error.response ? error.response : error;
      }
    );
};

export const get = async (url, headers = {}) => {
  return api.get(url, { headers: { ...axiosConfig.headers, ...headers } }).then(
    (response) => response,
    (error) => {
      throw error.response ? error.response : error;
    }
  );
};

export const put = async (url, jsonObj, headers = {}) => {
  return api
    .put(url, jsonObj, { headers: { ...axiosConfig.headers, ...headers } })
    .then(
      (response) => response,
      (error) => {
        throw error.response ? error.response : error;
      }
    );
};

export const del = async (url, jsonObj, headers = {}) => {
  return api
    .delete(url, {
      headers: { ...axiosConfig.headers, ...headers },
      data: jsonObj,
    })
    .then(
      (response) => response,
      (error) => {
        throw error.response ? error.response : error;
      }
    );
};
