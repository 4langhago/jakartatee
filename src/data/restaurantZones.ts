export interface RestaurantZone {
  id: string;
  nameKo: string;
  nameEn: string;
  address?: string;
  phone?: string;
  wa?: string;
  note?: string;
}

// 구글/인스타그램/한인 커뮤니티 검색으로 실존 확인한 한식당 정보 (2026-07 기준, 실제 예약 전 재확인 권장)
export const restaurantZones: RestaurantZone[] = [
  {
    id: "gyeongbokgung",
    nameKo: "경복궁",
    nameEn: "Gyeongbokgung",
    address: "Jakarta (동부, Cilangkap 인근 추정)",
    phone: "021-3885-3040",
    wa: "0823-1241-2039",
    note: "Instagram @gyeongbokgung_id, Premium Korean Resto & Sushi/Sashimi, 개인룸 16개, 영업시간 11:00~22:00",
  },
  {
    id: "deaga",
    nameKo: "대가",
    nameEn: "Dae Ga",
    address: "Ruko Raffles Hills, Jl. Alternatif Cibubur Blok AB No.7, Harjamukti, Cimanggis, Depok",
    phone: "021-8459-2871",
    note: "Instagram @daegakoreancibubur, 영업시간 11:00~22:00",
  },
  {
    id: "hangang",
    nameKo: "한강",
    nameEn: "Han Gang",
    address: "Jl. Wolter Monginsidi No.99, Senopati, Jakarta Selatan (외 Grand Indonesia·Plaza Senayan·Baywalk Mall 등 다수 지점)",
    phone: "021-2922-3070",
    note: "자카르타 내 여러 지점을 운영하는 한식 프랜차이즈. 지점별 전화번호 상이 - 예약 시 원하는 지점 재확인 필요 (Plaza Senayan점 021-5724-802 등)",
  },
];
