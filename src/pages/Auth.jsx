// src/pages/Auth.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  // signInWithPopup, // ← 구글 로그인 쓰려면 주석 해제
} from "firebase/auth";
import { auth /*, googleProvider*/ } from "../firebase"; // ⬅️ 경로 수정!

export default function Auth() {
  const [mode, setMode] = useState("login"); // 'login' | 'signup'
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [showPw2, setShowPw2] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  // 로그인 상태 감시
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  const emailValid = useMemo(() => /\S+@\S+\.\S+/.test(email), [email]);
  const pwValid = useMemo(() => pw.length >= 6, [pw]);
  const pwMatch = useMemo(
    () => (mode === "login" ? true : pw && pw2 && pw === pw2),
    [mode, pw, pw2]
  );

  const canSubmit = emailValid && pwValid && pwMatch && !loading;

  const mapFirebaseError = (code) => {
    switch (code) {
      case "auth/email-already-in-use":
      return "이미 가입된 이메일입니다.";
    case "auth/invalid-email":
      return "올바르지 않은 이메일 형식입니다.";
    case "auth/invalid-credential":
    case "auth/wrong-password":
      return "이메일 또는 비밀번호가 올바르지 않습니다.";
    case "auth/user-not-found":
      return "가입된 사용자가 없습니다.";
    case "auth/too-many-requests":
      return "요청이 너무 많습니다. 잠시 후 다시 시도해주세요.";
    case "auth/operation-not-allowed":
      return "이메일/비밀번호 로그인이 비활성화되어 있습니다. 콘솔에서 활성화하세요.";
    case "auth/weak-password":
      return "비밀번호가 너무 약합니다. 6자 이상으로 설정하세요.";
    case "auth/network-request-failed":
      return "네트워크 오류가 발생했습니다. 인터넷 연결을 확인하세요.";
    default:
      return "요청 처리 중 오류가 발생했습니다.";
    }
  };

  const onSubmit = async (e) => {
  e.preventDefault();
  if (!canSubmit) return;

  setErrMsg("");
  setLoading(true);

  try {
    if (mode === "signup") {
      // 회원가입
      await createUserWithEmailAndPassword(auth, email, pw);
    } else {
      // 로그인
      await signInWithEmailAndPassword(auth, email, pw);
    }

    // 성공 시 홈으로 이동
    navigate("/");
  } catch (err) {
    console.error("🔥 Firebase Auth Error:", err.code, err.message);
    
    // 에러 메시지 매핑
    const msg = mapFirebaseError(err.code);
    setErrMsg(msg);

    // 알림창으로도 보여주면 디버깅에 도움됨
    alert(msg);
  } finally {
    setLoading(false);
  }
};

  const handleLogout = async () => {
    setLoading(true);
    setErrMsg("");
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
      setErrMsg(mapFirebaseError(err.code));
    } finally {
      setLoading(false);
    }
  };

  // (선택) 구글 로그인 – firebase.js에서 googleProvider를 export 했다면 주석 해제해서 사용
  // const handleGoogle = async () => {
  //   setLoading(true);
  //   setErrMsg("");
  //   try {
  //     await signInWithPopup(auth, googleProvider);
  //     navigate("/");
  //   } catch (err) {
  //     console.error(err);
  //     setErrMsg(mapFirebaseError(err.code));
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div style={styles.wrap}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h2 style={{ margin: 0 }}>
            {mode === "login" ? "로그인" : "회원가입"}
          </h2>
          <p style={styles.sub}>
            {mode === "login" ? "계정이 없나요?" : "이미 계정이 있나요?"}{" "}
            <button
              onClick={() => setMode(mode === "login" ? "signup" : "login")}
              style={styles.linkBtn}
              type="button"
            >
              {mode === "login" ? "회원가입" : "로그인"}
            </button>
          </p>
        </div>

        {user ? (
          <div style={{ marginTop: 12 }}>
            <div style={{ color: "#bbb", marginBottom: 12 }}>
              <strong>{user.email}</strong> 로 로그인됨
            </div>
            <button onClick={handleLogout} style={styles.submit} disabled={loading}>
              로그아웃
            </button>
            <div style={styles.footer}>
              <Link to="/" style={styles.homeLink}>
                ← 홈으로
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={onSubmit} style={styles.form}>
            <label style={styles.label}>이메일</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
            {!emailValid && email && (
              <div style={styles.err}>올바른 이메일 형식이 아닙니다.</div>
            )}

            <label style={{ ...styles.label, marginTop: 14 }}>비밀번호</label>
            <div style={styles.pwRow}>
              <input
                type={showPw ? "text" : "password"}
                placeholder="6자 이상"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                style={{ ...styles.input, margin: 0, paddingRight:20}}
              />
              <button
                type="button"
                onClick={() => setShowPw((v) => !v)}
                style={styles.eyeBtn}
                aria-label="toggle password"
              >
                {showPw ? "🙈" : "👁️"}
              </button>
            </div>
            {!pwValid && pw && (
              <div style={styles.err}>비밀번호는 6자 이상이어야 합니다.</div>
            )}

            {mode === "signup" && (
              <>
                <label style={{ ...styles.label, marginTop: 44 }}>
                  비밀번호 확인
                </label>
                <div style={styles.pwRow}>
                  <input
                    type={showPw2 ? "text" : "password"}
                    placeholder="다시 입력"
                    value={pw2}
                    onChange={(e) => setPw2(e.target.value)}
                    style={{ ...styles.input, margin: 0, paddingRight: 44 }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw2((v) => !v)}
                    style={styles.eyeBtn}
                    aria-label="toggle confirm password"
                  >
                    {showPw2 ? "🙈" : "👁️"}
                  </button>
                </div>
                {!pwMatch && pw2 && (
                  <div style={styles.err}>비밀번호가 일치하지 않습니다.</div>
                )}
              </>
            )}

            {errMsg && (
              <div style={{ ...styles.err, marginTop: 8 }}>{errMsg}</div>
            )}

            <button type="submit" disabled={!canSubmit} style={styles.submit}>
              {loading
                ? "처리 중..."
                : mode === "login"
                ? "로그인"
                : "회원가입"}
            </button>

            <div style={styles.hrRow}>
              <div style={styles.hr} />{" "}
              <span style={styles.hrText}>또는</span>{" "}
              <div style={styles.hr} />
            </div>

            {/* 구글 로그인은 firebase.js에서 googleProvider 준비 후 주석 해제 */}
            {/* <button type="button" style={styles.googleBtn} onClick={handleGoogle} disabled={loading}>
              <span style={{ marginRight: 8 }}>🟡</span> Google로 계속하기
            </button> */}
            <button type="button" style={styles.googleBtn} disabled>
              <span style={{ marginRight: 8 }}>🟡</span> Google로 계속하기 (준비중)
            </button>

            <div style={styles.footer}>
              <Link to="/" style={styles.homeLink}>
                ← 홈으로
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

const styles = {
  wrap: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#111",
    color: "#fff",
    padding: "40px 16px",
  },
  card: {
    width: "100%",
    maxWidth: 420,
    background: "#1b1b1b",
    border: "1px solid #2a2a2a",
    borderRadius: 14,
    padding: 20,
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
  },
  header: { marginBottom: 10 },
  sub: { marginTop: 6, color: "#bbb", fontSize: 14 },
  linkBtn: {
    color: "#7abaff",
    background: "transparent",
    border: "none",
    padding: 0,
    cursor: "pointer",
    textDecoration: "underline",
    fontSize: 14,
  },
  form: { marginTop: 12 },
  label: { fontSize: 14, color: "#ddd", marginBottom: 6, display: "block" },
  input: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 10,
    border: "1px solid #2d2d2d",
    background: "#111",
    color: "#fff",
    outline: "none",
    marginBottom: 8,
  },
  pwRow: { position: "relative" },
  eyeBtn: {
    position: "absolute",
    right: 8,
    top: 6,
    height: 34,
    width: 34,
    borderRadius: 8,
    border: "1px solid #2d2d2d",
    background: "#181818",
    color: "#ddd",
    cursor: "pointer",
  },
  err: { color: "#ffb3b3", fontSize: 13, marginTop: 4 },
  submit: {
    width: "100%",
    marginTop: 14,
    padding: "12px 14px",
    borderRadius: 10,
    border: "none",
    background: "linear-gradient(90deg,#7abaff,#7a9bff)",
    color: "#111",
    fontWeight: 700,
    cursor: "pointer",
    opacity: 1,
  },
  hrRow: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    margin: "16px 0",
  },
  hr: { flex: 1, height: 1, background: "#2a2a2a" },
  hrText: { color: "#999", fontSize: 12 },
  googleBtn: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 10,
    border: "1px solid #2d2d2d",
    background: "#151515",
    color: "#eee",
    cursor: "pointer",
  },
  footer: { marginTop: 14, textAlign: "center" },
  homeLink: { color: "#8ecbff", textDecoration: "none", fontSize: 14 },
};

