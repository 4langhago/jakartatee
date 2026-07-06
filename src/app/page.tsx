"use client";

import { useState } from "react";
import RestaurantSection from "@/components/sections/RestaurantSection";
import MembershipSection from "@/components/sections/MembershipSection";
import GolfCourseSection from "@/components/sections/GolfCourseSection";
import PracticeSection from "@/components/sections/PracticeSection";
import BookingSummaryModal from "@/components/BookingSummaryModal";
import WhatsAppSettingsModal from "@/components/WhatsAppSettingsModal";
import { BookingSummary } from "@/types/booking";

const TABS = [
  { id: "restaurant", label: "식당", icon: "🍴" },
  { id: "membership", label: "멤버십", icon: "🎫" },
  { id: "golf", label: "골프장", icon: "🚩" },
  { id: "practice", label: "연습장", icon: "☀️" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>("restaurant");
  const [summary, setSummary] = useState<BookingSummary | null>(null);
  const [showWaSettings, setShowWaSettings] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F1F8]">
      <header className="border-b border-purple-100 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-md items-center justify-between px-4 py-3">
          <h1 className="text-lg font-bold text-gray-800">
            자카르티 <span className="text-sm font-normal text-gray-400">(JakarTee)</span>
          </h1>
          <div className="flex gap-2">
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-50 text-gray-500">🏷️</button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-50 text-gray-500">👥</button>
            <button
              onClick={() => setShowWaSettings(true)}
              aria-label="왓츠앱 수신 번호 설정"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-50 text-gray-500"
            >
              ⚙️
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-md px-4 py-5">
        <div className="mb-5">
          <p className="text-base font-medium text-gray-700">골프예약을 이곳에서, 한번에...</p>
          <p className="text-sm text-gray-400">자카르티는 자카르타와 골프의 시작인 Tee를 결합하여 만든 브랜드</p>
        </div>

        <div className="mb-5 flex gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-3 py-1.5 text-sm transition ${
                activeTab === tab.id ? "bg-[#6750A4] text-white" : "bg-[#E8DEF8] text-gray-600"
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "restaurant" && <RestaurantSection onComplete={setSummary} />}
        {activeTab === "membership" && <MembershipSection onComplete={setSummary} />}
        {activeTab === "golf" && <GolfCourseSection onComplete={setSummary} />}
        {activeTab === "practice" && <PracticeSection onComplete={setSummary} />}
      </main>

      {summary && <BookingSummaryModal summary={summary} onClose={() => setSummary(null)} />}
      {showWaSettings && <WhatsAppSettingsModal onClose={() => setShowWaSettings(false)} />}
    </div>
  );
}
