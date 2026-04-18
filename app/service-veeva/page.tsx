"use client";
import type { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";
import VerticalTabsSection from "../components/HowWeWorkSection";
import ScrollReveal from "../components/ScrollReveal";
import FaqAccordion from "../components/FaqAccordion";
import HeroSection from "../components/HeroSection";
import OrbitalCanvas from "../components/OrbitalCanvas";

type DeliveryCard = {
  title: string;
  description: string;
};

type DomainCard = {
  domain: string;
  coverage: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

const deliveryCards: DeliveryCard[] = [
  {
    title: "Implementation Support & Execution",
    description:
      "Before we touch a single configuration, we understand your environment — your SOPs, regulatory obligations, compliance history, and operational reality. What we design reflects your organisation. Not a template built for someone else.",
  },
  {
    title: "Vault Configuration & Customisation",
    description:
      "Workflows, lifecycles, and security models your teams actually use — and that hold up when the auditor arrives. Not a default setup with your name on it.",
  },
  {
    title: "System Integration & Vault Connections",
    description:
      "We connect Vault to your ERP, LIMS, safety systems, and wider technology landscape — including Vault Connections, Veeva's native integration framework that removes the need for custom code between Vault applications.",
  },
  {
    title: "Data Migration",
    description:
      "Legacy data migration is where implementations quietly unravel. Incomplete records, broken metadata, validation gaps. We manage the full migration — validated data, audit-ready documentation, no surprises after cutover.",
  },
  {
    title: "Validation & Testing",
    description:
      "IQ/OQ/PQ delivered by the consultants who configured the system — not a separate team reading your setup for the first time. Every deviation handled. Every document inspection-ready before go-live.",
  },
  {
    title: "Go-Live & Hypercare",
    description:
      " Structured cutover planning, hands-on user training, and immediate availability when questions surface. The people who built your Vault stay close — because that is when you need them most.",
  },
  {
    title: "Vault Suites We Work In",
    description:
      "Vault Clinical · Vault Quality · Vault RIM · Vault Commercial · Vault Safety · Vault CRM",
  },
]

const managedCards: DeliveryCard[] = [
  {
    title: "General Release Management & Impact Assessment",
    description:
      "Each Veeva release is assessed against your validated setup; updates are applied, validated, and documented so compliance stays intact without creating a side project.",
  },
  {
    title: "System Administration",
    description:
      "User management, security configuration, object maintenance, and workflow changes managed by consultants who know your environment in depth.",
  },
  {
    title: "Platform Optimisation",
    description:
      "Proactive identification of workflow friction and manual workarounds, replaced with controlled platform improvements aligned to your business.",
  },
  {
    title: "Helpdesk & Issue Resolution",
    description:
      "Support from specialists who already understand your Vault configuration, not a generic queue reading your system from tickets.",
  },
  {
    title: "User Training & Enablement",
    description:
      "Role-specific training delivered by the build team, so your users learn your actual process design, not a generic product walkthrough.",
  },
  {
    title: "Regulatory Update Management",
    description:
      "Ongoing review of regulatory updates that impact configuration, with controlled implementation and minimal disruption to live operations.",
  },
];

const domains: DomainCard[] = [
  {
    domain: "Quality",
    coverage:
      "Vault QualityDocs | Vault QMS | 21 CFR Part 11 | EU Annex 11 | CAPA | Deviation Management | Change Control | Training Management | Validation Management",
  },
  {
    domain: "Regulatory",
    coverage:
      "Vault RIM | Vault Registrations | Vault Submissions | Vault Submissions Publishing | Vault Submissions Archive | eCTD v3 & v4 | IDMP | Global Registration Tracking | Health Authority Interactions",
  },
  {
    domain: "Clinical",
    coverage:
      "Vault eTMF | Vault CTMS | Vault Study Startup | Vault Payments | TMF Bot | EDL Management | DIA Reference Model | Risk-Based Monitoring | GCP Compliance",
  },
  {
    domain: "Safety",
    coverage:
      "Vault Safety | Vault Safety Inbox | ICSR Management | MedDRA Coding | Pharmacovigilance | EudraVigilance | FAERS Submissions | Aggregate Reporting",
  },
  {
    domain: "Commercial",
    coverage:
      "Vault PromoMats | Vault MedComms | Vault CRM | Vault Events Management | MLR Review Workflows | Medical Affairs Content Management | HCP Engagement Compliance",
  },
];

const faqs: FaqItem[] = [
  {
    question:
      "We have an internal IT team that manages Vault day to day. Where does Wolvio fit?",
    answer:
      "Your team knows your business. We add cross-client implementation depth, validation rigor, release assessment expertise, and specialist support during audits and high-risk change windows.",
  },
  {
    question:
      "How do we know your consultants actually know Veeva and not just know about it?",
    answer:
      "Our consultants have delivered real regulated implementations, executed IQ/OQ/PQ, and built complex integrations. A 30-minute technical discussion usually makes that depth obvious immediately.",
  },
  {
    question:
      "How do you handle regulatory changes that affect our Vault configuration?",
    answer:
      "For managed clients, we run proactive impact assessments and plan controlled updates. For projects, regulatory change handling is included in scope design from the start.",
  },
  {
    question: "We are a small biotech. Can you work at our scale?",
    answer:
      "Yes. We support early-stage biotech through Veeva Basics and scale through enterprise programs. Engagement size is matched to your current stage and risk profile.",
  },
  {
    question:
      "How can we evaluate if our current Veeva environment is healthy before committing?",
    answer:
      "We offer a standalone platform assessment reviewing configuration, validation evidence, release history, and compliance posture, with a clear written risk and improvement view.",
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


// Define your data here (or fetch it from an API/CMS)
const WORK_MODELS = [
  {
    id: "consulting",
    title: "Veeva Consulting Engagements",
    desc: "Defined projects with clear scope, deliverables, and timelines for implementation, migration, integration, and targeted configuration programs delivered by senior consultants end-to-end.",
  },
  {
    id: "managed",
    title: "Veeva Managed Services",
    desc: "Once live, your platform demands shift to release stability, compliance updates, and operational evolution. We provide structured long-term support models based on your in-house capability.",
  },
  {
    id: "platform-partner",
    title: "Platform Partner",
    desc: "Full operational ownership with proactive release management, compliance monitoring, helpdesk support, and strategic platform evolution.",
  },
  {
    id: "release-cover",
    title: "Release & Compliance Cover",
    desc: "Ideal for teams with internal admins who need specialist support for impact assessments, validation updates, and high-risk escalations.",
  },
  {
    id: "expert-on-call",
    title: "Expert On-Call",
    desc: "Senior specialist input on demand for complex issues, architecture decisions, validation review, or critical integration questions.",
  },
];

// export const metadata: Metadata = {
//   title: "Veeva Consulting | Wolvio",
//   description:
//     "Specialist Veeva consulting across implementation, migration, validation, and managed services for regulated life sciences organizations.",
// };

export default function ServiceVeevaPage() {
  // At the top of the component, add these:
  const [cardPage, setCardPage] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState<"next" | "prev">("next")

  const CARDS_PER_PAGE = 4
  const totalPages = Math.ceil(deliveryCards.length / CARDS_PER_PAGE)
  const visibleCards = deliveryCards.slice(
    cardPage * CARDS_PER_PAGE,
    cardPage * CARDS_PER_PAGE + CARDS_PER_PAGE,
  )

  const MANAGED_PER_PAGE = 3
  const [managedPage, setManagedPage] = useState(0)
  const [managedAnimating, setManagedAnimating] = useState(false)
  const [managedDirection, setManagedDirection] = useState<"next" | "prev">(
    "next",
  )

  const managedTotalPages = Math.ceil(managedCards.length / MANAGED_PER_PAGE)
  const visibleManagedCards = managedCards.slice(
    managedPage * MANAGED_PER_PAGE,
    managedPage * MANAGED_PER_PAGE + MANAGED_PER_PAGE,
  )

  function goToManagedPage(next: number, dir: "next" | "prev") {
    if (managedAnimating) return
    setManagedDirection(dir)
    setManagedAnimating(true)
    setTimeout(() => {
      setManagedPage(next)
      setManagedAnimating(false)
    }, 280)
  }

  function goToPage(next: number, dir: "next" | "prev") {
    if (animating) return
    setDirection(dir)
    setAnimating(true)
    setTimeout(() => {
      setCardPage(next)
      setAnimating(false)
    }, 280)
  }
  return (
    <main className="polish-layout min-h-screen overflow-x-hidden bg-[#f8fafc] text-[#0f172a]">
      {/* <section className="hero-grid">
        <ScrollReveal className="site-container pb-14 pt-12 lg:pb-20 lg:pt-16">
          <p className="site-kicker">Veeva Consulting</p>
          <h1 className="mt-4 max-w-[1050px]">
            Veeva Implementation Partner That Knows Vault. Not Just as a
            Platform. As a Practice.
          </h1>
          <p className="site-subheading mt-5 max-w-[820px]">
            From the first implementation conversation to managed services, we
            are the Veeva implementation partner organisations come back to.
          </p>
          <Link
            href="/contact-us"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#2f6f73] px-6 py-3 text-[15px] font-semibold text-white shadow-[0_12px_30px_rgba(47,111,115,0.2)] transition hover:bg-[#285f62]"
          >
            Talk to a Veeva Specialist
            <ArrowRightIcon />
          </Link>
        </ScrollReveal>
      </section> */}

      <HeroSection
        kicker="Veeva Consulting"
        title={<>AI automation services across industries</>}
        description={
          <>
            Veeva Implementation Partner That Knows Vault. Not Just as a
            Platform. As a Practice.
          </>
        }
        buttons={[
          {
            label: "Talk to a Veeva Specialist",
            href: "/#contact",
            variant: "outline",
          },
        ]}
        svgGraphic={<OrbitalCanvas />}
      />

      <section className="site-section">
        <ScrollReveal className="site-container">
          <p className="site-kicker">What We Do</p>
          <h2 className="mt-4 max-w-[860px]">
            Built at the Intersection of{" "}
            <span className="text-[#2f8b92]">Veeva Expertise</span> and Life
            Sciences Operations.
          </h2>
          <div className="site-body mt-6 max-w-[1020px] space-y-5">
            <p>
              Most technology consultancies have a Veeva practice. It sits
              alongside their Salesforce practice, their SAP practice, their
              cloud migration practice. The consultant on your Vault
              implementation today was on a different platform last quarter and
              will be on another one next year.
            </p>
            <p>
              That is not how we work. Wolvio exists entirely within the
              intersection of Veeva Vault and life sciences. Every consultant
              here has chosen this — pharma, biotech, med tech, the regulated
              environment, depth over breadth. When you ask a difficult
              question, the person opposite you has the answer. Not because they
              looked it up. Because they have been here before.
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {[
              "8+ Certified Veeva Professionals",
              "15+ Veeva Engagements Delivered",
              "6 Vault Suites - Full Platform Coverage",
            ].map((stat) => (
              <article key={stat} className="site-card px-5 py-4">
                <p className="text-[16px] font-semibold text-[#173652]">
                  {stat}
                </p>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="site-section-alt">
        <ScrollReveal className="site-container">
          {/* ── Two-column editorial split ── */}
          <div className="mt-6 grid gap-12 lg:grid-cols-[1fr_1.55fr] lg:gap-16 xl:gap-20">
            {/* LEFT — sticky context column */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="site-kicker">End-to-End Delivery</p>
              <h2 className="max-w-[380px]">
                Veeva Vault Implementation, Migration & Integration
              </h2>

              {/* Divider */}
              {/* <div className="mt-7 h-px w-10 bg-[#2f8b92]" /> */}

              <p className="site-body mt-6">
                A misconfigured Vault doesn't fail immediately — it fails six
                months later in a workflow that contradicts your SOPs, in
                validation documentation your QA team won't sign off on. By
                then, the implementation partner has moved on.
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
                      {String(cardPage * CARDS_PER_PAGE + i + 1).padStart(
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

      <section className="site-section">
        <ScrollReveal className="site-container">
          <div className="mt-6 grid gap-12 lg:grid-cols-[1.55fr_1fr] lg:gap-16 xl:gap-20">
            {/* LEFT — paginated cards */}
            <div className="order-2 flex flex-col gap-5 lg:order-1">
              <div
                className="grid gap-4 sm:grid-cols-2 [&>article:last-child:nth-child(odd)]:col-span-2 [&>article:last-child:nth-child(odd)]:mx-auto [&>article:last-child:nth-child(odd)]:w-1/2"
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
            <div className="order-1 lg:order-2 lg:self-start">
              <p className="site-kicker">Vault Optimisation</p>
              <h2 className="max-w-[380px]">
                Veeva Managed Services & Post Go-Live Support
              </h2>
              <p className="site-body mt-6">
                Three general releases each year, changing regulations, new
                users, and evolving process demands are where most teams
                underestimate ongoing platform ownership.
              </p>
              <p className="site-body mt-4">
                We provide managed services that keep your Vault current,
                compliant, and stable — whether we implemented it or inherited
                it.
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

      <section className="site-section-alt">
        <ScrollReveal className="site-container">
          <p className="site-kicker">Vault Domain Coverage</p>
          <h2 className="mt-4 max-w-[880px]">
            Every suite. Every domain. Hands-on, not in theory.
          </h2>
          <p className="site-body mt-5 max-w-[980px]">
            The most common question we hear is whether we have delivered the
            exact module in a regulated environment for companies with similar
            complexity. Across every domain below, the answer is yes.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-6 lg:grid-cols-6">
            {domains.map((domain, index) => (
              <article
                key={domain.domain}
                className={`site-card p-6 ${
                  index < 3
                    ? "col-span-1 lg:col-span-2" // row 1: each takes 2/6 cols
                    : "col-span-1 lg:col-span-3" // row 2: each takes 3/6 cols
                }`}
              >
                <h4 className="">{domain.domain}</h4>
                <p className="mt-3">{domain.coverage}</p>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <VerticalTabsSection
        kicker="How We Work With You"
        title="Partnership Models"
        description=""
        items={WORK_MODELS}
        ctaText="Talk to Us About Managed Services"
        ctaLink="/service-veeva"
      />

      <section className="site-section-alt">
        <ScrollReveal className="site-container">
          <p className="site-kicker">FAQs</p>
          <h2 className="mt-4">Questions we hear before every engagement</h2>
          <FaqAccordion items={faqs} />
        </ScrollReveal>
      </section>

      <section className="tone-lock site-section">
        <ScrollReveal className="site-container">
          <div className="relative overflow-hidden rounded-[34px] bg-[linear-gradient(130deg,#072c52,#0a2d55_48%,#0e355f)] p-10 text-white sm:p-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(47,143,146,0.24),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(47,143,146,0.22),transparent_38%),radial-gradient(circle_at_30px_30px,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:auto,auto,34px_34px]" />
            <div className="relative text-center">
              <span className="inline-flex rounded-full border border-[#1f6980] bg-[#114866]/55 px-5 py-2 text-[14px] font-semibold uppercase tracking-[0.12em] text-[#7ec4c7]">
                Get Started
              </span>
              <h2 className="mx-auto mt-7 max-w-[900px]">
                Discuss your Veeva platform goals with specialists who deliver
                in regulated environments every day.
              </h2>
              <div className="mt-8 flex justify-center">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-3 rounded-full bg-[#3a8f90] px-10 py-4 text-[16px] font-semibold text-white transition hover:bg-[#347f80]"
                >
                  Talk to a Veeva Specialist
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
