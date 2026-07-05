export interface MembershipCourse {
  id: string;
  nameEn: string;
  nameKo: string;
  satPrice: number;
  sunPrice: number;
  region: "Tangerang Area" | "Bogor Area" | "Jakarta Area" | "Bandung Area";
}

export interface MembershipCard {
  id: string;
  nameKo: string;
  nameEn: string;
}

export const membershipCards: MembershipCard[] = [
  { id: "the-card", nameKo: "더카드", nameEn: "The Card" },
  { id: "q-golf", nameKo: "큐골프", nameEn: "Q Golf" },
];

export const regions = ["Tangerang Area", "Bogor Area", "Jakarta Area", "Bandung Area"] as const;

// 두 카드사 모두 동일한 코스/요금표를 사용 (원본 앱 확인 결과)
export const membershipCourses: MembershipCourse[] = [
  { id: "gading-raya", nameEn: "GADING RAYA", nameKo: "가딩 라야", satPrice: 1245000, sunPrice: 1145000, region: "Tangerang Area" },
  { id: "gunung-geulis", nameEn: "GUNUNG GEULIS", nameKo: "구능 굴리스", satPrice: 1100000, sunPrice: 1050000, region: "Bogor Area" },
  { id: "rancamaya", nameEn: "RANCAMAYA", nameKo: "란짜마야", satPrice: 1475000, sunPrice: 1288000, region: "Bogor Area" },
  { id: "rainbow-hills-golf", nameEn: "RAINBOW HILLS GOLF", nameKo: "레인보우 힐스", satPrice: 1290000, sunPrice: 1185000, region: "Bogor Area" },
  { id: "royale-jakarta", nameEn: "ROYALE JAKARTA", nameKo: "로얄 자카르타", satPrice: 1925000, sunPrice: 1785000, region: "Jakarta Area" },
  { id: "riverside-golf", nameEn: "RIVERSIDE GOLF", nameKo: "리버사이드", satPrice: 1555000, sunPrice: 1355000, region: "Bogor Area" },
  { id: "modern", nameEn: "MODERN", nameKo: "모던", satPrice: 1250000, sunPrice: 1150000, region: "Tangerang Area" },
  { id: "pangkalan-jati", nameEn: "PANGKALAN JATI", nameKo: "빵갈란 자띠", satPrice: 639000, sunPrice: 639000, region: "Jakarta Area" },
  { id: "permata-sentul", nameEn: "PERMATA SENTUL", nameKo: "쁘르마따 센툴", satPrice: 988000, sunPrice: 888000, region: "Bogor Area" },
  { id: "sedayu-indo", nameEn: "SEDAYU INDO", nameKo: "세다유 인도", satPrice: 2399000, sunPrice: 1899000, region: "Jakarta Area" },
  { id: "sentul-highlands", nameEn: "SENTUL HIGHLANDS", nameKo: "센툴 하이랜드", satPrice: 1288000, sunPrice: 1018000, region: "Bogor Area" },
  { id: "suvarna-jakarta", nameEn: "SUVARNA JAKARTA", nameKo: "수바르나", satPrice: 1877000, sunPrice: 1777000, region: "Jakarta Area" },
  { id: "imperial", nameEn: "IMPERIAL", nameKo: "임페리얼", satPrice: 1195000, sunPrice: 995000, region: "Jakarta Area" },
  { id: "parahyangan", nameEn: "PARAHYANGAN", nameKo: "파라양안", satPrice: 1458000, sunPrice: 1248000, region: "Bandung Area" },
  { id: "palm-hill-golf", nameEn: "PALM HILL GOLF", nameKo: "팜 힐", satPrice: 590000, sunPrice: 590000, region: "Bogor Area" },
];
