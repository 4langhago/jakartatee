export interface RestaurantZone {
  id: string;
  nameKo: string;
  nameEn: string;
}

// 식당 예약은 지역 단위로만 이루어지며(원본 앱과 동일), 특정 레스토랑 상세 데이터는 없음
export const restaurantZones: RestaurantZone[] = [
  { id: "gyeongbokgung", nameKo: "경복궁", nameEn: "Gyeongbokgung" },
  { id: "deaga", nameKo: "대가", nameEn: "Deaga" },
  { id: "hangang", nameKo: "한강", nameEn: "Hangang" },
];
