// src/pages/MyPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import countryData from "../data/countryData";
import { normalizeCountryCode } from "../utils/countryCodeMapper";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
  getDocs,
  collectionGroup,
} from "firebase/firestore";
// 즐겨찾기 국가 저장
const FAV_KEY = "favoriteCountries";
//즐겨찾기 표시 개수
const MAX_VISIBLE = 4;

const fmt = (ts) => (ts?.toDate ? ts.toDate().toISOString().slice(0, 10) : "");

export default function MyPage() {
  // 즐겨찾기 국가 관리
  const [favorites, setFavorites] = useState([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(FAV_KEY) || "[]");
    const canon = Array.from(new Set(saved.map((c) => normalizeCountryCode(c))));
    setFavorites(canon);
  }, []);
  //화면 표시용 즐겨찾기 목록
  const visibleFavs = useMemo(
    () => (expanded ? favorites : favorites.slice(0, MAX_VISIBLE)),
    [favorites, expanded]
  );
  // 숨겨진 즐겨찾기 개수 계산
  const hiddenCount = Math.max(favorites.length - MAX_VISIBLE, 0);
  // 즐겨찾기 삭제 기능
  const removeFav = (code) => {
    const saved = JSON.parse(localStorage.getItem(FAV_KEY) || "[]");
    const next = saved
      .map((c) => normalizeCountryCode(c))
      .filter((c) => c !== code);
    localStorage.setItem(FAV_KEY, JSON.stringify(next));
    setFavorites(next);
  };

  // 로그인 사용자 
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, setUser);
    return () => unsub();
  }, []);

  // 내가 쓴 글 
  const [myPosts, setMyPosts] = useState([]);
  const [myPostsLoading, setMyPostsLoading] = useState(false);
  const [myPostsError, setMyPostsError] = useState("");

  useEffect(() => {
    setMyPostsError("");
    setMyPosts([]);

    if (!user?.uid) return;
    setMyPostsLoading(true);
    // Firestore에서 authorUid가 자신의 uid와 일치하는 글만 가져오기
    const q1 = query(
      collection(db, "posts"),
      where("authorUid", "==", user.uid),
      orderBy("createdAt", "desc")
    );

    const unsub = onSnapshot(
      q1,
      (snap) => {
        const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        setMyPosts(list);
        setMyPostsLoading(false);
      },
      async (err) => {
        console.warn("onSnapshot with orderBy failed. Fallback to client sort.", err);
        try {
          const q2 = query(collection(db, "posts"), where("authorUid", "==", user.uid));
          const snap = await getDocs(q2);
          const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
          list.sort((a, b) => {
            const ta = a.createdAt?.toMillis?.() ?? 0;
            const tb = b.createdAt?.toMillis?.() ?? 0;
            return tb - ta;
          });
          setMyPosts(list);
          setMyPostsLoading(false);
        } catch (e) {
          console.error(e);
          setMyPostsError("내 글을 불러오지 못했어요.");
          setMyPostsLoading(false);
        }
      }
    );

    return () => unsub();
  }, [user?.uid]);

  // 내가 쓴 댓글 불러오기
  const [myComments, setMyComments] = useState([]);
  const [myCommentsLoading, setMyCommentsLoading] = useState(false);
  const [myCommentsError, setMyCommentsError] = useState("");

  useEffect(() => {
    setMyComments([]);
    setMyCommentsError("");

    if (!user?.uid) return;
    setMyCommentsLoading(true);

    const q = query(
      collectionGroup(db, "comments"),
      where("authorUid", "==", user.uid)
    );

    const unsub = onSnapshot(
      q,
      (snap) => {
        const list = snap.docs.map((d) => {
          const data = d.data();
          // 부모 컬렉션(posts/{postId}/comments/{commentId}) 에서 postId 추출
          const parentPostId = d.ref.parent?.parent?.id || data.postId || null;
          return {
            id: d.id,
            postId: parentPostId,
            ...data,
          };
        });

        // 최신 댓글이 위로 오게 정렬
        list.sort((a, b) => {
          const ta = a.createdAt?.toMillis?.() ?? 0;
          const tb = b.createdAt?.toMillis?.() ?? 0;
          return tb - ta;
        });

        setMyComments(list);
        setMyCommentsLoading(false);
      },
      (err) => {
        console.error(err);
        setMyCommentsError("내 댓글을 불러오지 못했어요.");
        setMyCommentsLoading(false);
      }
    );

    return () => unsub();
  }, [user?.uid]);

  return (
    <div style={{ background: "#fff", minHeight: "100vh", paddingTop: 80 }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "24px" }}>
        <h1 style={{ marginTop: 0 }}>마이페이지</h1>

        {/* 즐겨찾기*/}
        <h2 style={{ marginTop: 24 }}>내 즐겨찾기</h2>

        {favorites.length === 0 ? (
          <p style={{ color: "#666", padding: "24px 0" }}>
            즐겨찾기한 국가가 없습니다. 나라 정보 페이지에서 “즐겨찾기 추가”를 눌러보세요.
          </p>
        ) : (
          <>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: 12,
              }}
            >
              {visibleFavs.map((code) => {
                const info = countryData[code];
                const name = info?.name || code;
                return (
                  <li
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
                  </li>
                );
              })}
            </ul>

            {hiddenCount > 0 && (
              <div style={{ marginTop: 12 }}>
                <button
                  onClick={() => setExpanded((v) => !v)}
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: 9999,
                    padding: "8px 14px",
                    background: "#fffafa",
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                >
                  {expanded ? "접기" : `더보기 (${hiddenCount})`}
                </button>
              </div>
            )}
          </>
        )}

        {/* 내가 쓴 글 */}
        <h2 style={{ marginTop: 36 }}>내가 쓴 글</h2>

        {!user ? (
          <p style={{ color: "#666" }}>로그인하면 내가 작성한 글이 여기 표시됩니다.</p>
        ) : myPostsLoading ? (
          <p style={{ color: "#666" }}>불러오는 중…</p>
        ) : myPostsError ? (
          <p style={{ color: "crimson" }}>{myPostsError}</p>
        ) : myPosts.length === 0 ? (
          <p style={{ color: "#666" }}>
            아직 작성한 글이 없습니다. <Link to="/community">커뮤니티</Link>에서 글을 남겨보세요.
          </p>
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
            {myPosts.map((post) => (
              <li
                key={post.id}
                style={{
                  border: "1px solid #eee",
                  borderRadius: 12,
                  padding: 0,
                  background: "#fff",
                  overflow: "hidden",
                }}
              >
                {/* 카드 전체 클릭해서 PostDetail로 이동 */}
                <Link
                  to={`/community/${post.id}`}
                  style={{
                    display: "block",
                    padding: 16,
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 6,
                    }}
                  >
                    <strong>{post.title}</strong>
                    <span style={{ fontSize: 12, color: "#666" }}>
                      {fmt(post.createdAt)}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "#444",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {post.content}
                  </div>
                  <div
                    style={{
                      marginTop: 8,
                      fontSize: 12,
                      color: "#666",
                    }}
                  >
                    {post.type} · {post.category}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* 내가 쓴 댓글 */}
        <h2 style={{ marginTop: 36 }}>내가 쓴 댓글</h2>

        {!user ? (
          <p style={{ color: "#666" }}>로그인하면 내가 작성한 댓글이 여기 표시됩니다.</p>
        ) : myCommentsLoading ? (
          <p style={{ color: "#666" }}>불러오는 중…</p>
        ) : myCommentsError ? (
          <p style={{ color: "crimson" }}>{myCommentsError}</p>
        ) : myComments.length === 0 ? (
          <p style={{ color: "#666" }}>
            아직 작성한 댓글이 없습니다. <Link to="/community">커뮤니티</Link>에서 댓글을 남겨보세요.
          </p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: 12,
            }}
          >
            {myComments.map((c) => (
              <div
                key={c.id}
                style={{
                  border: "1px solid #eee",
                  borderRadius: 12,
                  padding: 0,
                  background: "#fff",
                  overflow: "hidden",
                }}
              >
                {c.postId ? (
                  // postId가 있으면 카드 전체를 링크로
                  <Link
                    to={`/community/${c.postId}`}
                    style={{
                      display: "block",
                      textDecoration: "none",
                      color: "inherit",
                      padding: 16,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 6,
                      }}
                    >
                      <strong style={{ fontSize: 13 }}>
                        {c.postTitle || "댓글"}
                      </strong>
                      <span style={{ fontSize: 12, color: "#666" }}>
                        {fmt(c.createdAt)}
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: "#444",
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      {c.content}
                    </div>
                    <div
                      style={{
                        marginTop: 6,
                        fontSize: 12,
                        color: "#666",
                      }}
                    >
                      원글로 이동 →
                    </div>
                  </Link>
                ) : (
                  // 혹시라도 postId를 못 찾은 예전 댓글이면 그냥 텍스트만
                  <div style={{ padding: 16 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 6,
                      }}
                    >
                      <strong style={{ fontSize: 13 }}>
                        {c.postTitle || "댓글"}
                      </strong>
                      <span style={{ fontSize: 12, color: "#666" }}>
                        {fmt(c.createdAt)}
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: "#444",
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      {c.content}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
