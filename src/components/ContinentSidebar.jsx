import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import continents from "../data/continents";

export default function ContinentSidebar({ headerHeight = 80, isDesktop = true }) {
  if (!isDesktop) {
    return null;
  }
  const [open, setOpen] = useState(() => {
    // 처음엔 아시아만 열어두기 (원하면 빈 객체 {}로 모두 접기)
    return { };
  });
  const navigate = useNavigate();

  const toggle = (key) => setOpen((p) => ({ ...p, [key]: !p[key] }));

  return (
    <aside
      style={{
        position: "fixed",
        top: headerHeight,          // 헤더 높이만큼 아래에서 시작
        left: 0,
        width: 240,
        height: `calc(100vh - ${headerHeight}px)`,
        borderRight: "1px solid #eee",
        background: "#fff",
        overflowY: "auto",
        padding: "12px 8px",
        zIndex: 40,
      }}
    >
      {continents.map((c) => (
        <div key={c.key} style={{ marginBottom: 8 }}>
          <button
            onClick={() => toggle(c.key)}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 12px",
              border: "1px solid #e8e8e8",
              borderRadius: 10,
              background: "#fafafa",
              cursor: "pointer",
              fontWeight: 700,
            }}
          >
            <span>{c.name}</span>
            <FiChevronDown
              style={{
                transform: open[c.key] ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform .15s",
                opacity: 0.7,
              }}
            />
          </button>

          {open[c.key] && (
            <ul style={{ listStyle: "none", paddingLeft: 8, marginTop: 6 }}>
              {c.countries.map((cty) => (
                <li key={cty.code}>
                  <button
                    onClick={() => navigate(`/country/${cty.code}`)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "8px 12px",
                      borderRadius: 8,
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                      fontSize: 14,
                    }}
                  >
                    {cty.label}
                  </button>
                </li>
              ))}
              {c.countries.length === 0 && (
                <li
                  style={{
                    padding: "8px 12px",
                    color: "#999",
                    fontSize: 13,
                  }}
                >
                  (추가 예정)
                </li>
              )}
            </ul>
          )}
        </div>
      ))}
    </aside>
  );
}
