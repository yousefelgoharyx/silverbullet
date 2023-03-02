import axios from "axios";

// create axios instance
export const httpAgent = axios.create({
  baseURL: "http://192.168.8.116:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

httpAgent.interceptors.response.use(
  (r) => r,
  (e) => {
    if (e.response.status === 401) {
      console.log("access token expired");
    }
    return Promise.reject(e);
  }
);
