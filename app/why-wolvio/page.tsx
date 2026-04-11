import type { Metadata } from "next";
import Link from "next/link";

type Differentiator = {
  number: string;
  title: string;
  body: string;
};

const differentiators: Differentiator[] = [
  {
    number: "01",
    title: "Depth Over Breadth. Always.",
    body: "Every consultant and engineer at Wolvio has chosen depth over platform rotation. You work with people who have spent their careers in the space they operate in. That focus is why clients trust us with high-impact work.",
  },
  {
    number: "02",
    title: "The People You Meet Are the People Who Deliver.",
    body: "We do not pitch with seniors and hand off to juniors. The person who scopes with you is the one accountable through delivery and beyond. No hidden handoffs and no surprises on engagement ownership.",
  },
  {
    number: "03",
    title: "Speed Without Cutting Corners.",
    body: "Fast delivery and high standards are compatible when work is structured correctly. We move quickly where we can and deliberately where we must, so timelines improve without reducing confidence in outcomes.",
  },
  {
    number: "04",
    title: "Standards Built In. Not Bolted On.",
    body: "In life sciences we embed GxP, CSV, and 21 CFR Part 11 from day one. In AI we design privacy, security, and responsible deployment into the architecture itself. Compliance is part of build, not a final checklist.",
  },
  {
    number: "05",
    title: "Expertise That Shows Up in the Room.",
    body: "When teams ask difficult questions, we answer directly. When delivery risks surface, we have seen them before. That depth reduces surprises and keeps momentum through complex engagements.",
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

export default function WhyWolvioPage() {
  return (
    <main className="polish-layout min-h-screen overflow-x-hidden bg-[#f2f4f7] text-[#0f172a]">
      <section className="hero-grid">
        <div className="mx-auto w-full max-w-[1660px] px-5 pb-16 pt-12 sm:px-8 lg:px-24 lg:pb-20 lg:pt-16">
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#2d7a83]">Why Wolvio</p>
          <h1 className="mt-4 max-w-[930px] text-[clamp(1.95rem,3.1vw,3.2rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-[#0c2d4d]">
            Why choose Wolvio Solutions?
          </h1>
          <p className="mt-5 max-w-[1040px] text-[16px] leading-[1.65] text-[#63798d]">
            In regulated environments, the wrong Veeva partner does not just slow you down. It creates compliance debt
            that surfaces months after project closure. In AI, the wrong partner delivers a proof of concept that never
            reaches production.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#eef3f7] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1660px] px-5 sm:px-8 lg:px-24">
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#2d7a83]">Our Differentiators</p>
          <h2 className="mt-4 text-[clamp(1.75rem,2.45vw,2.6rem)] font-semibold leading-[1.16] tracking-[-0.03em] text-[#0c2d4d]">
            What Sets Us Apart
          </h2>
          <p className="mt-5 max-w-[980px] text-[16px] leading-[1.65] text-[#63798d]">
            Choosing the right firm is rarely about price. It is about whether the people across the table actually
            know your problem and whether they remain accountable when delivery becomes hard.
          </p>
          <div className="mt-8 grid gap-5">
            {differentiators.map(item => (
              <article key={item.number} className="rounded-[24px] border border-[#d7dde4] bg-white p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <span className="rounded-full border border-[#c7d7df] bg-[#eef5f7] px-3 py-1 text-[13px] font-semibold text-[#2f7f88]">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-[22px] font-semibold leading-[1.2] text-[#173652]">{item.title}</h3>
                    <p className="mt-3 text-[15px] leading-[1.65] text-[#546b82]">{item.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f2f4f7] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1660px] px-5 sm:px-8 lg:px-24">
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#2d7a83]">
            Two Practices. One Standard. No Shortcuts.
          </p>
          <p className="mt-5 max-w-[980px] text-[16px] leading-[1.65] text-[#63798d]">
            Wolvio operates two focused practices, and our delivery model is identical across both: senior ownership,
            standards embedded from the start, and accountability through final handover.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[26px] border border-[#d7dde4] bg-[#f8fafc] p-6 sm:p-7">
              <h3 className="text-[23px] font-semibold leading-[1.2] text-[#173652]">
                Wolvio Life Sciences - Veeva Consulting & Managed Services
              </h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-[#546b82]">
                For pharma, biotech, and med tech teams that need a Vault partner who understands regulated operations
                from the inside. From first implementation to migration and integration, we follow a structured
                discovery-to-validation methodology with GxP embedded at every stage.
              </p>
              <Link href="/service-veeva" className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-[#2f7f88]">
                Explore now
                <ArrowRightIcon />
              </Link>
            </article>
            <article className="rounded-[26px] border border-[#d7dde4] bg-[#f8fafc] p-6 sm:p-7">
              <h3 className="text-[23px] font-semibold leading-[1.2] text-[#173652]">
                Wolvio Intelligence - AI & Automation Services
              </h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-[#546b82]">
                For organizations that need intelligent automation that runs in production. We start from operational
                problems before technology choices, because the right tool on the wrong foundation still fails.
              </p>
              <Link href="/service-wolvio" className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-[#2f7f88]">
                Explore now
                <ArrowRightIcon />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef3f7] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1660px] px-5 sm:px-8 lg:px-24">
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#2d7a83]">Testimonials</p>
          <h2 className="mt-4 text-[clamp(1.75rem,2.45vw,2.6rem)] font-semibold leading-[1.16] tracking-[-0.03em] text-[#0c2d4d]">
            What clients say about working with us
          </h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Life sciences delivery feedback to be added by Mani.",
              "Veeva managed services testimonial to be added by Mani.",
              "AI automation outcomes testimonial to be added by Mani.",
            ].map(item => (
              <article key={item} className="rounded-[24px] border border-[#d7dde4] bg-white p-6">
                <p className="text-[15px] leading-[1.65] text-[#546b82]">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tone-lock w-full bg-[#f2f4f7] pb-16 pt-10 sm:pb-20">
        <div className="mx-auto w-full max-w-[1660px] px-5 sm:px-8 lg:px-24">
          <div className="relative overflow-hidden rounded-[34px] bg-[linear-gradient(130deg,#072c52,#0a2d55_48%,#0e355f)] p-10 text-white sm:p-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(47,143,146,0.24),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(47,143,146,0.22),transparent_38%),radial-gradient(circle_at_30px_30px,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:auto,auto,34px_34px]" />
            <div className="relative text-center">
              <span className="inline-flex rounded-full border border-[#1f6980] bg-[#114866]/55 px-5 py-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#7ec4c7]">
                Get Started
              </span>
              <h2 className="mx-auto mt-7 max-w-[920px] text-[clamp(1.75rem,2.2vw,2.7rem)] font-semibold leading-[1.2] tracking-[-0.03em] text-white">
                The Right Partner Gives You a Straight Answer.
              </h2>
              <p className="mx-auto mt-4 max-w-[860px] text-[16px] leading-[1.65] text-[#b6c9da]">
                Whether you are evaluating Veeva partners or exploring AI automation, we will tell you directly if we
                are the right fit. Just an honest conversation with someone who knows the space.
              </p>
              <div className="mt-8 flex justify-center">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-3 rounded-full bg-[#3a8f90] px-10 py-4 text-[15px] font-semibold text-white transition hover:bg-[#347f80]"
                >
                  Schedule a Consultation
                  <ArrowRightIcon />
                </Link>
              </div>
              <p className="mt-5 text-[14px] text-[#9eb8cc]">
                30 minutes with a founding consultant. We respond to all enquiries within 48 business hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
