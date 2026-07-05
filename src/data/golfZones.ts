export interface ZoneGolfCourse {
  id: string;
  nameKo: string;
  nameEn: string;
  satPrice: number;
  sunPrice: number;
}

// 지역(경복궁/대가/한강) 카드에서 "골프 예약"을 눌렀을 때 뜨는 주말 오후 요금 기준 코스 목록
export const golfZoneCourses: Record<string, ZoneGolfCourse[]> = {
  gyeongbokgung: [
    { id: "riverside", nameKo: "리버사이드", nameEn: "RiverSide", satPrice: 1250000, sunPrice: 1100000 },
    { id: "rainbow-hills", nameKo: "레인보우", nameEn: "RainBow Hills", satPrice: 1010000, sunPrice: 1010000 },
    { id: "bogor-raya", nameKo: "보고라야", nameEn: "Bogor Raya", satPrice: 1236000, sunPrice: 1186000 },
    { id: "gunung-geulis", nameKo: "구능 굴리스", nameEn: "Gunung Geulis", satPrice: 938000, sunPrice: 888000 },
    { id: "permata-sentul", nameKo: "센툴", nameEn: "Permata Sentul", satPrice: 1250000, sunPrice: 1200000 },
    { id: "sedayu", nameKo: "세다유", nameEn: "Sedayu", satPrice: 2429000, sunPrice: 2229000 },
  ],
  deaga: [],
  hangang: [],
};
