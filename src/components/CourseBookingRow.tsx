"use client";

import { ReactNode, useState } from "react";
import BookingForm from "./BookingForm";
import { BookingSummary } from "@/types/booking";

export default function CourseBookingRow({
  title,
  priceLabel,
  meta,
  disabled,
  onComplete,
}: {
  title: string;
  priceLabel?: ReactNode;
  meta?: string;
  disabled?: boolean;
  onComplete: (summary: BookingSummary) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-2xl border border-purple-100 p-3 ${disabled ? "opacity-60" : ""}`}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-left disabled:cursor-not-allowed"
      >
        <div>
          <div className="text-sm font-medium text-gray-800">{title}</div>
          {meta && <div className="text-xs text-gray-400">{meta}</div>}
        </div>
        {priceLabel}
      </button>
      {open && !disabled && <BookingForm kind="golf" title={title} subtitle={meta} onComplete={onComplete} />}
    </div>
  );
}
