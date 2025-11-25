// src/pages/PostDetail.jsx
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
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

// 이메일 앞에 4글자만 보이도록
const maskEmail = (email) => {
  if (!email) return "익명";
  const s = String(email);
  const keep = 4;
  if (s.length <= keep) return "*".repeat(s.length);
  return s.slice(0, keep) + "*".repeat(s.length - keep);
};

const fmt = (ts) => (ts?.toDate ? ts.toDate().toISOString().slice(0, 10) : "");

const buildCommentTree = (list) => {
  const map = {};
  list.forEach((c) => {
    map[c.id] = { ...c, children: [] };
  });

  const roots = [];
  list.forEach((c) => {
    const node = map[c.id];
    if (c.parentId && map[c.parentId]) {
      map[c.parentId].children.push(node);
    } else {
      roots.push(node);
    }
  });

  return roots;
};

export default function PostDetail() {
  const { postId } = useParams();
  const navigate = useNavigate();

  // 로그인 유저
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, setUser);
    return () => unsub();
  }, []);

  // 글 데이터 불러오기
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

  // 내가 쓴 글인지 여부
  const isPostOwner = user && post && user.uid === post.authorUid;

  // 글 수정 상태
  const [editingPost, setEditingPost] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  const startEditPost = () => {
    if (!post) return;
    setEditTitle(post.title || "");
    setEditContent(post.content || "");
    setEditingPost(true);
  };

  const cancelEditPost = () => setEditingPost(false);

  const saveEditPost = async () => {
    const title = editTitle.trim();
    const content = editContent.trim();
    if (!title || !content) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }
    try {
      await updateDoc(doc(db, "posts", postId), {
        title,
        content,
        updatedAt: serverTimestamp(),
      });
      setEditingPost(false);
    } catch (e) {
      console.error(e);
      alert("수정 중 오류가 발생했습니다.");
    }
  };

  const deletePost = async () => {
    if (!window.confirm("이 글을 삭제할까요?")) return;
    try {
      await deleteDoc(doc(db, "posts", postId));
      alert("삭제되었습니다.");
      navigate("/community");
    } catch (e) {
      console.error(e);
      alert("삭제 중 오류가 발생했습니다.");
    }
  };

  //좋아요
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

  //댓글 목록
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

  const commentTree = buildCommentTree(comments);

  // 최상위 댓글 작성
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
      parentId: null, 
    });
    setCommentText("");
  };

  // 🔹 댓글 수정/삭제 상태 
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingCommentText, setEditingCommentText] = useState("");

  const startEditComment = (comment) => {
    setEditingCommentId(comment.id);
    setEditingCommentText(comment.content || "");
  };

  const cancelEditComment = () => {
    setEditingCommentId(null);
    setEditingCommentText("");
  };

  const saveEditComment = async (commentId) => {
    const txt = editingCommentText.trim();
    if (!txt) {
      alert("내용을 입력해주세요.");
      return;
    }
    try {
      await updateDoc(doc(db, "posts", postId, "comments", commentId), {
        content: txt,
        updatedAt: serverTimestamp(),
      });
      setEditingCommentId(null);
      setEditingCommentText("");
    } catch (e) {
      console.error(e);
      alert("댓글 수정 중 오류가 발생했습니다.");
    }
  };

  const deleteComment = async (commentId) => {
    if (!window.confirm("이 댓글을 삭제할까요?")) return;
    try {
      await deleteDoc(doc(db, "posts", postId, "comments", commentId));
    } catch (e) {
      console.error(e);
      alert("댓글 삭제 중 오류가 발생했습니다.");
    }
  };

  // 🔹 대댓글 상태 
  const [replyTargetId, setReplyTargetId] = useState(null);

  const handleReplySubmit = async (parentCommentId, e) => {
    e.preventDefault();
    if (!user) {
      alert("로그인 후 댓글을 작성할 수 있습니다.");
      return;
    }

    const form = e.target;
    const txt = form.reply?.value || "";
    const trimmed = txt.trim();
    if (!trimmed) return;

    try {
      await addDoc(collection(db, "posts", postId, "comments"), {
        content: trimmed,
        author: user.email || user.displayName || "익명",
        authorUid: user.uid,
        createdAt: serverTimestamp(),
        parentId: parentCommentId, 
      });
      form.reply.value = ""; 
      setReplyTargetId(null);
    } catch (e2) {
      console.error(e2);
      alert("답글 작성 중 오류가 발생했습니다.");
    }
  };

  const likesCount = post?.likesCount || 0;

  const CommentItem = ({ comment, level = 0 }) => {
    const isMyComment = user && comment.authorUid === user.uid;
    const isEditing = editingCommentId === comment.id;
    const hasChildren = comment.children && comment.children.length > 0;

    const indent = level * 16; 

    return (
      <li
        style={{
          marginTop: level === 0 ? 10 : 6,
          marginLeft: indent,
          border: "1px solid #eee",
          borderRadius: 8,
          padding: 12,
          background: level === 0 ? "#fff" : "#fafafa",
        }}
      >
        {/* 헤더*/}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 6,
            alignItems: "center",
          }}
        >
          <div>
            <b style={{ fontSize: 13 }}>{maskEmail(comment.author)}</b>
            <span
              style={{
                fontSize: 12,
                color: "#666",
                marginLeft: 6,
              }}
            >
              {fmt(comment.createdAt)}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              gap: 8,
              fontSize: 12,
              alignItems: "center",
            }}
          >
            {/* 답글 달기 */}
            <button
              type="button"
              onClick={() =>
                setReplyTargetId((prev) =>
                  prev === comment.id ? null : comment.id
                )
              }
              style={{
                border: "none",
                background: "transparent",
                color: "#555",
                cursor: "pointer",
                padding: 0,
              }}
            >
              답글 달기
            </button>

            {/* 수정/삭제 */}
            {isMyComment && !isEditing && (
              <>
                <button
                  type="button"
                  onClick={() => startEditComment(comment)}
                  style={{
                    border: "none",
                    background: "transparent",
                    color: "#555",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  수정
                </button>
                <button
                  type="button"
                  onClick={() => deleteComment(comment.id)}
                  style={{
                    border: "none",
                    background: "transparent",
                    color: "#c00",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  삭제
                </button>
              </>
            )}

            {isMyComment && isEditing && (
              <>
                <button
                  type="button"
                  onClick={() => saveEditComment(comment.id)}
                  style={{
                    border: "none",
                    background: "transparent",
                    color: "#111",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  저장
                </button>
                <button
                  type="button"
                  onClick={cancelEditComment}
                  style={{
                    border: "none",
                    background: "transparent",
                    color: "#666",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  취소
                </button>
              </>
            )}
          </div>
        </div>

        {isEditing ? (
          <textarea
            value={editingCommentText}
            onChange={(e) => setEditingCommentText(e.target.value)}
            rows={3}
            style={{
              width: "100%",
              borderRadius: 6,
              border: "1px solid #ddd",
              padding: "8px 10px",
              fontSize: 13,
              resize: "vertical",
            }}
          />
        ) : (
          <div
            style={{
              whiteSpace: "pre-wrap",
              fontSize: 14,
              color: "#333",
            }}
          >
            {comment.content}
          </div>
        )}

        {/* 이 댓글에 대한 답글 입력창 */}
        {replyTargetId === comment.id && (
          <form
            onSubmit={(e) => handleReplySubmit(comment.id, e)}
            style={{ marginTop: 8 }}
          >
            <div style={{ marginLeft: 16 }}>
              <textarea
                name="reply"
                rows={2}
                placeholder="답글을 입력하세요"
                style={{
                  width: "95%", 
                  borderRadius: 6,
                  border: "1px solid #ddd",
                  padding: "8px 10px",
                  fontSize: 13,
                  resize: "vertical",
                }}
              />
              <div style={{ marginTop: 4 }}>
                <button
                  type="submit"
                  disabled={!user}
                  style={{
                    border: "none",
                    borderRadius: 8,
                    padding: "6px 10px",
                    background: user ? "#111" : "#999",
                    color: "#fff",
                    fontSize: 12,
                    cursor: user ? "pointer" : "not-allowed",
                  }}
                >
                  답글 등록
                </button>
              </div>
            </div>
          </form>
        )}

        {/* 자식 댓글들 (대댓글, 대대댓글...) */}
        {hasChildren && (
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              marginTop: 8,
              padding: 0,
            }}
          >
            {comment.children.map((child) => (
              <CommentItem key={child.id} comment={child} level={level + 1} />
            ))}
          </ul>
        )}
      </li>
    );
  };

  // ───────────────── 로딩 / 없는 글 처리 ─────────────────
  if (loadingPost) {
    return (
      <div style={{ background: "#fff", minHeight: "100vh", paddingTop: 80 }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
          불러오는 중...
        </div>
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

  // ───────────────── 실제 화면 ─────────────────
  return (
    <div style={{ background: "#fff", minHeight: "100vh", paddingTop: 80 }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
        <div style={{ marginBottom: 16 }}>
          <Link
            to="/community"
            style={{ textDecoration: "none", color: "#111" }}
          >
            ← 목록으로
          </Link>
        </div>

        {/* 글 타이틀 + 수정/삭제 버튼 */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 12,
          }}
        >
          {editingPost ? (
            <input
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              style={{
                flex: 1,
                fontSize: 24,
                fontWeight: 700,
                padding: "8px 10px",
                borderRadius: 8,
                border: "1px solid #ddd",
              }}
              placeholder="제목을 입력하세요"
            />
          ) : (
            <h1 style={{ margin: "0 0 8px 0", flex: 1 }}>{post.title}</h1>
          )}

          {isPostOwner && (
            <div style={{ display: "flex", gap: 6 }}>
              {editingPost ? (
                <>
                  <button
                    onClick={saveEditPost}
                    style={{
                      border: "none",
                      borderRadius: 8,
                      padding: "6px 10px",
                      background: "#111",
                      color: "#fff",
                      cursor: "pointer",
                      fontSize: 13,
                    }}
                  >
                    저장
                  </button>
                  <button
                    onClick={cancelEditPost}
                    style={{
                      border: "1px solid #ddd",
                      borderRadius: 8,
                      padding: "6px 10px",
                      background: "#fff",
                      color: "#333",
                      cursor: "pointer",
                      fontSize: 13,
                    }}
                  >
                    취소
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={startEditPost}
                    style={{
                      border: "1px solid #ddd",
                      borderRadius: 8,
                      padding: "6px 10px",
                      background: "#fff",
                      cursor: "pointer",
                      fontSize: 13,
                    }}
                  >
                    ✏️ 수정
                  </button>
                  <button
                    onClick={deletePost}
                    style={{
                      border: "1px solid #f44",
                      borderRadius: 8,
                      padding: "6px 10px",
                      background: "#fff5f5",
                      color: "#c00",
                      cursor: "pointer",
                      fontSize: 13,
                    }}
                  >
                    🗑 삭제
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* 작성자/날짜/카테고리 */}
        <div
          style={{
            display: "flex",
            gap: 8,
            alignItems: "center",
            color: "#666",
            fontSize: 14,
            marginBottom: 12,
          }}
        >
          <span>✍️ {maskEmail(post.author)}</span>
          <span>·</span>
          <span>{fmt(post.createdAt)}</span>
          <span>·</span>
          <span>{post.type}</span>
          <span>·</span>
          <span>{post.category}</span>
        </div>

        {/* 본문 */}
        <div
          style={{
            fontSize: 16,
            color: "#333",
            whiteSpace: "pre-wrap",
            lineHeight: 1.6,
            marginBottom: 16,
          }}
        >
          {editingPost ? (
            <textarea
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              rows={10}
              style={{
                width: "100%",
                borderRadius: 8,
                border: "1px solid #ddd",
                padding: "10px 12px",
                fontSize: 14,
                resize: "vertical",
              }}
              placeholder="내용을 입력하세요"
            />
          ) : (
            post.content
          )}
        </div>

        {/* 좋아요 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 24,
          }}
        >
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

        {/* 최상위 댓글 입력 */}
        <form
          onSubmit={submitComment}
          style={{
            borderTop: "1px solid #eee",
            paddingTop: 16,
            marginTop: 16,
          }}
        >
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
                  cursor:
                    user && commentText.trim() ? "pointer" : "not-allowed",
                }}
              >
                등록
              </button>
            </div>
          </div>
        </form>

        {/* 댓글 트리 렌더링 */}
        {commentTree.length === 0 ? (
          <p style={{ color: "#666", marginTop: 12 }}>아직 댓글이 없습니다.</p>
        ) : (
          <ul
            style={{
              listStyle: "none",
              margin: "12px 0 0 0",
              padding: 0,
            }}
          >
            {commentTree.map((c) => (
              <CommentItem key={c.id} comment={c} level={0} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
