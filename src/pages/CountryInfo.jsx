// src/pages/CountryInfo.jsx
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import countryData from "../data/countryData";
import { normalizeCountryCode } from "../utils/countryCodeMapper";
import ContinentSidebar from "../components/ContinentSidebar";
import "./CountryInfo.css";

const FAV_KEY = "favoriteCountries";

export default function CountryInfo() {
  const { countryCode: rawCode } = useParams();
  const countryCode = normalizeCountryCode(rawCode);

  const [isFav, setIsFav] = useState(false);
  const getIsDesktop = () =>
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 1024px)").matches
      : true;
  const [isDesktop, setIsDesktop] = useState(getIsDesktop);

  const info = countryData[countryCode];

  const GLOBAL_HEADER_HEIGHT = 56;
  const PAGE_TOP_PADDING = 96;
  const SIDEBAR_WIDTH = 240;

  // 즐겨찾기 불러오기
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(FAV_KEY) || "[]");
    setIsFav(saved.includes(countryCode));
  }, [countryCode]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(min-width: 1024px)");
    const handleChange = (event) => setIsDesktop(event.matches);

    handleChange(media);
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

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
      className="country-info"
      style={{
        paddingTop: PAGE_TOP_PADDING,
      }}
    >
      {/* 상단바: ← 홈, 검색창, 환율 변환기 */}
      <div className="country-info__toolbar" role="navigation" aria-label="국가 정보 툴바">
        <Link className="country-info__home" to="/">
          ← 홈
        </Link>

        <div className="country-info__search">
          <div className="country-info__search-inner">
            <SearchBar variant="inline" />
          </div>
        </div>

        <Link className="country-info__cta" to="/exchange" aria-label="환율 변환기" title="환율 변환기">
          환율 변환기
        </Link>
      </div>

      {/* 왼쪽 대륙 사이드바 */}
      <ContinentSidebar headerHeight={GLOBAL_HEADER_HEIGHT} isDesktop={isDesktop} />

      {/* 본문 */}
      <main
        className="country-info__main"
        style={{
          paddingLeft: isDesktop ? 24 + SIDEBAR_WIDTH : 24,
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