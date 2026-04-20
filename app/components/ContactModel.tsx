"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import Link from "next/link";

function ArrowRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

export default function ContactModel() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <section className="tone-lock site-section">
        <ScrollReveal className="site-container">
          <div className="relative overflow-hidden rounded-[34px] bg-[linear-gradient(130deg,#072c52,#0a2d55_48%,#0e355f)] p-10 text-white sm:p-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(47,143,146,0.24),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(47,143,146,0.22),transparent_38%),radial-gradient(circle_at_30px_30px,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:auto,auto,34px_34px]" />
            <div className="relative text-center">
              <span className="inline-flex rounded-full border border-[#1f6980] bg-[#114866]/55 px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#7ec4c7]">
                Get Started
              </span>
              <h2 className="mx-auto mt-7 max-w-[920px]">
                Tell us about your environment and challenge. We read every
                message and reply with a specific, considered response — not a
                template.
              </h2>
              <div className="mt-8 flex justify-center">
                <button
                onClick={()=> setIsOpen(true)}
     
                  className="inline-flex items-center gap-3 rounded-full bg-[#3a8f90] px-10 py-4 text-[14px] font-semibold text-white transition hover:bg-[#347f80]"
                >
                  Get in touch
                  <ArrowRightIcon />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 px-4 py-8 sm:py-12">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#0a2540]/80 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Container */}
          <div className="relative z-[1000] flex h-[90vh] md:w-[60vw] max-w-6xl flex-col overflow-hidden rounded-[24px] bg-white shadow-2xl md:h-[85vh]">
            {/* Header / Close Button */}
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
              <span className="text-sm font-bold uppercase tracking-wider text-[#0a2540]">
                Contact Wolvio
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-gray-100 p-2 text-gray-500 transition hover:bg-gray-200 hover:text-black"
              >
                <X size={20} />
              </button>
            </div>

            {/* Iframe content */}
            <div className="flex-1 bg-gray-50">
              <iframe
                src="https://forms.zohopublic.in/wolviosolutions/form/ContactUs/formperma/5lXrF3naIqH5J_NNih7iPLLas8x8miLIRA1_xKOL8og?zf_rszfm=1"
                className="h-full w-full border-none"
                title="Contact Form"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
