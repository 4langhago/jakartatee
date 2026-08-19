"use client";

import { golfCourses } from "@/data/golfCourses";
import { formatIDR } from "@/lib/format";
import { BookingSummary } from "@/types/booking";
import CourseBookingRow from "../CourseBookingRow";

export default function GolfCourseSection({ onComplete }: { onComplete: (s: BookingSummary) => void }) {
  return (
    <div className="space-y-2">
      <p className="px-1 text-xs text-gray-400">골프장 별 그린피 (평일 / 주말·공휴일 오전 요금 기준, 수시 변동)</p>
      <p className="px-1 text-xs text-amber-600">
        ⚠️ 예약 사기 주의 — 표기된 번호는 공식 채널 기준이나 변경될 수 있습니다. 예약금 선입금을 요구하면 중단하고 유선번호로 직접 확인하세요.
      </p>
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
                    <div className="grid grid-cols-[auto_auto_auto] items-baseline justify-end gap-x-1.5 gap-y-0.5 whitespace-nowrap">
                      <span className="text-left text-gray-400">평일</span>
                      <span>오전 {formatIDR(course.amWeekday!)}</span>
                      <span>오후 {formatIDR(course.pmWeekday!)}</span>
                      <span className="text-left text-gray-400">주말</span>
                      <span>오전 {formatIDR(course.amHoliday!)}</span>
                      <span>오후 {formatIDR(course.pmHoliday!)}</span>
                    </div>
                  ) : (
                    <>
                      <div className="whitespace-nowrap">평일 {formatIDR(course.weekday)}</div>
                      <div className="whitespace-nowrap">주말 {formatIDR(course.holiday)}</div>
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
