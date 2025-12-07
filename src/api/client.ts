// src/api/client.ts
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

if (!BASE_URL) {
  console.error("❌ VITE_API_BASE_URL 이 설정되어 있지 않습니다!");
}

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,   // 🔥 핵심: 쿠키 포함 필수!
});