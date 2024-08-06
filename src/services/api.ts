import axios from "axios";

export const api = axios.create({
  baseURL: "https://mybooks-api-q5v7.onrender.com",
  // baseURL: "http://localhost:3001",
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  },
});
