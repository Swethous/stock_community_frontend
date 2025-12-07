// src/pages/LoginPage.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import PasswordField from "../components/PasswordField";
import InputField from "../components/InputField";
import { loginApi } from "../api/auth";
import { useAuth } from "../contexts/AuthContext";   // ✅ 추가
import "./AuthPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const navigate = useNavigate();
  const { refreshUser } = useAuth();   // ✅ 추가: 로그인 후 유저 정보 다시 불러올 함수

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      // 1) 로그인 요청 → 쿠키 세팅 (HttpOnly)
      await loginApi({ email, password });
      console.log("✅ 로그인 성공");

      // 2) /api/v1/me 호출해서 AuthContext.user 갱신
      await refreshUser();

      // 3) 메인 페이지로 이동
      navigate("/");
    } catch (err: any) {
      console.error("❌ 로그인 실패:", err);

      if (err.response?.status === 401) {
        setErrorMsg("メールアドレスまたはパスワードが正しくありません。");
      } else {
        setErrorMsg(
          "ログインに失敗しました。しばらくしてからお試しください。"
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="AuthPage">
      <Header />

      <div className="AuthPage__container">
        <h1 className="AuthPage__title">ログイン</h1>

        {/* 에러 메시지 */}
        {errorMsg && <p className="AuthPage__error">{errorMsg}</p>}

        <form className="LoginForm" onSubmit={handleLogin}>
          {/* Email */}
          <InputField
            label="Email"
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <PasswordField
            label="Password"
            name="password"
            placeholder="パスワードを入力"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* 옵션 영역 (체크박스 + 링크) */}
          <div className="FormOptions">
            <label className="FormCheckbox">
              <input type="checkbox" />
              <span>ログイン状態を保持する</span>
            </label>

            <a href="/forgot-password" className="FormLink">
              パスワードをお忘れですか？
            </a>
          </div>

          {/* 로그인 버튼 */}
          <button className="PrimaryButton" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Divider */}
          <div className="Divider">
            <span>または</span>
          </div>

          {/* Google 로그인 버튼 (더미) */}
          <button className="GoogleButton" type="button">
            <img
              src="/assets/icons/google.png"
              alt="Google"
              className="GoogleIcon"
            />
            Googleでログイン
          </button>

          {/* 회원가입 링크 */}
          <div className="FormFooter">
            アカウントをお持ちでない方？
            <a href="/register" className="FormLink Strong">
              新規登録
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;