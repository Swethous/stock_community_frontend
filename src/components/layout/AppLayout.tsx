import type { ReactNode } from "react";
import Header from "./Header";
import "./AppLayout.css"; // 선택사항

type Props = {
  children: ReactNode;
};

const AppLayout = ({ children }: Props) => {
  return (
    <div className="AppLayout">
      <Header />

      <main className="AppContent">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;