// src/api/client.ts
import axios from "axios";

if (!import.meta.env.VITE_API_BASE_URL) {
  console.error("❌ VITE_API_BASE_URL 이 설정되어 있지 않습니다!");
}

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});