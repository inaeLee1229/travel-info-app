// src/pages/CountryInfo.jsx
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import countryData from "../data/countryData";
import { normalizeCountryCode } from "../utils/countryCodeMapper";
import ContinentSidebar from "../components/ContinentSidebar";

const FAV_KEY = "favoriteCountries";

export default function CountryInfo() {
  const { countryCode: rawCode } = useParams();
  const countryCode = normalizeCountryCode(rawCode);

  const [isFav, setIsFav] = useState(false);

  const info = countryData[countryCode];

  const GLOBAL_HEADER_HEIGHT = 56;
  const PAGE_TOP_PADDING = 96;
  const SIDEBAR_WIDTH = 240;

  // 즐겨찾기 불러오기
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(FAV_KEY) || "[]");
    setIsFav(saved.includes(countryCode));
  }, [countryCode]);

  const toggleFavorite = () => {
    const saved = JSON.parse(localStorage.getItem(FAV_KEY) || "[]");
    const next = saved.includes(countryCode)
      ? saved.filter((c) => c !== countryCode)
      : [...saved, countryCode];
    setIsFav(!saved.includes(countryCode));
    localStorage.setItem(FAV_KEY, JSON.stringify(next));
  };

  return (
    <div
      style={{
        background: "#fff",
        color: "#111",
        minHeight: "100vh",
        paddingTop: PAGE_TOP_PADDING,
      }}
    >
      {/* 상단바: ← 홈(좌), 검색창(가운데), 환율 변환기(우) */}
      <div
        style={{
          position: "relative",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px 16px",
          height: 48,
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* 좌측: 홈 링크 */}
        <Link
          to="/"
          style={{
            position: "absolute",
            left: 24,
            color: "#2a7bd3",
            textDecoration: "none",
            fontWeight: 600,
            whiteSpace: "nowrap",
          }}
        >
          ← 홈
        </Link>

        {/* 가운데: 검색창 */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            width: 360,
            maxWidth: "75vw",
          }}
        >
          <SearchBar variant="inline" />
        </div>

        {/* 우측: 환율 변환기 버튼 */}
        <div style={{ position: "absolute", right: 24 }}>
          <Link
            to="/exchange"
            style={{
              textDecoration: "none",
              padding: "10px 14px",
              borderRadius: 9999,
              border: "1px solid #e5e5e5",
              background: "#fff",
              color: "#111",
              whiteSpace: "nowrap",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
            aria-label="환율 변환기"
            title="환율 변환기"
          >
            환율 변환기
          </Link>
        </div>
      </div>

      {/* 왼쪽 대륙 사이드바 */}
      <ContinentSidebar headerHeight={GLOBAL_HEADER_HEIGHT} />

      {/* 본문 */}
      <main
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          padding: "24px 24px 48px",
          paddingLeft: 24 + SIDEBAR_WIDTH,
        }}
      >
        {/* 제목 + 즐겨찾기 */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <h1 style={{ margin: 0 }}>{info?.name || countryCode}</h1>
          <button
            onClick={toggleFavorite}
            style={{
              cursor: "pointer",
              border: "1px solid #ddd",
              padding: "6px 10px",
              borderRadius: 9999,
              background: isFav ? "#ffe08a" : "#fff",
              color: "#333",
              fontSize: 14,
            }}
          >
            <span style={{ marginRight: 6 }}>{isFav ? "★" : "☆"}</span>
            {isFav ? "즐겨찾기 해제" : "즐겨찾기 추가"}
          </button>
        </div>

        {/* 기본 정보 */}
        <h2>기본 정보</h2>
        {info ? (
          <ul>
            <li><strong>수도:</strong> {info.capital}</li>
            <li><strong>공용어:</strong> {info.language}</li>
            <li><strong>통화:</strong> {info.currency} ({info.currencyCode})</li>
            <li><strong>시간대:</strong> {info.timezone}</li>
          </ul>
        ) : (
          <p>해당 국가에 대한 정보가 없습니다.</p>
        )}

        {/* 여행자 팁 */}
        <h2>기타 여행자 팁</h2>
        {info?.tips?.length ? (
          <ul>{info.tips.map((tip, i) => <li key={i}>{tip}</li>)}</ul>
        ) : (
          <p>팁 정보가 없습니다.</p>
        )}
      </main>
    </div>
  );
}