"use client";

import { useState } from "react";
import { BookingSummary } from "@/types/booking";
import {
  buildBookingMessage,
  buildWhatsAppLink,
  getWhatsAppNumber,
  isValidWhatsAppNumber,
  normalizeWhatsAppNumber,
  setWhatsAppNumber,
} from "@/lib/whatsapp";

export default function BookingSummaryModal({
  summary,
  onClose,
}: {
  summary: BookingSummary;
  onClose: () => void;
}) {
  const [waNumber, setWaNumber] = useState(getWhatsAppNumber());
  const [numberInput, setNumberInput] = useState("");

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

  function sendViaWhatsApp(number: string) {
    window.open(buildWhatsAppLink(number, buildBookingMessage(summary)), "_blank", "noopener,noreferrer");
  }

  const numberInputDigits = normalizeWhatsAppNumber(numberInput);
  const isNumberInputInvalid = numberInputDigits.length > 0 && !isValidWhatsAppNumber(numberInputDigits);

  function handleSaveAndSend() {
    if (!isValidWhatsAppNumber(numberInputDigits)) return;
    const digits = setWhatsAppNumber(numberInput);
    if (!digits) return;
    setWaNumber(digits);
    sendViaWhatsApp(digits);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6750A4] text-white">✓</div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">예약 내용이 정리되었습니다</h2>
            <p className="text-xs font-medium text-amber-600">
              ⚠️ 아래 버튼으로 왓츠앱 전송을 완료해야 예약이 접수됩니다
            </p>
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

        {waNumber ? (
          <button
            type="button"
            onClick={() => sendViaWhatsApp(waNumber)}
            className="mt-5 w-full rounded-xl bg-[#25D366] py-2.5 text-sm font-medium text-white active:scale-95"
          >
            💬 왓츠앱으로 전송 (+{waNumber})
          </button>
        ) : (
          <div className="mt-5 space-y-2">
            <input
              type="tel"
              inputMode="tel"
              value={numberInput}
              onChange={(e) => setNumberInput(e.target.value)}
              placeholder="왓츠앱 수신 번호 (예: 6281234567890)"
              className="w-full rounded-xl border border-purple-200 bg-purple-50/60 px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-[#6750A4]"
            />
            <button
              type="button"
              onClick={handleSaveAndSend}
              disabled={!isValidWhatsAppNumber(numberInputDigits)}
              className="w-full rounded-xl bg-[#25D366] py-2.5 text-sm font-medium text-white active:scale-95 disabled:opacity-40"
            >
              💬 번호 저장 후 왓츠앱으로 전송
            </button>
            {isNumberInputInvalid ? (
              <p className="text-xs font-medium text-red-500">
                ⚠️ 국가코드를 포함한 숫자인지 확인해주세요 (0으로 시작하거나 자릿수가 맞지 않습니다).
              </p>
            ) : (
              <p className="text-xs text-gray-400">국가코드 포함 숫자 입력 (인도네시아 62…, 한국 82…)</p>
            )}
          </div>
        )}

        <button
          type="button"
          onClick={onClose}
          className="mt-2 w-full rounded-xl bg-purple-50 py-2.5 text-sm font-medium text-gray-600 active:scale-95"
        >
          전송하지 않고 닫기
        </button>
      </div>
    </div>
  );
}
