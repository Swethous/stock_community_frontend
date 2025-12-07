// src/pages/MainPage.tsx
import { useState } from "react";
import Header from "../components/Header";
import ProfileDrawer from "../components/ProfileDrawer";
// ... 다른 import들

const MainPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Header onMenuClick={() => setIsDrawerOpen(true)} />

      {/* 메인 컨텐츠 */}
      <main>
        {/* TODO: 여기에 종목 리스트, 피드 등 */}
      </main>

      {/* 프로필 드로어 */}
      <ProfileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
};

export default MainPage;