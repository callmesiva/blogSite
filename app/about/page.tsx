import type { Metadata } from "next";
import Link from "next/link";
import LeadershipSection from "../components/leaderShip"

type PracticeCard = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  accent: string;
};

type PrincipleCard = {
  number: string;
  title: string;
  description: string;
  accent: string;
};

const practices: PracticeCard[] = [
  {
    title: "Wolvio Life Sciences",
    description:
      "Our core practice. Specialist Veeva consulting and managed services for pharma, biotech, and med tech organisations operating in regulated environments. Every engagement is led by expert consultants with deep GxP expertise and hands-on Vault experience.",
    ctaLabel: "Explore",
    ctaHref: "/service-veeva",
    accent: "bg-[#0b3a63]",
  },
  {
    title: "Wolvio Intelligence",
    description:
      "Our AI and automation practice. Cross-industry intelligent automation solutions, from private knowledge assistants and document intelligence to workflow automation and voice AI agents. Built for businesses that want to move faster without adding headcount.",
    ctaLabel: "Explore",
    ctaHref: "/service-wolvio",
    accent: "bg-[#2f8b92]",
  },
];

const principles: PrincipleCard[] = [
  {
    number: "01",
    title: "Depth Over Breadth",
    description:
      "Every person we put on an engagement carries real expertise in the domain they are working in. Not broad knowledge stretched across industries, genuine depth where it matters.",
    accent: "bg-[#163f7d]",
  },
  {
    number: "02",
    title: "Built-In Standards",
    description:
      "The standards that govern our work are embedded from day one, not reviewed at the end when it is too late. We design with the right constraints in place from the start.",
    accent: "bg-[#2f8b92]",
  },
  {
    number: "03",
    title: "Senior Accountability",
    description:
      "The person who scopes your engagement is the person who delivers it. No bait and switch. No handoff to a junior team once the contract is signed.",
    accent: "bg-[#163f7d]",
  },
  {
    number: "04",
    title: "Knowledge Transfer",
    description:
      "We build your team's capability throughout every engagement. Our measure of success is your self-sufficiency when we leave, not dependency on our support.",
    accent: "bg-[#2f8b92]",
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
  title: "About | Wolvio",
  description:
    "Learn about Wolvio, our two focused practices, mission, vision, specialist operating model, and leadership.",
};

export default function AboutPage() {
  return (
    <main className="polish-layout min-h-screen overflow-x-hidden bg-[#f8fafc] text-[#0f172a]">
      
      <section className="hero-grid">
        <div className="site-container pb-14 pt-12 lg:pb-20 lg:pt-16">
          <p className="site-kicker">About Wolvio</p>
          <h1 className="mt-4 max-w-[960px]">People Behind the Platform.</h1>
          <p className="site-subheading mt-5 max-w-[1040px]">
            A specialist technology firm with two focused practices: Veeva
            consulting for life sciences, and AI and automation for businesses
            that need to move faster.
          </p>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <p className="site-kicker">Who We Are</p>
          <h2 className="mt-4 max-w-[760px]">
            One firm. Two focused practices.
          </h2>
          <p className="site-body mt-5 max-w-[980px]">
            Wolvio was built on a single belief: specialist firms outperform
            generalists every time. That belief shaped not just how we work, but
            what we built. Today Wolvio operates two distinct practices, each
            with its own focus, team, and client base.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {practices.map(practice => (
              <article
                key={practice.title}
                className="site-card group relative overflow-hidden bg-white p-6 sm:p-7"
              >
                <div
                  className={`absolute left-0 top-0 h-[5px] w-full ${practice.accent}`}
                />
                <h3>{practice.title}</h3>
                <p className="mt-4">{practice.description}</p>
                <Link
                  href={practice.ctaHref}
                  className="site-btn-link mt-5"
                >
                  {practice.ctaLabel}
                  <ArrowRightIcon />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section-alt overflow-hidden">
        <div className="site-container">
          <div className="mt-10 grid overflow-hidden rounded-[36px] shadow-[0_24px_64px_rgba(10,37,64,0.10)] lg:grid-cols-2">
            {/* ── Mission ── */}
            <article className="group relative flex min-h-[460px] flex-col justify-between overflow-hidden bg-[#0a2540] p-10 transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_30px_70px_rgba(10,37,64,0.18)] sm:p-14">
              {/* background glow */}
              <div className="pointer-events-none absolute -left-16 top-10 h-44 w-44 rounded-full bg-[#2f8f95]/20 blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:bg-[#2f8f95]/30" />
              <div className="pointer-events-none absolute bottom-0 right-0 h-52 w-52 rounded-full bg-white/[0.05] blur-3xl transition-all duration-700 group-hover:scale-110" />

              {/* soft sweep */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,transparent_42%,rgba(255,255,255,0.05)_50%,transparent_58%,transparent_100%)] opacity-0 transition-all duration-700 group-hover:translate-x-6 group-hover:opacity-100" />

              {/* Large decorative letter */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-4 -top-6 select-none font-bold leading-none text-white/[0.04] transition-all duration-700 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-105 group-hover:text-white/[0.07]"
                style={{ fontSize: "clamp(9rem,16vw,14rem)" }}
              >
                M
              </span>

              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[13px] font-semibold text-white transition-all duration-300 group-hover:scale-105 group-hover:border-white/35 group-hover:bg-white/14">
                    01
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5caeb4] transition-all duration-300 group-hover:text-[#8bd0d4]">
                    Mission
                  </span>
                </div>

                <div className="mt-8 h-px w-12 bg-gradient-to-r from-[#2f8f95] to-transparent transition-all duration-500 group-hover:w-24 group-hover:from-[#6bc1c7]" />

                <h2
                  className="mt-8 font-semibold leading-[1.18] tracking-[-0.025em] !text-white transition-all duration-300 group-hover:translate-y-[-1px]"
                  style={{ fontSize: "clamp(1.6rem,2vw,2.1rem)" }}
                >
                  Empowering life&nbsp;sciences through technology that
                  truly&nbsp;works.
                </h2>

                <p className="mt-6 text-[16px] leading-[1.72] text-[#7fa8be] transition-colors duration-300 group-hover:text-[#a9c4d4]">
                  To drive business success by delivering cutting-edge digital
                  solutions that inspire growth, efficiency, and lasting
                  innovation — empowering life sciences organisations to achieve
                  more with the right technology at their side.
                </p>
              </div>
            </article>

            {/* ── Vision ── */}
            <article className="group relative flex min-h-[460px] flex-col justify-between overflow-hidden border-t border-[#dde8ee] bg-white p-10 transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_30px_70px_rgba(10,37,64,0.12)] sm:p-14 lg:border-l lg:border-t-0">
              {/* background glow */}
              <div className="pointer-events-none absolute -right-10 top-8 h-44 w-44 rounded-full bg-[#2f6f73]/10 blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:bg-[#2f6f73]/16" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-52 w-52 rounded-full bg-[#0a2540]/[0.04] blur-3xl transition-all duration-700 group-hover:scale-110" />

              {/* soft sweep */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,transparent_42%,rgba(10,37,64,0.04)_50%,transparent_58%,transparent_100%)] opacity-0 transition-all duration-700 group-hover:translate-x-6 group-hover:opacity-100" />

              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-4 -top-6 select-none font-bold leading-none text-[#0a2540]/[0.04] transition-all duration-700 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-105 group-hover:text-[#0a2540]/[0.07]"
                style={{ fontSize: "clamp(9rem,16vw,14rem)" }}
              >
                V
              </span>

              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2f6f73]/25 bg-[#2f6f73]/10 text-[13px] font-semibold text-[#2f6f73] transition-all duration-300 group-hover:scale-105 group-hover:border-[#2f6f73]/40 group-hover:bg-[#2f6f73]/14">
                    02
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2f6f73] transition-all duration-300 group-hover:text-[#245b5f]">
                    Vision
                  </span>
                </div>

                <div className="mt-8 h-px w-12 bg-gradient-to-r from-[#2f6f73] to-transparent transition-all duration-500 group-hover:w-24" />

                <h2
                  className="mt-8 font-semibold leading-[1.18] tracking-[-0.025em] !text-[#0a2540] transition-all duration-300 group-hover:translate-y-[-1px]"
                  style={{ fontSize: "clamp(1.6rem,2vw,2.1rem)" }}
                >
                  The firm life sciences trusts for critical platform decisions.
                </h2>

                <p className="mt-6 text-[16px] leading-[1.72] text-[#5d748b] transition-colors duration-300 group-hover:text-[#4e667e]">
                  To be the firm that regulated life sciences organisations
                  trust with their most critical platform decisions, and the AI
                  practice enterprises choose when they need automation that
                  works in production, not just in a demo.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <p className="site-kicker">Our Practice</p>
          <h2 className="mt-4 max-w-[860px]">
            Why did we build a specialist firm?
          </h2>
          <div className="site-body mt-6 max-w-[1040px] space-y-5">
            <p>
              Wolvio was founded in September 2022 with a clear conviction:
              organisations operating in complex, high-stakes environments need
              a partner with genuine domain expertise, not one learning on their
              time and budget.
            </p>
            <p>
              Built as a specialist firm, Wolvio focuses on depth over breadth,
              bringing together experienced professionals who have already spent
              their careers in the fields they serve.
            </p>
            <p>
              Our firm has deliberately avoided unnecessary expansion, choosing
              to grow only where proven expertise exists. This focused approach
              has enabled Wolvio to deliver high-impact work across clients in
              Asia, Europe, and North America.
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-4">
            {[
              "2 India Offices",
              "ISO 9001:2015 Certified",
              "15+ Engagements Delivered",
              "Global Client Footprint",
            ].map(stat => (
              <article
                key={stat}
                className="site-card px-5 py-4"
              >
                <p className="text-[16px] font-semibold text-[#173652]">
                  {stat}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section-alt">
        <div className="site-container">
          <p className="site-kicker">Our Approach</p>
          <h2 className="mt-4 max-w-[880px]">
            We engage as partners. We deliver as practitioners.
          </h2>
          <p className="site-body mt-5 max-w-[760px]">
            Four principles that hold across everything we do.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {principles.map(card => (
              <article
                key={card.number}
                className="site-card relative overflow-hidden bg-white p-6 sm:p-7"
              >
                <div
                  className={`absolute left-0 top-0 h-[5px] w-full ${card.accent}`}
                />
                <p className="text-[42px] font-semibold leading-none text-[#dbe3e8]">
                  {card.number}
                </p>
                <h3 className="mt-3">{card.title}</h3>
                <p className="mt-3">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <p className="site-kicker">Leadership</p>
          <h2 className="mt-4 max-w-[700px]">The team behind Wolvio</h2>
          <p className="site-subheading mt-5 max-w-[1040px]">
            Practitioners who bring deep expertise, clear thinking, and proven
            execution to every engagement.
          </p>
          <LeadershipSection />
        </div>
      </section>

      <section className="tone-lock site-section pb-16 pt-10 sm:pb-20">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-[34px] bg-[linear-gradient(130deg,#072c52,#0a2d55_48%,#0e355f)] p-10 text-white sm:p-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(47,143,146,0.24),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(47,143,146,0.22),transparent_38%),radial-gradient(circle_at_30px_30px,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:auto,auto,34px_34px]" />
            <div className="relative text-center">
              <span className="inline-flex rounded-full border border-[#1f6980] bg-[#114866]/55 px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#7ec4c7]">
                Get Started
              </span>
              <h2 className="mx-auto mt-7 max-w-[920px] !text-[26px]">
                Schedule a time to discuss your requirements and learn how our
                expertise can drive meaningful outcomes for your business.
              </h2>
              <div className="mt-8 flex justify-center">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-3 rounded-full bg-[#3a8f90] px-10 py-4 text-[14px] font-semibold text-white transition hover:bg-[#347f80]"
                >
                  Get in touch
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

