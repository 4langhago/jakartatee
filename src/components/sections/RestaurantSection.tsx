"use client";

import ZoneCard from "../ZoneCard";
import { restaurantZones } from "@/data/restaurantZones";
import { BookingSummary } from "@/types/booking";

export default function RestaurantSection({ onComplete }: { onComplete: (s: BookingSummary) => void }) {
  return (
    <div className="space-y-3">
      {restaurantZones.map((zone) => (
        <ZoneCard key={zone.id} zone={zone} onComplete={onComplete} />
      ))}
    </div>
  );
}
