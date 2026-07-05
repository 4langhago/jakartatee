"use client";

import { useState } from "react";

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];

export default function MonthCalendar({
  selectedDate,
  onSelect,
}: {
  selectedDate: string | null;
  onSelect: (isoDate: string) => void;
}) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth()); // 0-indexed

  const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  function goPrevMonth() {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  }

  function goNextMonth() {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  }

  function isoFor(day: number) {
    const mm = String(viewMonth + 1).padStart(2, "0");
    const dd = String(day).padStart(2, "0");
    return `${viewYear}-${mm}-${dd}`;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <button type="button" onClick={goPrevMonth} className="px-2 py-1 rounded-lg hover:bg-purple-100">
          ‹
        </button>
        <span className="text-sm font-medium text-gray-700">
          {viewYear}년 {viewMonth + 1}월
        </span>
        <button type="button" onClick={goNextMonth} className="px-2 py-1 rounded-lg hover:bg-purple-100">
          ›
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-400 mb-1">
        {WEEKDAYS.map((w) => (
          <div key={w}>{w}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: firstDayOfWeek }).map((_, i) => (
          <div key={`pad-${i}`} />
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
          const iso = isoFor(day);
          const isSelected = selectedDate === iso;
          return (
            <button
              type="button"
              key={day}
              onClick={() => onSelect(iso)}
              className={`aspect-square rounded-full text-sm transition ${
                isSelected
                  ? "bg-[#6750A4] text-white"
                  : "text-gray-700 hover:bg-purple-100 active:scale-90"
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
