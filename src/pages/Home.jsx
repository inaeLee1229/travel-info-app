// src/pages/Home.jsx
import React from "react";
import WorldMap from "../components/WorldMap";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Home() {
  const HEADER_HEIGHT = 56; // Header.jsx 높이와 맞추기

  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Header />

      {/* 헤더 아래 여백 + 검색창 가운데, 버튼 오른쪽 */}
      <div
        style={{
          marginTop: HEADER_HEIGHT + 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // 왼쪽, 가운데, 오른쪽
          padding: "0 32px",
        }}
      >
        {/* 왼쪽은 비워두기 */}
        <div style={{ width: 120 }} />

        {/* 가운데: 검색창 */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <div style={{ width: 400 }}>
            <SearchBar variant="inline" />
          </div>
        </div>

        {/* 오른쪽: 환율 변환기 버튼 */}
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
            boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
          }}
        >
          환율 변환기
        </Link>
      </div>

      <WorldMap />
    </div>
  );
}

