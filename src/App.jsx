import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CountryInfo from "./pages/CountryInfo";
import Header from "./components/Header";
import Auth from "./pages/Auth";
import MyPage from "./pages/MyPage";
import Exchange from "./pages/Exchange";
import CommunityBoard from "./pages/CommunityBoard.jsx";
import PostDetail from "./pages/PostDetail";

function App() {
  const runSeed = async () => {
    if (!window.confirm("Firestore에 countryData 데이터를 시드할까요? (한 번만 실행)")) return;
    try {
      const { seedCountries } = await import("./scripts/seedCountries");
      await seedCountries();
      alert("✅ Firestore 시드 완료! Firestore 콘솔에서 countries 컬렉션을 확인하세요.");
    } catch (e) {
      console.error("시드 중 오류:", e);
      alert("❌ 시드 중 오류 발생. 콘솔을 확인하세요.");
    }
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:countryCode" element={<CountryInfo />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/me" element={<MyPage />} />
        <Route path="/community" element={<CommunityBoard />} />
        <Route path="/community/:postId" element={<PostDetail />} />
      </Routes>

      {/* 🔥 개발 환경(로컬)에서만 보이는 버튼 */}
      {import.meta.env.DEV && (
        <button
          onClick={runSeed}
          style={{
            position: "fixed",
            right: 16,
            bottom: 16,
            zIndex: 9999,
            padding: "10px 14px",
            borderRadius: 8,
            backgroundColor: "#007bff",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            border: "none",
          }}
        >
          Seed Countries
        </button>
      )}
    </Router>
  );
}

export default App;
