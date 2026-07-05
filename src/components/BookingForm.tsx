"use client";

import { useState } from "react";
import MonthCalendar from "./MonthCalendar";
import { BookingKind, BookingSummary } from "@/types/booking";

const RESTAURANT_TIME_SLOTS = ["11시", "12시", "13시", "17시", "18시", "19시", "20시"];
const RESTAURANT_PARTY_SIZES = ["2명", "3명", "4명", "6명", "8명"];
const RESTAURANT_TAGS = ["방으로", "창가 자리", "아기 의자", "조용한 자리"];
const GOLF_TAGS = ["카트 미사용", "최대한 빠른 티업", "오후 최대한 빠른 시간"];

export default function BookingForm({
  kind,
  title,
  subtitle,
  timeSlots,
  fixedToday,
  onComplete,
}: {
  kind: BookingKind;
  title: string;
  subtitle?: string;
  timeSlots?: string[]; // for practice range fixed slots
  fixedToday?: boolean;
  onComplete: (summary: BookingSummary) => void;
}) {
  const [date, setDate] = useState<string | null>(fixedToday ? new Date().toISOString().slice(0, 10) : null);
  const [period, setPeriod] = useState<string>("");
  const [partySize, setPartySize] = useState<string>("");
  const [players, setPlayers] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  function toggleTag(tag: string) {
    setTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  }

  const requiredFilled =
    kind === "golf" ? Boolean(date && players.trim() && phone.trim()) : Boolean(date && name.trim() && phone.trim());

  function handleSubmit() {
    if (!requiredFilled) return;
    onComplete({
      kind,
      title,
      subtitle,
      date,
      period: kind === "golf" ? period : kind === "restaurant" ? period : undefined,
      partySize: kind === "restaurant" ? partySize : undefined,
      players: kind === "golf" ? players : undefined,
      name: kind !== "golf" ? name : undefined,
      phone,
      tags,
      note,
    });
  }

  return (
    <div className="mt-2 rounded-2xl bg-purple-50/60 p-4 space-y-4">
      <div>
        <p className="text-xs font-medium text-gray-500 mb-2">1. 날짜 (Date)</p>
        {fixedToday ? (
          <p className="text-sm text-gray-700">날짜: 오늘 ({date})</p>
        ) : (
          <MonthCalendar selectedDate={date} onSelect={setDate} />
        )}
      </div>

      <div>
        <p className="text-xs font-medium text-gray-500 mb-2">2. 상세 정보 (Details)</p>

        {kind === "golf" && (
          <div className="flex gap-2 mb-3">
            {["오전", "오후", "입력"].map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPeriod(p)}
                className={`px-3 py-1.5 rounded-full text-sm ${
                  period === p ? "bg-[#6750A4] text-white" : "bg-[#E8DEF8] text-gray-700"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        )}

        {kind === "restaurant" && (
          <>
            <p className="text-xs text-gray-400 mb-1">시간 선택</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {RESTAURANT_TIME_SLOTS.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setPeriod(t)}
                  className={`px-3 py-1.5 rounded-full text-sm ${
                    period === t ? "bg-[#6750A4] text-white" : "bg-[#E8DEF8] text-gray-700"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-400 mb-1">인원 선택</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {RESTAURANT_PARTY_SIZES.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPartySize(p)}
                  className={`px-3 py-1.5 rounded-full text-sm ${
                    partySize === p ? "bg-[#6750A4] text-white" : "bg-[#E8DEF8] text-gray-700"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </>
        )}

        {kind === "practice" && timeSlots && (
          <>
            <p className="text-xs text-gray-400 mb-1">시간 선택</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {timeSlots.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setPeriod(t)}
                  className={`px-3 py-1.5 rounded-full text-sm ${
                    period === t ? "bg-[#6750A4] text-white" : "bg-[#E8DEF8] text-gray-700"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </>
        )}

        {kind === "golf" ? (
          <input
            value={players}
            onChange={(e) => setPlayers(e.target.value)}
            placeholder="플레이어 이름 (콤마 구분)"
            className="w-full rounded-xl border border-purple-200 bg-white px-3 py-2 text-sm mb-2"
          />
        ) : (
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="예약자 성함"
            className="w-full rounded-xl border border-purple-200 bg-white px-3 py-2 text-sm mb-2"
          />
        )}
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="핸드폰 번호 (Phone Number)"
          className="w-full rounded-xl border border-purple-200 bg-white px-3 py-2 text-sm"
        />
      </div>

      <div>
        <input
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="기타 요청사항 (선택사항)"
          className="w-full rounded-xl border border-purple-200 bg-white px-3 py-2 text-sm mb-2"
        />
        {kind !== "practice" && (
          <div className="flex flex-wrap gap-2">
            {(kind === "golf" ? GOLF_TAGS : RESTAURANT_TAGS).map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1.5 rounded-full text-xs ${
                  tags.includes(tag) ? "bg-[#6750A4] text-white" : "bg-[#E8DEF8] text-gray-700"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-end gap-2 pt-1">
        <button
          type="button"
          disabled={!requiredFilled}
          onClick={handleSubmit}
          className="px-4 py-2 rounded-xl bg-[#6750A4] text-white text-sm disabled:opacity-40 disabled:cursor-not-allowed active:scale-95"
        >
          예약 확인하기
        </button>
      </div>
    </div>
  );
}
