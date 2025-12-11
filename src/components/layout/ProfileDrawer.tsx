// src/components/layout/ProfileDrawer.tsx
import type { FC } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import "./ProfileDrawer.css";

type ProfileDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ProfileDrawer: FC<ProfileDrawerProps> = ({ isOpen, onClose }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
        await logout();
        onClose();
        navigate("/login");
    } catch (e) {
        console.error("logout fail", e);
    }
  }

  return (
    <>
      {/* 오버레이 (배경 클릭 시 닫기) */}
      <div
        className={`ProfileDrawer__overlay ${
          isOpen ? "is-open" : ""
        }`}
        onClick={onClose}
      />

      {/* 오른쪽 슬라이드 패널 */}
      <aside
        className={`ProfileDrawer ${isOpen ? "is-open" : ""}`}
      >
        <div className="ProfileDrawer__header">
          <h2>プロフィール</h2>
          <button
            type="button"
            className="ProfileDrawer__closeButton"
            onClick={onClose}
          >
          </button>
        </div>

        <div className="ProfileDrawer__user">
          <div className="ProfileDrawer__avatar">
            {/* 나중에 user.avatar_url 있으면 이미지로 교체 */}
            <span>
              {user?.name?.charAt(0) ?? "U"}
            </span>
          </div>
          <div className="ProfileDrawer__userInfo">
            <div className="ProfileDrawer__name">
              {user?.name ?? "ゲスト"}
            </div>
            <div className="ProfileDrawer__email">
              {user?.email}
            </div>
          </div>
        </div>

        <nav className="ProfileDrawer__menu">
          <a href="/profile" className="ProfileDrawer__item">
            マイページ
          </a>
          <a href="/bookmarks" className="ProfileDrawer__item">
            ブックマーク
          </a>
          <a href="/settings" className="ProfileDrawer__item">
            設定
          </a>
        </nav>

        <div className="ProfileDrawer__footer">
          {/* TODO: 여기서 로그아웃 API + useAuth로 상태 초기화 */}
          <button
            type="button"
            className="ProfileDrawer__logoutButton"
            onClick={handleLogout}
          >
            ログアウト
          </button>
        </div>
      </aside>
    </>
  );
};

export default ProfileDrawer;