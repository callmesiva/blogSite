import type { Metadata } from "next";
import Link from "next/link";
import TestimonialsSection from "../components/testimonials";
import VerticalTabsSection from "../components/HowWeWorkSection";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedUnderline from "../components/AnimatedUnderline";

type Differentiator = {
  id: string;
  title: string;
  desc: string;
};

const differentiators: Differentiator[] = [
  {
    id: "01",
    title: "Depth Over Breadth. Always.",
    desc: "Every consultant and engineer at Wolvio has chosen depth over platform rotation. You work with people who have spent their careers inside Veeva Vault — not generalists who rotate across platforms each quarter. That focused expertise is why clients trust us with their highest-stakes implementations: eTMF inspections, RIM submission windows, and QMS audits where there is no margin for learning on the job.",
  },
  {
    id: "02",
    title: "The People You Meet Are the People Who Deliver.",
    desc: "The consultant who scopes your engagement is the consultant who delivers it. No bait and switch. No handover to a junior team once the contract is signed. Every senior commitment made in the sales process is a delivery commitment that holds.",
  },
  {
    id: "03",
    title: "Speed Without Cutting Corners.",
    desc: "We move fast because we know what good looks like — not because we skip validation steps, defer documentation, or use generic templates that create rework downstream. Speed in a regulated environment comes from getting decisions right the first time, not from making them quickly and fixing them later.",
  },
  {
    id: "04",
    title: "Standards Built In. Not Bolted On.",
    desc: "GxP discipline, audit-readiness, and compliance documentation are part of our delivery methodology from day one — not a review that happens at the end when it is too late to change anything. When the auditor arrives, your Vault environment holds up because it was designed to, not because you remediated it the week before.",
  },
  {
    id: "05",
    title: "Expertise That Shows Up in the Room.",
    desc: "Our consultants contribute immediately in regulatory, quality, and clinical conversations — not after a ramp-up period. That visible domain knowledge is what changes the dynamic in client workshops, builds confidence with your internal teams, and earns credibility with your QA and regulatory functions early in the engagement.",
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
  title: "Why Choose Wolvio | Veeva & AI Automation Experts",
  description:"Discover what sets Wolvio apart — senior consultants who deliver, standards built in from day one, and deep expertise across Veeva consulting and AI automation."
};

const services = [
  {
    id: "life-sciences",
    theme: "dark",
    badge: "VEEVA",
    title: "Wolvio Life Sciences",
    subtitle: "Veeva Consulting & Managed Services",
    description:
      "For pharma, biotech, and med tech teams that need a Vault partner who understands regulated operations from the inside. From first implementation to migration and integration, we follow a structured discovery-to-validation methodology with GxP embedded at every stage.",
    href: "/service-veeva",
    linkText: "Explore now",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[22px] w-[22px] fill-none stroke-[1.7px] stroke-current strokeLinecap-round strokeLinejoin-round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: "intelligence",
    theme: "light",
    badge: "ARTIFICIAL INTELLIGENCE",
    title: "Wolvio Intelligence",
    subtitle: "AI & Automation Services",
    description:
      "For organizations that need intelligent automation that runs in production. We start from operational problems before technology choices, because the right tool on the wrong foundation still fails.",
    href: "/service-wolvio",
    linkText: "Explore now",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[22px] w-[22px] fill-none stroke-[1.7px] stroke-current strokeLinecap-round strokeLinejoin-round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

export default function WhyWolvioPage() {
  return (
    <main className="polish-layout min-h-screen overflow-x-hidden bg-[#f8fafc] text-[#0f172a]">
      <section className="hero-grid">
        <ScrollReveal className="site-container pb-14 pt-12 lg:pb-20 lg:pt-16 flex flex-col items-center text-center">
          <p className="site-kicker">Why Wolvio</p>
          <h1 className="mt-4 max-w-[930px]">
            Why choose <AnimatedUnderline>Wolvio Solutions?</AnimatedUnderline>
          </h1>
          <p className="site-subheading mt-5 max-w-[1040px]">
            In regulated environments, the wrong Veeva partner does not just
            slow you down. It creates compliance debt that surfaces months after
            project closure. In AI, the wrong partner delivers a proof of
            concept that never reaches production.
          </p>
        </ScrollReveal>
      </section>

      <VerticalTabsSection
        kicker="Our Differentiators"
        title="What Sets Us Apart"
        description="Choosing the right firm is rarely about price. It is about whether
            the people across the table actually know your problem and whether
            they remain accountable when delivery becomes hard."
        items={differentiators}
        ctaText=""
        ctaLink=""
      />

      <section className="site-section">
        <ScrollReveal className="site-container">
          <p className="site-kicker">
            Two Practices. One Standard. No Shortcuts.
          </p>
          <p className="site-body mt-5 max-w-[980px]">
            Wolvio operates two focused practices, and our delivery model is
            identical across both: senior ownership, standards embedded from the
            start, and accountability through final handover.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 items-start">
            {/* Local style block for the custom blinking dot animation */}
            <style
              dangerouslySetInnerHTML={{
                __html: `@keyframes blinkDot { 0%, 100% { opacity: 0.5; transform: scale(1); } 50% { opacity: 1; transform: scale(1.5); }}`,
              }}
            />

            {services.map((card) => {
              const isDark = card.theme === "dark";
              return (
                <article
                  key={card.id}
                  // Base card styling + hover translation and shadow
                  className={`group relative flex flex-col overflow-hidden rounded-[24px] transition-all duration-[380ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_36px_72px_rgba(7,30,61,0.18)] h-full ${
                    isDark
                      ? "bg-[#071e3d] text-white"
                      : "bg-white border border-[rgba(11,39,68,0.08)] text-[#071e3d]"
                  }`}
                >
                  {/* ── BACKGROUND TEXTURES ── */}
                  {isDark ? (
                    <>
                      {/* Dot grid texture */}
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(93,202,165,0.09)_1px,transparent_1px)] bg-[size:26px_26px]"></div>
                      {/* Orbit ring decoration */}
                      <div className="pointer-events-none absolute -bottom-[100px] -right-[100px] h-[300px] w-[300px] rounded-full border border-[rgba(93,202,165,0.08)]"></div>
                    </>
                  ) : (
                    <>
                      {/* Amber glow decoration */}
                      <div className="pointer-events-none absolute -right-[60px] -top-[60px] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(212,130,26,0.07)_0%,transparent_70%)]"></div>
                    </>
                  )}

                  {/* ── CARD CONTENT INNER ── */}
                  <div className="relative z-10 flex h-full flex-col p-8 sm:p-10 lg:p-11">
                    {/* Badge + Icon Row */}
                    <div className="mb-8 flex items-center justify-between gap-3">
                      <div
                        className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[1.8px] ${
                          isDark
                            ? "border-[#5DCAA5]/20 bg-[#5DCAA5]/10 text-[#5DCAA5]"
                            : "border-[#5DCAA5]/20 bg-[#5DCAA5]/10  text-[#2f6f73]"
                        }`}
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full bg-[#5DCAA5]"
                          style={{
                            animation: "blinkDot 2s ease-in-out infinite",
                          }}
                        />
                        {card.badge}
                      </div>

                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] border ${
                          isDark
                            ? "border-[#5DCAA5]/20 bg-[#5DCAA5]/10 text-[#5DCAA5]"
                            : "border-[#5DCAA5]/20 bg-[#5DCAA5]/10 text-[#2f6f73]"
                        }`}
                      >
                        {card.icon}
                      </div>
                    </div>

                    {/* Name & Subtitle */}
                    <h3
                      className={`mb-1.5 text-[28px] font-bold leading-[1.15] tracking-[-0.3px] ${
                        isDark ? "text-white" : "text-[#071e3d]"
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`mb-5 text-[13px] font-medium tracking-[0.3px] ${
                        isDark ? "text-white/60" : "text-[#2f6f73]"
                      }`}
                    >
                      {card.subtitle}
                    </p>

                    {/* Divider */}
                    <div
                      className={`mb-5 h-[1px] w-full ${
                        isDark ? "bg-white/10" : "bg-[rgba(11,39,68,0.08)]"
                      }`}
                    ></div>

                    {/* Description - FIXED: Removed h-24 */}
                    <p
                      className={`mb-7 text-[15px] font-light leading-[1.78] ${
                        isDark ? "text-white" : "text-[#445f72]"
                      }`}
                    >
                      {card.description}
                    </p>

                    {/* Footer & CTA */}
                    <div
                      className={`mt-auto flex items-center justify-between gap-4 border-t pt-6 ${
                        isDark
                          ? "border-white/10"
                          : "border-[rgba(11,39,68,0.08)]"
                      }`}
                    >
                      <Link
                        href={card.href}
                        className={`inline-flex items-center gap-2 rounded-[26px] px-5 py-3 text-[13.5px] font-semibold whitespace-nowrap transition-all duration-250 hover:gap-3 ${
                          isDark
                            ? "bg-[#2f6f73] text-white hover:bg-[#4f8f92]"
                            : "bg-[#2f6f73] text-white hover:bg-[#4f8f92]"
                        }`}
                      >
                        {card.linkText}
                        <ArrowRightIcon />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </ScrollReveal>
      </section>

      <section id="case-studies" className="site-section-alt">
        <ScrollReveal className="site-container">
          <p className="site-kicker text-center">Testimonials</p>
          <h2 className="mt-3 text-center">
            What clients say about working with us
          </h2>
          <TestimonialsSection />
        </ScrollReveal>
      </section>

      <section className="tone-lock site-section">
        <ScrollReveal className="site-container">
          <div className="relative overflow-hidden rounded-[34px] bg-[linear-gradient(130deg,#072c52,#0a2d55_48%,#0e355f)] p-10 text-white sm:p-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(47,143,146,0.24),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(47,143,146,0.22),transparent_38%),radial-gradient(circle_at_30px_30px,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:auto,auto,34px_34px]" />
            <div className="relative text-center">
              <span className="inline-flex rounded-full border border-[#1f6980] bg-[#114866]/55 px-5 py-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#7ec4c7]">
                Get Started
              </span>
              <h2 className="mx-auto mt-7 max-w-[920px]">
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
        </ScrollReveal>
      </section>
    </main>
  );
}
