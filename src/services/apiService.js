import axios from "axios";

const baseHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const apiService = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_API,
  headers: baseHeaders,
});

export const aboutApiService = axios.create({
  baseURL: process.env.VUE_APP_OMDB_API,
  headers: baseHeaders,
});

export const watherApiService = axios.create({
  baseURL: process.env.VUE_APP_METAWEATHER_API,
  headers: baseHeaders,
});
