// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ProfileMenuPage from "./pages/ProfileMenuPage";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* 메인 */}
          <Route path="/" element={<MainPage />} />

          {/* 인증 관련 */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />

          {/* 프로필 메뉴 (햄버거 눌렀을 때 나오는 화면) */}
          <Route path="/profile" element={<ProfileMenuPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;