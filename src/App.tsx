// src/App.tsx
import { useEffect, useState } from "react";
import axios from "axios";

type Health = {
  status: string;
  time: string;
};

function App() {
  const [health, setHealth] = useState<Health | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<Health>("http://localhost:3000/api/v1/health")
      .then((res) => {
        setHealth(res.data);
      })
      .catch((err) => {
        console.error(err);
        setError("API 호출 실패");
      });
  }, []);

  return (
    <div style={{ padding: "24px", fontFamily: "system-ui, sans-serif" }}>
      <h1>Stock Community Frontend</h1>
      <p>Rails API랑 연결 테스트 중...</p>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {health ? (
        <div
          style={{
            marginTop: "16px",
            padding: "12px 16px",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
        >
          <p>status: {health.status}</p>
          <p>time: {health.time}</p>
        </div>
      ) : !error ? (
        <p>불러오는 중...</p>
      ) : null}
    </div>
  );
}

export default App;