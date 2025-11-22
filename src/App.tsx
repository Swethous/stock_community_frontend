import { useEffect, useState } from "react";
import { fetchHealth, type Health } from "./api/health";

function App() {
  const [health, setHealth] = useState<Health | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchHealth()
      .then((data) => setHealth(data))
      .catch(() => setError("API 호출 실패"));
  }, []);

  return (
    <div style={{ padding: "24px" }}>
      <h1>Stock Community Frontend</h1>
      <p>Rails API 연결 테스트 중...</p>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {health && (
        <div style={{ marginTop: "16px", border: "1px solid #ddd", padding: "12px" }}>
          <p>status: {health.status}</p>
          <p>time: {health.time}</p>
        </div>
      )}
    </div>
  );
}

export default App;