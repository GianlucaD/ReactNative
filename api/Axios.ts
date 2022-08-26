import axios, { AxiosInstance } from "axios";

export const defaultAxiosInstance: AxiosInstance = axios.create({
  baseURL: "https://randomuser.me/api",
});
