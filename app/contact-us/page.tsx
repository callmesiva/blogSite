"use client";
//import type { Metadata } from "next";
import Link from "next/link";
import ZohoEmbed from "../components/ZohoEmbed";
import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedUnderline from "../components/AnimatedUnderline";

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

// export const metadata: Metadata = {
//   title: "Contact Us | Wolvio",
//   description:
//     "Get in touch with Wolvio for Veeva consulting and AI automation services. Book a call, find office locations, and reach us directly.",
// };



export default function ContactUsPage() {

   const [showWidget, setShowWidget] = useState(false);
  
  // State for the interactive time chips
  const [activeChip, setActiveChip] = useState("30 min");
  const timeChips = ["30 min", "Morning", "Afternoon"];

  const benefits = [
    "A focused conversation about your specific challenge",
    "A clear view of how Wolvio approaches engagements",
    "An honest steer on whether we are the right fit",
  ];

  return (
    <main className="polish-layout min-h-screen overflow-x-hidden bg-[#f8fafc] text-[#0f172a]">
      <section className="hero-grid">
        <ScrollReveal className="site-container pb-14 pt-12 lg:pb-20 lg:pt-16 flex flex-col items-center text-center">
          <p className="site-kicker">Contact Us</p>
          <h1 className="mt-4 max-w-[920px]">
            Good work <AnimatedUnderline>starts</AnimatedUnderline> with an honest conversation
          </h1>
          <p className="site-subheading mt-5 max-w-[980px]">
            Whether you are here about our Veeva practice or our AI and
            automation services, a direct conversation is where every engagement
            starts.
          </p>
        </ScrollReveal>
      </section>

      <section className="site-section font-['DM_Sans',sans-serif]">
        <ScrollReveal className="site-container">
          {/* Inline styles for custom fonts and complex animation keyframes */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');
        
        @keyframes cardReveal {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes orbFloat {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(18px, -18px); }
        }
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes itemSlide {
          from { opacity: 0; transform: translateX(-16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(0.85); }
        }
      `,
            }}
          />

          <h2 className="sr-only">
            Book a call with Wolvio's founding consultant
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* ── LEFT CARD ── */}
            <div className="relative flex flex-col max-h-[480px] overflow-hidden rounded-[28px] sm:rounded-[34px] bg-[linear-gradient(135deg,#061e38_0%,#082744_45%,#0b2f52_100%)] p-8 sm:p-10 text-white animate-[cardReveal_0.7s_cubic-bezier(0.22,1,0.36,1)_both]">
              {/* Dot Grid Background */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px]"></div>

              {/* Floating Orbs */}
              <div className="pointer-events-none absolute -left-20 -top-20 h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(47,175,178,0.18)_0%,transparent_70%)] animate-[orbFloat_8s_ease-in-out_infinite]"></div>
              <div className="pointer-events-none absolute -bottom-15 -right-10 h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(47,175,178,0.14)_0%,transparent_70%)] animate-[orbFloat_11s_ease-in-out_infinite_reverse]"></div>

              <div className="relative z-10 flex h-full flex-col">
                <span className="inline-flex self-start rounded-full border border-[#7ec4c7]/35 bg-[#114866]/50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#7ec4c7] animate-[fadeSlideDown_0.5s_0.2s_cubic-bezier(0.22,1,0.36,1)_both]">
                  Prefer a Direct Conversation?
                </span>

                <h2 className="mt-5 text-white animate-[fadeSlideDown_0.5s_0.35s_cubic-bezier(0.22,1,0.36,1)_both]">
                  Book a 30-minute call with our founding consultant.
                </h2>

                <p className="mt-3.5 text-[14.5px] font-light leading-[1.7] text-[#b6c9da]/85 animate-[fadeSlideDown_0.5s_0.5s_cubic-bezier(0.22,1,0.36,1)_both]">
                  We'll talk through your challenges and give you a straight
                  answer on whether we're the right fit — no obligation, no
                  sales pitch.
                </p>

                <div className="mt-auto pt-7 flex flex-col">
                  {benefits.map((text, index) => (
                    <div
                      key={index}
                      className="group flex cursor-default items-start gap-3.5 border-t border-white/10 py-4 last:border-b transition-colors duration-200 animate-[itemSlide_0.6s_cubic-bezier(0.22,1,0.36,1)_both]"
                      style={{ animationDelay: `${0.65 + index * 0.17}s` }}
                    >
                      <div className="mt-[7px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#7ec4c7] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[1.4] group-hover:bg-[#a8e0e2]"></div>
                      <span className="text-[14px] font-normal leading-[1.6] text-[#c8dce8] transition-colors duration-250 group-hover:text-[#e8f4f5]">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT CARD ── */}
            <div className={`relative flex flex-col h-[480px] max-h-[480px] rounded-[28px] sm:rounded-[34px] border-[0.5px] border-[#e2e2e0] bg-[#f4f4f2] animate-[cardReveal_0.7s_0.15s_cubic-bezier(0.22,1,0.36,1)_both] box-border transition-all duration-500 ease-in-out ${showWidget ? "overflow-y-auto" : "overflow-hidden"}`}>
              
              {/* Actual Embed - Always Rendered to load in background, but visually hidden until clicked */}
              <div className={`w-full transition-opacity duration-500 z-0 ${showWidget ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <ZohoEmbed />
              </div>

              {/* Placeholder UI - overlaid absolutely so it perfectly centers and never breaks layout during fade transition */}
              <div className={`absolute inset-0 flex flex-col items-center justify-center p-8 sm:p-10 gap-5 transition-[opacity,visibility] duration-300 z-10 ${showWidget ? "opacity-0 invisible pointer-events-none" : "opacity-100 visible"}`}>
                  <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[16px] bg-[linear-gradient(135deg,#082744,#0b2f52)]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 fill-none stroke-[#7ec4c7] stroke-[1.8px]"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="3" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>

                  <div className="text-center">
                    <p className="mb-1 text-[13px] font-medium uppercase tracking-[0.06em] text-[#6b7280]">
                      Schedule a call
                    </p>
                    <p className="text-[1.45rem] leading-[1.3] text-[#111827]">
                      Pick a time that
                      <br />
                      works for you
                    </p>
                  </div>

                  {/* <div className="flex flex-wrap justify-center gap-2">
                    {timeChips.map((chip) => (
                      <button
                        key={chip}
                        onClick={() => setActiveChip(chip)}
                        className={`rounded-full border-[0.5px] px-4 py-1.5 text-[13px] font-medium transition-all duration-200 ${
                          activeChip === chip
                            ? "border-transparent bg-[#082744] text-[#7ec4c7]"
                            : "border-[#d1d5db] bg-white text-[#6b7280] hover:border-transparent hover:bg-[#082744] hover:text-[#7ec4c7]"
                        }`}
                      >
                        {chip}
                      </button>
                    ))}
                  </div> */}

                  <button
                    onClick={() => setShowWidget(true)}
                    className="w-full max-w-[260px] rounded-full bg-[linear-gradient(135deg,#082744,#0e3a66)] px-6 py-3.5 font-['DM_Sans',sans-serif] text-[14.5px] font-medium tracking-[0.02em] text-white transition-all duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.04] active:scale-[0.98]"
                  >
                    Book your free call →
                  </button>

                  <div className="flex items-center gap-1.5 text-[12.5px] text-[#6b7280]">
                    <div className="h-[7px] w-[7px] rounded-full bg-[#3bba8a] animate-[pulseDot_2s_ease-in-out_infinite]"></div>
                    <span>Usually responds within a few hours</span>
                  </div>
                </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </main>
  );
}
