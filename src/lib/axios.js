import axios from "axios";
import appConfigs from "../config/app";

const storedUser = JSON.parse(localStorage.getItem("user"));
const storedUserToken = storedUser?.tokens?.access_token;

const instance = axios.create({
  baseURL: appConfigs.host,
  headers: {
    authorization: `Bearer ${storedUserToken}`,
  },
});

export default instance;
