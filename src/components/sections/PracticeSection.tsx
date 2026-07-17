"use client";

import { useState } from "react";
import AccordionCard from "../AccordionCard";
import BookingForm from "../BookingForm";
import { practiceRanges } from "@/data/practiceRange";
import { BookingSummary } from "@/types/booking";

export default function PracticeSection({ onComplete }: { onComplete: (s: BookingSummary) => void }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {practiceRanges.map((range) => (
        <AccordionCard
          key={range.id}
          isOpen={open === range.id}
          onToggle={() => setOpen((v) => (v === range.id ? null : range.id))}
          header={
            <div>
              <h3 className="text-base font-semibold text-gray-800">{range.nameKo}</h3>
              <p className="text-xs text-gray-400">{range.nameEn}</p>
              <p className="text-xs text-gray-400">{range.area}</p>
            </div>
          }
        >
          <BookingForm
            kind="practice"
            title={range.nameKo}
            timeSlots={range.timeSlots}
            fixedToday
            onComplete={onComplete}
          />
        </AccordionCard>
      ))}
    </div>
  );
}
