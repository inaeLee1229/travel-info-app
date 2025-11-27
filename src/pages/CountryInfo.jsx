// src/pages/CountryInfo.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import countryData from "../data/countryData";
import { normalizeCountryCode } from "../utils/countryCodeMapper";
import ContinentSidebar from "../components/ContinentSidebar";
import "./CountryInfo.css";

// Firestore에서 읽기
import { db, auth } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

// 즐겨찾기: 계정별로 다른 key 사용
const FAV_KEY_BASE = "favoriteCountries";
const getFavKey = (uid) => `${FAV_KEY_BASE}:${uid}`;

export default function CountryInfo() {
  const { countryCode: rawCode } = useParams();
  const countryCode = useMemo(() => normalizeCountryCode(rawCode), [rawCode]);

  // 로그인 사용자
  const [user, setUser] = useState(null);

  // 즐겨찾기 여부
  const [isFav, setIsFav] = useState(false);

  const getIsDesktop = () =>
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 1024px)").matches
      : true;
  const [isDesktop, setIsDesktop] = useState(getIsDesktop);

  // Firestore에서 가져온 데이터가 없으면 countryData 폴백
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  const GLOBAL_HEADER_HEIGHT = 56;
  const PAGE_TOP_PADDING = 96;
  const SIDEBAR_WIDTH = 240;

  // 로그인 상태 감지
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  // 즐겨찾기 불러오기 
  useEffect(() => {
    // 로그인 안 되어 있으면 즐겨찾기 사용 안 함
    if (!user?.uid) {
      setIsFav(false);
      return;
    }

    const key = getFavKey(user.uid);
    const saved = JSON.parse(localStorage.getItem(key) || "[]");
    const canon = Array.from(
      new Set(saved.map((c) => normalizeCountryCode(c)))
    );
    setIsFav(canon.includes(countryCode));
  }, [user?.uid, countryCode]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(min-width: 1024px)");
    const handleChange = (event) => setIsDesktop(event.matches);

    handleChange(media);
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  // Firestore → 실패/없음이면 countryData로 폴백
  useEffect(() => {
    let cancelled = false;

    const fetchCountry = async () => {
      setLoading(true);
      setErr(null);
      try {
        const ref = doc(db, "countries", countryCode);
        const snap = await getDoc(ref);

        if (!cancelled) {
          if (snap.exists()) {
            setInfo(snap.data());
          } else {
            setInfo(countryData[countryCode] ?? null);
          }
        }
      } catch (e) {
        if (!cancelled) {
          console.error(e);
          setErr("데이터를 불러오지 못했습니다.");
          setInfo(countryData[countryCode] ?? null);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchCountry();
    return () => {
      cancelled = true;
    };
  }, [countryCode]);

  // 즐겨찾기 토글 (계정별 localStorage 저장)
  const toggleFavorite = () => {
    if (!user?.uid) {
      alert("로그인 후 즐겨찾기 기능을 이용할 수 있습니다.");
      return;
    }

    const key = getFavKey(user.uid);
    const saved = JSON.parse(localStorage.getItem(key) || "[]");
    const canon = saved.map((c) => normalizeCountryCode(c));

    let next;
    if (canon.includes(countryCode)) {
      // 즐겨찾기 해제
      next = canon.filter((c) => c !== countryCode);
      setIsFav(false);
    } else {
      // 즐겨찾기 추가
      next = [...canon, countryCode];
      setIsFav(true);
    }

    localStorage.setItem(key, JSON.stringify(next));
  };

  // 표기 보정
  const languageText = Array.isArray(info?.language)
    ? info.language.join(", ")
    : info?.language || "";

  return (
    <div className="country-info" style={{ paddingTop: PAGE_TOP_PADDING }}>
      {/* 상단바 */}
      <div
        className="country-info__toolbar"
        role="navigation"
        aria-label="국가 정보 툴바"
      >
        <Link className="country-info__home" to="/">
          ← 홈
        </Link>

        <div className="country-info__search">
          <div className="country-info__search-inner">
            <SearchBar variant="inline" />
          </div>
        </div>

        <Link
          className="country-info__cta"
          to="/exchange"
          aria-label="환율 변환기"
          title="환율 변환기"
        >
          환율 변환기
        </Link>
      </div>

      {/* 왼쪽 대륙 사이드바 */}
      <ContinentSidebar
        headerHeight={GLOBAL_HEADER_HEIGHT}
        isDesktop={isDesktop}
      />

      {/* 본문 */}
      <main
        className="country-info__main"
        style={{ paddingLeft: isDesktop ? 24 + SIDEBAR_WIDTH : 24 }}
      >
        {/* 제목, 즐겨찾기 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 8,
          }}
        >
          <h1 style={{ margin: 0 }}>
            {info?.nameKo || info?.name || countryCode}
            {info?.nameEn ? ` (${info.nameEn})` : ""}
          </h1>
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

        {/* 상태 메시지 */}
        {loading && <p>불러오는 중...</p>}
        {err && <p style={{ color: "crimson" }}>{err}</p>}

        {/* 기본 정보 */}
        <h2>기본 정보</h2>
        {info ? (
          <ul>
            <li>
              <strong>수도:</strong> {info.capital || "-"}
            </li>
            <li>
              <strong>공용어:</strong> {languageText || "-"}
            </li>
            <li>
              <strong>통화:</strong> {info.currency || "-"}
              {info.currencyCode ? ` (${info.currencyCode})` : ""}
            </li>
            <li>
              <strong>시간대:</strong> {info.timezone || "-"}
            </li>
          </ul>
        ) : (
          !loading && <p>해당 국가에 대한 정보가 없습니다.</p>
        )}

        {/* 여행자 팁 */}
        <h2>기타 여행자 팁</h2>
        {info?.tips?.length ? (
          <ul>{info.tips.map((tip, i) => <li key={i}>{tip}</li>)}</ul>
        ) : (
          !loading && <p>팁 정보가 없습니다.</p>
        )}
      </main>
    </div>
  );
}

