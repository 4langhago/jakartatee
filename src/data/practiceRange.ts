export interface PracticeRange {
  id: string;
  nameKo: string;
  nameEn: string;
  timeSlots: string[];
}

export const practiceRanges: PracticeRange[] = [
  { id: "j-golf", nameKo: "J골프", nameEn: "J Golf", timeSlots: ["17:30", "18:00", "18:30", "19:00"] },
];
