// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, setUser);
    return () => unsub();
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (e) {
      console.error(e);
      alert("로그아웃 중 오류가 발생했습니다.");
    }
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 56,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 16px",
        background: "rgba(255,255,255,.9)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid #eee",
        zIndex: 1000,
      }}
    >
      {/* 로고 / 홈 링크 */}
      <Link
        to="/"
        style={{ textDecoration: "none", color: "#333", fontWeight: 700, fontSize: 18 }}
      >
        TripMate
      </Link>

      <nav style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {!user ? (
          pathname !== "/auth" ? (
            <Link
              to="/auth"
              style={{
                textDecoration: "none",
                color: "#fff",
                background: "#111",
                padding: "8px 14px",
                borderRadius: 999,
                fontSize: 14,
              }}
            >
              로그인 / 회원가입
            </Link>
          ) : (
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#111",
                border: "1px solid #ddd",
                padding: "8px 14px",
                borderRadius: 999,
                fontSize: 14,
              }}
            >
              홈으로
            </Link>
          )
        ) : (
          <>
            {/* 정보공유방 링크 */}
            <Link
              to="/community"
              style={{
                textDecoration: "underline",
                color: "#111",
                fontSize: 14,
                padding: "4px 6px",
              }}
            >
              정보공유방
            </Link>

            {/* 마이페이지 */}
            <Link
              to="/me"
              style={{
                textDecoration: "none",
                color: "#111",
                border: "1px solid #ddd",
                padding: "8px 12px",
                borderRadius: 999,
                fontSize: 14,
              }}
            >
              마이페이지
            </Link>

            {/* 로그아웃 버튼 */}
            <button
              onClick={logout}
              style={{
                color: "#fff",
                background: "#111",
                padding: "8px 12px",
                borderRadius: 999,
                fontSize: 14,
                border: "none",
                cursor: "pointer",
              }}
            >
              로그아웃
            </button>
          </>
        )}
      </nav>
    </header>
  );
}
