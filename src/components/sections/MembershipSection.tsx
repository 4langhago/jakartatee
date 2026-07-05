"use client";

import { useState } from "react";
import AccordionCard from "../AccordionCard";
import CourseBookingRow from "../CourseBookingRow";
import { membershipCards, membershipCourses, regions } from "@/data/membership";
import { formatIDR } from "@/lib/format";
import { BookingSummary } from "@/types/booking";

export default function MembershipSection({ onComplete }: { onComplete: (s: BookingSummary) => void }) {
  const [openCard, setOpenCard] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<Record<string, "all" | "region">>({});
  const [selectedRegion, setSelectedRegion] = useState<Record<string, string>>({});

  return (
    <div className="space-y-3">
      {membershipCards.map((card) => {
        const mode = viewMode[card.id] ?? "all";
        const region = selectedRegion[card.id];
        const list = mode === "region" && region ? membershipCourses.filter((c) => c.region === region) : membershipCourses;

        return (
          <AccordionCard
            key={card.id}
            isOpen={openCard === card.id}
            onToggle={() => setOpenCard((v) => (v === card.id ? null : card.id))}
            header={
              <div>
                <h3 className="text-base font-semibold text-gray-800">{card.nameKo}</h3>
                <p className="text-xs text-gray-400">{card.nameEn}</p>
              </div>
            }
          >
            <div className="mb-3 flex gap-2">
              <button
                type="button"
                onClick={() => setViewMode((v) => ({ ...v, [card.id]: "all" }))}
                className={`rounded-full px-3 py-1.5 text-sm ${
                  mode === "all" ? "bg-[#6750A4] text-white" : "bg-[#E8DEF8] text-gray-700"
                }`}
              >
                전체 리스트
              </button>
              <button
                type="button"
                onClick={() => setViewMode((v) => ({ ...v, [card.id]: "region" }))}
                className={`rounded-full px-3 py-1.5 text-sm ${
                  mode === "region" ? "bg-[#6750A4] text-white" : "bg-[#E8DEF8] text-gray-700"
                }`}
              >
                지역별 보기
              </button>
            </div>

            {mode === "region" && (
              <div className="mb-3">
                <p className="mb-1 text-xs text-gray-400">지역 선택 (SELECT REGION)</p>
                <div className="flex flex-wrap gap-2">
                  {regions.map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setSelectedRegion((v) => ({ ...v, [card.id]: r }))}
                      className={`rounded-full px-3 py-1.5 text-xs ${
                        region === r ? "bg-[#6750A4] text-white" : "bg-[#E8DEF8] text-gray-700"
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <p className="mb-2 text-xs text-gray-400">
              {mode === "region" && region ? `${region.toUpperCase()} 코스 리스트` : "전체 코스 (가나다순)"}
            </p>
            <div className="space-y-2">
              {list.map((c) => (
                <CourseBookingRow
                  key={c.id}
                  title={`${c.nameEn} (${c.nameKo})`}
                  meta={`${card.nameKo} 회원가`}
                  priceLabel={
                    <div className="text-right text-xs text-gray-500">
                      <div>SAT {formatIDR(c.satPrice)}</div>
                      <div>SUN {formatIDR(c.sunPrice)}</div>
                    </div>
                  }
                  onComplete={onComplete}
                />
              ))}
            </div>
          </AccordionCard>
        );
      })}
    </div>
  );
}
