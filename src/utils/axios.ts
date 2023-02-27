import axios from "axios";

// create axios instance
export const httpAgent = axios.create({
  baseURL: "http://192.168.8.116:8080",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
