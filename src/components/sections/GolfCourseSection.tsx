"use client";

import { golfCourses } from "@/data/golfCourses";
import { formatIDR } from "@/lib/format";
import { BookingSummary } from "@/types/booking";
import CourseBookingRow from "../CourseBookingRow";

export default function GolfCourseSection({ onComplete }: { onComplete: (s: BookingSummary) => void }) {
  return (
    <div className="space-y-2">
      <p className="px-1 text-xs text-gray-400">골프장 별 그린피 (평일 / 주말·공휴일 오전 요금 기준, 수시 변동)</p>
      {golfCourses.map((course) => (
        <CourseBookingRow
          key={course.no}
          title={`${course.no}. ${course.name}`}
          meta={[course.phone, course.wa && `WA ${course.wa}`].filter(Boolean).join(" · ")}
          priceLabel={
            course.holiday !== null ? (
              <div className="text-right text-xs text-gray-500">
                <div>평일 {formatIDR(course.weekday)}</div>
                <div>주말 {formatIDR(course.holiday)}</div>
              </div>
            ) : (
              <div className="text-right text-xs text-gray-500">{course.note}</div>
            )
          }
          onComplete={onComplete}
        />
      ))}
    </div>
  );
}
