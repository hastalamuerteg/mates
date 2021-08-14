import axios from "axios";

export const BASE_URL = "https://randomuser.me/api/?results=150";
export const IBGE_STATES =
  "https://servicodados.ibge.gov.br/api/v1/localidades/estados";

const axiosIstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export async function requestData(url: string) {
  const { data } = await axiosIstance.get(url);
  return data;
}
