"use client";

import { useState } from "react";
import ScrollReveal from "../ScrollReveal";
import Link from "next/link";

type DeliveryCard = {
  title: string;
  description: string;
};

const managedCards: DeliveryCard[] = [
  {
    title: "General Release Management",
    description:
      "Every Veeva release is assessed against your validated environment, with impact analysis, change planning, regression considerations, and controlled updates that protect release stability and compliance.",
  },
  {
    title: "Release Impact Assessment & Validation Support",
    description:
      "We identify what changes, what needs revalidation, what documentation must be updated, and what can remain untouched — so every release is handled with clarity, not uncertainty.",
  },
  {
    title: "Vault System Administration",
    description:
      "User access, security roles, object maintenance, workflow updates, configuration controls, and day-to-day administration managed by consultants who understand your live environment and governance expectations.",
  },
  {
    title: "Platform Optimisation & Continuous Improvement",
    description:
      "We help your Vault evolve with your business by identifying workflow friction, replacing manual workarounds, and implementing controlled improvements that strengthen usability without compromising validation discipline..",
  },
  {
    title: "Incident Support & Issue Resolution",
    description:
      "When something breaks or behaves unexpectedly, you work with specialists who know your Vault — not a generic support queue trying to reconstruct context from a ticket summary.",
  },
  {
    title: " User Support, Training & Enablement",
    description:
      "Role-specific guidance, admin support, refresher training, and practical enablement delivered against how your Vault is actually configured — not generic product training detached from your environment.",
  },
  {
    title: "Regulatory Change & Compliance Alignment",
    description:
      "As regulatory expectations evolve, we assess the impact on your Vault configuration, documentation, and operating model — helping you adapt changes without disrupting validated operations.",
  },
  {
    title: "Managed Services Governance & Advisory",
    description:
      "Structured support governance with prioritisation, review cadences, enhancement oversight, and expert advisory input — giving your teams a dependable operating model, not just reactive ticket handling.",
  },
];

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

export default function ManageCard() {
  const MANAGED_PER_PAGE = 4;
  const [managedPage, setManagedPage] = useState(0);
  const [managedAnimating, setManagedAnimating] = useState(false);
  const [managedDirection, setManagedDirection] = useState<"next" | "prev">(
    "next",
  );

  const managedTotalPages = Math.ceil(managedCards.length / MANAGED_PER_PAGE);
  const visibleManagedCards = managedCards.slice(
    managedPage * MANAGED_PER_PAGE,
    managedPage * MANAGED_PER_PAGE + MANAGED_PER_PAGE,
  );

  function goToManagedPage(next: number, dir: "next" | "prev") {
    if (managedAnimating) return;
    setManagedDirection(dir);
    setManagedAnimating(true);
    setTimeout(() => {
      setManagedPage(next);
      setManagedAnimating(false);
    }, 280);
  }

  return (
    <section className="site-section">
      <ScrollReveal className="site-container">
        <div className="mt-6 grid gap-12 lg:grid-cols-[1.55fr_1fr] lg:gap-16 xl:gap-20">
          {/* LEFT - paginated cards */}
          <div className="order-2 flex flex-col gap-5 lg:order-1">
            <div
              className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2"
              style={{
                opacity: managedAnimating ? 0 : 1,
                transform: managedAnimating
                  ? `translateX(${managedDirection === "next" ? "-18px" : "18px"})`
                  : "translateX(0)",
                transition: "opacity 280ms ease, transform 280ms ease",
              }}
            >
              {visibleManagedCards.map((card, i) => (
                <article
                  key={card.title}
                  className="group relative flex flex-col gap-4 overflow-hidden rounded-[22px] border border-[#d7dde4] bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2f8b92]/40 hover:shadow-[0_12px_32px_rgba(10,37,64,0.08)]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eef6f7] text-[13px] font-semibold text-[#2f8b92] transition-colors duration-300 group-hover:bg-[#2f8b92] group-hover:text-white">
                    {String(managedPage * MANAGED_PER_PAGE + i + 1).padStart(
                      2,
                      "0",
                    )}
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

            {/* Pagination */}
            {managedTotalPages > 1 && (
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  {Array.from({ length: managedTotalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() =>
                        goToManagedPage(i, i > managedPage ? "next" : "prev")
                      }
                      aria-label={`Page ${i + 1}`}
                    >
                      <span
                        className="block rounded-full bg-[#2f8b92] transition-all duration-300"
                        style={{
                          width: i === managedPage ? 24 : 8,
                          height: 8,
                          opacity: i === managedPage ? 1 : 0.25,
                        }}
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-[13px] text-[#8fa5b8]">
                    {managedPage * MANAGED_PER_PAGE + 1}–
                    {Math.min(
                      (managedPage + 1) * MANAGED_PER_PAGE,
                      managedCards.length,
                    )}{" "}
                    of {managedCards.length}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => goToManagedPage(managedPage - 1, "prev")}
                    disabled={managedPage === 0}
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
                    onClick={() => goToManagedPage(managedPage + 1, "next")}
                    disabled={managedPage === managedTotalPages - 1}
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

          {/* RIGHT — sticky prose */}
          <div className="order-1 lg:order-2 lg:self-center">
            <p className="site-kicker">Vault Optimisation</p>
            <h2 className="max-w-[380px]">
              Veeva Managed Services & Post Go-Live Support
            </h2>
            <p className="site-body mt-6">
              Three general releases each year, changing regulations, new users,
              and evolving process demands are where most teams underestimate
              ongoing platform ownership.
            </p>
            <p className="site-body mt-4">
              We provide managed services that keep your Vault current,
              compliant, and stable — whether we implemented it or inherited it.
            </p>
            <Link
              href="/service-veeva"
              className="mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-[#2f7f88] transition hover:gap-3"
            >
              Talk to Us About Managed Services
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
