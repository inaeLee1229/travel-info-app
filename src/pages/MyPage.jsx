// src/pages/MyPage.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import countryData from "../data/countryData";
import { normalizeCountryCode } from "../utils/countryCodeMapper";

const FAV_KEY = "favoriteCountries";

export default function MyPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(FAV_KEY) || "[]");
    // 혹시 JP1 같은 서브코드가 저장돼 있으면 정규화
    const canon = Array.from(new Set(saved.map((c) => normalizeCountryCode(c))));
    setFavorites(canon);
  }, []);

  const removeFav = (code) => {
    const saved = JSON.parse(localStorage.getItem(FAV_KEY) || "[]");
    const next = saved.filter((c) => normalizeCountryCode(c) !== code);
    localStorage.setItem(FAV_KEY, JSON.stringify(next));
    setFavorites(next);
  };

  return (
    <div style={{ background: "#fff", minHeight: "100vh", paddingTop: 80 }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "24px" }}>
        <h1 style={{ marginTop: 0 }}>마이페이지</h1>
        <h2 style={{ marginTop: 24 }}>내 즐겨찾기</h2>

        {favorites.length === 0 ? (
          <p style={{ color: "#666" }}>즐겨찾기한 국가가 없습니다.</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: 12,
              marginTop: 12,
            }}
          >
            {favorites.map((code) => {
              const info = countryData[code];
              const name = info?.name || code;
              return (
                <div
                  key={code}
                  style={{
                    border: "1px solid #eee",
                    borderRadius: 12,
                    padding: 14,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <div style={{ fontWeight: 700 }}>{name}</div>
                  <div style={{ fontSize: 13, color: "#666" }}>
                    수도: {info?.capital ?? "-"} / 통화: {info?.currencyCode ?? "-"}
                  </div>
                  <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
                    <Link
                      to={`/country/${code}`}
                      style={{
                        textDecoration: "none",
                        color: "#fff",
                        background: "#111",
                        padding: "6px 10px",
                        borderRadius: 8,
                        fontSize: 13,
                      }}
                    >
                      정보 보기
                    </Link>
                    <button
                      onClick={() => removeFav(code)}
                      style={{
                        border: "1px solid #ddd",
                        background: "#fff",
                        padding: "6px 10px",
                        borderRadius: 8,
                        fontSize: 13,
                        cursor: "pointer",
                      }}
                    >
                      즐겨찾기 해제
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}