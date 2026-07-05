export type BookingKind = "restaurant" | "golf" | "practice";

export interface BookingSummary {
  kind: BookingKind;
  title: string;
  subtitle?: string;
  date: string | null;
  period?: string; // 오전/오후/시간
  partySize?: string;
  players?: string;
  name?: string;
  phone: string;
  tags: string[];
  note: string;
}
