import { requestData, BASE_URL } from "./httpService";

export async function apiGetAllUsers() {
  const users = await requestData(BASE_URL);
  return users;
}
