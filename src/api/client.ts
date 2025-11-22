// src/api/client.ts
import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api/v1";

console.log("API_BASE_URL =", API_BASE_URL);  // 디버깅용 (나중에 지워도 됨)

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});