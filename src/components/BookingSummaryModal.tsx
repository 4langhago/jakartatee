"use client";

import { BookingSummary } from "@/types/booking";

export default function BookingSummaryModal({
  summary,
  onClose,
}: {
  summary: BookingSummary;
  onClose: () => void;
}) {
  const rows: { label: string; value: string }[] = [
    { label: "예약 종류", value: summary.title },
    ...(summary.subtitle ? [{ label: "코스/장소", value: summary.subtitle }] : []),
    { label: "날짜", value: summary.date ?? "-" },
    ...(summary.period ? [{ label: "시간/시간대", value: summary.period }] : []),
    ...(summary.partySize ? [{ label: "인원", value: summary.partySize }] : []),
    ...(summary.players ? [{ label: "플레이어", value: summary.players }] : []),
    ...(summary.name ? [{ label: "예약자", value: summary.name }] : []),
    { label: "연락처", value: summary.phone },
    ...(summary.tags.length ? [{ label: "요청 태그", value: summary.tags.join(", ") }] : []),
    ...(summary.note ? [{ label: "기타 요청사항", value: summary.note }] : []),
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6750A4] text-white">✓</div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">예약 요청이 접수되었습니다</h2>
            <p className="text-xs text-gray-400">담당자 확인 후 별도로 연락드립니다</p>
          </div>
        </div>
        <div className="space-y-2 rounded-2xl bg-purple-50/60 p-4 text-sm">
          {rows.map((r) => (
            <div key={r.label} className="flex justify-between gap-4">
              <span className="text-gray-400">{r.label}</span>
              <span className="text-right font-medium text-gray-700">{r.value}</span>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={onClose}
          className="mt-5 w-full rounded-xl bg-[#6750A4] py-2.5 text-sm font-medium text-white active:scale-95"
        >
          확인
        </button>
      </div>
    </div>
  );
}
