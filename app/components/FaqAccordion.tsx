"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-8 space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const numberText = String(index + 1).padStart(2, "0");

        return (
          <div
            key={index}
            onClick={() => toggleOpen(index)}
            className={`site-card !rounded-[24px] px-6 py-5 transition-all duration-300 cursor-pointer group ${
              index % 2 !== 0 ? "bg-[#f8fafc]" : "bg-white"
            } hover:border-[#2f8b92]/50 hover:shadow-md`}
          >
            <div className="flex items-center gap-5">
              {/* Left Number Box */}
              <div
                className={`flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[12px] border-[1.5px] font-semibold text-[15px] transition-all duration-300 ${
                  isOpen
                    ? "border-[#2f8b92] bg-[#2f8b92] text-white shadow-[0_4px_12px_rgba(47,139,146,0.3)]"
                    : "border-[#2f8b92] bg-transparent text-[#2f8b92] group-hover:bg-[#eef6f7]"
                }`}
              >
                {numberText}
              </div>

              {/* Question Text */}
              <h3
                className={`flex-1 text-[17px] font-semibold leading-[1.3] transition-colors duration-300 ${
                  isOpen
                    ? "text-[#2f8b92]"
                    : "text-[#173652] group-hover:text-[#2f8b92]"
                }`}
              >
                {item.question}
              </h3>

              {/* Right Arrow Circle */}
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[1.5px] transition-all duration-300 ${
                  isOpen
                    ? "border-[#2f8b92] bg-[#2f8b92] text-white shadow-[0_4px_12px_rgba(47,139,146,0.3)]"
                    : "border-[#2f8b92] bg-transparent text-[#2f8b92] group-hover:bg-[#eef6f7]"
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`h-[18px] w-[18px] transition-transform duration-300 ${
                    isOpen ? "-rotate-180" : "rotate-0"
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>

            {/* Expandable Answer */}
            <div
              className={`grid transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="pl-[64px] pt-4 pb-2 text-[15px] leading-[1.65] text-[#4a6070]">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
