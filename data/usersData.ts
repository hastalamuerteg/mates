import fs from "fs";
import path from "path";
import { apiGetAllUsers } from "../services/apiService";

const USERS_CACHE_PATH = path.resolve("usersData");
export default async function getCachedUsers() {
  let cachedUsers;
  try {
    cachedUsers = JSON.parse(
      fs.readFileSync(path.join(__dirname, USERS_CACHE_PATH), "utf8")
    );
  } catch (error) {
    console.log("Member cache not initialized");
  }
  if (!cachedUsers) {
    const data = apiGetAllUsers();

    try {
      fs.writeFileSync(
        path.join(__dirname, USERS_CACHE_PATH),
        JSON.stringify(data),
        "utf8"
      );
      console.log("users cached successfully");
    } catch (error) {
      console.log("Error writing users to cache file" + error);
    }
    cachedUsers = data;
  }
  return cachedUsers;
}
