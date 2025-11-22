import { apiClient } from "./client";

export type Health = {
  status: string;
  time: string;
};

export async function fetchHealth(): Promise<Health> {
  const response = await apiClient.get<Health>("/health");
  return response.data;
}