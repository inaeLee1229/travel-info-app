// src/data/countryData.js
export default {
  //아시아
  KR: {
    name: "대한민국",
    capital: "서울",
    language: "한국어",
    currency: "원",
    currencyCode: "KRW",
    timezone: "UTC+9",
    tips: ["교통카드 사용 추천", "팁 문화 없음"],
  },
    CN: {
    name: "중국",
    capital: "베이징",
    language: "중국어",
    currency: "위안",
    currencyCode: "CNY",
    timezone: "UTC+8",
    tips: ["알리페이/위챗페이 준비 해놓기", "시간이 많다면 기차도 추천"],
  },
  JP: {
    name: "일본",
    capital: "도쿄",
    language: "일본어",
    currency: "엔화",
    currencyCode: "JPY",      // ★ 환율 API에 사용
    timezone: "UTC+9",
    tips: [
      "일본어가 공용어예요.",
      "전압은 100V, 플러그는 타입 A.",
      "현금 사용 비중이 아직 많음.",
      "지하철 노선이 복잡하니 앱 추천.",
    ],
  },
  IN: {
    name: "인도",
    capital: "뉴델리",
    language: "힌디어, 영어",
    currency: "루피",
    currencyCode: "INR",      // ★ 환율 API에 사용
    timezone: "UTC+5:30",
    tips: [
      "기차나 버스 시간 연착 주의",
      "현지 교통 앱 추천",
    ],
  },
  TH: {
    name: "태국",
    capital: "방콕",
    language: "태국어",
    currency: "바트",
    currencyCode: "THB",      // ★ 환율 API에 사용
    timezone: "UTC+7",
    tips: [
      "더위, 습기 대비(물, 선크립, 모자)",
      "그랩(Grab) 활용",
      "사원 방문 시 복장 주의",
    ],
  },
  VN: {
    name: "베트남",
    capital: "하노이",
    language: "베트남어",
    currency: "동",
    currencyCode: "VND",      // ★ 환율 API에 사용
    timezone: "UTC+9",
    tips: [
      "전압 220V, 플러그 타입 A,C",
      "그랩(Grab) 활용",
      "사원 방문 시 복장 주의",
    ],
  }, 
  MY: {
    name: "말레이시아",
    capital: "쿠알라룸푸르",
    language: "말레이어, 영어, 중국어",
    currency: "링깃",
    currencyCode: "MYR",      // ★ 환율 API에 사용
    timezone: "UTC+8",
    tips: [
      "1년 내내 더움. 더위, 습기 대비(물, 선크립, 모자)",
      "플러그 타입 G",
      "주요 관광지 연결 통로 활용",
    ],
  },
  ID: {
    name: "인도네시아",
    capital: "자카르타",
    language: "인도네시아어",
    currency: "루피아",
    currencyCode: "IDR",      // ★ 환율 API에 사용
    timezone: "UTC+7",
    tips: [
      "시간대가 여러 개. 시간대별 구글 맵 체크(특히 국내선 이동 시)",
      "고잭(Gojek) 필수 사용(택시, 배달 등 가능)",
      "지폐 여러 단위 다양하게 들고 다니기",
    ],
  },
  PH: {
    name: "필리핀",
    capital: "마닐라",
    language: "타갈로그어, 영어",
    currency: "페소",
    currencyCode: "PHP",      // ★ 환율 API에 사용
    timezone: "UTC+8",
    tips: [
      "팁 문화 일반적. 잔돈 필수",
      "이트레블(e-Travel) 입국 전 필수.",
      "주로 플러그 타입 A, B 사용.",
    ],
  },
  PK: {
    name: "파키스탄",
    capital: "이슬라마바드",
    language: "우르두어, 영어",
    currency: "파키스탄 루피",
    currencyCode: "PKR",      // ★ 환율 API에 사용
    timezone: "UTC+5",
    tips: [
      "2008년부터 '여행제한 지역'으로 지정",
      "이슬람 문화, 복장 지키기",
      "고산지대 대비",
    ],
  },
  BD: {
    name: "방글라데시",
    capital: "다카",
    language: "뱅골어",
    currency: "타카",
    currencyCode: "BDT",      // ★ 환율 API에 사용
    timezone: "UTC+6",
    tips: [
      "마스크 챙기기",
      "릭샤 체험",
      "전압 220V",
    ],
  },
  SA: {
    name: "사우디아라비아",
    capital: "리야드",
    language: "아랍어",
    currency: "사우디 리얄",
    currencyCode: "SAR",      // ★ 환율 API에 사용
    timezone: "UTC+3",
    tips: [
      "기도 시간 확인 필수.",
      "무알코올 국가",
      "플러그 타입 G",
    ],
  },
  IR: {
    name: "이란",
    capital: "테헤란",
    language: "페르시아어",
    currency: "리알",
    currencyCode: "IRR",      // ★ 환율 API에 사용
    timezone: "UTC+3:30",
    tips: [
      "화폐단위 토만 사용.(1토만=10리알)",
      "현금필수",
      "여성 히잡 착용 필수",
    ],
  },
  IQ: {
    name: "이라크",
    capital: "바그다드",
    language: "아랍어",
    currency: "이라크 디나르",
    currencyCode: "IQD",      // ★ 환율 API에 사용
    timezone: "UTC+3",
    tips: [
      "외교부 여행경보 확인 필수.",
      "이슬람 문화, 복장",
      "모든 이동 가이드와 동행.",
    ],
  },
  CB: {
    name: "캄보디아",
    capital: "크메르어",
    language: "태국어",
    currency: "캄보디아 리엘",
    currencyCode: "KHR",      // ★ 환율 API에 사용
    timezone: "UTC+7",
    tips: [
      "USD 통용 국가",
      "지뢰 주의 표지판 확인 필수.",
    ],
  },
  NP: {
    name: "네팔",
    capital: "카트만두",
    language: "네팔어",
    currency: "네팔 루피",
    currencyCode: "NPR",      // ★ 환율 API에 사용
    timezone: "UTC+5:45",
    tips: [
      "트래킹 시 고산병 대비 필수.",
      "티벳/힌두 문화 존중(오른손 사용, 시계방향 이동)",
    ],
  },
  OM: {
    name: "오만",
    capital: "무스카트",
    language: "아랍어",
    currency: "오만 리알",
    currencyCode: "OMR",      // ★ 환율 API에 사용
    timezone: "UTC+4",
    tips: [
      "와디 체험(물때 주의)",
      "마와셀라 앱 활용",
    ],
  },
  AF: {
    name: "아프가니스탄",
    capital: "카불",
    language: "다리어, 파슈토어",
    currency: "아프가니스탄 아프가니",
    currencyCode: "AFN",      // ★ 환율 API에 사용
    timezone: "UTC+4:30",
    tips: [
      "외교부 여행금지 국가",
      "문화, 종교 엄수!!",
      "현금 사용",
    ],
  },
  AM: {
    name: "아르메니아",
    capital: "예레반",
    language: "아르메니아어",
    currency: "아르메니아 드람",
    currencyCode: "AMD",      // ★ 환율 API에 사용
    timezone: "UTC+9",
    tips: [
      "'마트나쉬'빵, 고대와인 투어 필수",
      "수도 근교 수도원 투어 추천.",
    ],
  },
  AZ: {
    name: "아제르바이잔",
    capital: "바쿠",
    language: "아제르바이잔어, 러시아어",
    currency: "아제르바이잔 마나트",
    currencyCode: "AZN",      // ★ 환율 API에 사용
    timezone: "UTC+4",
    tips: [
      "진흙 화산, 불타는 산 추천",
      "구시가지'이체리 셰헤르', 올드카",
    ],
  },
  BH: {
    name: "바레인",
    capital: "마나마",
    language: "아랍어, 영어",
    currency: "바레인 디나르",
    currencyCode: "BHD",      // ★ 환율 API에 사용
    timezone: "UTC+3",
    tips: [
      "모래 바람 대비(스카프, 선글라스)",
      "유적, 자연 투어는 예약 통해 가이드 동행",
      "이슬람권 기도/종교 행사 미리 체크.",
    ],
  },
  BT: {
    name: "부탄",
    capital: "팀푸",
    language: "종카어",
    currency: "부탄 눌트럼",
    currencyCode: "BTN",      // ★ 환율 API에 사용
    timezone: "UTC+6",
    tips: [
      "최소 지출 규정",
      "늦가을~초겨울 '체추' 가면축제",
    ],
  },
  GE: {
    name: "조지아",
    capital: "트빌리시",
    language: "조지아어, 러시아",
    currency: "조지아 라리",
    currencyCode: "GEL",      // ★ 환율 API에 사용
    timezone: "UTC+4",
    tips: [
      "현지 양조장 투어",
      "유황 온천 목욕탕 추천.",
      "콘센트 타입 한국과 동일"
    ],
  },
  IL: {
    name: "이스라엘",
    capital: "예루살렘",
    language: "히브리아어, 아랍어",
    currency: "이스라엘 세켈",
    currencyCode: "ILS",      // ★ 환율 API에 사용
    timezone: "UTC+3",
    tips: [
      "안식일(금요일 해 질 녘~토요일 해 질 녘)",
      "유대 문화 박물과",
      "콘센트 타입 H"
    ],
  },
  JO: {
    name: "요르단",
    capital: "암만",
    language: "아랍어",
    currency: "요르단 디나르",
    currencyCode: "JOD",      // ★ 환율 API에 사용
    timezone: "UTC+3",
    tips: [
      "조던 패스 활용",
      "사해",
      "베두인 체험 추천.",
    ],
  },
  KZ: {
    name: "카자흐스탄",
    capital: "아스타나",
    language: "카자흐어, 러시아어",
    currency: "카자흐스탄 텡게",
    currencyCode: "KZT",      // ★ 환율 API에 사용
    timezone: "UTC+6",
    tips: [
      "러시아어 기반 정보가 많음.",
    ],
  },
  KW: {
    name: "쿠웨이트",
    capital: "쿠웨이트시티",
    language: "아랍어, 영어",
    currency: "쿠웨이트 디나르",
    currencyCode: "KWD",      // ★ 환율 API에 사용
    timezone: "UTC+3",
    tips: [
      "초여름~폭염 시즌 오후부터 이동 추천",
      "라마단/종교일 체크 필수",
      "전통시장은 저녁에 방문 추천",
    ],
  },
  KG: {
    name: "키르기스스탄",
    capital: "비슈케크",
    language: "키르기스어, 러시아어",
    currency: "소름",
    currencyCode: "KGS",      // ★ 환율 API에 사용
    timezone: "UTC+6",
    tips: [
      "고산병, 방한 장비 준비",
      "유르트(유목민 천막)체험 미리 예약",
      "시골은 현금 사용 편리(공항 환전 추천)"
    ],
  },
  LB: {
    name: "레바논",
    capital: "베이루트",
    language: "프랑스어, 영어",
    currency: "레바논 파운드",
    currencyCode: "LBP",      // ★ 환율 API에 사용
    timezone: "UTC+2",
    tips: [
      "마국 달러 광범위 사용",
      "특정 구역 안전 주의",
      "길거리보다 공항이나 신뢰 가능한 환전소 사용",
    ],
  },
  MV: {
    name: "몰디브",
    capital: "말레",
    language: "디베히어, 영어",
    currency: "몰디브 루피야",
    currencyCode: "MVR",      // ★ 환율 API에 사용
    timezone: "UTC+5",
    tips: [
      "리조트 이동 수단/비용/시간 확인 필수",
      "산호 보호용 선크림 준비",
    ],
  },
  MN: {
    name: "몽골",
    capital: "울란바토르",
    language: "몽골어, 러시아어",
    currency: "투그릭",
    currencyCode: "MNT",      // ★ 환율 API에 사용
    timezone: "UTC+8(서부 일부+7)",
    tips: [
      "일교차 대비",
      "외곽 여행 시 현금/의약품 미리 준비",
    ],
  },
  PS: {
    name: "팔레스타인",
    capital: "라말라, 동예루살렘",
    language: "아랍어",
    currency: "이스라엘 셰켈",
    currencyCode: "ILS",      // ★ 환율 API에 사용
    timezone: "UTC+2",
    tips: [
      "여행 경보 확인 필수",
      "도로 차단 여부 확인, 이동 전 현지 가이드 확보 필수",
      "소액 리라도 쓰임"
    ],
  },
  QA: {
    name: "카타르",
    capital: "도하",
    language: "아랍어, 영어",
    currency: "카타르 리알",
    currencyCode: "QAR",      // ★ 환율 API에 사용
    timezone: "UTC+3",
    tips: [
      "더위, 야외 활동 시간 조절",
      "카르와 앱 사용 추천",
      "사막 액티비티 예약 시 소규모 전문 투어, 보험, 구급장비 확인"
    ],
  },
  SG: {
    name: "싱가포르",
    capital: "싱가포르",
    language: "영어, 말레이어, 표준중국어 등",
    currency: "싱가포르 달러",
    currencyCode: "SGD",      // ★ 환율 API에 사용
    timezone: "UTC+8",
    tips: [
      "쓰레기, 담배 규제 엄격 주의",
      "EZ-Link 카드 또는 트래블패스로 대중 교통 이용 추천",
    ],
  },
  SY: {
    name: "시리아",
    capital: "다마스쿠스",
    language: "아랍어",
    currency: "시리아 파운드",
    currencyCode: "SYP",      // ★ 환율 API에 사용
    timezone: "UTC+2",
    tips: [
      "여행 위험.",
      "전문적 목적 방문 시 허가, 안전 교육 필수",
    ],
  },
  TW: {
    name: "대만",
    capital: "타이페이",
    language: "표준 중걱어, 대만어",
    currency: "신 대만 달러",
    currencyCode: "TWD",      // ★ 환율 API에 사용
    timezone: "UTC+8",
    tips: [
      "전압 110V",
      "EasyCard(교통카드) 이용 추천(편의점,공영 자전거 사용)",
      "7-Eleven에서 공과금, 택배 픽업 가능"
    ],
  },
  TL: {
    name: "동티모르",
    capital: "딜리",
    language: "테툼, 포르투칼어, 인도네시아어, 영어",
    currency: "달러 사실상 통용",
    currencyCode: "USD",      // ★ 환율 API에 사용
    timezone: "UTC+9",
    tips: [
      "현금 필수, ATM 거의 없음(공항, 수도에서 미리 준비)",
      "섬 간 이동 시 수화물 규정 확인",
    ],
  },
  TR: {
    name: "튀르키예",
    capital: "앙카라",
    language: "터키어",
    currency: "터키 리아",
    currencyCode: "TRY",      // ★ 환율 API에 사용
    timezone: "UTC+3",
    tips: [
      "주소은 Turkish 표기(거리명+번호) 준비",
      "BiTaksi/Istanbulkart 기반 택시 호출 이용",
    ],
  },
  TM: {
    name: "투르크메니스탄",
    capital: "아시가바트",
    language: "투르크멘어, 러시아어",
    currency: "투르크멘 마나트",
    currencyCode: "TMT",      // ★ 환율 API에 사용
    timezone: "UTC+5",
    tips: [
      "비자, 사전 허가 필요, 일부 지역 가이드 동행 필수.",
      "등록/체류 신고 규정",
      "사진/안전 규제 주의",
    ],
  },
  AE: {
    name: "아랍에미리트",
    capital: "아부다비",
    language: "아랍어, 영어",
    currency: "디르함",
    currencyCode: "AED",      // ★ 환율 API에 사용
    timezone: "UTC+4",
    tips: [
      "고가 제품(금, 보석)구입 시 세금 영수증 확인 후 구입",
      "기도시간, 라마단 영향 체크",
    ],
  },
  UZ: {
    name: "우즈베키스탄",
    capital: "타슈켄트",
    language: "우즈베크어, 러시아어",
    currency: "숨",
    currencyCode: "UZS",      // ★ 환율 API에 사용
    timezone: "UTC+5",
    tips: [
      "주소, 지도는 키릴/현지 철자 준비",
      "기차 예매는 현지 앱이나 역 창구가 안전",
    ],
  },
  YE: {
    name: "예멘",
    capital: "사나아",
    language: "아랍어",
    currency: "예멘 리알",
    currencyCode: "YER",      // ★ 환율 API에 사용
    timezone: "UTC+3",
    tips: [
      "예멘 현재 다수 국가 여행금지/권고 대상",
      "인프라 불안정, 현금 준비 필수",
      "사진, 이동 주의",
    ],
  },
  LK: {
    name: "스리랑카",
    capital: "스리자야와르데네푸라코테",
    language: "싱할라어, 타밀어, 영어",
    currency: "스리랑카 루피",
    currencyCode: "LKR",      // ★ 환율 API에 사용
    timezone: "UTC+5:30",
    tips: [
      "야생/코끼리 보호구역 방문 매너.",
      "해안/파도 안전 주의",
    ],
  },
  //유럽
  AD: {
    name: "안도라",
    capital: "안도라라베야",
    language: "카탈루냐어, 스페인어, 프랑스어",
    currency: "유로",
    currencyCode: "EUR",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "교통이 버스와 도보 중심",
      "고산지대로 기온 변화 큼",
    ],
  },
  AM: {
    name: "아르메니아",
    capital: "예레반",
    language: "아르메니아어, 러시아어",
    currency: "아ㄹ메니아 드람",
    currencyCode: "AMD",      // ★ 환율 API에 사용
    timezone: "UTC+4",
    tips: [
      "소규모 와이너리 투어 추천",
      "교외 수도원 드라이브는 현지 운전자 대절 추천",
    ],
  },
  AT: {
    name: "오스트리아",
    capital: "빈",
    language: "독일어, 영어",
    currency: "유로",
    currencyCode: "EUR",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "계절별 교통패스 활용",
    ],
  },
  BY: {
    name: "벨라루스",
    capital: "민스크",
    language: "벨라루스어, 러시아어",
    currency: "벨라루스 루블",
    currencyCode: "BYN",      // ★ 환율 API에 사용
    timezone: "UTC+3",
    tips: [
      "시위, 정세 변화 수시로 확인",
      "표지, 대중교통에서 러시아어 위주 표기 많음",
    ],
  },
  BE: {
    name: "벨기에",
    capital: "브뤼셀",
    language: "네덜란드어(플라망), 프랑스어, 독일어",
    currency: "유로",
    currencyCode: "EUR",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "프랑스어권, 플라망권 구분해서 일정 준비 추천(주소,메뉴 등)",
      "플랜더스 쪽 자전거 인프라 좋음",
      "박물관, 전시회 무료나 할인 이벤트 홈페이지 확인"
    ],
  },
  BA: {
    name: "보스니아 헤르체고비나",
    capital: "사라예보",
    language: "보스니아어, 세르비아어, 크로아티아어",
    currency: "보스니아-헤르체고비나 마르카",
    currencyCode: "BAM",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "전쟁 관련 장소 방문 시 가이드 안내에 따라 행동",
      "터널, 전시 공간 예약 추천",
      "외곽 방문 시 안전 루트 확인 필수(관광사무소)"
    ],
  },
  BG: {
    name: "불가리아",
    capital: "소피아",
    language: "불가리아어(키릴문자)",
    currency: "불가리아 레프",
    currencyCode: "BGN",      // ★ 환율 API에 사용
    timezone: "UTC+2",
    tips: [
      "주소를 키릴문자 표기까지 준비해가는 것 추천",
      "온천, 스파는 지역 로컬 패키지 추천",
      "트램/미니버스 표 검표 방식 구간마다 다름 확인 필수(승차 후 요금지불 VS 선불)",
    ],
  },
  HR: {
    name: "크로아티아",
    capital: "자그레브",
    language: "크로아티아어",
    currency: "유로",
    currencyCode: "EUR",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "성수기 방문 시 페리, 카타마란, 차량 좌석 사전 예약 필수",
      "국립공원 중 입장인원, 시간대 제한 있음. 사전 예약 필수",
      "어시장, 농산물 오전에 방문하면 신선한 재료 얻을 수 있음",
    ],
  },
  CY: {
    name: "키프로스",
    capital: "니코시아",
    language: "그리스어, 터키어, 영어",
    currency: "유로",
    currencyCode: "EUR",      // ★ 환율 API에 사용
    timezone: "UTC+2",
    tips: [
      "국토 분단 상황 유의",
      "해변, 선셋 스폿은 '현지 페리/보트'로 공약",
    ],
  },
  CZ: {
    name: "체코",
    capital: "프라하",
    language: "체코어",
    currency: "체코 코루나",
    currencyCode: "CZK",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "프라하 성,구지가지 관광객 오기 전 오전 7-8시 추천",
      "트램 번호가 시간에 따라 표기됨.",
      "체코 맥주 탐방은 '마이크로브루어리 예약' 추천",
    ],
  },
  DK: {
    name: "덴마크",
    capital: "코펜하겐",
    language: "덴마크어, 영어",
    currency: "덴마크 크로네",
    currencyCode: "DKK",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "여름에는 DST로 UTC+2",
      "자전거 도로 법 숙지",
      "도시 간 이동은 플렉스 패스 사용",
    ],
  },
  EE: {
    name: "에스토니아",
    capital: "탈린",
    language: "에스토니아어, 영어",
    currency: "유로",
    currencyCode: "EUR",      // ★ 환율 API에 사용
    timezone: "UTC+2",
    tips: [
      "여름에는 DST로 UTC+3",
      "e-Residency, 디지털 서비스 체험",
      "무료박스, 업사이클링 문화 이용"
    ],
  },
  FI: {
    name: "핀란드",
    capital: "헬싱키",
    language: "핀란드어, 스웨덴어",
    currency: "유로",
    currencyCode: "EUR",      // ★ 환율 API에 사용
    timezone: "UTC+2",
    tips: [
      "여름에는 UTC+3",
      "사우나 이용 시 미리 규칙 숙지 후 예약",
      "숙소 오로라 알림 서비스 이용(가능한 숙소인지 확인 필수)",
      "HSL 카드는 버스, 트렘, 페리 일부 통합"
    ],
  },
  FR: {
    name: "프랑스",
    capital: "파리",
    language: "프랑스어",
    currency: "유로",
    currencyCode: "EUR",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "주중/주말 시간대별 '프릭스 픽스 노리기'",
      "파리 교통패스 이용",
      "박물과, 전시 '야간 개장'특정 이벤트 확인"
    ],
  },
  DE: {
    name: "독일",
    capital: "베를린",
    language: "독일어",
    currency: "유로",
    currencyCode: "EUR",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "장거리 기차 할인, 도이체반 조기예약 Sparpreis 요금 저렴",
      "지역 교통권 활용",
      "재활용 보증금 시스템 활용"
    ],
  },
   GR: {
    name: "그리스",
    capital: "아테네",
    language: "그리스어",
    currency: "유로",
    currencyCode: "EUR",      // ★ 환율 API에 사용
    timezone: "UTC+2",
    tips: [
      "섬간 이용 출발 항수에서 체크인 복잡할 수 있음. 모바일 티켓, 프린트본 전부 준비",
      "렌터카, ATV 보험 확인 필수",
    ],
  },
   HU: {
    name: "헝가리",
    capital: "부다페스트",
    language: "헝가리어",
    currency: "포린트",
    currencyCode: "HUF",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "온천 이용 시 락커와 샤워 룰 지역마다 다름. 입장 전 락커,타월 유무, 샤워비용 확인 필수",
      "공식 택시 앱 Bolt나 공인 택시 이용",
    ],
   },
    IS: {
    name: "아이슬란드",
    capital: "레이캬비크",
    language: "아이슬란드어, 영어",
    currency: "크로나",
    currencyCode: "ISK",      // ★ 환율 API에 사용
    timezone: "UTC+0",
    tips: [
      "오프로드 절대 무단 진입 금지",
      "연료, 간식 챙겨가기, 작은 주유소 카드+PIN 필요할 경우 있음. 카드 설정 확인",
      "사유지, 자연풀 지역 규정 확인 필수"
    ],
  },
   IE: {
    name: "아일랜드",
    capital: "더블린",
    language: "영어, 아일랜드어",
    currency: "유로",
    currencyCode: "EUR",      // ★ 환율 API에 사용
    timezone: "UTC+0",
    tips: [
      "시골 운전 시 양떼, 농촌 구간선속 제한, 동물 돌발출현 주의",
      "Leap 카드로 더블린 대중교통 할인 가능",
      "재활용 보증금 시스템 활용", 
    ],
  },
  IT: {
    name: "이탈리아",
    capital: "로마",
    language: "이탈리아어",
    currency: "유로",
    currencyCode: "EUR",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "식당에서 테이블 차지(coperto), 서비스료(servizio)청구함. 영수증 확인.",
      "기차표 펀칭있을 수 있으니 확인 필수",
      "렌터카 이용 시 ZTL(도시 중심부나 역사 지구처럼 특정 구역에 차양 통행 제한 거는 구역) 주의", 
    ],
  },
  XK: {
    name: "코소보",
    capital: "프리슈티나",
    language: "알바니아어, 세르비아어, 영어",
    currency: "유로",
    currencyCode: "EUR",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "프리슈티나 중심가, 골목에 벽화나 그래피티 많음",
      "코소보, 세르비아 국경 분쟁 지역 상황 확인 필수",
    ],
  },
  LV: {
    name: "라트비아",
    capital: "리가",
    language: "라트비아어, 러시아어, 영어",
    currency: "유로",
    currencyCode: "EUR",      // ★ 환율 API에 사용
    timezone: "UTC+2",
    tips: [
      "리가 중앙시장 방문 추천",
      "알베르타 거리 방문 추천. 아르누보 건축물",
      "시굴다 봅슬레이 트랙 체험 가능", 
    ],
  },
  LI: {
    name: "리히텐슈타인",
    capital: "파두츠",
    language: "독일어",
    currency: "스위스 프랑",
    currencyCode: "CHF",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "플러그 타입 J",
      "우표 박물과 방문 추천(기념 우표 구매)",
      "바두츠 성 배경 '와인 시음' 추천", 
    ],
  },
  LT: {
    name: "리투아니아",
    capital: "빌뉴스",
    language: "리투아니아어, 러시아어, 영어",
    currency: "유로",
    currencyCode: "EUR",      // ★ 환율 API에 사용
    timezone: "UTC+2",
    tips: [
      "우주피스 공화국에서 여권에 도장 받기",
      "십자가 언덕 방문 추천",
    ],
  },
  LU: {
    name: "룩셈부르크",
    capital: "룩셈부르크 시티",
    language: "룩셈부르크어, 프랑스어, 독일어, 영어",
    currency: "유로",
    currencyCode: "EUR",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "룩셈부르크는 세계 최초 전국 대중교통 무료",
      "카제마츠 터널 미로 방문 추천",
    ],
  },
  MT: {
    name: "몰타",
    capital: "발레타",
    language: "몰타어, 영어",
    currency: "유로",
    currencyCode: "EUR",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "하가르 임, 타르신 신전 같은 곳 방문 추천",
      "블루 그로토에서 동굴 보트 투어 추천",
      "로컬 푸드 파스티찌 길거리 음식 추천",
    ],
  },
  MD: {
    name: "몰도바",
    capital: "키시너우",
    language: "루마니아어, 러시아어",
    currency: "몰도바 레우",
    currencyCode: "MDL",      // ★ 환율 API에 사용
    timezone: "UTC+2",
    tips: [
      "와인 시티 탐험(세상에서 가장 큰 와인 저장소)",
      "트란스니스트리아 장칭 공화국 방문 추천",
      "오르헤이울 베키 수도원 방문 추천", 
    ],
  },
  MC: {
    name: "모나코",
    capital: "모나코(도시국가)",
    language: "프랑스어, 영어",
    currency: "유로",
    currencyCode: "EUR",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "경기 시즌 아닐 때 F1 도로 걸어볼 수 있음. 방문 추천",
      "오션오그래픽 박물관 & 해안 절벽 산책",
    ],
  },
  ME: {
    name: "몬테네그로",
    capital: "포드고리차",
    language: "몬테그로어",
    currency: "유로",
    currencyCode: "EUR",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "보카 코토르만 방문 추천, 주변 마을 방문도 함께",
      "두르미토르 국립공원 방문 추천(방문 전 사전 준비물 확인 필수)",
      "현금 사용하는 곳 다수",
      "대중교통보다 택시나 렌터카 추천",
    ],
  },
  NL: {
    name: "네덜란드",
    capital: "암스테르담",
    language: "네덜란드어, 영어",
    currency: "유로",
    currencyCode: "EUR",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "자전거 도로가 많음. 자전거 도로 사용 규칙 숙지",
      "카드&모바일페이 생활화",
      "커피숍, 카페 확인 필수(커피숍은 마약류 판매, 카페는 일반적인 음료, 술 판매)",
    ],
  },
  MK: {
    name: "북마케도니아",
    capital: "슼코페",
    language: "마케도니아어, 영어",
    currency: "마케도니아 데나르",
    currencyCode: "MKD",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "오흐리드 호수 방문 추천",
      "발칸 전통 음식 도전",
      "한국 대사관 없음. 긴급 상황 시 불가리아 대한민국 대사관에 도움 요청"
    ],
  },
  NO: {
    name: "노르웨이",
    capital: "오슬로",
    language: "노르웨이어, 영어",
    currency: "노르웨이 크로네",
    currencyCode: "NOK",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "피오르드 탐방, 유람선 말고 자전거와 카약 추천",
      "모바일 결제&카드 사용 생활화",
      "날씨 변덕 심함, 레이어드 의상, 방수, 방풍 아우터 챙기기"
    ],
  },
  PL: {
    name: "폴란드",
    capital: "바르샤바",
    language: "폴란드어",
    currency: "폴란드 즐로티",
    currencyCode: "PLN",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "피에로기, 주렉, 로스우 먹어보는 것 추천",
      "박물관 무료 입장 할 수 있는 요일이나 시간 있음. 홈페이지 확인",
    ],
  },
  PT: {
    name: "포르투갈",
    capital: "리스본",
    language: "포르투갈어",
    currency: "유로",
    currencyCode: "EUR",      // ★ 환율 API에 사용
    timezone: "UTC+0",
    tips: [
      "타베르나에서 파두 감상",
      "포르투갈의 소도시(에보라, 아베이루, 코임브라 등) 방문 추천",
    ],
  },
  RO: {
    name: "루마니아",
    capital: "부쿠레슈티",
    language: "루마니아어",
    currency: "루마니아 레우",
    currencyCode: "RON",      // ★ 환율 API에 사용
    timezone: "UTC+2",
    tips: [
      "드라큘라성 대신 펠레슈 성이나 라스노브 요새 방문 추천",
      "살리나 투르다 소금광산 방문 추천",
      "공산주의 유산 탐방 자유의 집&지하 터널 방문 추천"
    ],
  },
  RU: {
    name: "러시아",
    capital: "모스크바",
    language: "러시아어",
    currency: "러시아 루블",
    currencyCode: "RUB",      // ★ 환율 API에 사용
    timezone: "UTC+3",
    tips: [
      "비자 철저하게 준비",
      "미르(러시아 자체 카드)나 현금 사용",
      "모스크바, 상트페테르부르크 지하철역 방문 추천(지하 궁전이라고 불림)",
    ],
  },
  SM: {
    name: "산마리노",
    capital: "산마리노 시티",
    language: "이탈리아어",
    currency: "유로",
    currencyCode: "EUR",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "면세 쇼핑 유명. 유럽 내 이동 시 관세 규정 있음. 텍스피리 구매 조건 확인 필수",
      "이탈리아 리미니 버스로 방문 가능",
      "자체 우표 구매 추천",
    ],
  },
  RS: {
    name: "세르비아",
    capital: "베오그라드",
    language: "세르비아어-키릴문자, 라틴문자",
    currency: "세르비아 디나르",
    currencyCode: "RSD",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "키릴 문자, 로마자 병행 사용, 미리 폰트 설치 추천",
      "체바피 먹어보는 것 추천",
      "베오그라드에 NATO 공습 흔적, 박물과 기념비 방문 추천",
    ],
  },
  SK: {
    name: "슬로바키아",
    capital: "브라티슬라바",
    language: "슬로바키아어",
    currency: "유로",
    currencyCode: "EUR",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "브라티슬라바 야경 보는 것 추천",
      "타트라 산맥은 날씨 변화, 험한 곳 많음.(준비물 확인, 여행자 보험 필수)",
      "공산주의와 현대 예술 공존",
    ],
  },
  SI: {
    name: "슬로베니아",
    capital: "류블랴나",
    language: "슬로베니아어",
    currency: "유로",
    currencyCode: "EUR",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "수도 근교 소도시 당일치기 추천(블레드 호수, 포스토이, 피란)",
      "동굴 체험은 스코찬 동굴(포스토이나 동굴보다 많이 걸어야함)",
    ],
  },
  ES: {
    name: "스페인",
    capital: "마드리드",
    language: "스페인어, 카탈루냐어, 바스크어, 갈리시아어",
    currency: "유로",
    currencyCode: "EUR",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "오후 2-5시 스에스타로 작은 상점이나 식당 문 닫는 경우 많다",
      "타파스 투어 추천",
      "도시간 이동은 AVE 고속철도 미리 예매로 싸게 구매"
    ],
  },
  SE: {
    name: "스웨덴",
    capital: "스톡홀름",
    language: "스웨덴어, 영어",
    currency: "스웨덴 크로나",
    currencyCode: "SEK",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "현금보다 카드를 많이 사용함",
      "스톡홀름 지하철역 예술 작품 구경 추천",
    ],
  },
  CH: {
    name: "스위스",
    capital: "베른",
    language: "독일어, 프랑스어, 이탈리아어, 영어",
    currency: "스위스 프랑",
    currencyCode: "CHF",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "스위스 트래블 패스 추천(기차, 버스, 유람선 무제한 이용, 500개 이상 박물관 무료 입장)",
      "외식보다 마트에서 구매 후 숙소에서 요리 하는 것 추천",
      "하이킹 시 날씨 예보 확인, 비상 대비 용품 준비 필수",
    ],
  },
   UA: {
    name: "우크라이나",
    capital: "키이우",
    language: "우크라이나어",
    currency: "우크라이나 흐리브냐",
    currencyCode: "UAH",      // ★ 환율 API에 사용
    timezone: "UTC+2",
    tips: [
      "우크라이나 2025년 8월 기준 여행 금지 국가",
    ],
  },
   GB: {
    name: "영국",
    capital: "런던",
    language: "영어",
    currency: "파운드 스털링",
    currencyCode: "GBP",      // ★ 환율 API에 사용
    timezone: "UTC+0",
    tips: [
      "콘센트 타입 G(영국식 3핀)",
      "교통카드 보다 컨택리스 기능 있는 카드 있는 것이 더 편리",
      "많은 박물관 입장료 저렴",
    ],
  },
   VA: {
    name: "바티칸 시국",
    capital: "바티칸 시국",
    language: "라틴어, 이탈리아어, 영어",
    currency: "유로",
    currencyCode: "EUR",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "이탈리아 유로 동전 사용",
      "바티칸 성당, 박물관 방문 시 복장 주의",
      "교황 알현식은 보통 매주 수요일 오전 성 베드로 광장(바티칸 홈페이지에서 미리 티켓 신청 필수)",
    ],
  },
   FEI: {
    name: "페로 제도",
    capital: "토르스하운",
    language: "페로어, 덴마크어",
    currency: "페로 크로네",
    currencyCode: "Faroese Krone",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "날씨 변화 심함. 얇은 옷 여러 개 입는 것 추천",
      "렌터카 필수, 해저터널 유료인 경우 있음",
      "도로에 양이 많음.",
    ],
  },
  //북아메리카
  US: {
    name: "미국",
    capital: "워싱턴 D.C.",
    language: "영어, 스페인어",
    currency: "달러",
    currencyCode: "USD",      // ★ 환율 API에 사용
    timezone: "동부 UTC-4, 서부 UTC-8",
    tips: [
      "물건값+세금, 팁 이것까지 고려해 예산 계획",
      "여러 국립공원 방문 계획 시 패스 구매(America the Beatiful Pass)",
      "우버 같은 택시 앱 미리 깔아두기",
    ],
  },
  CA: {
    name: "캐나다",
    capital: "오타와",
    language: "영어, 프랑스어",
    currency: "캐나다 달러",
    currencyCode: "CAD",      // ★ 환율 API에 사용
    timezone: "동부 UTC-4, 서부 UTC-8",
    tips: [
      "국립공원 캠핑/트레일 예약 또는 추첨제 운영. 미리 캐나다 국립공원 공식 웹사이트에서 예약 규정 확인 필수",
      "겨울 방문 시 보온성 뛰어난 레이어드 필수. 겨울 렌터카 이용 시 '윈터 타이어' 장착 여부 미리 확인 필수",
      "물건값에 주세 또는 연방세, 팁 붙음. 영수증 확인 시 세금과 팁 합쳐서 계산하기",
    ],
  },
  MX: {
    name: "멕시코",
    capital: "멕시코시티",
    language: "스페인어",
    currency: "멕시코 페소",
    currencyCode: "MXN",      // ★ 환율 API에 사용
    timezone: "멕시코시티 UTC-6, 칸쿤 UTC-5",
    tips: [
      "현지인 동행 또는 주요 관광지 위주 이동",
      "우버나 디디 같은 택시 앱 사용",
      "현금 사용 비중 높음",
    ],
  },
  GL: {
    name: "그린란드",
    capital: "누크",
    language: "그린란드어, 덴마크어, 영어",
    currency: "덴마크 크로네",
    currencyCode: "DKK",      // ★ 환율 API에 사용
    timezone: "누크 UTC-3",
    tips: [
      "그린란드에서 도시 간 이동은 비행기 또는 배로 이동.",
      "북극 지방이라 여름에도 날씨가 극단적일 수 있음.(선글라스, 부츠, 장갑, 모자 필수)",
      "로컬 투어 프로그램 체험 추천",
    ],
  },
  GT: {
    name: "과테말라",
    capital: "과테말라시티",
    language: "스페인어, 마야어",
    currency: "케찰",
    currencyCode: "GTQ",      // ★ 환율 API에 사용
    timezone: "UTC-6",
    tips: [
      "이동할 때 일반 버스보다 셔틀 밴이나 우버 추천",
      "티칼 마야 유적지 방문 추천",
      "아티틀란 호수 방문 추천",
    ],
  },
  CU: {
    name: "쿠바",
    capital: "아바나",
    language: "스페인어",
    currency: "쿠바 페소",
    currencyCode: "CUP",      // ★ 환율 API에 사용
    timezone: "UTC-5",
    tips: [
      "오프라인 지도, 정보 미리 다운로드 받아놓기",
      "현금 넉넉히 가져가기, 달러는 환전 시 수수료 더 붙음",
    ],
  },
  HT: {
    name: "아이티",
    capital: "포르토프랭스",
    language: "아이티 크레올어, 프랑스어",
    currency: "아이티 구르드",
    currencyCode: "HTG",      // ★ 환율 API에 사용
    timezone: "UTC-5",
    tips: [
      "현재 여행 금지 국가",
    ],
  },
  DO: {
    name: "도미니카 공화국",
    capital: "산토도밍고",
    language: "스페인어",
    currency: "도미니카 페소",
    currencyCode: "DOP",      // ★ 환율 API에 사용
    timezone: "UTC-4",
    tips: [
      "산토도밍고의 식민지 구역 유네스코 등재됨",
      "이동은 우버 또는 국영 버스 활용",
    ],
  },
  HN: {
    name: "온두라스",
    capital: "테구시갈파",
    language: "스페인어",
    currency: "온두라스 렘피라",
    currencyCode: "HNL",      // ★ 환율 API에 사용
    timezone: "UTC-6",
    tips: [
      "로아탄 섬은 관광 인프라 좋음.",
      "이동 버스는 낮에 대형 버스 이용 추천",
      "마야 유적지 코판은 가이드 동반&미리 예약",
    ],
  },
  NI: {
    name: "니키라과",
    capital: "마나과",
    language: "스페인어",
    currency: "니키라과 코르도바",
    currencyCode: "NIO",      // ★ 환율 API에 사용
    timezone: "UTC-6",
    tips: [
      "니키라과 치안 및 정치 상황 항상 확인",
      "볼케이노 보딩 체험 추천",
      "오메테페 추천(화산 트레킹, 카약, 승마 체험 등)",
    ],
  },
  SV: {
    name: "엘살바도르",
    capital: "산살바도르",
    language: "스페인어",
    currency: "미국 달러",
    currencyCode: "USD",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "이탈리아 유로 동전 사용",
      "바티칸 성당, 박물관 방문 시 복장 주의",
      "교황 알현식은 보통 매주 수요일 오전 성 베드로 광장(바티칸 홈페이지에서 미리 티켓 신청 필수)",
    ],
  },
  CR: {
    name: "코스타리카",
    capital: "산호세",
    language: "스페인어",
    currency: "코스타리카 콜론",
    currencyCode: "CRC",      // ★ 환율 API에 사용
    timezone: "UTC-6",
    tips: [
      "야생동물 찾아보기(전문가 동행 필수)",
      "아레날 화산 주변 온천은 현지인들이 자주 가는 저렴한 온천 있음",
      "카카오/커피 투어 추천",
    ],
  },
  PA: {
    name: "파나마",
    capital: "파나마 시티",
    language: "스페인어",
    currency: "미국 달러",
    currencyCode: "USD",      // ★ 환율 API에 사용
    timezone: "UTC-5",
    tips: [
      "파나마 운하 작동 모습 미라플로레스 전망대에서 볼 수 있음(운하 스케줄 확인)",
      "카스코 비에호는 낮에는 역사적인 건물 가득하 곳, 밤이되면 레스토랑, 바, 라이브 음악 흘러나오는 곳으로 변함",
      "인디언 보호구역 구나 얄라에는 쿤나족 원주민들이 운영하는 숙소 있음",
    ],
  },
  BS: {
    name: "바하마",
    capital: "나사우",
    language: "영어",
    currency: "바하마 달러",
    currencyCode: "BSD",      // ★ 환율 API에 사용
    timezone: "UTC-5",
    tips: [
      "미국 달러와 1:1 고정, 미국 달러도 광범위하게 통용",
      "엑수마, 하버 아일랜드 등 다양한 섬이 있어서 방문 추천",
      "콘크 요리는 현지인이 가장 많이 먹는 요리",
      "로컬 마켓 피시 프라이에서 해산물 요리 즐기기 추천"
    ],
  },
  JM: {
    name: "자메이카",
    capital: "킹스턴",
    language: "영어, 자메이카 파투아",
    currency: "자메이카 달러",
    currencyCode: "JMD",      // ★ 환율 API에 사용
    timezone: "UTC-5",
    tips: [
      "공식 노선 택시 활용",
      "저크, 페티, 아키 앤 솔트피시 추천",
      "신용카드는 큰 호텔/상점에서 사용",
    ],
  },
  BZ: {
    name: "벨리즈",
    capital: "벨모판",
    language: "영어, 벨리즈 클레올러, 스페인어",
    currency: "벨리즈 달러",
    currencyCode: "BZD",      // ★ 환율 API에 사용
    timezone: "UTC-6",
    tips: [
      "스노클링 계획할 때 경력, 실력 고려해서 장소 선정 필수",
      "마야 유적지 투어 시 긴 팔/긴 바지, 벌레 퇴치제, 물 필수",
    ],
  },
  BB: {
    name: "바베이도스",
    capital: "브리지타운",
    language: "영어, 바잔 방어",
    currency: "바베이도스 달러",
    currencyCode: "BBD",      // ★ 환율 API에 사용
    timezone: "UTC-4",
    tips: [
      "금요일 밤 오이스틴스 방문 필수",
      "ZR 밴타고 섬 돌아보기 추천",
      "럼 증류소 투어 마운트 게이, 펜스 오브 콜돈(좀 더 로컬 느낌)",
      "해변 서쪽은 파도가 잔잔, 수심이 얕음. 동쪽은 서핑 추천"
    ],
  },
  BRM: {
    name: "버뮤다",
    capital: "해밀턴",
    language: "영어",
    currency: "버뮤다 달러",
    currencyCode: "BMD",      // ★ 환율 API에 사용
    timezone: "UTC-4",
    tips: [
      "관광객 자동차 렌탈 안됨. 스쿠터 빌려야됨",
      "핑크색 모래 해변",
      "럼 펀치와 피쉬 차우더 판매 식당 방문 추천",
    ],
  },
  TT: {
    name: "트리니다드 토바고",
    capital: "포트 오프 스페인",
    language: "영어, 트리니다드 크레올러, 프랑스어, 스페인어, 힌디어",
    currency: "트리니다드 토바고 달러",
    currencyCode: "TTD",      // ★ 환율 API에 사용
    timezone: "UTC-4",
    tips: [
      "카니발 축제에 방문하고 싶다면 최소 1년 전 부터 미리 준비하기",
      "트리니다드는 문화, 음식. 토바고는 자연, 휴양.",
      "스트리트 푸드 더블스 추천",
    ],
  },
  TCI: {
    name: "터크스 케이커스 제도",
    capital: "코번 타운",
    language: "영어",
    currency: "미국 달러",
    currencyCode: "USD",      // ★ 환율 API에 사용
    timezone: "UTC-4",
    tips: [
      "프린세스 알렉산드라 국립 공원 탐방 추천",
      "작은 섬들 방문해보기",
      "물놀이 용품은 미리 준비하거나 렌탈 알아보기",
    ],
  },
  GD: {
    name: "그레나다",
    capital: "세인트조지스",
    language: "영어, 그레니다 크레올어",
    currency: "동카리브 달러",
    currencyCode: "XCD",      // ★ 환율 API에 사용
    timezone: "UTC-4",
    tips: [
      "향신료 농장 투어 추천",
      "초콜릿 공장 투어 추천",
      "세계 최초 수중 조각 공원 방문 추천",
    ],
  },
  GLP: {
    name: "과들루프",
    capital: "바스테르",
    language: "프랑스어, 안틸레스 크레올어",
    currency: "유로",
    currencyCode: "EUR",      // ★ 환율 API에 사용
    timezone: "UTC-4",
    tips: [
      "나비 모양 두 섬(그랑드 테르, 바스테르) 모두 방문 추천",
      "럼 증류소 투어 추천",
      "트레킹 좋아하면 수프리에르 화산 방문 추천",
    ],
  },
  LC: {
    name: "세인트 루시아",
    capital: "캐스트리스",
    language: "영어, 세인트루시아 크레올어",
    currency: "동카리브 달러",
    currencyCode: "XCD",      // ★ 환율 API에 사용
    timezone: "UTC-4",
    tips: [
      "바다에 있는 화산 봉우리 피톤 방문 추천(가이드와 함께 오를 수 있음)",
      "드라이브 인 볼케이노에서 머드 배스 체험 추천",
      "초콜렛 체험 추천(카카오에서 부터 초콜렛 되기까지 과정 모두 만들어 볼 수 있음)",
    ],
  },
  KN: {
    name: "세인트 키츠 네비스",
    capital: "바스테르",
    language: "영어",
    currency: "동카리브 달러",
    currencyCode: "XCD",      // ★ 환율 API에 사용
    timezone: "UTC-4",
    tips: [
      "올드 슈가 트레인 타고 섬 한 바퀴 레인 투어",
      "세인트 키츠는 엑티브, 네비스는 힐링",
      "유네스코 세계유산 브림스톤 힐 요새 방문 추천",
    ],
  },
  VC: {
    name: "세인트 빈센트 그레나딘",
    capital: "킹스타운",
    language: "영어, 그레니다 크레올어",
    currency: "동카리브 달러",
    currencyCode: "XCD",      // ★ 환율 API에 사용
    timezone: "UTC-4",
    tips: [
      "세인트 빈센트는 트레킹, 그 외 작은 섬에서는 요팅/스노클링",
      "케리비안의 해적 촬영지 방문 추천",
      "로컬 피시 마켓에서 직접 고른 후 노점에 가서 바비큐나 튀김으로 조리 요청 가ㅡㅇ",
    ],
  },
  SBH: {
    name: "생 바르텔레미",
    capital: "귀스타비아",
    language: "프랑스어, 영어",
    currency: "유로",
    currencyCode: "EUR",      // ★ 환율 API에 사용
    timezone: "UTC-4",
    tips: [
      "명품을 관세와 부가가치세가 없어 유럽 본토보다 저렴하게 구매 가능",
      "작은 섬에서 스쿠터/미니 컨버터블로 둘러보기 추천",
    ],
  },
  SMN: {
    name: "생 마르탱",
    capital: "마리고",
    language: "프랑스어, 영어",
    currency: "유로",
    currencyCode: "EUR",      // ★ 환율 API에 사용
    timezone: "UTC-4",
    tips: [
      "프랑스령",
      "국경 검문이 없어 신트 마르턴과 자유롭게 오갈 수 있음",
      "카리브해의 미식 수도",
      "렌터카 추천"
    ],
  },
  SMA: {
    name: "신트 마르턴",
    capital: "필립스버그",
    language: "네덜란드어, 영어",
    currency: "네덜란드 안틸레스 길더",
    currencyCode: "ANG",      // ★ 환율 API에 사용
    timezone: "UTC-4",
    tips: [
      "네덜란드령",
      "국경 검문이 없어 신트 마르턴과 자유롭게 오갈 수 있음",
      "세계에서 가장 위험한 공항 착륙샷 마호 비치 방문 추천",
      "면세 쇼핑 추천",
      "렌터카 추천"
    ],
  },
  DM: {
    name: "도미니카",
    capital: "로조",
    language: "영어, 도미니카 크레올 프랑스어",
    currency: "동카리브 길더",
    currencyCode: "ANG",      // ★ 환율 API에 사용
    timezone: "UTC+4",
    tips: [
      "향고래 투어",
      "트레킹 추천(트레킹화, 방수 재킷 필수)",
      "지열 온천수 방문 추천",
    ],
  },
   AG: {
    name: "앤티카 바부다",
    capital: "세인트존스",
    language: "영어",
    currency: "동카리브 달러",
    currencyCode: "XCD",      // ★ 환율 API에 사용
    timezone: "UTC+4",
    tips: [
      "해변이 많음(딕스 베이, 프렌치 맨즈 코브 유명)",
      "매주 일요일 저녁에 셜리 하이츠 요새에서 BBQ 파티가 열림",
      "요팅이 유명, 세일링 페스티벌 기간에 방문 추천",
      "넬슨스 도크야드 방문 추천(영국 해군 기지였더ㅓㄴ 것)",
    ],
  },
  AW: {
    name: "아루바",
    capital: "오라네스타트",
    language: "네덜란드어, 파피아멘토어, 영어, 스페인어",
    currency: "아루바 플로린",
    currencyCode: "AWG",      // ★ 환율 API에 사용
    timezone: "UTC+4",
    tips: [
      "아리콕 국립공원 4륜 구동 ATV나 지프 투어 체험 추천",
      "카리브해에서 보기 드문 네덜란드식 건축물 구경해보기",
      "참치 타르트 추천",
    ],
  },
  AGA: {
    name: "앵귈라",
    capital: "더 밸리",
    language: "영어",
    currency: "동카리브 달러",
    currencyCode: "XCD",      // ★ 환율 API에 사용
    timezone: "UTC+4",
    tips: [
      "프라이빗하고 고급스러운 휴양을 원하는 사람에게 추천",
      "파인 다이닝, 비치 사이드 레스토랑 방문해보는 것 추천",
      "카약이나 패들보드로 해변 돌아보는 것 추천",
    ],
  }, 
  CAC: {
    name: "큐라소",
    capital: "빌렘스타트",
    language: "네덜란드어, 파피아멘토어, 영어, 스페인어",
    currency: "네덜란드 안틸레스 길더, 미국 달러",
    currencyCode: "ANG, USD",      // ★ 환율 API에 사용
    timezone: "UTC-4",
    tips: [
      "빌렘스타트의 파스텔톤 건축물들 퐁피 브리지, 다리 건너 오트로반다나 스칼루 지구까지 구경해보는 것 추천",
      "보트 없이도 해변에서 바로 들어가 스노쿨링 다이빙 할 수 있는 포인트 많음",
      "세계에서 가장 위험한 공항 착륙샷 마호 비치 방문 추천",
      "블루 큐라소 리큐어 공장 투어 추천, 생과일 주스, 현지 맥주",
      "북부 해안은  4륜 구동 지프 투어 체헌 추천"
    ],
  },
  CYL: {
    name: "케이맨 제도",
    capital: "조지타운",
    language: "영어",
    currency: "케이맨 제도 달러, 미국 달러",
    currencyCode: "KYD, USD",      // ★ 환율 API에 사용
    timezone: "UTC-5",
    tips: [
      "스팅레이 시티말고 밤에 카약이나 보트타고 바이오루미네선트 베이에 방문 추천",
      "로컬 피쉬 프라이에서 진짜 케이맨 미식 경험 추천",
      "섹므이 없어서 명품 쇼핑 추천",
      "다이빙 투어에서 산호에 닿지 않도록 주의",
    ],
  },
  MON: {
    name: "몬세라트",
    capital: "브레이즈",
    language: "영어",
    currency: "동카리브 달러",
    currencyCode: "XCD",      // ★ 환율 API에 사용
    timezone: "UTC-4",
    tips: [
      "법적 수도 플리머스(화산재로 매몰됨)",
      "플리머스는 현재 위험 구역, 반드시 공인 가이드 동행",
      "검은 모래 해변에서 휴식(렌데부스 해변)",
      "AIR 스튜디오와 관련된 공간 방문 추천",
    ],
  },
  PR: {
    name: "푸에르토리코",
    capital: "산후안",
    language: "스페인어, 영어",
    currency: "미국 달러",
    currencyCode: "USD",      // ★ 환율 API에 사용
    timezone: "UTC-4",
    tips: [
      "올드 산후안 방문 추천(아침 일찍이나 해 질 녘 노을 방문)",
      "세계 유일 발광베이 방뭄 추천(비에케스 섬의 라구나)",
      "미국 국립 산림청이 관리하는 유일한 열대우림인 엘윤케 방문 추천",
    ],
  },
  BVI: {
    name: "영국령 버진아일랜드",
    capital: "로드 타운",
    language: "영어",
    currency: "미국 달러",
    currencyCode: "USD",      // ★ 환율 API에 사용
    timezone: "UTC-4",
    tips: [
      "요팅문화가 세계 최고 중 하나인 곳.",
      "요트 정박지 세인트 비치에서 낮부터 파티를 즐길 수 있음",
      "담수가 귀하기 때문에 샤워나 생활용수 사용에 주의",
    ],
  },
  USV: {
    name: "미국령 버진아일랜드",
    capital: "샬럿 아말리에",
    language: "영어",
    currency: "미국 달러",
    currencyCode: "USD",      // ★ 환율 API에 사용
    timezone: "UTC-4",
    tips: [
      "세인트 토마스, 세인트 존, 세인트 크로이 3개의 섬으로 이루어져 있음.",
      "세인트 토마스는 쇼핑과 크루즈 항구, 세인트 크로이는 역사와 농장, 다이빙 명소. 세인트 존은 버진 아일랜드 국립공원이 섬의 60% 차지함",
      "미국령이라서 관세가 없지만 개인 면세 한도 있어 확인 필수",
    ],
  },
  SEN: {
    name: "신트 유스타티우스(네덜란드령)",
    capital: "오렌지스타트",
    language: "네덜란드어, 영어, 파피아멘토어",
    currency: "미국 달러",
    currencyCode: "USD",      // ★ 환율 API에 사용
    timezone: "UTC-4",
    tips: [
      "골든 락의 역사 탐험 & 다이빙으로 유적, 고대 도자기 탐험 추천",
      "화산 더퀼 하이킹 & 분화구 속 탐험 체험 추천",
      "미국 국립 산림청이 관리하는 유일한 열대우림인 엘윤케 방문 추천",
    ],
  },
  SBN: {
    name: "사바(네덜란드령)",
    capital: "더 퀸스 가든스",
    language: "네덜란드어, 영어",
    currency: "미국 달러",
    currencyCode: "USD",      // ★ 환율 API에 사용
    timezone: "UTC-4",
    tips: [
      "상업적인 해변이 없음. 자연 그대로 유지되어 있음",
      "사바 중심에 있는 활화산 마운트 시너리 하이킹 추천",
      "섬 내 이동은 더 로드라고 불리는 도로 하나 뿐임.",
    ],
  },
  MQ: {
    name: "마르티니크(프랑스령)",
    capital: "포르드프랑스",
    language: "프랑스어, 마르티니크 크레올어",
    currency: "유로",
    currencyCode: "EUR",      // ★ 환율 API에 사용
    timezone: "UTC-4",
    tips: [
      "아드리콜 럼의 성지로 럼 증류소 투어 추천",
      "펠레 산 등반과 북부 열대우림 탐험 추천",
    ],
  },
  //아프리카
  AO: {
    name: "앙골라",
    capital: "루안다",
    language: "포루투갈어, 음분두어",
    currency: "앙골라 콴자",
    currencyCode: "AOA",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "치안이 불안정하므로 외교부의 최신 여행경보 확인 필수",
      "루안다는 물가가 비싼 도시에 속함",
      "카사마 국립공원 전문 투어 서비스 신청 추천",
    ],
  },
  BJ: {
    name: "베냉",
    capital: "포르토노보",
    language: "프랑스어",
    currency: "서아프리카 CFA 프랑",
    currencyCode: "XOF",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "부두교 발상지로 사원 방문이나 의식 보게될 경우 현지인 안내에 따르기",
      "단토크파 시장에서 현금 흥정 필수",
      "젬미잔(오토바이 택시) 안전 사고 위험 대비 헬멧 착용 필수"
    ],
  },
  BW: {
    name: "보츠나와",
    capital: "가보로네",
    language: "영어, 세츠와나어",
    currency: "보츠와나 풀라",
    currencyCode: "BWP",      // ★ 환율 API에 사용
    timezone: "UTC+2",
    tips: [
      "오카방고 델타는 전통 카누인 모로코 타고 야생동물 볼 수 있는 사파리 체험",
      "자율 사파리 할 경우(오프로드+차량 정비 식수)",
    ],
  },
  BF: {
    name: "부르키나파소",
    capital: "와가두구",
    language: "프랑스어, 모레어, 디울라어",
    currency: "서아프리카 CFA 프랑",
    currencyCode: "XOF",      // ★ 환율 API에 사용
    timezone: "UTC+0",
    tips: [
      "2025년 8월 기준 여행 금지 국가",
      "가야할 경우 공인된 보안 인력 및 교통 수단만 이용",
    ],
  },
  BI: {
    name: "부룬디",
    capital: "기테가",
    language: "키룬디어, 프랑스어, 스와히릴어",
    currency: "부룬디 프랑",
    currencyCode: "BIF",      // ★ 환율 API에 사용
    timezone: "UTC+2",
    tips: [
      "2025년 8월 기준 여행 금지 국가",
    ],
  },
  CM: {
    name: "카메룬",
    capital: "야운데",
    language: "프랑스어, 영어",
    currency: "중아프리카 CFA 프랑",
    currencyCode: "XAF",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "일부 지역이 치안이 좋지 않음",
      "붓시 택시나 미니버스 보다 여행사 셔틀이나 자가용 렌트 추천",
      "마운트 카메룬은 트레킹 전문 가이드 동반 필수"
    ],
  },
  CV: {
    name: "카보베르데",
    capital: "프라이아",
    language: "포르투칼어, 카보베르데 크레올어",
    currency: "카보베르데 에스쿠도",
    currencyCode: "CVE",      // ★ 환율 API에 사용
    timezone: "UTC-1",
    tips: [
      "섬마다 다른 매력 느끼려면 아일랜드 호핑하는 것을 추천",
      "물 부족 국가로 물 절약은 필수",
    ],
  },
  CF: {
    name: "중아프리카 공화국",
    capital: "방기",
    language: "상고어, 프랑스어",
    currency: "중앙아프리카 CFA 프랑",
    currencyCode: "XAF",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "2025년 8월 기준 여행 금지 국가",
    ],
  },
  CIS: {
    name: "카나리아 제도",
    capital: "산타 크루스 데 테네리페",
    language: "스페인어, 영어",
    currency: "유로",
    currencyCode: "EUR",      // ★ 환율 API에 사용
    timezone: "UTC+0",
    tips: [
      "섬마다 미세 기후&테마가 달라 호핑 추천",
      "라 헤리아 와인 지역은 화산재로 덮인 독특한 포도밭을 볼 수 있음",
      "별 구경하기 좋은 장소로 천문대 투어나 해변, 산악으로 가서 별 구경하는 것 추천"
    ],
  },
  TD: {
    name: "차드",
    capital: "은자메나",
    language: "아랍어어, 프랑스어",
    currency: "중아프리카 CFA 프랑",
    currencyCode: "EUR",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "2025년 8월 기준 여행 금지 국가",
    ],
  },
  KM: {
    name: "코모로",
    capital: "모로니",
    language: "코모로어, 아랍어, 프랑스어",
    currency: "코모로 프랑",
    currencyCode: "KMF",      // ★ 환율 API에 사용
    timezone: "UTC+3",
    tips: [
      "세계 최대 활화산 카르탈라 산 등반 추천",
      "향신료와 향수의 원료 생산지로 유명. 일앙일랑이나 바닐라 농장 방문 추천",
      "미스터리 심해어 실러캔스와의 연결 고리 탐험 추천",
    ],
  },
  CD: {
    name: "콩고 민주 공화국",
    capital: "킨샤사",
    language: "프랑스어, 링갈라어, 콩고어, 스와힐리어, 루바어",
    currency: "콩고 프랑",
    currencyCode: "CDF",      // ★ 환율 API에 사용
    timezone: "서부 UTC+1, 동부 UTC+2",
    tips: [
      "2025년 8월 기준 여행 금지 국가",
    ],
  },
  CG: {
    name: "콩고 공화국",
    capital: "브라자빌",
    language: "프랑스어, 링갈라어, 키투바어",
    currency: "중앙아프리카 CFA 프랑",
    currencyCode: "XAF",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "일부 지역 치안 불안정",
      "저지대 고릴라 서식지 중 하나로 레시오 루나 고릴라 보호구역 방문 추천(전문 가이드와 동행 필수)",
    ],
  },
  CI: {
    name: "코트디부아르",
    capital: "야무수크로",
    language: "프랑스어, 아프리카 토착어",
    currency: "서아프리카 CFA 프랑",
    currencyCode: "XOF",      // ★ 환율 API에 사용
    timezone: "UTC+0",
    tips: [
      "일부 지역 치안 불안정",
      "야무스크로에 노트르담 대성당은 바티칸의 성 베드로 대성보다 큼. 방문 추천",
      "역사적 유산 그랑-바쌈에서는 프랑스 식민지 당시의 건물, 분위기 느낄 수 있음"
    ],
  },
  DJ: {
    name: "지부티",
    capital: "지부티시티",
    language: "아랍어, 프랑스어",
    currency: "지부티 프랑",
    currencyCode: "DJF",      // ★ 환율 API에 사용
    timezone: "UTC+3",
    tips: [
      "아프리카 최저점 아살 호수는 이색적인 모습을 볼수 있음",
      "아베 호수에서는 유황 증기 쁨어져 나오는 석회암 굴뚝 솟아있는 곳",
      "연중 내내 덥고 건조함. 모자, 선글라스, 선크림 필수"
    ],
  },
  EG: {
    name: "이집트",
    capital: "카이로",
    language: "아랍어, 영어",
    currency: "이집트 파운드",
    currencyCode: "EGP",      // ★ 환율 API에 사용
    timezone: "UTC+2",
    tips: [
      "호객꾼이 많음(단호하게 거절한 것이 필수!!)",
      "나일강 유람선 추천(검증된 여행사 상품 이용하는 것을 추천)",
      "길거리 음식인 코샤리, 풀 메다메스 추천",
      "도시 간 이동은 기차 또는 항공 추천"
    ],
  },
  GQ: {
    name: "적도 기니",
    capital: "말라보",
    language: "스페인어, 프랑스어, 포루투칼어",
    currency: "중앙아프리카 CFA 프랑",
    currencyCode: "XAF",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "입국 절차가 까다롭고, 치안이 불안정한 나라(신뢰할 수 있는 현지 기업이나 기관 초청장 있는 것이 제일 좋음)",
      "신용카드 사용이 어려움. 현금 넉넉하게 챙겨가는 것 추천",
      "말라보 시장에서 '서아프리카+스페인'퓨전 문화 경험 추천"
    ],
  },
  ER: {
    name: "에르트레아",
    capital: "아스마라",
    language: "티그리냐어, 아랍어, 디그레어, 영어",
    currency: "에리트레아 나크파",
    currencyCode: "ERN",      // ★ 환율 API에 사용
    timezone: "UTC+3",
    tips: [
      "입국 및 이동이 매우 엄격히 통제되는 국가",
      "다른 지역으로 이동하기 위해서는 별도의 이동 허가서가 필요함",
      "신용카드나 ATM 사용 거의 어려움. 환전은 공항/공식 은행에서 하는 것을 추천(현지 화폐를 해외 유출입하는 것이 금지)",
      "환전 시에는 영수증 반드시 보관 후, 남은 나크파는 출국 시 다시 환전",
    ],
  },
  ET: {
    name: "에티오피아",
    capital: "아디스아바바",
    language: "암하라어, 오로모어, 영어",
    currency: "에티오피아 비르",
    currencyCode: "ETB",      // ★ 환율 API에 사용
    timezone: "UTC+3",
    tips: [
      "일부 지역 치안 불안정",
      "리프트 밸리는 독특한 자연 풍경 볼 수 있음",
      "고대 기독교 유적 방문 추천"
    ],
  },
  GA: {
    name: "가봉",
    capital: "리브르빌",
    language: "프랑스어, 토착 부족어",
    currency: "중앙아프리카 CFA 프랑",
    currencyCode: "XAF",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "일부 지역 치안 불안정",
      "에콩 국립공원에서 해변 고릴라, 코끼리 만날 수 있음.",
      "로포 국립공원에서 고릴라 보호구역 방문 추천"
    ],
  },
  GM: {
    name: "감비아",
    capital: "반줄",
    language: "영어 만딩카어, 울프로어",
    currency: "감비아 달라시",
    currencyCode: "GMD",      // ★ 환율 API에 사용
    timezone: "UTC+0",
    tips: [
      "일부 지역 치안 불안정",
      "감비아 강 보트 투어로 악어, 하마 등 다양한 희귀 조류 등 가까이서 볼 수 있음.",
      "쿠준에서 악어 구경"
    ],
  },
  GH: {
    name: "가나",
    capital: "아크라",
    language: "영어, 트위어, 아칸어",
    currency: "가나 세디",
    currencyCode: "GHS",      // ★ 환율 API에 사용
    timezone: "UTC+0",
    tips: [
      "일부 지역 치안 불안정",
      "카카오 투어 필수",
      "가나 해변의 관 문화(여러 종류의 다양한 모양의 관을 파는 상점들이 있음)",
    ],
  },
  GN: {
    name: "기니",
    capital: "코나크리",
    language: "프랑스어, 풀라어, 수수어",
    currency: "기니 프랑",
    currencyCode: "GNF",      // ★ 환율 API에 사용
    timezone: "UTC+0",
    tips: [
      "일부 지역 치안 불안정",
      "전력, 통신, 도로 인프라 열악한 것을 미리 대비",
      "푸타 잘론 고원에서 아름다운 폭포와 협곡, 트레킹 코스 체험 추천(현지 가이드 동반 필수)"
    ],
  },
  GW: {
    name: "기니비사우",
    capital: "비사우",
    language: "포루투칼어, 기니비사우 크레올어",
    currency: "서아프리카 CFA 프랑",
    currencyCode: "XOF",      // ★ 환율 API에 사용
    timezone: "UTC+0",
    tips: [
      "일부 지역 치안 불안정",
      "비자 발급은 공항에서 도착 비자 받는 것이 일반적(입국 전에 필요한 서류, 절차 확인 필수)",
      "현지 요리 체베스와 카페 토스터 필수"
    ],
  },
  KE: {
    name: "케냐",
    capital: "나이로비",
    language: "스와힐리어, 영어",
    currency: "케냐 실링",
    currencyCode: "KES",      // ★ 환율 API에 사용
    timezone: "UTC+3",
    tips: [
      "일부 지역 치안 불안정",
      "케냐 사파리 방문 필수, 마사이 마라는 가격대 천차만별이기 때문에 어떤 로지(캠프/숙소) 선택하느냐에 따라 동물 관찰 편의성, 사파리 경험 달라짐",
      "우버/볼트 앱 택시가 안전",
      "기린 센터, 코끼리 고아원 방문 추천"
    ],
  },
  LS: {
    name: "레소토",
    capital: "마세루",
    language: "세소토어, 영어",
    currency: "레소토 로티",
    currencyCode: "LSL",      // ★ 환율 API에 사용
    timezone: "UTC+2",
    tips: [
      "남아프리카 랜드도 1:1 통용",
      "조랑말 트레킹 체험 추천",
      "바소토 블랭킷(독특한 문야의 두꺼운 울 담요) 구매 추천"
    ],
  },
  LR: {
    name: "라이베리아",
    capital: "몬로비아",
    language: "영어, 토착 부속어",
    currency: "라이베리아 달러",
    currencyCode: "LRD",      // ★ 환율 API에 사용
    timezone: "UTC+0",
    tips: [
      "치안이 많이 불안정한 국가",
      "미국 달러도 널리 통용됨",
      "호텔 셔틀이나 현지인 동반 등 신뢰할 수 있는 차량 통해서만 이동",
    ],
  },
  LY: {
  name: "리비아",
  capital: "트리폴리",
  language: "아랍어",
  currency: "리비아 디나르",
  currencyCode: "LYD",      // ★ 환율 API에 사용
  timezone: "UTC+2",
  tips: [
    "2025년 8월 기준 여행 금지 국가",
    ],
  },
  MG: {
    name: "마다가스카르",
    capital: "안타나나리보",
    language: "말라가시어, 프랑스어",
    currency: "마다가스카르 아리아리",
    currencyCode: "MGA",      // ★ 환율 API에 사용
    timezone: "UTC+3",
    tips: [
      "치안이 많이 불안정한 국가",
      "바오밥 나무 거리 방문을 하고싶다면 모론다바에 숙소를 잡는 것 추천.",
      "여우원숭이 만나기 위해서는 국립공원 가이드와 동반 필수",
      "비포장 도로가 많기 때문에 주요 도시 간 이동을 하려면 국내선 항공 또는 4륜 구동 렌터카에 기사를 고용하는 것을 추천"
    ],
  },
    MW: {
    name: "말라위",
    capital: "릴롱궤",
    language: "치체와어, 영어",
    currency: "말라위 콰차",
    currencyCode: "MWK",      // ★ 환율 API에 사용
    timezone: "UTC+2",
    tips: [
      "말라위 호수에는 시클리드라는 민물고기 서식 중. 스노쿨링이나 스쿠버 다이빙 체험 추천",
    ],
  },
    ML: {
    name: "말리",
    capital: "바마코",
    language: "프랑스어어, 밤바라어 등 토착어",
    currency: "서아프리카 CFA 프랑",
    currencyCode: "XOF",      // ★ 환율 API에 사용
    timezone: "UTC+0",
    tips: [
      "2025년 8월 기준 여행 금지 국가",
    ],
  },
    MR: {
    name: "모리타니",
    capital: "누악쇼트",
    language: "아랍어, 프랑스어, 하사니아 아랍어 등",
    currency: "모리타니 우기야",
    currencyCode: "LRD",      // ★ 환율 API에 사용
    timezone: "UTC+0",
    tips: [
      "2025년 8월 기준 여행 금지 국가",
    ],
  },
    MU: {
    name: "모리셔스",
    capital: "포트루이스",
    language: "영어, 모리셔스, 크레올어, 프랑스어",
    currency: "모리셔스 루피",
    currencyCode: "MUR",      // ★ 환율 API에 사용
    timezone: "UTC+4",
    tips: [
      "수중 워킹 & 해양 스포츠  체험 추천",
      "세븐 컬러드 어스에 일출이나 일몰 시간에 맞춰 방문하는 것 추천",
    ],
  },
    MYT: {
    name: "마요트",
    capital: "마무주",
    language: "프랑스어, 스마오레어, 키부시어",
    currency: "유로",
    currencyCode: "EUR",      // ★ 환율 API에 사용
    timezone: "UTC+3",
    tips: [
      "세계 최대 라군에서 스노클링/다이빙",
      "콤바니 활화산 하이킹&분화구 탐험",
    ],
  },
    MA: {
    name: "모로코",
    capital: "라바트",
    language: "아랍어, 베르베르어, 프랑스어",
    currency: "모로코 디르함",
    currencyCode: "MAD",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "메디나에서 접근하는 가이드나 호객꾼 주의",
      "사하라 사막 방문 추천(추운 밤을 대비하여 따뜻한 옷 준비 필수)",
    ],
  },
    MZ: {
    name: "모잠비크",
    capital: "마푸토",
    language: "포루투칼어, 상가어, 은자냐어",
    currency: "모잠비크 메티칼",
    currencyCode: "MZN",      // ★ 환율 API에 사용
    timezone: "UTC+2",
    tips: [
      "치안이 많이 불안정한 국가",
      "바자루토 군도 국립공원에서 돌고래/고래상어 볼 수 있음",
      "서핑 좋아하는 사람이라면 토포 방문 추천",
    ],
  },
    NA: {
    name: "나미비아",
    capital: "빈트후크",
    language: "영어, 아프리칸스어, 독일어",
    currency: "나미비아 달러",
    currencyCode: "NAD",      // ★ 환율 API에 사용
    timezone: "UTC+2",
    tips: [
      "남아프리카 랜드와 1:1 통용",
      "야간 도시 이동이나 외딴 지역 방문 시 주의",
      "소수스블레이&데드블레이 일출 시간에 방문 추천",
      "에토샤 국립공원 방문 추천(자가 운전 사파리)"
    ],
  },
    LR: {
    name: "라이베리아",
    capital: "몬로비아",
    language: "영어, 토착 부속어",
    currency: "라이베리아 달러",
    currencyCode: "LRD",      // ★ 환율 API에 사용
    timezone: "UTC+0",
    tips: [
      "치안이 많이 불안정한 국가",
      "미국 달러도 널리 통용됨",
      "호텔 셔틀이나 현지인 동반 등 신뢰할 수 있는 차량 통해서만 이동",
    ],
  },
    NE: {
    name: "니제르",
    capital: "니아메",
    language: "프랑스어, 하우사어, 제르마어",
    currency: "서아프리카 CFA 프랑",
    currencyCode: "XOF",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "2025년 8월 기준 여행 금지 국가",
    ],
  },
    NG: {
    name: "나이지리아",
    capital: "아부자",
    language: "영어, 하우사어, 이보어, 요루바어",
    currency: "나이지리아 나이라",
    currencyCode: "NGN",      // ★ 환율 API에 사용
    timezone: "UTC+1",
    tips: [
      "2025년 8월 기준 여행 금지 국가",
    ],
  },
  RNN: {
    name: "레위니옹",
    capital: "생드니",
    language: "프랑스어, 레위니옹 크레올어",
    currency: "유로",
    currencyCode: "EUR",      // ★ 환율 API에 사용
    timezone: "UTC+4",
    tips: [
      "쓰리 서커스 하이킹 추천, 체력, 시간 안된다면 경비행기 투어도 추천",
      "푸르네즈 화산은 운이 좋으면 분출 용암 볼 수 있음. 용암 턴ㄹ 투어 추천(안전 수칙 준수)",
      "자전거 좋아하는 사람이라면 다운힐 코스 방문 추천",
    ],
  },
    RW: {
    name: "르완다",
    capital: "키갈리",
    language: "르완다어, 영어, 프랑스어, 스와힐리어",
    currency: "르완다 프랑",
    currencyCode: "RWF",      // ★ 환율 API에 사용
    timezone: "UTC+2",
    tips: [
      "콩고민주공화국 및 부룬디 접경 지역은 테러 및 무장세력 활동 위험 있음 방문 자제",
      "마운틴 고릴라 트래킹 체험 추천",
      "키갈리 제노사이드 기념관 방문 추천(르완다 역사 박물관)",
    ],
  },
    ST: {
    name: "상투메 프린시페",
    capital: "상투메",
    language: "포루투갈어, 상투메 크레올어",
    currency: "상투메 프린시페 도브라",
    currencyCode: "STN",      // ★ 환율 API에 사용
    timezone: "UTC+0",
    tips: [
      "상투메 프린시페는 한때 세계 최대 코코아 생산국이 였음. 신선한 초콜릿 맛볼 수 있는 투어 추천",
      "상투메 섬 남부는 적도가 지나가는 곳. 적도비가 세워져 있음 방문 추천",
      "상투메 프린시페의 상징 피코 카페 방문 추천(등반은 매우 위험. 드라이브나 트래킹 추천)",
    ],
  },
    SN: {
    name: "세네갈",
    capital: "다카르",
    language: "프랑스어, 월로프어 등 토착어",
    currency: "서아프리카 CFA 프랑",
    currencyCode: "XOF",      // ★ 환율 API에 사용
    timezone: "UTC+0",
    tips: [
      "일부 지역 치안이 많이 불안정한 국가",
      "르네상스 기념비 방문 추천",
      "핑크빛 호수 레트바 방문 추천(사해처럼 몸 띄울 수 있음)",
      "고레에는 미주 대륙으로 노예들이 팔려갔던 슬픈 역사가 있는 곳임. 노예의 집 방문 추천"
    ],
  },
    SC: {
    name: "세이셀",
    capital: "빅토리아",
    language: "크레올어, 영어, 프랑스어",
    currency: "세이셸 루피",
    currencyCode: "SCR",      // ★ 환율 API에 사용
    timezone: "UTC+4",
    tips: [
      "프라스린 섬의 발레 드 메이 방문 추천(유네스코 세계유산)",
      "세계 3대 해면 라 디그 섬의 앙세 수스 다정에서 인생샷 찍기",
      "수도 빅토리아는 세계에서 가장 작은 수도",
      "세이셸에는 육상에서 가장 큰 거북이 중 하나인 육상 거북이 서식하는 곳. 먹이주는 체험 추천",
    ],
  },
    SL: {
    name: "시에라리온",
    capital: "프리타운",
    language: "영어, 크리오어",
    currency: "시에라리온 리오네",
    currencyCode: "SLL",      // ★ 환율 API에 사용
    timezone: "UTC+0",
    tips: [
      "일부 지역 치안이 많이 불안정한 국가",
      "영화 블러드 다이아몬드 배경이 된 섬 푸티 섬 방문 추천. 대서양 노예 무역 역사가 남아있는 곳",
      "타쿠가마 침팬지 보호 구역 방문 추천",
      "프리타ㅇㄴ 근러 룸리, 리버 넘버2 등 아름다운 해변이 많음. 해가 진 후에는 치안 주의"
    ],
  },
    SO: {
    name: "소말리아",
    capital: "모가디슈",
    language: "소말리어, 아랍어",
    currency: "소말리아 실링",
    currencyCode: "SOS",      // ★ 환율 API에 사용
    timezone: "UTC+3",
    tips: [
      "2025년 8월 기준 여행 금지 국가",
    ],
  },
    ZA: {
    name: "남아프리카 공화국",
    capital: "프리토리아",
    language: "영어, 아프리칸스어, 줄루어 등 11개 공용어",
    currency: "남아프리카 랜드",
    currencyCode: "ZAR",      // ★ 환율 API에 사용
    timezone: "UTC+2",
    tips: [
      "일부 지역 치안이 많이 불안정한 국가",
      "프리토리아(행정), 케이프타운(입법), 블룸폰테인(사법)",
      "크루거 국립공원은 Big5 동물 만난ㄹ 수 있는 곳. 자가 운전 사파리도 가능하지만 안전을 위해서 전문가이드 차량 투어 추천",
      "안전을 위해서 우버/볼트 앱 택시 활용, 번화가나 관광객 많은 지역으로 여행"
    ],
  },
    SS: {
    name: "남수단",
    capital: "주바",
    language: "영어, 주바 알어, 다양한 토착어",
    currency: "남수단 파운드",
    currencyCode: "SSP",      // ★ 환율 API에 사용
    timezone: "UTC+2",
    tips: [
      "2025년 8월 기준 여행 금지 국가",
    ],
  },
    SD: {
    name: "수단",
    capital: "하르툼",
    language: "아랍어, 영어",
    currency: "수단 파운드",
    currencyCode: "SDG",      // ★ 환율 API에 사용
    timezone: "UTC+2",
    tips: [
      "2025년 8월 기준 여행 금지 국가",
    ],
  },

  // 남미
  AR: {
    name: "아르헨티나",
    capital: "부에노스아이레스",
    language: "스페인어",
    currency: "아르헨티나 페소",
    currencyCode: "ARS",      // ★ 환율 API에 사용
    timezone: "UTC-3",
    tips: [
      "한국에서 미국 달러 현금 가져가서 현지에서 환전하는 것 추천",
      "'아사도'라 불리는 아르헨티나식 바비큐 코스 추천",
      "탱고를 현지인처럼 즐기고 싶다면 미롱가 방문 추천"
    ],
  },
   BO: {
    name: "볼리비아",
    capital: "라파스, 수크레",
    language: "스페인어",
    currency: "볼리비아노",
    currencyCode: "BOB",      // ★ 환율 API에 사용
    timezone: "UTC-4",
    tips: [
      "라파스는 행정수도, 수크레는 헌법수도",
      "고지 적응 기간 가지는 것 추천",
      "우유니 소금 사막 건기에는 육각형 소금밭, 우기는 얇은 물이 고여 거울처럼 보임",
    ],
  },
   BR: {
    name: "브라질",
    capital: "브라질리아",
    language: "포르투갈어",
    currency: "브라질 헤알",
    currencyCode: "BRL",      // ★ 환율 API에 사용
    timezone: "UTC-2",
    tips: [
      "대도시에서도 소매치기, 강도 등 강력 범죄가 빈번 주의",
      "여행 전 황열병 예방 접종",
      "이과수 폭포는 아르헨티나, 브리질 쪽 모두 감상 가능하니 추천"
    ],
  },
   CL: {
    name: "칠레",
    capital: "산티아고",
    language: "스페인어",
    currency: "칠레 페소",
    currencyCode: "CLP",      // ★ 환율 API에 사용
    timezone: "UTC-3",
    tips: [
      "여행 동선에 따라 기후가 크게 변하기 때문에 동선에 맞춰 옷 준비",
      "와이너리 투어 추천",
      "모아이 석상 투어 추천"
    ],
  },
   CO: {
    name: "콜롬비아",
    capital: "보고타",
    language: "스페인어",
    currency: "콜롬비아 페소",
    currencyCode: "COP",      // ★ 환율 API에 사용
    timezone: "UTC-5",
    tips: [
      "커피 투어 추천",
      "해변 도시 카르타헤나 방문 추천",
      "치안 주의(소지품, 야간 이동 주의)"
    ],
  },
   EC: {
    name: "에콰도르",
    capital: "키토",
    language: "스페인어",
    currency: "미국 달러",
    currencyCode: "USD",      // ★ 환율 API에 사용
    timezone: "UTC-5",
    tips: [
      "갈라파고스 방문 추천(크루즈 여행 시 몇 달 전 미리 예약 필수!!)",
      "키토 구시가지 유네스코 세계유산 등재되어 있음 방문 추천(고산병 주의)",
    ],
  },
   GY: {
    name: "가이아나",
    capital: "조지타운",
    language: "영어, 가이아나 크레올어",
    currency: "가이아나 달러",
    currencyCode: "*",      // ★ 환율 API에 사용
    timezone: "UTC-4",
    tips: [
      "남미에서 유일하게 영어를 공용어로 쓰는 나라",
      "인도계, 흑인, 인디오 등으로 이루어져 있어 음식이나 문화도 다양함",
      "카이에투어 폭포 방문 추천",
    ],
  },
   PY: {
    name: "파라과이",
    capital: "아순시온",
    language: "스페인어, 과라니어",
    currency: "과라니",
    currencyCode: "GS",      // ★ 환율 API에 사용
    timezone: "UTC-3",
    tips: [
      "여러 남미 국가와의 교류로 다양한 분위기 느낄 수 있음",
      "물가가 저렴",
      "현지 식당가면 미니오카(우리나라에서 감자튀김같은 존재) 필수",
    ],
  },
   PE: {
    name: "페루",
    capital: "리마",
    language: "스페인어",
    currency: "누에보 솔",
    currencyCode: "Nuevo Sol",      // ★ 환율 API에 사용
    timezone: "UTC-5",
    tips: [
      "마추픽추 방문 추천(입장권/기차표 미리 예약 필수!!)",
      "쿠스코에서 고산병 주의 미리 대비"
    ],
  },
   SR: {
    name: "수리남",
    capital: "파라마리보",
    language: "네덜란드어, 스라난통고어",
    currency: "수리남 달러",
    currencyCode: "SRD",      // ★ 환율 API에 사용
    timezone: "UTC-3",
    tips: [
      "파라마리보 역사 지구는 유네스코 세계유산 등재되어 있음",
      "수리남은 다양한 문화권 사람들이 어우러져 음식도 다양",
      "아마존 체험 추천",
    ],
  },
   UY: {
    name: "우루과이",
    capital: "몬테비데오",
    language: "스페인어",
    currency: "우르과이 페소",
    currencyCode: "UYU",      // ★ 환율 API에 사용
    timezone: "UTC-3",
    tips: [
      "우루과이 남동부에 위치한 푼타 델 에스테 방문 추천",
      "와이너리 투어 추천"
    ],
  },
   VE: {
    name: "베네수엘라",
    capital: "카라카스",
    language: "스페인어",
    currency: "볼리바르",
    currencyCode: "VES",      // ★ 환율 API에 사용
    timezone: "UTC-4",
    tips: [
      "!!치안 주의!!",
    ],
  },
   GF: {
    name: "기아나(프랑스령)",
    capital: "카옌",
    language: "프랑스어",
    currency: "유로",
    currencyCode: "EUR",      // ★ 환율 API에 사용
    timezone: "UTC-3",
    tips: [
      "기아나 우주 센터 투어 추천",
      "카옌 근처 살루 제도 방문 추천",
      "프랑스+크레올 퓨전 요리 먹어보는 것 추천"
    ],
  },
   FKI: {
    name: "포클랜드 제도",
    capital: "스탠리",
    language: "영어",
    currency: "포클랜드 파운드",
    currencyCode: "FKP",      // ★ 환율 API에 사용
    timezone: "UTC-3",
    tips: [
      "영국 파운드도 통용됨",
      "다양한 종류의 펭귄이 살고 있음",
      "고래 관찰로 유명",
      "아르헨티나와 영토 분쟁 역사 돌아보는 것 추천",
    ],
  },
  
  //오세아니아
   AU: {
    name: "호주",
    capital: "캔버라",
    language: "영어",
    currency: "호주 달러",
    currencyCode: "AUD",      // ★ 환율 API에 사용
    timezone: "UTC+8",
    tips: [
      "자외선이 강하기 때문에 선크림, 모자, 선글라스 필수",
      "도시 간 이동은 비행기 추천",
      "시드니에서 대중교통 이동할 때 오팔 카드 발급 추천",
    ],
  },
   NZ: {
    name: "뉴질랜드",
    capital: "웰링턴",
    language: "영어, 마오리어",
    currency: "뉴질랜드 달러",
    currencyCode: "NZD",      // ★ 환율 API에 사용
    timezone: "UTC+12",
    tips: [
      "반지의 제왕 호비튼 마을 방문 추천",
      "아이토모 반딧불 동굴 방문 추천",
      "도시 간 이동은 렌터카 추천",
    ],
  },
   PG: {
    name: "파푸아뉴기니",
    capital: "포트 모르즈비",
    language: "토크 피신, 히리 모투, 영어",
    currency: "파푸아뉴기니 키나",
    currencyCode: "PGK",      // ★ 환율 API에 사용
    timezone: "UTC+10",
    tips: [
      "!!치안 주의!!",
    ],
  },
   SB: {
    name: "솔로몬 제도",
    capital: "호니아라",
    language: "영어, 피진 영어, 다양한 토착어",
    currency: "솔로몬 달러",
    currencyCode: "SBD",      // ★ 환율 API에 사용
    timezone: "UTC+11",
    tips: [
      "말라리아, 결핵 주의",
      "리브어보드 요트로 섬 투어 추천",
      "쿼주리바 섬과 기쉬마 섬 방문 추천",
    ],
  },
   VU: {
    name: "바누아투",
    capital: "포트 빌라",
    language: "비슬라마어, 영어, 프랑스",
    currency: "바누아투 바투",
    currencyCode: "VUV",      // ★ 환율 API에 사용
    timezone: "UTC+11",
    tips: [
      "여행경비를 아끼고 싶다면 로컬 버스 추천",
      "바누아투 국립공원&피헬리움 화산 방문 추천",
    ],
  },
   WS: {
    name: "사모아",
    capital: "아피아",
    language: "사모아어, 영어",
    currency: "사모아 탈라",
    currencyCode: "WST",      // ★ 환율 API에 사용
    timezone: "UTC+13",
    tips: [
      "사모아 바닷속은 바위가 많기 때문에 신발 필수",
      "국제 운전 면허증 필수"
    ],
  },
   TO: {
    name: "통가",
    capital: "누쿠알로파",
    language: "통가어, 영어",
    currency: "파앙가",
    currencyCode: "TOP",      // ★ 환율 API에 사용
    timezone: "UTC+13",
    tips: [
      "혹등고래 7-10월",
      "블로우홀 방문 추천(타이밍 잘 맞춰 가야함)",
      "일요일은 거의 모든 상점, 식당, 카페 문을 닫음",
    ],
  },
   TV: {
    name: "투발루",
    capital: "푸나푸티",
    language: "투발루어, 영어",
    currency: "투발루 달러",
    currencyCode: "*",      // ★ 환율 API에 사용
    timezone: "UTC+12",
    tips: [
      "푸나푸티 보호구역 방문 추천",
      "카누 타고 라군 탐험 추천",
    ],
  },
   KI: {
    name: "키리바시",
    capital: "타라와",
    language: "길버트어, 영어",
    currency: "키리바시 달러",
    currencyCode: "*",      // ★ 환율 API에 사용
    timezone: "UTC+12",
    tips: [
      "비행기 편도 적고 관광 인프라 부족",
      "타라와 섬 '제2차 세계대전 격전지' 방문 추천",
    ],
  },
   FM: {
    name: "미크로네시아 연방",
    capital: "팔리키르",
    language: "영어",
    currency: "미국 달러",
    currencyCode: "USD",      // ★ 환율 API에 사용
    timezone: "UTC+10~11",
    tips: [
      "세계적인 다이빙 명소",
      "4개의 큰 섬으로 이루어져 있음 각 섬마다 메력이 다름 취향에 따라 선택",
      "가벼운 옷차림&햇볕 차단템 필수"
    ],
  },
   MH: {
    name: "마셜 제도",
    capital: "마주로",
    language: "마셜어, 영어",
    currency: "미국 달러",
    currencyCode: "USD",      // ★ 환율 API에 사용
    timezone: "UTC+12",
    tips: [
      "방문객이 적은 나라로 자연 그대로의 모습 가지고 있음",
      "아레레 박물관 방문 추천",
      "렌터카로 섬을 둘러보는 것 추천",
    ],
  },
   PW: {
    name: "팔라우",
    capital: "응게룰무드",
    language: "팔라우어, 영어",
    currency: "미국 달러",
    currencyCode: "USD",      // ★ 환율 API에 사용
    timezone: "UTC+9",
    tips: [
      "환전은 여행 전 미리해서 가는 것 추천",
      "따뜻하고 습한 날씨&스콜 대비한 옷차림 필수",
    ],
  },
   NR: {
    name: "나우루",
    capital: "공식적으로 없음",
    language: "나우루어, 영어",
    currency: "호주 달러",
    currencyCode: "AUD",      // ★ 환율 API에 사용
    timezone: "UTC+12",
    tips: [
      "실질적 행정 중심지는 야렌",
      "관광 보다는 오지 체험 느낌",
      "다양한 문화 섞여있어 현지 음식도 다채로움",
      "열대 질병 주의"
    ],
  },
   NC: {
    name: "뉴칼레도니아(프랑스령)",
    capital: "누메아",
    language: "프랑스어, 카나크어",
    currency: "CFP 프랑",
    currencyCode: "XPF",      // ★ 환율 API에 사용
    timezone: "UTC+11",
    tips: [
      "연평균 27도의 온화한 날씨&자외선 대비 필수",
      "백사장부터 붉은 사막, 열대 우림까지 다양한 지형이 있음",
    ],
  },
   PF: {
    name: "폴리네시아(프랑스령)",
    capital: "파페테",
    language: "프랑스어, 타히티어",
    currency: "CPF 프랑",
    currencyCode: "XPF",      // ★ 환율 API에 사용
    timezone: "UTC-10",
    tips: [
      "5-10월 건기 이때 방문 추천",
      "7월 헤이바 축제 기간",
    ],
  },
   AS: {
    name: "사모아(미국령)",
    capital: "팡고 팡고",
    language: "사모아어, 영어",
    currency: "미국 달러",
    currencyCode: "USD",      // ★ 환율 API에 사용
    timezone: "UTC-11",
    tips: [
      "사모아 국립공원 방문 추천",
      "코코넛 밀크 요리 먹어보는 것 추천",
    ],
  },
   GU: {
    name: "괌",
    capital: "하갓냐",
    language: "영어, 차모로어",
    currency: "미국 달러",
    currencyCode: "USD",      // ★ 환율 API에 사용
    timezone: "UTC+10",
    tips: [
      "대중교통 거의 없어 렌터카 필수",
      "타미 및 마이크로네시아 몰 쿠폰 챙겨가기",
    ],
  },
};

