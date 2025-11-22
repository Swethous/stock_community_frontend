// src/api/client.ts
import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://stock-community.fly.dev/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});