// src/contexts/AuthContext.tsx
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import type { ReactNode } from "react";
import { apiClient } from "../api/client";
import { logoutApi } from "../api/auth"

// 백엔드가 반환하는 user JSON형식에 맞춰 타입 정의
export type AuthUser = {
  id: number;
  email: string;
  name: string | null;
  avatar_url: string | null;
  role: string;
};

type AuthContextValue = {
  user: AuthUser | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  setUser: (user: AuthUser | null) => void;
  refreshUser: () => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // /api/v1/me 호출해서 현재 로그인 유저 정보 가져오기
  const refreshUser = useCallback(async () => {
    try {
      const res = await apiClient.get("/api/v1/me");
      setUser(res.data.user);
    } catch (error) {
      // 401 등 → 비로그인 상태로 처리
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // ⭐ 로그아웃: 서버에 요청 + 프론트 상태 초기화
  const logout = useCallback(async () => {
    try {
      await logoutApi(); // DELETE /api/v1/logout (쿠키 삭제)
    } catch (error) {
      console.error("logout failed:", error);
    } finally {
      setUser(null);
      setIsLoading(false);
    }
  }, []);

  // 앱 최초 로드 시 한 번 실행 → "로그인 유지" 체크
  useEffect(() => {
    refreshUser();
  }, [refreshUser]);

  const value: AuthContextValue = useMemo(
    () => ({
      user,
      isLoggedIn: !!user,
      isLoading,
      setUser,
      refreshUser,
      logout,
    }),
    [user, isLoading, refreshUser, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// 편하게 쓰기 위한 커스텀 훅
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
};