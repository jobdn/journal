import axios from "axios";
import { USER_DATA } from "shared/constants";

export const api = axios.create({
  baseURL: __API__,
});

api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = localStorage.getItem(USER_DATA) || "";
  }

  return config;
});
