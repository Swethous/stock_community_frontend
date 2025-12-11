// src/pages/RegisterPage.tsx
import { useState } from "react";
import Header from "../../components/layout/Header";
import InputField from "../../components/common/InputField";
import "./AuthPage.css";
import PasswordField from "../../components/common/PasswordField";
import { registerApi } from "../../api/auth";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const res = await registerApi({
        name,
        email,
        password,
        passwordConfirm
      });
      console.log("register success", res)

      navigate("/login");
    } catch (err) {
      console.error("register fail");
    }
  };

  return (
    <div className="AuthPage">
      <Header />

      <div className="AuthPage__container">
        <h1 className="AuthPage__title">アカウント作成</h1>
        <p className="AuthPage__subtitle">株式コミュニティに参加しよう！</p>

        <form className="LoginForm" onSubmit={handleSubmit} autoComplete="off">
          <InputField
            label="ユーザー名"
            name="Name"
            placeholder="ユーザー名を入力"
            value={name}
            autoComplete="new-user"
            onChange={(e) => setName(e.target.value)}
          />

          <InputField
            label="メールアドレス"
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={email}
            autoComplete="new-email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordField
            label="パスワード"
            name="password"
            placeholder="パスワードを入力"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <PasswordField
            label="パスワード確認"
            name="passwordConfirm"
            placeholder="パスワードを確認"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />

          <button className="PrimaryButton" type="submit">
            新規登録
          </button>

          <div className="Divider">
            <span>または</span>
          </div>

          <button className="GoogleButton" type="button">
            {/* 아이콘 경로는 네가 쓰는 png로 수정 */}
            <img
              src="/assets/icons/google.png"
              alt="Google"
              className="GoogleIcon"
            />
            Googleで登録
          </button>

          <div className="FormFooter">
            すでにアカウントをお持ちの方？
            <a href="/login" className="FormLink Strong">
              ログイン
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;