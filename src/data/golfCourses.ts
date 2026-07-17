export interface GolfCourse {
  no: number;
  name: string;
  phone: string;
  wa: string;
  weekday: number;
  holiday: number | null;
  note?: string;
}

// 사용자가 직접 확인/보정한 골프장 별 그린피 목록 (평일 / 주말·공휴일 오전 요금 기준)
export const golfCourses: GolfCourse[] = [
  { no: 1, name: "The Manor Golf & Estate", phone: "021-559-11111", wa: "0815-5911-111", weekday: 638000, holiday: 1990000 },
  { no: 2, name: "Damai Indah Golf - PIK", phone: "021-588-2388", wa: "0811-1994-908", weekday: 1568000, holiday: 3895000, note: "요금 재확인 필요 - gogolf.co.id 리뷰 기준 평일 815k~914k, 토 2,203k~2,494k, 일 1,895k~2,379k로 기재값보다 낮게 확인됨" },
  { no: 3, name: "Golf Bandar Kemayoran", phone: "021-654-155/55", wa: "0887-0570-3184", weekday: 506000, holiday: 1320000 },
  { no: 4, name: "Jakarta Golf Club", phone: "021-475-4732", wa: "0811-1313-501", weekday: 650000, holiday: 1400000 },
  { no: 5, name: "Senayan National Golf Club", phone: "021-571-0181", wa: "0811-1638-511", weekday: 1215000, holiday: 2475000, note: "요금 재확인 필요 - gogolf.co.id 기준 월 400k~600k, 화~목 500k~700k, 금 750k~950k, 주말/공휴일 약 2,250k(일 2,100k)로 평일 기재값보다 낮게 확인됨" },
  { no: 6, name: "Pondok Indah Golf Course", phone: "021-769-4906", wa: "0811-1000-650", weekday: 1928000, holiday: 3968000 },
  { no: 7, name: "Padang Golf Pangkalan Jati", phone: "021-7581-6223", wa: "0811-1979-379", weekday: 670000, holiday: 1415000, note: "재확인 필요 - 공식 사이트(golfpangkalanjati.com)가 현재 빈 서버 상태로 접속 불가, 검색 캐시 기준 전화 021-751-3326·요금 평일 230k~290k/주말 490k로 상이함(기재값은 캐디·카트 포함가일 가능성). 전화로 직접 재확인 권장" },
  { no: 8, name: "Padang Golf Halim", phone: "021-800-5762", wa: "0821-2382-1507", weekday: 488523, holiday: 845914 },
  { no: 9, name: "Tigaraksa Golf Residens", phone: "021-599-6371", wa: "0822-2080-2330", weekday: 455000, holiday: 970000 },
  { no: 10, name: "Kedaton Golf & Country Club", phone: "021-5930-0000", wa: "0813-1512-6171", weekday: 510000, holiday: 1450000 },
  { no: 11, name: "Modern Golf & Country Club", phone: "021-552-9228", wa: "0811-9252-277", weekday: 895000, holiday: 2860000 },
  { no: 12, name: "Imperial Klub Golf", phone: "021-5460-120", wa: "0811-9880-697", weekday: 1048000, holiday: 2358000, note: "공식 사이트(aryaduta.com) 확인 - Guest 요금 월 748k/화~목 988k/금 1,048k, 토AM 2,448k·PM 2,048k, 일·공휴일AM 2,248k·PM 1,748k (그린피·카트·세금 포함). 기재값은 금요일/주말 평균과 대체로 근접" },
  { no: 13, name: "Gading Raya Golf Club", phone: "021-546-7668", wa: "0821-2201-3232", weekday: 850000, holiday: 2200000 },
  { no: 14, name: "Damai Indah Golf - BSD", phone: "021-537-0290", wa: "0811-1994-908", weekday: 1408000, holiday: 3545000, note: "요금 재확인 필요 - gogolf.co.id 리뷰 기준 평일 650k~760k, 토 1,944k~2,131k, 일 1,383k~1,983k로 기재값보다 낮게 확인됨" },
  { no: 15, name: "Pondok Cabe Golf Club", phone: "021-740-5387", wa: "0878-2437-7211", weekday: 695000, holiday: 1295000 },
  { no: 16, name: "Emeralda Golf Club", phone: "021-875-9019", wa: "0811-129-941", weekday: 1488000, holiday: 3788000 },
  { no: 17, name: "Riverside Golf Club", phone: "021-867-1528", wa: "0812-9424-9784", weekday: 1200000, holiday: 3300000 },
  { no: 18, name: "Jagorawi Golf & Country Club", phone: "021-875-3810", wa: "0812-9066-2904", weekday: 695000, holiday: 2395000, note: "요금 재확인 필요 - 공식 사이트(jagorawi.com/green-fees) 기준 그린피만 평일 405,000/주말 810,000, 캐디·카트 별도(카트 160k~250k). 기재값은 올인클루시브 추정치일 가능성" },
  { no: 19, name: "Palm Hill Golf Club", phone: "021-8795-4307", wa: "0811-8003-001", weekday: 580000, holiday: 2205000 },
  { no: 20, name: "Permata Sentul Golf Club", phone: "021-8795-1788", wa: "0812-1252-555", weekday: 1070000, holiday: 2820000 },
  { no: 21, name: "Sentul Highlands Golf Club", phone: "021-8796-0266", wa: "0811-1157-888", weekday: 1258000, holiday: 3188000, note: "공식 사이트(sentulhighlands.com)에서 전화·왓츠앱 번호 일치 확인. 요금은 공식 사이트에 미게시, 2025년 검색 기준 평일(월) 약 799,000/토 약 3,099,000/일 오후 약 1,599,000으로 재확인 필요. 공식 사이트에 예약 사기 주의 공지 있음 - 왓츠앱 등 비공식 채널 예약 시 유의" },
  { no: 22, name: "Gunung Geulis Country Club", phone: "0251-8257-500", wa: "0811-1047-500", weekday: 1300000, holiday: 3100000 },
  { no: 23, name: "Rainbow Hills Golf Club", phone: "0251-827-2111", wa: "0811-1100-199", weekday: 995000, holiday: 2445000 },
  { no: 24, name: "Klub Golf Bogor Raya", phone: "0251-8271-888", wa: "0811-9718-844", weekday: 1386000, holiday: 3546000, note: "요금 재확인 필요 - 공식 사이트(klubgolfbogorraya.com)가 파일 다운로드로만 응답해 브라우저 확인 불가, 검색 캐시 기준 그린피 약 672,000으로 낮게 나옴(캐디·카트 별도 가능성). 전화로 직접 재확인 권장" },
  { no: 25, name: "Rancamaya Golf & Country Club", phone: "0251-824-2282", wa: "0817-1710-0009", weekday: 1150000, holiday: 3030000 },
  { no: 26, name: "Royale Jakarta Golf Club", phone: "021-8088-8999", wa: "0813-1532-5188", weekday: 1650000, holiday: 3350000, note: "공식 2026 요금표(royalejakarta.com/golf-rate-2026) 평일 약 975,000~, 주말/피크 3,000,000 이상 확인. gogolf.co.id도 평일 1,150k~1,530k/주말 2,440k~3,250k로 유사한 범위 제시 - 기재값은 대체로 합리적 범위이나 요일별 세분화는 필요" },
  { no: 27, name: "Suvarna Jakarta Golf Club", phone: "021-527-9103", wa: "0811-1049-993", weekday: 1720000, holiday: 3580000 },
  { no: 28, name: "Padang Golf Cilangkap", phone: "021-3885-3066", wa: "0821-9090-2148", weekday: 310000, holiday: 535000 },
  { no: 29, name: "Jababeka Golf & Country Club", phone: "021-893-6148", wa: "0811-1889-3306", weekday: 1049000, holiday: 2599000, note: "왓츠앱 0811-1889-3306 공식 사이트(jababekagolf.co.id)에서 일치 확인. 요금은 예약 앱 로그인 필요로 미확인 - 검색 캐시 기준 평일 575,000/주말 1,200,000~1,750,000로 상이함, 재확인 필요" },
  { no: 30, name: "Lotus Lake Golf Club", phone: "0267-405-888", wa: "0811-1292-425", weekday: 720000, holiday: 2150000 },
  { no: 31, name: "Palm Spring Golf", phone: "0267-644-730", wa: "0822-1193-3648", weekday: 750000, holiday: 1990000 },
  {
    no: 32,
    name: "Trump International Golf Club, Lido",
    phone: "0251-8407-888",
    wa: "0811-8886-1861",
    weekday: 0,
    holiday: null,
    note: "Lifetime Membership (2026년 기준 약 USD 70,000, 환율 변동에 따라 재확인 필요)",
  },
];
