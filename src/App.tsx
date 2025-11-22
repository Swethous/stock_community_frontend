// src/App.tsx
import { useEffect, useState } from "react";
import { fetchHealth, type Health } from "./api/health";

function App() {
  const [health, setHealth] = useState<Health | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("VITE_API_BASE_URL =", import.meta.env.VITE_API_BASE_URL);

    fetchHealth()
      .then((data) => {
        setHealth(data);
        setError(null);
      })
      .catch((err) => {
        console.error("Health API error:", err);
        setError("API 호출 실패");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "24px", fontFamily: "system-ui, sans-serif" }}>
      <h1>Stock Community Frontend Test public</h1>
      <p>Rails API와 연결 테스트 중...</p>

      {loading && <p>불러오는 중...</p>}

      {!loading && error && (
        <p style={{ color: "red", marginTop: "8px" }}>{error}</p>
      )}

      {!loading && health && (
        <div
          style={{
            marginTop: "16px",
            border: "1px solid #ddd",
            padding: "12px",
            borderRadius: "8px",
          }}
        >
          <p>status: {health.status}</p>
          <p>time: {health.time}</p>
        </div>
      )}
    </div>
  );
}

export default App;