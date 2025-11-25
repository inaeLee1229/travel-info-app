import React, { useState } from "react";
import { doc, writeBatch } from "firebase/firestore";
import { db } from "../firebase"; // 인애 프로젝트 경로에 맞춰 변경!
import countryInfo from "../data/countryInfo"; // 인애 나라 파일 경로에 맞춰 변경!

const UploadCountries = () => {
  const [status, setStatus] = useState("대기 중");

  const handleUpload = async () => {
    try {
      setStatus("업로드 중...");

      const batch = writeBatch(db);

      Object.entries(countryInfo).forEach(([code, data]) => {
        const ref = doc(db, "countries", code);  
        batch.set(ref, data, { merge: true });   // ★ 핵심!
      });

      await batch.commit();
      setStatus("완료! Firestore에서 확인해봐 😎");
    } catch (err) {
      console.error(err);
      setStatus("에러 발생…");
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>나라 데이터 업로드</h2>
      <p>상태: {status}</p>
      <button onClick={handleUpload}>업로드 실행</button>
    </div>
  );
};

export default UploadCountries;
