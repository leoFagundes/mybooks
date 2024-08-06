import axios from "axios";

export const api = axios.create({
  baseURL: "https://mybooks-api-q5v7.onrender.com",
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  },
});
