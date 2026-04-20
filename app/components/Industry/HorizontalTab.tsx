"use client";
import { useMemo, useState } from "react";
import ScrollReveal from "../ScrollReveal";

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

export default function HorizontalTab() {
  const [activeTab, setActiveTab] = useState(industryTabs[0].id);
  const currentTab = useMemo(
    () => industryTabs.find((tab) => tab.id === activeTab) ?? industryTabs[0],
    [activeTab],
  );

  return (
    <section className="site-section">
      <ScrollReveal className="site-container">
        <div className="overflow-hidden rounded-[16px] border border-[#dce6ef] bg-white">
          {/* ── TAB BAR ── */}
          <div className="flex w-full overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide">
            {industryTabs.map((tab, index) => {
              const isActive = tab.id === currentTab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  // FIXED: Replaced `flex-1` with `grow shrink-0`
                  className={`
          relative grow shrink-0 min-w-[200px] px-4 py-4 text-center
          whitespace-nowrap transition-colors duration-150
          ${
            isActive
              ? "bg-[#2f6f73] !text-white"
              : "bg-white text-[#2f6f73] hover:bg-[#eef3f8]"
          }
        `}
                >
                  <h3
                    className={`text-[16px] font-semibold transition-colors ${
                      isActive ? "text-white" : "text-[#2f6f73]"
                    }`}
                  >
                    {tab.label}
                  </h3>
                  <p
                    className={`mt-1 text-[12px] transition-colors ${
                      isActive ? "text-white" : "text-[#2f6f73]"
                    }`}
                  >
                    {tab.subtitle}
                  </p>

                  {/* Active indicator bar */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-white/20" />
                  )}
                </button>
              );
            })}
          </div>

          {/* ── TAB CONTENT ── */}
          <div className="p-6 sm:p-8">
            <p className="site-kicker">{currentTab.label}</p>
            <p className="mt-1 text-[14px] font-medium text-[#5d748b]">
              {currentTab.subtitle}
            </p>
            <p className="mt-4 max-w-[900px] text-[15px] leading-[1.65] text-[#63798d]">
              {currentTab.intro}
            </p>

            <div className="mt-7 grid gap-5 lg:grid-cols-2">
              {currentTab.blocks.map((block) => (
                <article
                  key={block.title}
                  // Swapped to a muted background so it stands out against the white wrapper
                  className="site-card rounded-[24px] bg-[#f8fafc] p-5 sm:p-6"
                >
                  <h3 className="text-[20px] font-semibold leading-[1.25] text-[#173652]">
                    {block.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.65] text-[#63798d]">
                    {block.description}
                  </p>
                  <ul className="mt-4 space-y-2 text-[15px] leading-[1.6] text-[#546b82]">
                    {block.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2f8b92]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
