// src/router/AppRouter.tsx
import { Routes, Route } from "react-router-dom";

import MainPage from "../pages/Main/MainPage";
import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";
import ForgotPasswordPage from "../pages/Auth/ForgotPasswordPage";
import ProfileMenuPage from "../pages/Profile/ProfileMenuPage";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => {
  return (
    <Routes>
      {/* 메인 (비로그인도 볼 수 있다고 가정) */}
      <Route path="/" element={<MainPage />} />

      {/* 인증 관련 */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      {/* 프로필 메뉴: 로그인한 유저만 접근 가능하게 보호 */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfileMenuPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;