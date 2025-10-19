// src/pages/Exchange.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const CURRENCIES = [
  "KRW","USD","EUR","JPY","CNY","GBP","AUD","CAD","CHF","HKD","TWD",
  "THB","VND","IDR","PHP","MYR","SGD","INR","RUB","BRL"
];

const LS_KEY = "exchange:lastState";

export default function Exchange() {
  const [search] = useSearchParams();

  // 초기값: 쿼리 > 로컬스토리지 > 기본값
  const ls = safeParse(localStorage.getItem(LS_KEY));
  const [amount, setAmount] = useState(
    normAmount(search.get("amount")) ?? ls?.amount ?? 10000
  );
  const [from, setFrom] = useState(
    (search.get("from") || ls?.from || "KRW").toUpperCase()
  );
  const [to, setTo] = useState(
    (search.get("to") || ls?.to || "USD").toUpperCase()
  );

  const [rate, setRate] = useState(null);
  const [provider, setProvider] = useState("");
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [lastUpdated, setLastUpdated] = useState("");

  // ---------- 환율 제공자 1: Frankfurter (ECB, CORS OK) ----------
  async function fetchFromFrankfurter(signal, base, quote) {
    const url = `https://api.frankfurter.app/latest?from=${encodeURIComponent(base)}&to=${encodeURIComponent(quote)}`;
    const res = await fetch(url, { cache: "no-store", signal });
    if (!res.ok) throw new Error(`Frankfurter ${res.status}`);
    const data = await res.json(); // {date, rates:{[quote]:number}}
    const r = data?.rates?.[quote];
    if (r == null) throw new Error("Frankfurter: rate null");
    setLastUpdated(data?.date ?? "");
    setProvider("Frankfurter (ECB)");
    return Number(r);
  }

  // ---------- 환율 제공자 2: exchangerate.host (폴백) ----------
  async function fetchFromERH(signal, base, quote) {
    const url = `https://api.exchangerate.host/latest?base=${encodeURIComponent(base)}&symbols=${encodeURIComponent(quote)}`;
    const res = await fetch(url, { cache: "no-store", signal });
    if (!res.ok) throw new Error(`exchangerate.host ${res.status}`);
    const data = await res.json(); // {date, rates:{[quote]:number}}
    const r = data?.rates?.[quote];
    if (r == null) throw new Error("exchangerate.host: rate null");
    setLastUpdated(data?.date ?? "");
    setProvider("exchangerate.host");
    return Number(r);
  }

  // ---------- 통합 호출 (동일통화=1, Frankfurter → ERH 폴백) ----------
  async function getRate(signal, base, quote) {
    if (base === quote) {
      setProvider("—");
      setLastUpdated("");
      return 1;
    }
    try {
      return await fetchFromFrankfurter(signal, base, quote);
    } catch (_) {
      return await fetchFromERH(signal, base, quote);
    }
  }

  // 환율 가져오기
  useEffect(() => {
    // 유효한 통화만 허용
    if (!CURRENCIES.includes(from)) setFrom("KRW");
    if (!CURRENCIES.includes(to)) setTo("USD");

    const ac = new AbortController();
    setLoading(true);
    setErr("");
    setRate(null);
    setLastUpdated("");
    setProvider("");

    getRate(ac.signal, from, to)
      .then((r) => setRate(r))
      .catch((e) => {
        if (e.name !== "AbortError") {
          console.error(e);
          setErr("환율 정보를 가져오지 못했습니다. 잠시 후 다시 시도해주세요.");
        }
      })
      .finally(() => setLoading(false));

    return () => ac.abort();
  }, [from, to]);

  // 최근 상태 저장
  useEffect(() => {
    localStorage.setItem(
      LS_KEY,
      JSON.stringify({ amount, from, to })
    );
  }, [amount, from, to]);

  // 변환 값
  const converted = useMemo(() => {
    if (rate == null) return "";
    const v = Number(amount) * rate;
    return Number.isFinite(v)
      ? v.toLocaleString(undefined, { maximumFractionDigits: 4 })
      : "";
  }, [amount, rate]);

  // 결과 복사
  const copyResult = () => {
    const text = converted
      ? `${amount} ${from} → ${converted} ${to}`
      : "";
    if (!text) return;
    navigator.clipboard?.writeText(text).catch(() => {});
  };

  return (
    <div style={{ background: "#fff", minHeight: "100vh", padding: "96px 24px 48px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1 style={{ margin: 0 }}>환율 변환기</h1>
          <Link to="/" style={{ color: "#2a7bd3", textDecoration: "none", fontWeight: 600 }}>
            ← 홈
          </Link>
        </div>

        <div
          style={{
            marginTop: 16,
            padding: 16,
            border: "1px solid #eee",
            borderRadius: 12,
            boxShadow: "0 6px 24px rgba(0,0,0,.06)",
            background: "#fff",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 12 }}>
            {/* FROM */}
            <div>
              <label style={{ fontSize: 13, color: "#666" }}>From</label>
              <div style={{ display: "flex", gap: 8 }}>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(normAmount(e.target.value) ?? 0)}
                  min={0}
                  step="any"
                  style={input}
                />
                <select value={from} onChange={(e) => setFrom(e.target.value)} style={select}>
                  {CURRENCIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* 스왑 버튼 */}
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
              <button
                onClick={() => {
                  setFrom(to);
                  setTo(from);
                }}
                style={{
                  padding: "10px 12px",
                  borderRadius: 10,
                  border: "1px solid #ddd",
                  background: "#fafafa",
                  cursor: "pointer",
                }}
                aria-label="swap"
                title="통화 바꾸기"
              >
                ⇅
              </button>
            </div>

            {/* TO */}
            <div>
              <label style={{ fontSize: 13, color: "#666" }}>To</label>
              <div style={{ display: "flex", gap: 8 }}>
                <input
                  value={converted}
                  readOnly
                  placeholder={loading ? "불러오는 중…" : ""}
                  style={{ ...input, background: "#fafafa" }}
                />
                <select value={to} onChange={(e) => setTo(e.target.value)} style={select}>
                  {CURRENCIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* 하단 상태 영역 */}
          <div style={{ marginTop: 12, color: "#555", display: "flex", gap: 12, alignItems: "center" }}>
            {loading ? (
              "환율 불러오는 중…"
            ) : err ? (
              <span style={{ color: "#d00" }}>{err}</span>
            ) : rate != null ? (
              <>
                <span>
                  현재 환율: 1 {from} ={" "}
                  {rate.toLocaleString(undefined, { maximumFractionDigits: 6 })} {to}
                  {lastUpdated && (
                    <em style={{ marginLeft: 8, color: "#888" }}>({lastUpdated} 기준)</em>
                  )}
                  {provider && (
                    <em style={{ marginLeft: 8, color: "#888" }}>· {provider}</em>
                  )}
                </span>
                <button onClick={copyResult} style={{ padding: "8px 12px" }}>결과 복사</button>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function safeParse(json) {
  try { return JSON.parse(json || "null"); } catch { return null; }
}
function normAmount(v) {
  if (v == null) return null;
  const n = Number(v);
  if (!Number.isFinite(n) || n < 0) return 0;
  return n;
}

const input = {
  flex: 1,
  padding: "12px 14px",
  borderRadius: 10,
  border: "1px solid #ddd",
  outline: "none",
};
const select = {
  width: 110,
  padding: "12px 10px",
  borderRadius: 10,
  border: "1px solid #ddd",
  outline: "none",
  background: "#fff",
};
