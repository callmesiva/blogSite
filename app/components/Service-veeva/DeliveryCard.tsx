"use client";

import Link from "next/link";
import ScrollReveal from "../ScrollReveal";
import { useState } from "react";

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

type DeliveryCard = {
  title: string;
  description: string;
};

const deliveryCards: DeliveryCard[] = [
  {
    title: "Discovery & Solution Design ",
    description:
      "We start with your operating reality SOPs, compliance requirements, business processes, and platform constraints so the solution is designed for your environment, not adapted from a generic template.",
  },
  {
    title: "Vault Implementation Execution",
    description:
      "End-to-end implementation support across planning, configuration, testing, deployment, and cutover delivered with a focus on long-term stability, usability, and inspection readiness.",
  },
  {
    title: "Vault Configuration & Customisation",
    description:
      "End-to-end implementation support across planning, configuration, testing, deployment, and cutover delivered with a focus on long-term stability, usability, and inspection readiness",
  },
  {
    title: "System Integration & Vault Connections",
    description:
      "Integration of Vault with ERP, LIMS, safety systems, and adjacent platforms including Vault Connections and fit-for-purpose integration patterns that reduce unnecessary customisation.",
  },
  {
    title: "Data Migration & Legacy Transition",
    description:
      "Structured migration of legacy records, metadata, and documents into Vault with mapping discipline, reconciliation control, and audit-ready documentation that supports confident cutover.",
  },
  {
    title: "Validation, Testing & Documentation",
    description:
      "IQ/OQ/PQ, traceability, test execution, deviation handling, and validation documentation delivered by the same team that configured the platform ensuring accuracy, continuity, and compliance confidence.",
  },
  {
    title: "Go-Live, Cutover & Hypercare",
    description:
      "Controlled deployment planning, user readiness, cutover coordination, and post-go-live support from the consultants who built the solution when real-world questions and edge cases surface fastest.",
  },
  {
    title: "Vault Suite Coverage",
    description:
      "Delivery experience across Vault Clinical, Vault Quality, Vault RIM, Vault Safety, Vault Commercial, and Vault CRM with cross-functional understanding of how regulated processes connect across the platform.",
  },
];

export default function DeliveryCard() {
  const [cardPage, setCardPage] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const CARDS_PER_PAGE = 4;
  const totalPages = Math.ceil(deliveryCards.length / CARDS_PER_PAGE);
  const visibleCards = deliveryCards.slice(
    cardPage * CARDS_PER_PAGE,
    cardPage * CARDS_PER_PAGE + CARDS_PER_PAGE,
  );

  function goToPage(next: number, dir: "next" | "prev") {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCardPage(next);
      setAnimating(false);
    }, 280);
  }

  return (
    <section className="site-section-alt">
      <ScrollReveal className="site-container">
        {/* ── Two-column editorial split ── */}
        <div className="mt-6 grid gap-12 lg:grid-cols-[1fr_1.55fr] lg:gap-16 xl:gap-20">
          {/* LEFT — sticky context column */}
          <div className="lg:sticky lg:top-28 lg:self-center">
            <p className="site-kicker">End-to-End Delivery</p>
            <h2 className="max-w-[380px]">
              Veeva Vault Implementation, Migration & Integration
            </h2>

            {/* Divider */}
            {/* <div className="mt-7 h-px w-10 bg-[#2f8b92]" /> */}

            <p className="site-body mt-6">
              A misconfigured Vault doesn't fail immediately — it fails six
              months later in a workflow that contradicts your SOPs, in
              validation documentation your QA team won't sign off on. By then,
              the implementation partner has moved on.
            </p>
            <p className="site-body mt-4">
              Every configuration decision we make is built around your
              long-term compliance posture — because that is what a regulated
              environment actually demands.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-[#2f7f88] transition hover:gap-3"
            >
              Tell Us About Your Implementation
              <ArrowRightIcon />
            </Link>
          </div>

          {/* RIGHT — paginated cards */}
          <div className="flex flex-col gap-5">
            {/* Card grid */}
            <div
              className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2"
              style={{
                opacity: animating ? 0 : 1,
                transform: animating
                  ? `translateX(${direction === "next" ? "-18px" : "18px"})`
                  : "translateX(0)",
                transition: "opacity 280ms ease, transform 280ms ease",
              }}
            >
              {visibleCards.map((card, i) => (
                <article
                  key={card.title}
                  className="group relative flex flex-col gap-4 overflow-hidden rounded-[22px] border border-[#d7dde4] bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2f8b92]/40 hover:shadow-[0_12px_32px_rgba(10,37,64,0.08)]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eef6f7] text-[13px] font-semibold text-[#2f8b92] transition-colors duration-300 group-hover:bg-[#2f8b92] group-hover:text-white">
                    {String(cardPage * CARDS_PER_PAGE + i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[17px] font-semibold leading-[1.3] tracking-[-0.02em] text-[#173652]">
                      {card.title}
                    </h3>
                    <p className="mt-2.5 text-[14px] leading-[1.65] text-[#63798d]">
                      {card.description}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#0b3a63] to-[#2f8b92] transition-all duration-500 group-hover:w-full" />
                </article>
              ))}
            </div>

            {/* Pagination controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between pt-1">
                {/* Dot indicators */}
                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() =>
                        goToPage(i, i > cardPage ? "next" : "prev")
                      }
                      aria-label={`Go to page ${i + 1}`}
                      className="group/dot flex items-center"
                    >
                      <span
                        className="block rounded-full bg-[#2f8b92] transition-all duration-300"
                        style={{
                          width: i === cardPage ? 24 : 8,
                          height: 8,
                          opacity: i === cardPage ? 1 : 0.25,
                        }}
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-[13px] text-[#8fa5b8]">
                    {cardPage * CARDS_PER_PAGE + 1}–
                    {Math.min(
                      (cardPage + 1) * CARDS_PER_PAGE,
                      deliveryCards.length,
                    )}{" "}
                    of {deliveryCards.length}
                  </span>
                </div>

                {/* Prev / Next arrows */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => goToPage(cardPage - 1, "prev")}
                    disabled={cardPage === 0}
                    aria-label="Previous"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d7dde4] bg-white text-[#0a2540] transition hover:border-[#2f8b92] hover:text-[#2f8b92] disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    onClick={() => goToPage(cardPage + 1, "next")}
                    disabled={cardPage === totalPages - 1}
                    aria-label="Next"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d7dde4] bg-white text-[#0a2540] transition hover:border-[#2f8b92] hover:text-[#2f8b92] disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
