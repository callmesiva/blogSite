"use client";
import type { Metadata } from "next";
import Link from "next/link";
import { title } from "process";
import { useState } from "react";

type UseCaseCard = {
  title: string;
  pain: string;
  summary: string;
  details: string;
  bullets: string[];
};

type FaqItem = {
  question: string;
  answer: string;
};

const useCases: UseCaseCard[] = [
  {
    title: "AI Knowledge Assistant",
    pain: "Your team spends hours searching for answers buried in documents.",
    summary: "Ask your company data and get accurate answers with source citations in seconds.",
    details:
      "A retrieval-augmented generation system connected to your policies, SOPs, and knowledge bases so teams ask in plain language and receive precise, cited responses.",
    bullets: ["Document ingestion", "Vector search", "Source citations", "Role-based access", "Continuous learning"],
  },
  {
    title: "AI Support Agent",
    pain: "Your support team is overwhelmed and most queries are repetitive.",
    summary: "Automate 60-80% of support queries with smart routing and human escalation.",
    details:
      "An intelligent support agent that classifies intent, drafts responses, routes issues, and escalates low-confidence cases with full governance logging.",
    bullets: ["Intent classification", "Smart routing", "AI-drafted responses", "Confidence scoring", "Full audit trail"],
  },
  {
    title: "Document Intelligence",
    pain: "Your team manually extracts data from documents invoice by invoice.",
    summary: "Extract, validate, and process documents in seconds rather than hours.",
    details:
      "AI-powered document processing for invoices, contracts, forms, and reports with rule-based validation, exception handling, and ERP-ready structured output.",
    bullets: ["OCR + field extraction", "Business-rule validation", "Exception flagging", "ERP integration", "India-specific formats"],
  },
  {
    title: "Workflow Automation",
    pain: "Your operations run on manual steps, spreadsheets, and email chains.",
    summary: "Convert manual processes into intelligent automated workflows.",
    details:
      "End-to-end flows with AI decision nodes, approvals, exception logic, and system integrations, plus live monitoring for operational visibility.",
    bullets: ["Event-driven triggers", "AI decision nodes", "CRM/ERP integration", "Error handling", "Live dashboards"],
  },
  {
    title: "Voice AI Agent",
    pain: "Customers call, nobody picks up, or they wait too long.",
    summary: "A multilingual AI voice agent that responds in real time 24/7.",
    details:
      "Voice automation for inbound calls with natural response handling, appointment booking, escalation, and support for regional Indian language interactions.",
    bullets: ["Real-time speech-to-text", "Telephony / SIP / IVR", "Appointment booking", "Human handoff", "WhatsApp automation"],
  },
];

