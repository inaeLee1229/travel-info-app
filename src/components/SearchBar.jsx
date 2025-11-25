// src/components/SearchBar.jsx
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import countryIndex from "../data/countryIndex";
import { normalizeCountryCode } from "../utils/countryCodeMapper";

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

  //헤더
  const computedWidth = width;
  const isHeader = variant === "header";
  const wrapperStyle = isHeader
    ? {
        position: "absolute",
        left: "50%",
        top: 16, 
        transform: "translateX(-50%)",
        zIndex: 10,
        width: computedWidth,
        maxWidth: "min(520px, calc(100vw - 32px))",
      }
    : {
        width: "100%",
        maxWidth: computedWidth,
        margin: "0 auto",
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
          width: "100%",
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
            width: "100%",
          }}
          onMouseDown={(e) => e.preventDefault()} 
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
