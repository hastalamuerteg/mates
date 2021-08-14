import { requestData, BASE_URL, IBGE_STATES } from "./httpService";

export async function apiGetAllUsers() {
  const data = await requestData(BASE_URL);
  return data;
}

export async function apiGetBrazilStates() {
  const data = await requestData(IBGE_STATES);
  return data;
}