const faqs: FaqItem[] = [
  {
    question: "What is the best way to start with AI in our organisation?",
    answer:
      "Start with one high-impact problem, not a broad AI strategy deck. We identify where measurable outcomes can be delivered in weeks, then build your first production-grade system.",
  },
  {
    question: "How do your AI systems integrate with our existing tools?",
    answer:
      "We integrate with your existing stack through APIs, webhooks, and middleware so AI fits your workflow across CRM, ERP, messaging, telephony, and cloud systems.",
  },
  {
    question: "How do you handle data privacy and security?",
    answer:
      "Deployments follow privacy-first architecture with encryption in transit and at rest, role-based access, and complete audit logs aligned to compliance requirements.",
  },
  {
    question: "How long does deployment usually take?",
    answer:
      "Well-scoped pilots typically launch in 4-6 weeks. Production deployments with governance and deeper integration typically take 8-12 weeks.",
  },
  {
    question: "How do you measure whether the AI system is working?",
    answer:
      "Every system ships with performance tracking for resolution rates, accuracy, processing time, error rate, and business-specific KPIs. If it is not measurable, we do not ship it.",
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



export default function ServiceWolvioPage() {
  const [activeTab, setActiveTab] = useState(0);
 const activeCard = useCases[activeTab];

  return (
    <main className="polish-layout min-h-screen overflow-x-hidden bg-[#f8fafc] text-[#0f172a]">
      <section className="hero-grid">
        <div className="site-container pb-14 pt-12 lg:pb-20 lg:pt-16">
          <p className="site-kicker">Wolvio Intelligence</p>
          <h1 className="mt-4 max-w-[960px]">
            AI automation services across industries
          </h1>
          <p className="site-subheading mt-5 max-w-[900px]">
            AI systems built for how your business actually runs. We design and
            deploy AI agents, automation systems, and intelligent workflows that
            solve operational problems in production today.
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#c7d7df] bg-white px-6 py-3 text-[15px] font-semibold text-[#2f6f73] transition hover:bg-[#f4f9fa]"
          >
            Explore Use Cases
            <ArrowRightIcon />
          </Link>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <p className="site-kicker">What We Do</p>
          <h2 className="mt-4 max-w-[900px]">AI Transformation & Automation</h2>
          <p className="site-body mt-6 max-w-[1060px]">
            Wolvio Intelligence is the AI Transformation & Automation practice
            of Wolvio Solutions. Through targeted AI automation services we
            deliver intelligent agents, document processing systems, voice AI,
            and workflow automation that drive measurable outcomes across
            healthcare, logistics, enterprise operations, and customer support.
          </p>
        </div>
      </section>

      <section className="site-section-alt">
        <div className="site-container">
          <p className="site-kicker">Business Use Cases</p>
          <h2 className="mt-4 max-w-[900px]">
            What can AI actually do for your business?
          </h2>
          <p className="site-body mt-5 max-w-[760px]">
            Five systems. Each one solves a problem you already have.
          </p>

          <div className="mt-8">
            <div className="overflow-hidden rounded-[16px] border border-[#dce6ef] bg-white">
              {/* Tab Bar */}
              <div className="flex overflow-x-auto border-b border-[#dce6ef] scrollbar-hide">
                {useCases.map((card, index) => (
                  <button
                    key={card.title}
                    onClick={() => setActiveTab(index)}
                    className={`
              relative flex-1 min-w-[130px] px-4 py-4  text-center 
              whitespace-nowrap transition-colors duration-150 border-r border-[#dce6ef] last:border-r-0
              ${
                activeTab === index
                  ? "bg-[#2f6f73] text-white"
                  : "bg-[#f5f8fb] text-[#63798d] hover:bg-[#eef3f8] hover:text-[#173652]"
              }
            `}
                  >
                    <h3
                      className={`text-[16px] font-bold lg:text-[18px] ${
                        activeTab === index
                          ? " text-white"
                          : " text-[#63798d] hover:bg-[#eef3f8]"
                      }`}
                    >
                      {" "}
                      {card.title}
                    </h3>
                    {/* Active indicator bar */}
                    {activeTab === index && (
                      <span className="absolute bottom-0 left-0 w-full h-[2.5px]" />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6 ">
                {/* Top color accent bar */}
                {/* <div
          className="mb-6 h-[4px] w-12 rounded-full"
          style={{ background: activeTab % 2 === 0 ? "#0b3a63" : "#2f8b92" }}
        />*/}

                <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[1.2fr_1fr]">
                  {/* Left: Text content */}
                  <div>
                    <h3 className="">{activeCard.title}</h3>
                    <p className="mt-3">{activeCard.pain}</p>
                    <p className="mt-3">{activeCard.summary}</p>
                    <p className="mt-3">{activeCard.details}</p>
                  </div>

                  {/* Right: Capabilities */}
                  <div className="site-card-muted rounded-[22px] p-5">
                    <p className="site-kicker">Capabilities</p>
                    <ul className="mt-3 space-y-2 text-[14px] text-[#486173]">
                      {activeCard.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#2f8b92] flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section-alt">
        <div className="site-container">
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
        </div>
      </section>

      <section className="site-section-alt">
        <div className="site-container">
          <p className="site-kicker">FAQ</p>
          <h2 className="mt-4">Questions we hear before every engagement</h2>
          <p className="site-body mt-4 max-w-[900px]">
            These are the real concerns that usually stop buyers from reaching
            out. We answer them directly.
          </p>
          <div className="mt-8 space-y-4">
            {faqs.map((item, index) => (
              <details
                key={item.question}
                className={`site-card px-5 py-4 ${index % 2 ? "bg-[#f8fafc]" : ""}`}
              >
                <summary className="cursor-pointer list-none text-[14px] font-semibold text-[#173652]">
                  {item.question}
                </summary>
                <p className="mt-3 text-[15px] leading-[1.65] text-[#63798d]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="tone-lock site-section pb-16 pt-8 sm:pb-20">
        <div className="site-container">
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
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#3a8f90] px-10 py-4 text-[16px] font-semibold text-white transition hover:bg-[#347f80]"
                >
                  Schedule a Demo
                  <ArrowRightIcon />
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-10 py-4 text-[16px] font-semibold text-white transition hover:bg-white/10"
                >
                  Talk to the Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
