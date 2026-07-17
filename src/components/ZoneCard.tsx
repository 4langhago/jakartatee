"use client";

import { useState } from "react";
import AccordionCard from "./AccordionCard";
import BookingForm from "./BookingForm";
import CourseBookingRow from "./CourseBookingRow";
import { RestaurantZone } from "@/data/restaurantZones";
import { golfZoneCourses } from "@/data/golfZones";
import { formatIDR } from "@/lib/format";
import { BookingSummary } from "@/types/booking";

export default function ZoneCard({
  zone,
  onComplete,
}: {
  zone: RestaurantZone;
  onComplete: (summary: BookingSummary) => void;
}) {
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState<"restaurant" | "golf" | null>(null);
  const courses = golfZoneCourses[zone.id] ?? [];

  return (
    <AccordionCard
      isOpen={open}
      onToggle={() => setOpen((v) => !v)}
      header={
        <div className="flex items-center gap-3">
          <div>
            <h3 className="text-base font-semibold text-gray-800">{zone.nameKo}</h3>
            <p className="text-xs text-gray-400">{zone.nameEn}</p>
            {zone.phone && <p className="text-xs text-gray-400">{zone.phone}</p>}
          </div>
        </div>
      }
    >
      <div className="flex gap-2 mb-3">
        <button
          type="button"
          onClick={() => setAction("restaurant")}
          className={`rounded-full px-3 py-1.5 text-sm ${
            action === "restaurant" ? "bg-[#6750A4] text-white" : "bg-[#E8DEF8] text-gray-700"
          }`}
        >
          🍴 식당 예약
        </button>
        <button
          type="button"
          onClick={() => setAction("golf")}
          className={`rounded-full px-3 py-1.5 text-sm ${
            action === "golf" ? "bg-[#6750A4] text-white" : "bg-[#E8DEF8] text-gray-700"
          }`}
        >
          🚩 골프 예약
        </button>
      </div>

      {!action && <p className="text-sm text-gray-400">상단의 아이콘 중 하나를 선택하여 예약을 진행해 주세요.</p>}

      {action === "restaurant" && (
        <BookingForm kind="restaurant" title={`${zone.nameKo} 식당 예약`} onComplete={onComplete} />
      )}

      {action === "golf" &&
        (courses.length > 0 ? (
          <div className="space-y-2">
            <p className="text-xs text-gray-400">골프 코스 선택 : 주말 오후 요금 기준</p>
            {courses.map((c) => (
              <CourseBookingRow
                key={c.id}
                title={`${c.nameEn} (${c.nameKo})`}
                meta={`${zone.nameKo} 지역`}
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
        ) : (
          <p className="text-sm text-gray-400">이 지역은 준비 중입니다. 담당자에게 문의해 주세요.</p>
        ))}
    </AccordionCard>
  );
}
