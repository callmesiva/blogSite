import type { Metadata } from "next";
import Link from "next/link";
import { TestimonialsSection } from "../components/testimonials";
import VerticalTabsSection from "../components/HowWeWorkSection";

type Differentiator = {
  id: string;
  title: string;
  desc: string;
};

const differentiators: Differentiator[] = [
  {
    id: "01",
    title: "Depth Over Breadth. Always.",
    desc: "Every consultant and engineer at Wolvio has chosen depth over platform rotation. You work with people who have spent their careers in the space they operate in. That focus is why clients trust us with high-impact work.",
  },
  {
    id: "02",
    title: "The People You Meet Are the People Who Deliver.",
    desc: "We do not pitch with seniors and hand off to juniors. The person who scopes with you is the one accountable through delivery and beyond. No hidden handoffs and no surprises on engagement ownership.",
  },
  {
    id: "03",
    title: "Speed Without Cutting Corners.",
    desc: "Fast delivery and high standards are compatible when work is structured correctly. We move quickly where we can and deliberately where we must, so timelines improve without reducing confidence in outcomes.",
  },
  {
    id: "04",
    title: "Standards Built In. Not Bolted On.",
    desc: "In life sciences we embed GxP, CSV, and 21 CFR Part 11 from day one. In AI we design privacy, security, and responsible deployment into the architecture itself. Compliance is part of build, not a final checklist.",
  },
  {
    id: "05",
    title: "Expertise That Shows Up in the Room.",
    desc: "When teams ask difficult questions, we answer directly. When delivery risks surface, we have seen them before. That depth reduces surprises and keeps momentum through complex engagements.",
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

export const metadata: Metadata = {
  title: "Why Wolvio | Wolvio",
  description:
    "Understand what sets Wolvio apart across Veeva consulting and AI automation services in regulated and operationally complex environments.",
};

const services = [
  {
    number: "01",
    accent: "bg-[#2f8b92]", // Your primary teal accent
    title: "Wolvio Life Sciences - Veeva Consulting & Managed Services",
    description:
      "For pharma, biotech, and med tech teams that need a Vault partner who understands regulated operations from the inside. From first implementation to migration and integration, we follow a structured discovery-to-validation methodology with GxP embedded at every stage.",
    href: "/service-veeva",
    linkText: "Explore now",
  },
  {
    number: "02",
    accent: "bg-[#0b3a63]", // Your secondary navy accent
    title: "Wolvio Intelligence - AI & Automation Services",
    description:
      "For organizations that need intelligent automation that runs in production. We start from operational problems before technology choices, because the right tool on the wrong foundation still fails.",
    href: "/service-wolvio",
    linkText: "Explore now",
  },
];

export default function WhyWolvioPage() {
  return (
    <main className="polish-layout min-h-screen overflow-x-hidden bg-[#f8fafc] text-[#0f172a]">
      <section className="hero-grid">
        <div className="site-container pb-14 pt-12 lg:pb-20 lg:pt-16">
          <p className="site-kicker">Why Wolvio</p>
          <h1 className="mt-4 max-w-[930px]">Why choose Wolvio Solutions?</h1>
          <p className="site-subheading mt-5 max-w-[1040px]">
            In regulated environments, the wrong Veeva partner does not just
            slow you down. It creates compliance debt that surfaces months after
            project closure. In AI, the wrong partner delivers a proof of
            concept that never reaches production.
          </p>
        </div>
      </section>

      <section className="site-section-alt">
        <div className="site-container">
          <p className="site-kicker">Our Differentiators</p>
          <h2 className="mt-4">What Sets Us Apart</h2>
          <p className="site-body mt-5 max-w-[980px]">
            Choosing the right firm is rarely about price. It is about whether
            the people across the table actually know your problem and whether
            they remain accountable when delivery becomes hard.
          </p>
          <VerticalTabsSection items={differentiators} ctaLink="" ctaText=""/>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <p className="site-kicker">
            Two Practices. One Standard. No Shortcuts.
          </p>
          <p className="site-body mt-5 max-w-[980px]">
            Wolvio operates two focused practices, and our delivery model is
            identical across both: senior ownership, standards embedded from the
            start, and accountability through final handover.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {services.map((card) => (
              <article
                key={card.number}
                className="site-card relative overflow-hidden bg-white p-6 sm:p-7"
              >
                {/* Top Accent Bar */}
                <div
                  className={`absolute left-0 top-0 h-[5px] w-full ${card.accent}`}
                />

                {/* Large Background Number */}
                <p className="text-[42px] font-semibold leading-none text-[#dbe3e8]">
                  {card.number}
                </p>

                {/* Content */}
                <h3 className="mt-3 text-[20px] font-semibold leading-[1.25] text-[#173652]">
                  {card.title}
                </h3>

                <p className="mt-3 text-[15px] leading-[1.65] text-[#546b82]">
                  {card.description}
                </p>

                {/* CTA Link */}
                <Link
                  href={card.href}
                  className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-[#2f7f88] transition-colors hover:text-[#173652]"
                >
                  {card.linkText}
                  <ArrowRightIcon />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="tone-lock site-section pb-16 pt-10 sm:pb-20">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-[34px] bg-[linear-gradient(130deg,#072c52,#0a2d55_48%,#0e355f)] p-10 text-white sm:p-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(47,143,146,0.24),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(47,143,146,0.22),transparent_38%),radial-gradient(circle_at_30px_30px,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:auto,auto,34px_34px]" />
            <div className="relative text-center">
              <span className="inline-flex rounded-full border border-[#1f6980] bg-[#114866]/55 px-5 py-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#7ec4c7]">
                Get Started
              </span>
              <h2 className="mx-auto mt-7 max-w-[920px] !text-[26px]">
                The Right Partner Gives You a Straight Answer.
              </h2>
              <p className="mx-auto mt-4 max-w-[860px]">
                Whether you are evaluating Veeva partners or exploring AI
                automation, we will tell you directly if we are the right fit.
                Just an honest conversation with someone who knows the space.
              </p>
              <div className="mt-8 flex justify-center">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-3 rounded-full bg-[#3a8f90] px-10 py-4 text-[14px] font-semibold text-white transition hover:bg-[#347f80]"
                >
                  Schedule a Consultation
                  <ArrowRightIcon />
                </Link>
              </div>
              <p className="mt-5 text-[14px] text-[#9eb8cc]">
                30 minutes with a founding consultant. We respond to all
                enquiries within 48 business hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
