// src/components/SearchBar.jsx
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import countryIndex from "../data/countryIndex";
import { normalizeCountryCode } from "../utils/countryCodeMapper";

/**
 * variant:
 *  - "inline"  : 부모가 자리를 잡아줌(기본). 일반적인 레이아웃에서 사용
 *  - "header"  : 헤더 안에서 가운데 고정(헤더 전용)
 */
export default function SearchBar({ variant = "inline", width = 520 }) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return [];
    return countryIndex
      .filter((item) => item.keywords.some((k) => k.toLowerCase().includes(term)))
      .slice(0, 8);
  }, [q]);

  const go = (code) => {
    const canon = normalizeCountryCode(code);
    navigate(`/country/${canon}`);
    setOpen(false);
    setQ("");
  };

  // 위치 스타일: 헤더 전용/일반
  const wrapperStyle =
    variant === "header"
      ? {
          position: "absolute",
          left: "50%",
          top: 16,                    // 헤더 안에서 살짝 아래
          transform: "translateX(-50%)",
          zIndex: 10,
          width,
        }
      : {
          width,                      // 부모가 정렬을 담당
          zIndex: 10,
        };

  return (
    <div style={wrapperStyle}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #ddd",
          padding: "10px 16px",
          borderRadius: 9999,
          boxShadow: "0 4px 18px rgba(0,0,0,0.06)",
          backgroundColor: "#fff",
        }}
      >
        <input
          type="text"
          placeholder="국가명 검색..."
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          style={{
            outline: "none",
            border: "none",
            flexGrow: 1,
            fontSize: 14,
            background: "transparent",
          }}
        />
        <FiSearch style={{ color: "#888" }} />
      </div>

      {open && results.length > 0 && (
        <div
          style={{
            marginTop: 6,
            background: "#fff",
            border: "1px solid #eee",
            borderRadius: 12,
            boxShadow: "0 10px 24px rgba(0,0,0,.08)",
            overflow: "hidden",
          }}
          onMouseDown={(e) => e.preventDefault()} // 클릭 시 input blur 방지
        >
          {results.map((r, i) => (
            <button
              key={i}
              onClick={() => go(r.code)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "10px 14px",
                border: "none",
                background: "white",
                cursor: "pointer",
                fontSize: 14,
              }}
            >
              {r.keywords[0]} <span style={{ opacity: 0.6 }}>({r.code})</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
