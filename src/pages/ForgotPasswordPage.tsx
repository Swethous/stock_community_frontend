// src/pages/ForgotPasswordPage.tsx
import { useState } from "react";
import Header from "../components/Header";
import InputField from "../components/InputField";
import "./AuthPage.css";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 비밀번호 재설정 메일 요청 API 호출
    console.log({ email });
  };

  return (
    <div className="AuthPage">
      <Header />

      <div className="AuthPage__container">
        <h1 className="AuthPage__title">パスワードをお忘れの場合</h1>
        <p className="AuthPage__subtitle">
          登録したメールアドレスに再設定用のリンクをお送りします。
        </p>

        <form className="LoginForm" onSubmit={handleSubmit}>
          <InputField
            label="Email"
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="PrimaryButton" type="submit">
            送信
          </button>

          <div className="FormFooter">
            ログイン画面に戻りますか？
            <a href="/login" className="FormLink Strong">
              ログイン
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;