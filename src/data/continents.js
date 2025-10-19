// 간단 샘플 — 필요한 만큼 계속 늘리면 됩니다.
// label은 화면에 보이는 이름, code는 ISO(정규화된) 국가코드
const continents = [
  {
    key: "AS",
    name: "아시아",
    countries: [
      { code: "KR", label: "대한민국" },
      { code: "JP", label: "일본" },
      { code: "CN", label: "중국" },
      { code: "KZ", label: "카자흐스탄" },
      { code: "RU", label: "러시아" }, // 러시아를 아시아에 넣을지 유럽에 넣을지는 원하는 기준대로
    ],
  },
  {
    key: "EU",
    name: "유럽",
    countries: [
      { code: "FR", label: "프랑스" },
      { code: "IT", label: "이탈리아" },
      { code: "DE", label: "독일" },
      { code: "GB", label: "영국" },
    ],
  },
  {
    key: "NA",
    name: "북미",
    countries: [
      { code: "US", label: "미국" },
      { code: "CA", label: "캐나다" },
    ],
  },
  {
    key: "SA",
    name: "남미",
    countries: [
      { code: "CL", label: "칠레" },
      // { code: "BR", label: "브라질" }, … 추가
    ],
  },
  {
    key: "AF",
    name: "아프리카",
    countries: [
      // 예시
      // { code: "EG", label: "이집트" },
    ],
  },
  {
    key: "OC",
    name: "오세아니아",
    countries: [
      // 예시
      // { code: "AU", label: "호주" },
      // { code: "NZ", label: "뉴질랜드" },
    ],
  },
];

export default continents;
