"use client";
import { useState } from "react";
import ScrollReveal from "../ScrollReveal";

type UseCaseCard = {
  title: string;
  pain: string;
  summary: string;
  details: string;
  bullets: string[];
};

const useCases: UseCaseCard[] = [
  {
    title: "AI Knowledge Assistant",
    pain: "Your team spends hours searching for answers buried in documents.",
    summary:
      "Ask your company data and get accurate answers with source citations in seconds.",
    details:
      "A retrieval-augmented generation system connected to your policies, SOPs, and knowledge bases so teams ask in plain language and receive precise, cited responses.",
    bullets: [
      "Document ingestion",
      "Vector search",
      "Source citations",
      "Role-based access",
      "Continuous learning",
    ],
  },
  {
    title: "AI Support Agent",
    pain: "Your support team is overwhelmed and most queries are repetitive.",
    summary:
      "Automate 60-80% of support queries with smart routing and human escalation.",
    details:
      "An intelligent support agent that classifies intent, drafts responses, routes issues, and escalates low-confidence cases with full governance logging.",
    bullets: [
      "Intent classification",
      "Smart routing",
      "AI-drafted responses",
      "Confidence scoring",
      "Full audit trail",
    ],
  },
  {
    title: "Document Intelligence",
    pain: "Your team manually extracts data from documents invoice by invoice.",
    summary:
      "Extract, validate, and process documents in seconds rather than hours.",
    details:
      "AI-powered document processing for invoices, contracts, forms, and reports with rule-based validation, exception handling, and ERP-ready structured output.",
    bullets: [
      "OCR + field extraction",
      "Business-rule validation",
      "Exception flagging",
      "ERP integration",
      "India-specific formats",
    ],
  },
  {
    title: "Workflow Automation",
    pain: "Your operations run on manual steps, spreadsheets, and email chains.",
    summary: "Convert manual processes into intelligent automated workflows.",
    details:
      "End-to-end flows with AI decision nodes, approvals, exception logic, and system integrations, plus live monitoring for operational visibility.",
    bullets: [
      "Event-driven triggers",
      "AI decision nodes",
      "CRM/ERP integration",
      "Error handling",
      "Live dashboards",
    ],
  },
  {
    title: "Voice AI Agent",
    pain: "Customers call, nobody picks up, or they wait too long.",
    summary: "A multilingual AI voice agent that responds in real time 24/7.",
    details:
      "Voice automation for inbound calls with natural response handling, appointment booking, escalation, and support for regional Indian language interactions.",
    bullets: [
      "Real-time speech-to-text",
      "Telephony / SIP / IVR",
      "Appointment booking",
      "Human handoff",
      "WhatsApp automation",
    ],
  },
];

export default function BusinessUseCase() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCard = useCases[activeTab];
  return (
    <section className="site-section-alt">
      <ScrollReveal className="site-container">
        <p className="site-kicker">Business Use Cases</p>
        <h2 className="mt-4 max-w-[900px]">
          What can AI actually do for your business?
        </h2>
        <p className="site-body mt-5 max-w-[760px]">
          Five systems. Each one solves a problem you already have — and can be
          deployed independently or combined into a connected intelligent
          operations layer.
        </p>

        <div className="mt-8">
          <div className="overflow-hidden rounded-[16px] border border-[#dce6ef] bg-white">
            {/* Tab Bar */}
            <div className="flex w-full overflow-x-auto overflow-y-hidden scroll-smooth border-b border-[#dce6ef] scrollbar-hide">
              {useCases.map((card, index) => (
                <button
                  key={card.title}
                  onClick={() => setActiveTab(index)}
                  // FIXED: Replaced `flex-1` with `grow shrink-0` to force horizontal scrolling on small screens
                  className={`relative grow shrink-0 min-w-[130px] px-4 py-4 text-center whitespace-nowrap transition-colors duration-150 border-r border-[#dce6ef] last:border-r-0 ${
                    activeTab === index
                      ? "bg-[#2f6f73] text-white"
                      : "bg-[#f5f8fb] text-[#63798d] hover:bg-[#eef3f8] hover:text-[#173652]"
                  }`}
                >
                  <h3
                    className={`text-[16px] font-bold lg:text-[18px] transition-colors ${
                      activeTab === index
                        ? "text-white"
                        : "text-[#63798d] group-hover:text-[#173652]"
                    }`}
                  >
                    {card.title}
                  </h3>
                  {/* Active indicator bar */}
                  {activeTab === index && (
                    <span className="absolute bottom-0 left-0 h-[2.5px] w-full bg-white/20" />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-6 ">
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
      </ScrollReveal>
    </section>
  );
}
