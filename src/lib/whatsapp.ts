import { BookingSummary } from "@/types/booking";

const STORAGE_KEY = "jakartatee.waNumber";

/** 저장된 운영자 왓츠앱 번호(숫자만)를 반환. 없으면 빈 문자열. */
export function getWhatsAppNumber(): string {
  if (typeof window === "undefined") return "";
  return window.localStorage.getItem(STORAGE_KEY) ?? "";
}

/** 입력값에서 숫자만 남긴 국제형식 번호를 저장. 빈 값이면 삭제. */
export function setWhatsAppNumber(raw: string): string {
  const digits = normalizeWhatsAppNumber(raw);
  if (typeof window !== "undefined") {
    if (digits) window.localStorage.setItem(STORAGE_KEY, digits);
    else window.localStorage.removeItem(STORAGE_KEY);
  }
  return digits;
}

/** "+62 812-3456" → "628123456" 처럼 숫자만 남긴다. */
export function normalizeWhatsAppNumber(raw: string): string {
  return raw.replace(/\D/g, "");
}

/** wa.me 링크 생성. number는 국가코드 포함 숫자만. */
export function buildWhatsAppLink(number: string, text: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

/** 예약 요약을 왓츠앱 메시지 본문으로 변환. */
export function buildBookingMessage(summary: BookingSummary): string {
  const lines: string[] = ["[자카르티 예약 요청]"];
  const push = (label: string, value?: string | null) => {
    if (value) lines.push(`${label}: ${value}`);
  };
  push("예약 종류", summary.title);
  push("코스/장소", summary.subtitle);
  push("날짜", summary.date);
  push("시간/시간대", summary.period);
  push("인원", summary.partySize);
  push("플레이어", summary.players);
  push("예약자", summary.name);
  push("연락처", summary.phone);
  if (summary.tags.length) push("요청 태그", summary.tags.join(", "));
  push("기타 요청사항", summary.note);
  return lines.join("\n");
}
