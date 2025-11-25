import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  doc,
  onSnapshot,
  updateDoc,
  increment,
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot as onSnapshotCol,
  getDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

// 이메일 마스킹 (앞 4글자만 보이고 나머지는 전부 *)
const maskEmail = (email) => {
  if (!email) return "익명";
  const s = String(email);
  const keep = 4;
  if (s.length <= keep) return "*".repeat(s.length);
  return s.slice(0, keep) + "*".repeat(s.length - keep);
};

// 날짜 포맷
const fmt = (ts) => (ts?.toDate ? ts.toDate().toISOString().slice(0, 10) : "");

export default function PostDetail() {
  const { postId } = useParams();

  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, setUser);
    return () => unsub();
  }, []);

  // 🔹 글 데이터 불러오기
  const [post, setPost] = useState(null);
  const [loadingPost, setLoadingPost] = useState(true);

  useEffect(() => {
    const ref = doc(db, "posts", postId);
    const unsub = onSnapshot(ref, (snap) => {
      setPost(snap.exists() ? { id: snap.id, ...snap.data() } : null);
      setLoadingPost(false);
    });
    return () => unsub();
  }, [postId]);

  // 🔹 좋아요
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    if (!user?.uid || !postId) {
      setLiked(false);
      return;
    }
    const likeRef = doc(db, "posts", postId, "likes", user.uid);
    const unsub = onSnapshot(likeRef, (snap) => setLiked(snap.exists()));
    return () => unsub();
  }, [user?.uid, postId]);

  const toggleLike = async () => {
    if (!user) {
      alert("로그인 후 이용 가능합니다.");
      return;
    }
    const postRef = doc(db, "posts", postId);
    const likeRef = doc(db, "posts", postId, "likes", user.uid);
    const likeDoc = await getDoc(likeRef);

    if (likeDoc.exists()) {
      await deleteDoc(likeRef);
      await updateDoc(postRef, { likesCount: increment(-1) });
    } else {
      await setDoc(likeRef, {
        uid: user.uid,
        email: user.email || user.displayName || "익명",
        createdAt: serverTimestamp(),
      });
      await updateDoc(postRef, { likesCount: increment(1) });
    }
  };

  // 🔹 댓글
  const [comments, setComments] = useState([]);
  useEffect(() => {
    if (!postId) return;
    const q = query(
      collection(db, "posts", postId, "comments"),
      orderBy("createdAt", "asc")
    );
    const unsub = onSnapshotCol(q, (snap) => {
      const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setComments(list);
    });
    return () => unsub();
  }, [postId]);

  const [commentText, setCommentText] = useState("");
  const submitComment = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("로그인 후 댓글을 작성할 수 있습니다.");
      return;
    }
    const txt = commentText.trim();
    if (!txt) return;
    await addDoc(collection(db, "posts", postId, "comments"), {
      content: txt,
      author: user.email || user.displayName || "익명",
      authorUid: user.uid,
      createdAt: serverTimestamp(),
    });
    setCommentText("");
  };

  const likesCount = post?.likesCount || 0;

  if (loadingPost) {
    return (
      <div style={{ background: "#fff", minHeight: "100vh", paddingTop: 80 }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>불러오는 중...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div style={{ background: "#fff", minHeight: "100vh", paddingTop: 80 }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
          <p>해당 글을 찾을 수 없습니다.</p>
          <Link to="/community">← 목록으로</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "#fff", minHeight: "100vh", paddingTop: 80 }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
        <div style={{ marginBottom: 16 }}>
          <Link to="/community" style={{ textDecoration: "none", color: "#111" }}>
            ← 목록으로
          </Link>
        </div>

        {/* 글 타이틀 */}
        <h1 style={{ margin: "0 0 8px 0" }}>{post.title}</h1>

        {/* 작성자/날짜/카테고리 */}
        <div style={{ display: "flex", gap: 8, alignItems: "center", color: "#666", fontSize: 14, marginBottom: 12 }}>
          <span>✍️ {maskEmail(post.author)}</span>
          <span>·</span>
          <span>{fmt(post.createdAt)}</span>
          <span>·</span>
          <span>{post.type}</span>
          <span>·</span>
          <span>{post.category}</span>
        </div>

        {/* 본문 */}
        <div style={{ fontSize: 16, color: "#333", whiteSpace: "pre-wrap", lineHeight: 1.6, marginBottom: 16 }}>
          {post.content}
        </div>

        {/* 좋아요 */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
          <button
            onClick={toggleLike}
            style={{
              border: "1px solid #ddd",
              background: liked ? "#111" : "#fff",
              color: liked ? "#fff" : "#111",
              padding: "8px 12px",
              borderRadius: 999,
              cursor: "pointer",
              fontWeight: 700,
            }}
          >
            {liked ? "👍 좋아요 취소" : "👍 좋아요"}
          </button>
          <span style={{ color: "#666", fontSize: 14 }}>{likesCount}명</span>
        </div>

        {/* 댓글 입력 */}
        <form onSubmit={submitComment} style={{ borderTop: "1px solid #eee", paddingTop: 16, marginTop: 16 }}>
          <div style={{ fontWeight: 800, marginBottom: 10 }}>댓글</div>
          <div style={{ display: "grid", gap: 8 }}>
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              rows={3}
              placeholder={user ? "댓글을 입력하세요" : "로그인 후 댓글 작성 가능"}
              disabled={!user}
              style={{
                border: "1px solid #ddd",
                borderRadius: 8,
                padding: "10px 12px",
                fontSize: 14,
                resize: "vertical",
              }}
            />
            <div>
              <button
                type="submit"
                disabled={!user || !commentText.trim()}
                style={{
                  border: "none",
                  borderRadius: 8,
                  padding: "8px 12px",
                  background: user && commentText.trim() ? "#111" : "#999",
                  color: "#fff",
                  fontWeight: 700,
                  cursor: user && commentText.trim() ? "pointer" : "not-allowed",
                }}
              >
                등록
              </button>
            </div>
          </div>
        </form>

        {/* 댓글 목록 */}
        {comments.length === 0 ? (
          <p style={{ color: "#666", marginTop: 12 }}>아직 댓글이 없습니다.</p>
        ) : (
          <ul style={{ listStyle: "none", margin: "12px 0 0 0", padding: 0, display: "grid", gap: 10 }}>
            {comments.map((c) => (
              <li key={c.id} style={{ border: "1px solid #eee", padding: 12, borderRadius: 8, background: "#fff" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <b style={{ fontSize: 13 }}>{maskEmail(c.author)}</b>
                  <span style={{ fontSize: 12, color: "#666" }}>{fmt(c.createdAt)}</span>
                </div>
                <div style={{ whiteSpace: "pre-wrap", fontSize: 14, color: "#333" }}>{c.content}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
