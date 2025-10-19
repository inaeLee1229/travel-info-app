// src/pages/Favorites.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import countryData from "../data/countryData";

export default function Favorites() {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem("favCountries") || "[]");
    setList(arr);
  }, []);

  if (list.length === 0) {
    return (
      <div style={{ padding: "2rem" }}>
        <h1>즐겨찾기</h1>
        <p>아직 즐겨찾기한 국가가 없습니다.</p>
        <Link to="/">지도에서 국가를 선택해 보세요</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>즐겨찾기</h1>
      <ul style={{ padding: 0, listStyle: "none" }}>
        {list.map(code => {
          const name = countryData[code]?.name || code;
          return (
            <li key={code} style={{ margin: "8px 0" }}>
              <button
                onClick={() => navigate(`/country/${code}`)}
                style={{
                  border: "1px solid #eee",
                  background: "#fff",
                  padding: "10px 14px",
                  borderRadius: 10,
                  cursor: "pointer",
                  width: 360,
                  textAlign: "left"
                }}
              >
                {name} <span style={{ opacity: .6 }}>({code})</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
