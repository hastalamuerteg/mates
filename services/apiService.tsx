import { requestData, BASE_URL } from "./httpService";

export async function apiGetAllUsers() {
  const data = await requestData(BASE_URL);
  return data;
}
