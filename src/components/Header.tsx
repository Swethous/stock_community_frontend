// src/components/Header.tsx
import type { FC } from "react";
import { useAuth } from "../contexts/AuthContext";  // 👈 로그인 여부 가져옴
import "./Header.css";

// 아이콘 경로는 나중에 네 파일 이름에 맞게 수정해줘!
import LogoIcon from "../assets/icons/logo.png";
import SearchIcon from "../assets/icons/search.png";
import MenuIcon from "../assets/icons/menu.png";
import LoginIcon from "../assets/icons/login.png";

type HeaderProps = {
  /** 햄버거 메뉴 클릭 시 (프로필 드로어 열기 등) */
  onMenuClick?: () => void;
};

const Header: FC<HeaderProps> = ({ onMenuClick }) => {
  const { isLoggedIn } = useAuth();   // 👈 AuthContext로 로그인 여부 확인

  return (
    <header className="Header">
      {/* 왼쪽 로고 영역 */}
      <div className="Header__left">
        <a className="Header__brandButton" href="/">
          <img src={LogoIcon} alt="Cabu 로고" className="Header__logo" />
          <span className="Header__title">Cabu</span>
        </a>
      </div>

      {/* 오른쪽 아이콘 / 버튼 영역 */}
      <div className="Header__right">
        {/* 검색 아이콘 */}
        <button type="button" className="Header__iconButton" aria-label="검색">
          <img src={SearchIcon} alt="검색" className="Header__iconImage" />
        </button>

        {/* 로그인 상태에 따라 UI 분기 */}
        {isLoggedIn ? (
          // 🔥 로그인 후 → 햄버거 메뉴 버튼
          <button
            type="button"
            className="Header__iconButton"
            aria-label="메뉴 열기"
            onClick={onMenuClick}
          >
            <img src={MenuIcon} alt="메뉴" className="Header__iconImage" />
          </button>
        ) : (
          // 🔥 로그인 전 → 로그인 아이콘
          <a href="/login" className="Header__loginLink">
            <img src={LoginIcon} alt="login" className="Login__iconImage" />
          </a>
        )}
      </div>
    </header>
  );
};

export default Header;