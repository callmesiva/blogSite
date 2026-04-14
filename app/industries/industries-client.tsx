"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type IndustryBlock = {
  title: string;
  description: string;
  bullets: string[];
};

type IndustryTab = {
  id: string;
  label: string;
  subtitle: string;
  intro: string;
  blocks: IndustryBlock[];
};

const industryTabs: IndustryTab[] = [
  {
    id: "life-sciences",
    label: "Life Sciences",
    subtitle: "Pharma | Biotech | Med Tech",
    intro:
      "From IND to NDA, first-in-human to post-market surveillance, every process depends on technology that is configured correctly, validated thoroughly, and inspection-ready before the auditor arrives. Wolvio is built around this reality.",
    blocks: [
      {
        title: "Regulatory Operations",
        description:
          "Getting dossiers to FDA, EMA, PMDA, and regional agencies on time requires a RIM environment that is architected properly from day one.",
        bullets: [
          "Vault Registrations - global registration lifecycle with automated deadline tracking.",
          "Vault Submissions - eCTD authoring, review, and approval aligned to ICH M4 structure.",
          "Vault Submissions Publishing - continuous publishing with earlier validation issue detection.",
          "Vault Submissions Archive - complete submission history and correspondence tracking.",
          "Quality to RIM connection - change events in Vault QMS trigger variation workflows in RIM.",
        ],
      },
      {
        title: "Quality Management",
        description:
          "A GxP quality system must hold up in inspection, not only in internal review.",
        bullets: [
          "Vault QualityDocs - 21 CFR Part 11 and EU Annex 11 document control.",
          "Vault QMS - CAPA, deviation, change control, OOS, and batch review with full traceability.",
          "Vault Training - role-based GxP training with requalification alerts and audit-ready records.",
          "Vault Validation Management - paperless IQ/OQ/PQ with deviation handling and complete evidence.",
        ],
      },
      {
        title: "Clinical Operations",
        description:
          "Every eTMF document carries inspection risk and every delay impacts study timelines.",
        bullets: [
          "Vault eTMF - TMF Bot classification, EDL tracking, and DIA model alignment.",
          "Vault CTMS - site management, monitoring, RBM workflows, and issue resolution.",
          "Vault Study Startup - country intelligence and site activation progress views.",
          "Vault EDC - data capture with Direct Data API integration.",
          "Vault Payments - investigator and site payment automation from CTMS data.",
        ],
      },
      {
        title: "Pharmacovigilance and Safety",
        description:
          "Expedited reporting windows demand systems configured for speed, accuracy, and complete audit history.",
        bullets: [
          "Vault Safety - end-to-end ICSR management through global submission.",
          "Vault Safety Inbox - automated intake and triage from email, literature, and partners.",
        ],
      },
      {
        title: "Commercial and Medical Affairs",
        description:
          "MLR speed and compliance must improve together, not trade off against each other.",
        bullets: [
          "Vault PromoMats - parallel MLR workflows with full traceability.",
          "Vault MedComms - controlled scientific content distribution for medical teams.",
          "Vault CRM - field CRM with AI-assisted planning and engagement tracking.",
          "Vault Events Management - full HCP event lifecycle in one compliant workflow.",
        ],
      },
    ],
  },
  {
    id: "cpg",
    label: "Consumer Packaged Goods",
    subtitle: "Quality, Labelling, Supplier Governance",
    intro:
      "CPG organizations face growing pressure across quality, labeling, and supplier governance at a scale manual processes cannot support. With Veeva QualityOne, implementation quality becomes visible at the worst moments if done poorly.",
    blocks: [
      {
        title: "Quality and Document Control",
        description:
          "Modern quality operations need centralized, controlled content and event management across sites.",
        bullets: [
          "Vault QualityDocs - centralized SOPs, labeling masters, and formulation records.",
          "Vault QMS - CAPA, deviation, change control, and non-conformance aligned to ISO 9001:2015 and FSSC 22000.",
          "Vault Training - distributed workforce training compliance and automated requalification.",
          "Vault Station Manager - controlled delivery of instructions to shop floor operators.",
          "Vault Validation Management - structured qualification evidence for regulated environments.",
        ],
      },
      {
        title: "Supplier and Partner Quality",
        description:
          "Supplier quality must run inside a controlled process, not in disconnected inboxes.",
        bullets: [
          "Supplier quality portal - audits, qualifications, CAPA, and certificates in Vault QMS.",
          "ERP and PLM integration - trigger workflows from SAP, Oracle, or Dynamics events.",
          "Labelling compliance workflows - market-specific label versioning and approvals.",
        ],
      },
    ],
  },
  {
    id: "food-beverage",
    label: "Food and Beverage",
    subtitle: "FSMA, EFSA, BRC, SQF, IFS Aligned",
    intro:
      "A recall or labeling error is not only a compliance issue in food and beverage, it is a business crisis. Veeva QualityOne must be configured to the exact frameworks your teams operate under.",
    blocks: [
      {
        title: "Food Safety and Quality Management",
        description:
          "Quality systems must support daily operational control and certification readiness simultaneously.",
        bullets: [
          "Vault QualityDocs - recipe, specification, and labeling control across sites and co-packers.",
          "Vault QMS - CAPA, deviation, HACCP documentation, and corrective action workflows.",
          "Vault Training - role-specific compliance training with real-time completion tracking.",
          "Vault Station Manager - controlled CCP and allergen instructions at line level.",
        ],
      },
      {
        title: "Recall and Crisis Response",
        description:
          "Recall response is defined by documentation speed and decision clarity.",
        bullets: [
          "Recall workflow configuration - escalation, communication, and evidence paths aligned to FDA and EFSA timelines.",
          "Mock recall readiness - traceability testing and procedure evidence for audit confidence.",
        ],
      },
      {
        title: "Supplier and Ingredient Governance",
        description:
          "Ingredient traceability and supplier control need structured, retrievable evidence.",
        bullets: [
          "Supplier qualification portal - ingredient and co-packer governance in Vault QMS.",
          "FSMA traceability workflows - preventive controls and FSVP records accessible within required windows.",
          "ERP and MES integration - automated exchange of batch, specification, and quality event data.",
        ],
      },
    ],
  },
  {
    id: "chemical",
    label: "Chemical",
    subtitle: "Specialty and Fine Chemicals",
    intro:
      "In chemical manufacturing, documentation gaps create operational and legal risk. Veeva QualityOne can manage this complexity when implemented by teams that understand process safety and regulatory stewardship.",
    blocks: [
      {
        title: "Quality and Document Management",
        description:
          "Safety, quality, and process records must be version-controlled and accessible by market and role.",
        bullets: [
          "Vault QualityDocs - SDS, technical data sheets, specs, and safety documents with jurisdiction-aware control.",
          "Vault QMS - change control, CAPA, and deviation workflows aligned to ISO 9001:2015 and IATF 16949.",
          "Vault Training - role-based qualifications and requalification for plant, lab, and field teams.",
          "Vault Validation Management - structured IQ/OQ qualification evidence for regulated systems.",
        ],
      },
      {
        title: "Process Safety Documentation",
        description:
          "Process safety records require strict approval pathways and clear revision history.",
        bullets: [
          "HAZOP, PSSR, and MOC workflows - defined review, sign-off, and implementation verification.",
          "Permit-to-work and safety procedure control - site-level controlled distribution and full access audit trail.",
        ],
      },
      {
        title: "Regulatory Submissions and Product Stewardship",
        description:
          "Global stewardship requires searchable, auditable archives across multiple agencies.",
        bullets: [
          "REACH and multi-jurisdiction archives - dossiers, evaluations, and registrations in one controlled source.",
          "Product stewardship compliance - SVHC tracking, restriction evidence, and downstream communications.",
        ],
      },
      {
        title: "Supplier and Partner Governance",
        description:
          "Supplier quality and EHS event integration must flow into controlled quality workflows.",
        bullets: [
          "Raw material supplier qualification - audit records, COA workflows, and non-conformance closure.",
          "EHS and ERP integration - automated trigger paths from specification and supplier events into Vault.",
        ],
      },
    ],
  },
];

  const caseStudies = [
  {
    tag: "Consulting",
    tagColor: "#0b3a63",
    imgBg: "#dbe8f4",
    company: "Global Pharma Co.",
    title: "Unified Vault RIM architecture for global submissions",
    description:
      "Accelerated regulatory submission timelines by consolidating fragmented regional systems into a single Vault RIM instance with automated dossier assembly.",
    stats: [
      { value: "40%", label: "Faster submission cycles" },
      { value: "12", label: "Markets integrated" },
    ],
    image: "/images/case-studies/pharma.jpg", // replace with your image
  },
  {
    tag: "Life Sciences",
    tagColor: "#0f6e56",
    imgBg: "#d8eee7",
    company: "MedTech Manufacturer",
    title: "QualityOne rollout with CAPA and supplier governance",
    description:
      "Stabilised quality processes across 6 manufacturing sites by deploying QualityOne with standardised CAPA workflows and supplier corrective action portals.",
    stats: [
      { value: "60%", label: "CAPA closure rate improvement" },
      { value: "6", label: "Sites unified" },
    ],
    image: "/images/case-studies/medtech.jpg",
  },
  {
    tag: "Operations",
    tagColor: "#534ab7",
    imgBg: "#e4dff5",
    company: "Multi-site Ops Group",
    title: "Recall readiness and traceability workflow modernisation",
    description:
      "Replaced manual spreadsheet-based recall tracking with end-to-end traceability workflows, enabling rapid lot identification across distributed warehouse operations.",
    stats: [
      { value: "3x", label: "Faster lot traceability" },
      { value: "100%", label: "Audit trail coverage" },
    ],
    image: "/images/case-studies/operations.jpg",
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

export default function IndustriesClient() {
  const [activeTab, setActiveTab] = useState(industryTabs[0].id);
  const currentTab = useMemo(
    () => industryTabs.find(tab => tab.id === activeTab) ?? industryTabs[0],
    [activeTab],
  );

  return (
    <main className="polish-layout min-h-screen overflow-x-hidden bg-[#f8fafc] text-[#0f172a]">
      <section className="hero-grid">
        <div className="site-container pb-14 pt-12 lg:pb-20 lg:pt-16">
          <p className="site-kicker">Industries</p>
          <h1 className="mt-4 max-w-[1020px]">
            Veeva Consulting for Regulated Industries. Delivered by People Who Know Them.
          </h1>
          <p className="site-subheading mt-5 max-w-[930px]">
            From global pharma submissions to food safety compliance, if your industry is regulated and your
            operations run on Veeva, we have been here before.
          </p>
        </div>
      </section>

      <section className="site-section-alt">
        <div className="site-container">
          <p className="site-kicker">Industry Overview</p>
          <h2 className="mt-4 max-w-[820px]">
            Why do regulated industries need a specialist partner?
          </h2>
          <div className="site-body mt-6 max-w-[1040px] space-y-4">
            <p>
              Most consultancies treat compliance as a constraint. In regulated industries, it is the foundation
              everything is built on. From system configurations to data structures, each decision carries implications
              across GxP, 21 CFR Part 11, and IDMP requirements.
            </p>
            <p>
              Generalist firms learn these constraints on your engagement. Wolvio does not. Our practice is built
              around regulatory, quality, and commercial technology demands where poor configuration leads to delayed
              submissions, failed audits, and missed timelines.
            </p>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
            <aside className="site-card h-fit p-4">
              <p className="px-3 pb-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#8fa2b8]">
                Industry Tabs
              </p>
              <div className="space-y-2">
                {industryTabs.map(tab => {
                  const isActive = tab.id === currentTab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full rounded-[18px] px-3 py-3 text-left transition ${
                        isActive ? "bg-[#e9f2f5]" : "hover:bg-[#f1f6fa]"
                      }`}
                    >
                      <p className={`text-[15px] font-semibold ${isActive ? "text-[#2f7f88]" : "text-[#173652]"}`}>
                        {tab.label}
                      </p>
                      <p className="mt-1 text-[12px] text-[#6c8196]">{tab.subtitle}</p>
                    </button>
                  );
                })}
              </div>
            </aside>

            <div className="site-card p-6 sm:p-7">
              <p className="site-kicker">
                {currentTab.label}
              </p>
              <p className="mt-1 text-[14px] font-medium text-[#5d748b]">{currentTab.subtitle}</p>
              <p className="mt-4 text-[15px] leading-[1.65] text-[#63798d]">{currentTab.intro}</p>
              <div className="mt-7 grid gap-5">
                {currentTab.blocks.map(block => (
                  <article key={block.title} className="site-card rounded-[24px] bg-white p-5 sm:p-6">
                    <h3 className="text-[20px] font-semibold leading-[1.25] text-[#173652]">{block.title}</h3>
                    <p className="mt-3 text-[15px] leading-[1.65] text-[#63798d]">{block.description}</p>
                    <ul className="mt-4 space-y-2 text-[15px] leading-[1.6] text-[#546b82]">
                      {block.bullets.map(bullet => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span className="mt-[8px] h-1.5 w-1.5 rounded-full bg-[#2f8b92]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



<section className="site-section-alt">
  <div className="site-container">
    <p className="site-kicker">Relevant Case Studies</p>
    <h2 className="mt-4">Real results across regulated industries</h2>

    <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {caseStudies.map((cs) => (
        <article
          key={cs.title}
          className="site-card overflow-hidden bg-white flex flex-col"
        >
          {/* Image area */}
          <div
            className="relative h-[160px] w-full overflow-hidden flex-shrink-0"
            style={{ background: cs.imgBg }}
          >
            {/*<img
              src={cs.image}
              alt={cs.title}
              className="h-full w-full object-cover"
            /> */}
            {/* Tag badge */}
            <span
              className="absolute left-3 top-3 rounded-[6px] px-[10px] py-1 text-[11px] font-medium tracking-wide"
              style={{ background: cs.tagColor, color: "#e6f1fb" }}
            >
              {cs.tag}
            </span>
          </div>

          {/* Body */}
          <div className="flex flex-1 flex-col p-5">
            <p className="text-[12px] font-medium uppercase tracking-[0.05em] text-[#2f7f88]">
              {cs.company}
            </p>
            <h3 className="mt-1.5 text-[16px] font-semibold leading-[1.35] text-[#173652]">
              {cs.title}
            </h3>
            <p className="mt-2 flex-1 text-[14px] leading-[1.65] text-[#63798d]">
              {cs.description}
            </p>

            {/* Stats */}
            <div className="mt-4 grid grid-cols-2 gap-2">
              {cs.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[10px] bg-[#f5f8fb] px-3 py-2.5"
                >
                  <p className="text-[20px] font-bold leading-none text-[#0b3a63]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] leading-[1.4] text-[#63798d]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>

    <Link
      href="/case-studies"
      className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-[#2f7f88]"
    >
      Explore case studies
      <ArrowRightIcon />
    </Link>
  </div>
</section>
      

      <section className="tone-lock site-section pb-16 pt-10 sm:pb-20">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-[34px] bg-[linear-gradient(130deg,#072c52,#0a2d55_48%,#0e355f)] p-10 text-white sm:p-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(47,143,146,0.24),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(47,143,146,0.22),transparent_38%),radial-gradient(circle_at_30px_30px,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:auto,auto,34px_34px]" />
            <div className="relative text-center">
              <span className="inline-flex rounded-full border border-[#1f6980] bg-[#114866]/55 px-5 py-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#7ec4c7]">
                Get Started
              </span>
              <h2 className="mx-auto mt-7 max-w-[920px] !text-[26px] ">
                Serving life sciences exclusively, from day one.
              </h2>
              <p className="mx-auto mt-4 max-w-[840px] text-[16px] leading-[1.65] text-[#b6c9da]">
                Every Wolvio engagement is led by consultants who understand your regulatory environment, your Veeva
                platform, and the compliance expectations your organization operates under. Let&apos;s talk about yours.
              </p>
              <div className="mt-8 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-[#3a8f90] px-10 py-4 text-[15px] font-semibold text-white transition hover:bg-[#347f80]"
                >
                  Talk to a Specialist
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
