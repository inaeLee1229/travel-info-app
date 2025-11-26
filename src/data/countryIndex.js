// src/data/countryIndex.js

import countryData from "./countryData";

const countryIndex = Object.entries(countryData).map(([code, info]) => {
  const keywords = [
    info.name, // 한국어 이름 
    info.englishName, // 영문 이름 
    code, // ISO 코드 
    ...(info.aliases || []) // 별칭 있으면 추가
  ].filter(Boolean);

  return { code, keywords };
});

export default countryIndex;

