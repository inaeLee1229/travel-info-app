// src/pages/CommunityBoard.jsx
import React, { useMemo, useRef, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const CATEGORIES = ["전체", "아시아", "유럽", "북미", "남미", "아프리카", "오세아니아"];
const POST_TYPES = ["정보", "질문", "자유"];

// 이메일 마스킹
const maskEmail = (email) => {
  if (!email) return "익명";
  const s = String(email);
  const keep = 4;
  if (s.length <= keep) return "*".repeat(s.length);
  return s.slice(0, keep) + "*".repeat(s.length - keep);
};

export default function CommunityBoard() {
  const navigate = useNavigate();

  // 로그인 상태 
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, setUser);
    return () => unsub();
  }, []);

  // 공지사항(notices) 
  const [notices, setNotices] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "notices"), orderBy("updatedAt", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setNotices(list);
    });
    return () => unsub();
  }, []);

  //일반 게시글
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setPosts(list);
    });
    return () => unsub();
  }, []);

  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "전체",
    type: "정보",
  });
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const [queryText, setQueryText] = useState("");
  const [selectedCat, setSelectedCat] = useState("전체");
  const [typeFilter, setTypeFilter] = useState("전체");

  const currentAuthor = user?.email || user?.displayName || "익명";
  const currentUid = user?.uid || null;

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  // 로그인 확인 없이 그냥 폼 열기
  const onClickWrite = () => {
    setShowForm((v) => !v);
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: "smooth" }), 0);
  };

  // 로그인 confirm 제거
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim()) {
      alert("제목/내용을 모두 입력해주세요.");
      return;
    }

    try {
      await addDoc(collection(db, "posts"), {
        title: form.title.trim(),
        content: form.content.trim(),
        category: form.category || "전체",
        type: form.type || "정보",
        author: currentAuthor,
        authorUid: currentUid,
        createdAt: serverTimestamp(),
      });
      setForm({ title: "", content: "", category: "전체", type: "정보" });
      setShowForm(false);
      alert("등록되었습니다!");
    } catch (err) {
      console.error(err);
      alert("등록 중 오류가 발생했습니다.");
    }
  };

  // 유형, 카테고리, 검색
  const filtered = useMemo(() => {
    const q = queryText.trim().toLowerCase();
    return posts.filter((p) => {
      const typeOk = typeFilter === "전체" ? true : p.type === typeFilter;
      const catOk = selectedCat === "전체" ? true : p.category === selectedCat;
      const qOk =
        !q ||
        (p.title || "").toLowerCase().includes(q) ||
        (p.content || "").toLowerCase().includes(q) ||
        (p.author || "").toLowerCase().includes(q);
      return typeOk && catOk && qOk;
    });
  }, [posts, queryText, selectedCat, typeFilter]);

  const fmt = (ts) => {
    try {
      if (ts?.toDate) return ts.toDate().toISOString().slice(0, 10);
    } catch {}
    return "";
  };

  return (
    <div style={{ background: "#fff", minHeight: "100vh", paddingTop: 80 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 16, marginBottom: 16 }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 36, fontWeight: 800 }}>여행 커뮤니티</h1>
            <p style={{ margin: "8px 0 0", color: "#666" }}>
              정보를 나누고 도움을 주고받는 공간입니다. 자유롭게 질문/팁을 공유해 보세요.
            </p>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <div style={{ display: "flex", gap: 6 }}>
              {["전체", "정보", "질문", "자유"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTypeFilter(t)}
                  style={{
                    padding: "6px 10px",
                    borderRadius: 999,
                    border: "1px solid #ddd",
                    background: typeFilter === t ? "#111" : "#fff",
                    color: typeFilter === t ? "#fff" : "#111",
                    cursor: "pointer",
                    fontSize: 13,
                  }}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* 검색, 글쓰기 */}
            <input
              value={queryText}
              onChange={(e) => setQueryText(e.target.value)}
              placeholder="검색(제목/내용/작성자)"
              style={{
                width: 320,
                border: "1px solid #ddd",
                borderRadius: 999,
                padding: "10px 14px",
                fontSize: 14,
                outline: "none",
              }}
            />
            <button
              onClick={onClickWrite}
              style={{
                whiteSpace: "nowrap",
                border: "1px solid #111",
                background: "#111",
                color: "#fff",
                padding: "10px 14px",
                borderRadius: 999,
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              {showForm ? "닫기" : "글쓰기"}
            </button>
          </div>
        </div>

        {/* 공지사항 */}
        <section
          style={{
            border: "1px solid #eee",
            borderRadius: 12,
            padding: 16,
            marginBottom: 20,
            background: "#fcfcff",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h2 style={{ margin: 0, fontSize: 18, fontWeight: 800 }}>📌 공지사항</h2>
          </div>

          {notices.length === 0 ? (
            <p style={{ color: "#666", marginTop: 8 }}>등록된 공지가 없습니다.</p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0, margin: "10px 0 0", display: "grid", gap: 8 }}>
              {notices.map((n) => (
                <li
                  key={n.id}
                  style={{
                    border: "1px solid #eee",
                    borderRadius: 10,
                    padding: 12,
                    background: "#fff",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                    <strong style={{ fontSize: 15 }}>{n.title}</strong>
                    <span style={{ color: "#666", fontSize: 12 }}>{fmt(n.updatedAt)}</span>
                  </div>
                  {n.content && (
                    <div style={{ marginTop: 6, color: "#444", whiteSpace: "pre-wrap", fontSize: 14 }}>
                      {n.content}
                    </div>
                  )}
                  {n.link && (
                    <div style={{ marginTop: 8 }}>
                      <a href={n.link} target="_blank" rel="noreferrer" style={{ color: "#0a66c2" }}>
                        공식 페이지 바로가기 ↗
                      </a>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* 카테고리 + 글쓰기/목록 */}
        <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 20 }}>
          <aside
            style={{
              border: "1px solid #eee",
              borderRadius: 12,
              padding: 16,
            }}
          >
            <div style={{ fontWeight: 800, marginBottom: 10 }}>📍 카테고리</div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {CATEGORIES.map((cat) => (
                <li key={cat} style={{ marginBottom: 6 }}>
                  <button
                    onClick={() => setSelectedCat(cat)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      background: selectedCat === cat ? "#111" : "#fff",
                      color: selectedCat === cat ? "#fff" : "#111",
                      border: "1px solid #ddd",
                      padding: "8px 10px",
                      borderRadius: 8,
                      cursor: "pointer",
                      fontSize: 14,
                    }}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* 글쓰기 폼, 목록 */}
          <main>
            <div ref={formRef} />
            {showForm && (
              <form
                onSubmit={onSubmit}
                style={{
                  border: "1px solid #eee",
                  borderRadius: 12,
                  padding: 16,
                  marginBottom: 20,
                  boxShadow: "0 6px 24px rgba(0,0,0,0.06)",
                  background: "#fff",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 12,
                  }}
                >
                  <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>✍️ 새 글 작성하기</h2>
                  <div style={{ display: "flex", gap: 8 }}>
                    <select
                      name="type"
                      value={form.type}
                      onChange={onChange}
                      title="글 유형"
                      style={{ border: "1px solid #ddd", borderRadius: 8, padding: "8px 10px", fontSize: 13 }}
                    >
                      {POST_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    <select
                      name="category"
                      value={form.category}
                      onChange={onChange}
                      title="카테고리"
                      style={{ border: "1px solid #ddd", borderRadius: 8, padding: "8px 10px", fontSize: 13 }}
                    >
                      {CATEGORIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div style={{ display: "grid", gap: 10 }}>
                  <input
                    name="title"
                    placeholder="제목"
                    value={form.title}
                    onChange={onChange}
                    style={{ border: "1px solid #ddd", borderRadius: 8, padding: "10px 12px", fontSize: 14 }}
                  />
                  <input
                    value={currentAuthor}
                    readOnly
                    title="작성자(로그인 계정)"
                    style={{
                      border: "1px solid #ddd",
                      borderRadius: 8,
                      padding: "10px 12px",
                      fontSize: 14,
                      background: "#f7f7f7",
                      color: "#555",
                    }}
                  />
                  <textarea
                    name="content"
                    placeholder="내용을 입력하세요 (여행 팁, 질문 등)"
                    rows={4}
                    value={form.content}
                    onChange={onChange}
                    style={{
                      border: "1px solid #ddd",
                      borderRadius: 8,
                      padding: "10px 12px",
                      fontSize: 14,
                      resize: "vertical",
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      border: "none",
                      borderRadius: 10,
                      padding: "10px 14px",
                      background: "#111",
                      color: "#fff",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    등록하기
                  </button>
                </div>
              </form>
            )}

            {/* 글 목록 */}
            {filtered.length === 0 ? (
              <div
                style={{
                  border: "1px dashed #ddd",
                  borderRadius: 12,
                  padding: 20,
                  color: "#666",
                }}
              >
                표시할 글이 없습니다. 첫 글을 작성해 보세요!
              </div>
            ) : (
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                  gap: 12,
                }}
              >
                {filtered.map((post) => (
                  <li
                    key={post.id}
                    onClick={() => navigate(`/community/${post.id}`)} // 상세 페이지로 이동
                    style={{
                      border: "1px solid #eee",
                      borderRadius: 12,
                      padding: 16,
                      background: "#fff",
                      cursor: "pointer",
                      transition: "box-shadow 0.15s ease, transform 0.15s ease",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 8,
                      }}
                    >
                      <div style={{ fontSize: 16, fontWeight: 800 }}>{post.title}</div>
                      <div style={{ display: "flex", gap: 6 }}>
                        <span
                          style={{
                            fontSize: 12,
                            border: "1px solid #eee",
                            padding: "2px 8px",
                            borderRadius: 999,
                            background: "#fafafa",
                          }}
                        >
                          {post.type}
                        </span>
                        <span
                          style={{
                            fontSize: 12,
                            border: "1px solid #eee",
                            padding: "2px 8px",
                            borderRadius: 999,
                            background: "#fafafa",
                          }}
                        >
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        color: "#444",
                        whiteSpace: "pre-wrap",
                        marginBottom: 10,
                      }}
                    >
                      {post.content}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "#666",
                        fontSize: 12,
                      }}
                    >
                      <span>✍️ {maskEmail(post.author)}</span>
                      <span>{fmt(post.createdAt)}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
