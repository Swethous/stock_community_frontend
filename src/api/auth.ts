// src/api/auth.ts
import { apiClient } from "./client";

const AUTH_PATHS = {
  login: "/api/v1/login",
  logout: "/api/v1/logout",
  register: "/api/v1/register",
  forgotPassword: "/api/v1/password/forgot",
} as const;

// ===== 타입 =====
export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  user: {
    id: number;
    email: string;
    // 필요하면 username 등 추가
  };
};

export type RegisterRequest = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export type RegisterResponse = {
  user: {
    id: number;
    email: string;
    name: string;
  };
};

export type ForgotPasswordRequest = {
  email: string;
};

export type ForgotPasswordResponse = {
  message: string; // 예: "password_reset_mail_sent"
};

// ===== 함수들 =====

// 🔹 로그인
export async function loginApi(params: LoginRequest): Promise<LoginResponse> {
  const res = await apiClient.post<LoginResponse>(AUTH_PATHS.login, params);
  return res.data;
}

// 🔹 회원가입
export async function registerApi(
  params: RegisterRequest
): Promise<RegisterResponse> {
  const res = await apiClient.post<RegisterResponse>(
    AUTH_PATHS.register,
    params
  );
  return res.data;
}

// 🔹 비밀번호 재설정 메일 요청
export async function forgotPasswordApi(
  params: ForgotPasswordRequest
): Promise<ForgotPasswordResponse> {
  const res = await apiClient.post<ForgotPasswordResponse>(
    AUTH_PATHS.forgotPassword,
    params
  );
  return res.data;
}

// logout
export async function logoutApi(): Promise<void> {
    await apiClient.delete(AUTH_PATHS.logout);
}