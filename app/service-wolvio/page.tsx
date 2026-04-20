import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import FaqAccordion from "../components/FaqAccordion";
import TypewriterBox from "../components/TypewriterBox";
import BusinessUseCase from "../components/Service-wolvio/BusinessUseCase";

type FaqItem = {
  question: string;
  answer1: string;
  answer2?: string;
};

const faqs: FaqItem[] = [
  {
    question: "What's the best way to start with AI in my organisation?",
    answer1:
      "The most common mistake organisations make is trying to deploy AI everywhere at once. Broad strategies sound ambitious but rarely deliver results they spread effort thin and make it hard to measure success. We begin with a focused operational assessment typically a 1–2 week process to surface where AI can genuinely move the needle. This might be reducing manual processing time, accelerating a customer response workflow, or improving accuracy in a recurring task. The goal is to identify a problem where AI can show demonstrable results within weeks, not quarters.",
    answer2: "",
  },
  {
    question:
      "How do your AI systems integrate with our existing tools and platforms?",
    answer1: `Our systems are built to connect with what you already use CRM, ERP, messaging platforms, databases, telephony, and cloud services. We use standard APIs, webhook integrations, and middleware layers so AI fits into your existing workflow rather than replacing it.`,
    answer2: "",
  },
  {
    question: "How do you handle data privacy and security?",
    answer1: `Every deployment follows a privacy-first architecture. Your data stays within your infrastructure or approved cloud environments. We implement role-based access, encryption at rest and in transit, and full audit logging.`,
    answer2: `For regulated industries, we align with relevant compliance requirements.`,
  },
  {
    question: "How long does it take to deploy an AI system?",
    answer1: `Timeline depends heavily on scope, and we are direct about this from the first conversation. A well-scoped, focused use case — one clear input, one clear output, integrating with one or two existing tools — can reach a working pilot in 4–6 weeks. That pilot is a real system running on real data, not a demo or prototype.`,
    answer2: `Production deployments are a different scope. Full integration across multiple systems, governance frameworks, human-in-the-loop review processes, monitoring dashboards, and staff onboarding typically takes 8–12 weeks. These timelines are realistic, not padded — we have seen what happens when AI projects are rushed to launch without proper testing or change management, and the recovery cost is always higher than the time saved.`,
  },
  {
    question: "How do you measure whether an AI system is actually working?",
    answer1: `Every system we deploy includes built-in performance tracking — accuracy rates, resolution rates, processing times, error rates, and business-specific KPIs. We share this data transparently and use it to continuously improve the system. If we can't measure it, we don't ship it.`,
    answer2: "",
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

let buttons = [
  {
    label: "Explore Use Cases",
    href: "/case-studies",
    variant: "outline",
  },
];

export const metadata: Metadata = {
  title: "AI Automation Services & Intelligent Agents | Wolvio  ",
  description:
    "Wolvio Intelligence builds AI agents, document processing, voice AI,workflow automation for business operations. Production-proven systems across industries.",
};

export default function ServiceWolvioPage() {
  return (
    <main className="polish-layout min-h-screen overflow-x-hidden bg-[#f8fafc] text-[#0f172a]">
      <section className="hero-grid">
        <ScrollReveal className="site-container pb-14 pt-12 lg:pb-20 lg:pt-16 flex flex-col items-center text-center">
          <p className="site-kicker">Wolvio Intelligence</p>
          <h1 className="mt-4">AI automation services across industries</h1>

          <p className="site-subheading mt-5  max-w-[700px]">
            AI systems built for the way your business actually runs. We design
            and deliver AI automation services, building and deploying AI
            agents, automation systems, and intelligent workflows that solve
            real operational problems — across industries, in production, today.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            {buttons.map((btn, i) => (
              <Link
                key={i}
                href={btn.href}
                className={
                  btn.variant === "primary"
                    ? "site-btn-primary whitespace-nowrap"
                    : btn.variant === "secondary"
                      ? "site-btn-secondary whitespace-nowrap"
                      : "inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full border border-[#c7d7df] bg-white px-6 py-3 text-[15px] font-semibold text-[#2f6f73] transition hover:bg-[#f4f9fa]"
                }
              >
                {btn.label}
                <ArrowRightIcon />
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="tone-lock w-full bg-[#082b4a] py-14 sm:py-16 lg:py-20">
        <ScrollReveal className="site-container">
          <div className="grid lg:grid-cols-[1fr_1.3fr] min-h-[240px] gap-12 lg:gap-16 items-start">
            {/* Left side: Kicker & Header */}
            <div>
              <p className="site-kicker text-[#7ec4c7]">What We Do</p>
              <h2 className="mt-4 max-w-[900px] text-white">
                AI Transformation & Automation
              </h2>
              <p className="mt-6 text-[17px] leading-[1.65] text-[#b6c9da]">
                Delivering intelligent AI automation solutions agents, voice AI,
                and workflow systems that drive measurable outcomes across
                industries.
              </p>
            </div>

            {/* Right side: Typewriter Input Box */}
            <div>
              <TypewriterBox
                text="Wolvio Intelligence is the AI Transformation & Automation practice of Wolvio Solutions. Through targeted AI automation services we deliver intelligent agents, document processing systems, voice AI, and workflow automation that drive measurable outcomes across healthcare, logistics, enterprise operations, and customer support."
                delay={1000}
                speed={20}
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      <BusinessUseCase />

      <section className="site-section-alt">
        <ScrollReveal className="site-container">
          <p className="site-kicker">Why Wolvio Intelligence</p>
          <h2 className="mt-4 max-w-[880px]">
            How we&apos;re different from typical AI consultancies
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {[
              {
                number: "01",
                title: "We demo before we pitch",
                body: "Every conversation starts with a working system, not a slide deck, so you see practical fit before commitment.",
                accent: "bg-[#163f7d]",
              },
              {
                number: "02",
                title: "Production-proven, not prototype-stage",
                body: "10+ AI systems deployed in real environments. We build to operate sustainably, not just to showcase.",
                accent: "bg-[#2f8b92]",
              },

              {
                number: "03",
                title: "Cross-industry, global-ready",
                body: "Deployments across healthcare, logistics, enterprise IT, and support, including regional language and India-first automation contexts.",
                accent: "bg-[#163f7d]",
              },
              {
                number: "04",
                title: "Built to measure, not to impress",
                body: "Every delivery includes governance, logging, and performance tracking for accuracy, resolution, and time saved.",
                accent: "bg-[#2f8b92]",
              },
            ].map((card, index) => (
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
                <p className="mt-3">{card.body}</p>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="site-section-alt">
        <ScrollReveal className="site-container">
          <p className="site-kicker text-center">FAQ</p>
          <h2 className="mt-4 text-center">
            Questions we hear before every engagement
          </h2>
          <p className="site-body mt-4 text-center">
            These are the real concerns that usually stop buyers from reaching
            out. We answer them directly.
          </p>
          <FaqAccordion items={faqs} />
        </ScrollReveal>
      </section>

      <section className="tone-lock site-section">
        <ScrollReveal className="site-container">
          <div className="relative overflow-hidden rounded-[34px] bg-[linear-gradient(130deg,#072c52,#0a2d55_48%,#0e355f)] p-10 text-white sm:p-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(47,143,146,0.24),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(47,143,146,0.22),transparent_38%),radial-gradient(circle_at_30px_30px,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:auto,auto,34px_34px]" />
            <div className="relative text-center">
              <span className="inline-flex rounded-full border border-[#1f6980] bg-[#114866]/55 px-5 py-2 text-[14px] font-semibold uppercase tracking-[0.12em] text-[#7ec4c7]">
                Ready to Put Intelligence to Work?
              </span>
              <h2 className="mx-auto mt-7 max-w-[900px] text-[26px] font-semibold leading-[1.18] tracking-[-0.03em] text-white">
                Start with the problem that matters most. We will show you a
                working system before asking for commitment.
              </h2>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#3a8f90] px-10 py-4 text-[16px] font-semibold text-white transition hover:bg-[#347f80]"
                >
                  Schedule a Demo
                  <ArrowRightIcon />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-10 py-4 text-[16px] font-semibold text-white transition hover:bg-white/10"
                >
                  Talk to the Team
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
