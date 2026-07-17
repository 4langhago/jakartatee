export interface PracticeRange {
  id: string;
  nameKo: string;
  nameEn: string;
  phone?: string;
  area: string;
  timeSlots: string[];
}

export const practiceRanges: PracticeRange[] = [
  {
    id: "j-golf",
    nameKo: "J골프 (브카시)",
    nameEn: "J. Golf Driving Range - Kota Deltamas",
    phone: "",
    area: "Cikarang Pusat, Bekasi",
    timeSlots: ["17:30", "18:00", "18:30", "19:00"],
  },
  {
    id: "seskoal",
    nameKo: "세스콜 드라이빙 레인지",
    nameEn: "Seskoal Driving Range",
    phone: "021-723-4504",
    area: "Kebayoran Lama, Jakarta Selatan",
    timeSlots: ["17:00", "17:30", "18:00", "18:30", "19:00"],
  },
  {
    id: "cilandak-marinir",
    nameKo: "칠란닥 마리니르 드라이빙 레인지",
    nameEn: "Cilandak Marinir Driving Range",
    phone: "021-2278-4005",
    area: "Cilandak Timur, Jakarta Selatan",
    timeSlots: ["17:00", "17:30", "18:00", "18:30", "19:00"],
  },
  {
    id: "royale-jakarta-range",
    nameKo: "로열 자카르타 드라이빙 레인지",
    nameEn: "Royale Jakarta Golf Club - Driving Range",
    phone: "021-8088-8999",
    area: "Halim Perdanakusuma, Jakarta Timur",
    timeSlots: ["17:00", "17:30", "18:00", "18:30"],
  },
  {
    id: "pondok-indah-range",
    nameKo: "폰독 인다 드라이빙 레인지",
    nameEn: "Pondok Indah Golf Course - Driving Range",
    phone: "021-769-4906",
    area: "Pondok Indah, Jakarta Selatan",
    timeSlots: ["17:00", "17:30", "18:00", "18:30"],
  },
  {
    id: "kemang-pratama",
    nameKo: "케망 프라타마 드라이빙 레인지 (브카시)",
    nameEn: "Kemang Pratama Driving Range",
    phone: "",
    area: "Bekasi Selatan, Bekasi",
    timeSlots: ["14:00", "14:30", "15:00", "15:30", "16:00"],
  },
];
