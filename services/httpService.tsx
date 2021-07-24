import axios from "axios";
import { UrlRequest } from "../types/apiTypes";

export const BASE_URL = "https://randomuser.me/api/?results=200";

const axiosIstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export async function requestData(url: UrlRequest) {
  const { data } = await axiosIstance.get(url);
  return data;
}
