"use client";

import { useState } from "react";
import { getWhatsAppNumber, normalizeWhatsAppNumber, setWhatsAppNumber } from "@/lib/whatsapp";

export default function WhatsAppSettingsModal({ onClose }: { onClose: () => void }) {
  const [value, setValue] = useState(getWhatsAppNumber());
  const digits = normalizeWhatsAppNumber(value);

  function handleSave() {
    setWhatsAppNumber(value);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white">💬</div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">왓츠앱 수신 번호 설정</h2>
            <p className="text-xs text-gray-400">예약 요청이 이 번호의 왓츠앱으로 전송됩니다</p>
          </div>
        </div>
        <input
          type="tel"
          inputMode="tel"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="예: 6281234567890"
          className="w-full rounded-xl border border-purple-200 bg-purple-50/60 px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-[#6750A4]"
        />
        <p className="mt-2 text-xs text-gray-400">
          국가코드 포함 숫자로 입력하세요 (인도네시아 62…, 한국 82…). 비우고 저장하면 번호가 삭제됩니다.
        </p>
        {digits && (
          <p className="mt-1 text-xs text-gray-500">
            저장될 번호: <span className="font-medium text-gray-700">+{digits}</span>
          </p>
        )}
        <div className="mt-5 flex gap-2">
          <button
            type="button"
            onClick={onClose}
            className="w-1/3 rounded-xl bg-purple-50 py-2.5 text-sm font-medium text-gray-600 active:scale-95"
          >
            취소
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="w-2/3 rounded-xl bg-[#6750A4] py-2.5 text-sm font-medium text-white active:scale-95"
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
}
