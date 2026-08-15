"use client";

import { golfCourses } from "@/data/golfCourses";
import { formatIDR } from "@/lib/format";
import { BookingSummary } from "@/types/booking";
import CourseBookingRow from "../CourseBookingRow";

export default function GolfCourseSection({ onComplete }: { onComplete: (s: BookingSummary) => void }) {
  return (
    <div className="space-y-2">
      <p className="px-1 text-xs text-gray-400">골프장 별 그린피 (평일 / 주말·공휴일 오전 요금 기준, 수시 변동)</p>
      {golfCourses.map((course) => {
        const hasAmPm =
          course.amWeekday !== undefined &&
          course.pmWeekday !== undefined &&
          course.amHoliday !== undefined &&
          course.pmHoliday !== undefined;
        return (
          <CourseBookingRow
            key={course.no}
            title={`${course.no}. ${course.name}${course.closed ? " (휴장 중)" : ""}`}
            meta={[course.phone, course.wa && `WA ${course.wa}`].filter(Boolean).join(" · ")}
            disabled={course.closed}
            priceLabel={
              course.closed ? (
                <div className="text-right text-xs font-medium text-red-500">⚠️ 운영 중단 (예약 불가)</div>
              ) : course.holiday !== null ? (
                <div className="text-right text-xs text-gray-500">
                  {hasAmPm ? (
                    <>
                      <div>
                        평일 오전 {formatIDR(course.amWeekday!)} · 오후 {formatIDR(course.pmWeekday!)}
                      </div>
                      <div>
                        주말 오전 {formatIDR(course.amHoliday!)} · 오후 {formatIDR(course.pmHoliday!)}
                      </div>
                    </>
                  ) : (
                    <>
                      <div>평일 {formatIDR(course.weekday)}</div>
                      <div>주말 {formatIDR(course.holiday)}</div>
                    </>
                  )}
                  {course.note && <div className="mt-0.5 text-amber-600">⚠️ 요금 재확인 필요</div>}
                </div>
              ) : (
                <div className="text-right text-xs text-gray-500">{course.note}</div>
              )
            }
            onComplete={onComplete}
          />
        );
      })}
    </div>
  );
}
