"use client";

import { ReactNode } from "react";

export default function AccordionCard({
  isOpen,
  onToggle,
  header,
  children,
}: {
  isOpen: boolean;
  onToggle: () => void;
  header: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[24px] bg-white p-3.5 shadow-sm">
      <div className="flex cursor-pointer items-center justify-between" onClick={onToggle}>
        {header}
        <span className={`ml-2 shrink-0 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}>⌄</span>
      </div>
      {isOpen && <div className="mt-2">{children}</div>}
    </div>
  );
}
