export interface GolfCourse {
  no: number;
  name: string;
  phone: string;
  wa: string;
  weekday: number;
  holiday: number | null;
  /** 공식 채널에서 확인된 오전/오후 세분 요금 (있는 코스만). 없으면 weekday/holiday를 단일가로 사용 */
  amWeekday?: number;
  pmWeekday?: number;
  amHoliday?: number;
  pmHoliday?: number;
  /** 운영 중단/휴장 중인 코스 (재개장 시까지 예약 불가) */
  closed?: boolean;
  note?: string;
}

// 사용자가 직접 확인/보정한 골프장 별 그린피 목록 (평일 / 주말·공휴일 오전 요금 기준)
// 2026-08-15 웹 조사(공식 홈페이지/gogolf.co.id/인스타그램 등)로 오전·오후 세분 요금 및 연락처 교차검증 반영.
// 조사 결과가 기재값과 다르거나 신뢰도가 낮은 항목은 원래 weekday/holiday 값을 그대로 두고 note로만 안내함(가격 임의 변경 없음).
export const golfCourses: GolfCourse[] = [
  { no: 1, name: "The Manor Golf & Estate", phone: "021-559-11111", wa: "0815-5911-111", weekday: 638000, holiday: 1990000, note: "요금 재확인 필요 - 최근 'Cengkareng Golf Club'에서 리브랜딩된 곳으로 추정되며 출처마다 그린피가 크게 달라(1.2M~2.5M 범위) 오전/오후 세분값 확인 불가. 전화/왓츠앱도 공식 채널로 검증되지 않음" },
  { no: 2, name: "Damai Indah Golf - PIK", phone: "021-588-2388", wa: "0811-1994-908", weekday: 1568000, holiday: 3895000, note: "요금 재확인 필요 - gogolf.co.id 출처 두 곳이 서로 다름(평일 815k~914k인 곳과, 금요일 1,568k·토PM 3,895k인 곳). 기재값은 후자와 정확히 일치해 '평일'이 아니라 '금요일/토요일PM' 요금일 가능성이 큼. 전화/왓츠앱은 공식 채널로 검증 안 됨" },
  {
    no: 3,
    name: "Golf Bandar Kemayoran",
    phone: "021-654-155/55",
    wa: "0887-0570-3184",
    weekday: 506000,
    holiday: 1320000,
    closed: true,
    note: "⚠️ 운영 중단 - 2026년 4월 착공한 국유자산 재개발로 코스가 완전 폐쇄되어 'Kemayoran Indah Golf'로 리브랜딩 중이며 2027~2028년까지 영업 중단 예정(PPK Kemayoran·PT Accola Hotel Indonesia 공동개발). 재개장 전까지 예약 불가. 전화번호 형식도 재확인 필요(원본 \"021-654-155/55\"가 두 번호 병합 추정)",
  },
  { no: 4, name: "Jakarta Golf Club", phone: "021-475-4732", wa: "0811-1313-501", weekday: 650000, holiday: 1400000, note: "요금 재확인 필요 - gogolf.co.id 기준 평일 500k(오전오후 동일), 주말 오전 1,060k/오후 745k로 기재값(650k/1,400k)과 차이 있음. 전화/왓츠앱은 공식 채널로 검증 안 됨" },
  { no: 5, name: "Senayan National Golf Club", phone: "021-571-0181", wa: "0811-1638-511", weekday: 1215000, holiday: 2475000, note: "요금 재확인 필요 - gogolf.co.id 기준 평일 785k(오전오후 동일), 주말 오전 1,905k/오후 1,355k로 기재값보다 낮게 확인됨. 'I Love Monday' 프로모션(400k~) 별도 존재. 전화/왓츠앱은 공식 채널로 검증 안 됨" },
  {
    no: 6,
    name: "Pondok Indah Golf Course",
    phone: "021-769-4906",
    wa: "0811-1000-650",
    weekday: 1928000,
    holiday: 3968000,
    amWeekday: 1618000,
    pmWeekday: 1618000,
    amHoliday: 3688000,
    pmHoliday: 3418000,
    note: "공식 사이트(golfpondokindah.com) 요금표 확인: 월~목 1,618,000(오전오후 동일) / 금 1,928,000 / 토 오전 3,968,000·오후 3,688,000 / 일·공휴일 오전 3,688,000·오후 3,418,000. 기재값(weekday 1,928,000/holiday 3,968,000)은 실제로는 '금요일'과 '토요일 오전' 요금 — 월~목 평일가는 1,618,000으로 더 낮음. 전화·왓츠앱은 공식 사이트와 정확히 일치(검증 완료)",
  },
  { no: 7, name: "Padang Golf Pangkalan Jati", phone: "021-7581-6223", wa: "0811-1979-379", weekday: 670000, holiday: 1415000, note: "재확인 필요 - 공식 사이트(golfpangkalanjati.com)가 접속 불가 상태 지속. gogolf.co.id 기준 평일 455k, 주말 오전 1,315k/오후 1,065k로 기재값과 차이 있음(캐디·카트 포함 여부 차이일 가능성). 전화로 직접 재확인 권장" },
  { no: 8, name: "Padang Golf Halim", phone: "021-800-5762", wa: "0821-2382-1507", weekday: 488523, holiday: 845914, note: "전화번호 재확인 필요 - 검색으로 확인된 번호(021-8000793)가 기재값(021-800-5762)과 다름. 공식 도메인(halimgolfcourse.com) 접속 불가, 요금 출처마다 편차가 커 오전/오후 세분값 확인 불가" },
  { no: 9, name: "Tigaraksa Golf Residens", phone: "021-599-6371", wa: "0822-2080-2330", weekday: 455000, holiday: 970000, note: "요금 재확인 필요 - 공식 사이트는 USD 표기(평일 $23/주말 $60)만 있어 IDR·오전오후 세분값 확인 불가. 전화(021-5996371)는 공식 사이트와 일치 확인, 왓츠앱은 미확인" },
  { no: 10, name: "Kedaton Golf & Country Club", phone: "021-5930-0000", wa: "0813-1512-6171", weekday: 510000, holiday: 1450000, note: "요금 재확인 필요 - gogolf.co.id 기준(조사 시점) 평일 460k(오전오후 동일), 주말 오전 1,630k/오후 1,130k. 출처별 편차 있어 참고용. 전화·왓츠앱은 검증 완료(공식 채널과 일치)" },
  { no: 11, name: "Modern Golf & Country Club", phone: "021-552-9228", wa: "0811-9252-277", weekday: 895000, holiday: 2860000, note: "요금 재확인 필요 - gogolf.co.id 기준(조사 시점) 평일 959k(오전오후 동일), 주말 오전 1,515k/오후 1,310k로 기재값과 차이 있음. 왓츠앱은 공식 사이트와 일치 확인, 전화는 미확인" },
  {
    no: 12,
    name: "Imperial Klub Golf",
    phone: "021-5460-120",
    wa: "0811-9880-697",
    weekday: 1048000,
    holiday: 2358000,
    amWeekday: 968000,
    pmWeekday: 968000,
    amHoliday: 2258000,
    pmHoliday: 1608000,
    note: "공식 사이트(aryaduta.com) 및 gogolf.co.id 교차 확인 - 월 798k / 화~목 968k / 금 1,048k(오전오후 공통); 토 오전 2,458k·오후 1,399k~1,808k; 일·공휴일 오전 2,258k·오후 1,608k. 기재값(1,048k/2,358k)은 금요일/일요일 평균과 대체로 근접. 전화·왓츠앱 모두 검증 완료",
  },
  {
    no: 13,
    name: "Gading Raya Golf Club",
    phone: "021-546-7668",
    wa: "0821-2201-3232",
    weekday: 850000,
    holiday: 2200000,
    amWeekday: 850000,
    pmWeekday: 850000,
    amHoliday: 2200000,
    pmHoliday: 1700000,
    note: "공식 사이트(gadingrayagolf.com) 2026-01-01 시행 요금표 확인: 화~금 850,000(오전오후 동일) / 토·일·공휴일 오전 2,200,000, 토 오후 1,700,000·일오후 1,500,000. 기재값과 평일·오전 기준 정확히 일치. 전화·왓츠앱 모두 검증 완료",
  },
  { no: 14, name: "Damai Indah Golf - BSD", phone: "021-537-0290", wa: "0811-1994-908", weekday: 1408000, holiday: 3545000, note: "요금 재확인 필요 - gogolf.co.id 기준(조사 시점) 평일 1,358k(오전오후 동일), 주말 오후 2,415k(오전은 조회 시점 매진으로 미확인)로 기재값보다 낮게 확인됨. 전화·왓츠앱은 공식 채널로 검증 안 됨" },
  { no: 15, name: "Pondok Cabe Golf Club", phone: "021-740-5387", wa: "0878-2437-7211", weekday: 695000, holiday: 1295000, note: "요금 재확인 필요 - 신뢰할 만한 최신 IDR/오전오후 세분 출처를 찾지 못함(인스타그램 가격표는 이미지라 추출 불가). 전화·왓츠앱은 검증 완료" },
  { no: 16, name: "Emeralda Golf Club", phone: "021-875-9019", wa: "0811-129-941", weekday: 1488000, holiday: 3788000, note: "요금 재확인 필요 - gogolf.co.id 기준(조사 시점) 평일 828k(오전오후 동일), 주말 오전 2,748k·오후 1,628k로 기재값보다 낮게 나타남(River/Lake/Plantation 코스별 상이 가능성). 전화는 검증 완료, 왓츠앱은 미확인" },
  { no: 17, name: "Riverside Golf Club", phone: "021-867-1528", wa: "0812-9424-9784", weekday: 1200000, holiday: 3300000, note: "요금 재확인 필요 - 공식 사이트엔 회원/시니어/숙녀 할인가만 게시되고 일반 방문객 표준가(기재값)는 확인 불가. 오전/오후 구분 없이 시간대 할인만 존재. 왓츠앱은 공식 사이트와 일치, 전화는 미확인" },
  { no: 18, name: "Jagorawi Golf & Country Club", phone: "021-875-3810", wa: "0812-9066-2904", weekday: 695000, holiday: 2395000, note: "요금 재확인 필요 - 공식 사이트(jagorawi.com/green-fees)는 고정 요금표 대신 '인스타그램 참조'로 안내, 그린피만 평일 405,000/주말 810,000(캐디·카트 별도)이라는 서드파티 정보는 이번 조사에서 직접 재확인 못함. 롱위켄드 프로모션가(토 오전 1,995k/오후 1,095k 등)는 표준가 아님. 왓츠앱은 공식 사이트와 일치, 전화는 미확인" },
  {
    no: 19,
    name: "Palm Hill Golf Club",
    phone: "021-8795-4307",
    wa: "0811-8003-001",
    weekday: 580000,
    holiday: 2205000,
    amWeekday: 580000,
    pmWeekday: 499000,
    amHoliday: 2205000,
    pmHoliday: 850000,
    note: "공식 사이트(palmhillgolf.co.id/golf) 요금표 확인(2023-01 기준): 화~금 오전 580,000·오후 499,000(시니어/숙녀/주니어가) / 토 방문객 오전 2,205,000·오후 850,000 / 일 방문객 오전 1,875,000·오후 750,000. 기재값(580k/2,205k)은 평일 오전·토요일 오전과 정확히 일치. 전화·왓츠앱 모두 검증 완료",
  },
  { no: 20, name: "Permata Sentul Golf Club", phone: "021-8795-1788", wa: "0812-1252-555", weekday: 1070000, holiday: 2820000, note: "요금 재확인 필요 - gogolf.co.id 기준(조사 시점) 평일 775k(오전오후 동일), 주말 오전 2,130k/오후 1,420k로 기재값과 차이 있음. 전화번호 마지막 자리가 검색 결과(...1787)와 달라(...1788) 오탈자 가능성으로 재확인 필요, 왓츠앱도 미확인" },
  { no: 21, name: "Sentul Highlands Golf Club", phone: "021-8796-0266", wa: "0811-1157-888", weekday: 1258000, holiday: 3188000, note: "공식 사이트(sentulhighlands.com)에서 전화·왓츠앱 번호 일치 확인. 요금은 출처마다 편차 큼 - gogolf.co.id 기준 평일 818k(오전오후 동일)/주말 오전 2,799k·오후 1,450k, 블로그 리뷰 기준은 월 850k~화~금 오전 1,250k·오후 1,040k 등으로 상이해 재확인 필요. 공식 사이트에 예약 사기 주의 공지 있음 - 왓츠앱 등 비공식 채널 예약 시 유의" },
  {
    no: 22,
    name: "Gunung Geulis Country Club",
    phone: "0251-8257-500",
    wa: "0811-1047-500",
    weekday: 1300000,
    holiday: 3100000,
    amWeekday: 1300000,
    pmWeekday: 1300000,
    amHoliday: 3100000,
    pmHoliday: 2100000,
    note: "공식 사이트(gununggeulis.com/country-club/rates) 2026년 요금표 확인: 월~금 방문객 1,300,000(오전오후 동일) / 토 방문객 오전 3,100,000·오후 2,100,000 / 일 방문객 오전 2,200,000·오후 1,600,000. 기재값(1,300k/3,100k)은 평일·토요일 오전과 정확히 일치. 전화는 검증 완료, 왓츠앱은 공식 사이트에 미게시라 미확인",
  },
  { no: 23, name: "Rainbow Hills Golf Club", phone: "0251-827-2111", wa: "0811-1100-199", weekday: 995000, holiday: 2445000, note: "요금 재확인 필요 - gogolf.co.id 기준(조사 시점) 평일 1,025k(오전오후 동일), 주말 오전 1,945k/오후 1,440k로 기재값과 유사한 범위이나 정확히 일치하지 않음. 전화·왓츠앱 모두 검증 완료" },
  { no: 24, name: "Klub Golf Bogor Raya", phone: "0251-8271-888", wa: "0811-9718-844", weekday: 1386000, holiday: 3546000, note: "요금 재확인 필요 - 공식 사이트(klubgolfbogorraya.com) 점검 중이라 접속 불가. gogolf.co.id 기준(조사 시점) 평일 오전 936k·오후 776k, 주말 오전 3,071k·오후 1,661k로 기재값보다 낮게 나타남. 전화·왓츠앱은 검색 결과와 일치 확인" },
  {
    no: 25,
    name: "Rancamaya Golf & Country Club",
    phone: "0251-824-2282",
    wa: "0817-1710-0009",
    weekday: 1150000,
    holiday: 3030000,
    amWeekday: 1200000,
    pmWeekday: 1000000,
    amHoliday: 2580000,
    pmHoliday: 1760000,
    note: "공식 사이트(rancamayagolf.com/golf-rate) 확인 - 평일 오전 1,200,000·오후 1,000,000, 토요일 오전 3,180,000·오후 1,760,000, 일·공휴일 오전 2,580,000·오후 1,760,000으로 요일·시간대별 전부 다름(기재값 1,150k/3,030k는 근사치). 전화·왓츠앱 모두 검증 완료",
  },
  { no: 26, name: "Royale Jakarta Golf Club", phone: "021-8088-8999", wa: "0813-1532-5188", weekday: 1650000, holiday: 3350000, note: "공식 2026 요금표(royalejakarta.com/golf-rate-2026, 이미지 기반이라 직접 추출은 안 됨) 및 gogolf.co.id 기준 평일 약 975,000~1,300,000, 주말 오전 2,750,000·오후 2,200,000(피크 최대 3,350,000)로 확인 — 기재값은 범위 내 최고가 쪽이라 재검토 필요. 전화는 검증 완료, 왓츠앱은 공식 페이지에 병기된 두 번호 중 하나와 일치" },
  { no: 27, name: "Suvarna Jakarta Golf Club", phone: "021-527-9103", wa: "0811-1049-993", weekday: 1720000, holiday: 3580000, note: "요금 재확인 필요 - gogolf.co.id 기준 평일 1,580k(오전오후 동일), 주말 오전 3,580k·오후 2,580k. 기재값 holiday(3,580k)는 주말 오전가와 일치하나 오후는 더 낮음. 전화·왓츠앱 모두 검증 완료" },
  { no: 28, name: "Padang Golf Cilangkap", phone: "021-3885-3066", wa: "0821-9090-2148", weekday: 310000, holiday: 535000, note: "전화번호 재확인 필요 - 제3자 출처(playgolf.id)가 021-8459-5687을 제시해 기재값(021-3885-3066)과 불일치, 공식 채널로 재검증 필요. 요금 체계도 로컬/외국인/TNI/여성 구분이라 앱의 단순 평일/주말 구조와 다름(외국인 기준 평일 275,000/주말 495,000이 기재값과 근접). 왓츠앱도 확인 불가" },
  { no: 29, name: "Jababeka Golf & Country Club", phone: "021-893-6148", wa: "0811-1889-3306", weekday: 1049000, holiday: 2599000, note: "왓츠앱 번호 재확인 필요 - 공식 홈페이지(jababekagolf.co.id)에 0815-1110-0315로 게시되어 있어 기재값(0811-1889-3306)과 불일치. 요금도 세 출처(캐시 575k/1,200k~1,750k, gogolf 999k/2,400k·1,999k, 기재값 1,049k/2,599k)가 전부 달라 재확인 필요. 전화는 확인 불가" },
  { no: 30, name: "Lotus Lake Golf Club", phone: "0267-405-888", wa: "0811-1292-425", weekday: 720000, holiday: 2150000, note: "요금 재확인 필요 - 공식 요금표가 이미지 파일로만 제공되어 텍스트 추출 불가. 전화·왓츠앱은 공식 사이트와 일치 확인" },
  { no: 31, name: "Palm Spring Golf", phone: "0267-644-730", wa: "0822-1193-3648", weekday: 750000, holiday: 1990000, note: "왓츠앱 번호 재확인 필요 - 공식 사이트(karawang.palmspringsgolf.co)엔 0857-7560-8559/0813-1179-2069만 게시되어 기재값(0822-1193-3648)과 불일치. 요금은 평일 750,000(단일가)/주말 오전 1,990,000·오후 1,700,000으로 기재값(750k/1,990k)과 오전 기준 일치. 전화는 검증 완료" },
  {
    no: 32,
    name: "Trump International Golf Club, Lido",
    phone: "0251-8407-888",
    wa: "0811-8886-1861",
    weekday: 0,
    holiday: null,
    note: "전화번호 재확인 필요 - 공식 채널로 확인된 번호(Lido 사무실 +62 251 8563322, 자카르타 사무실 +62 21 8086 4888)가 기재값(0251-8407-888)과 다름. Lifetime Membership 금액(약 USD 70,000)도 공식 페이지엔 게시되지 않고 제3자 출처에서만 확인돼 신뢰도 낮음 - 환율 변동 포함 재확인 필요",
  },
];
