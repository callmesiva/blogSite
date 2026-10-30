// Case study content (from the Wolvio Case Study design), in the shape used by case-studies-client.tsx.

export type HeroStudy = {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  summary: string;
  meta: { label: string; value: string }[];
  currentLabel: string;
  currentValue: string;
  wolvioValue: string;
  transformedLabel: string;
  transformedValue: string;
  transformedDetail: string;
};

type Option = { label: string; title: string; items: string[] };

export type CaseDetail = {
  id: string;
  evidence: { value: string; label: string }[];
  challenge: { title: string; summary: string; items: { title: string; detail: string }[]; constraint: string; consequence: string; need: string };
  approach: { title: string; summary: string; stages: { number: string; title: string; detail: string }[]; layersLabel: string; layers: string[] };
  spotlight: {
    mode: "compare" | "chain";
    eyebrow: string;
    title: string;
    comparison: { first: Option; second: Option } | null;
    chainLabel: string;
    chain: { number: string; title: string }[];
    close: string;
    metric: string;
  };
  transformation: { title: string; pairs: { before: string; after: string }[] };
  impact: { title: string; primary: { title: string; label: string; detail: string }[]; secondary: { title: string; detail: string }[] };
  principles: { title: string; items: { title: string; detail: string }[] };
  cta: { title: string; summary: string; secondary: string };
};

export const HERO_CASE_STUDIES: HeroStudy[] = [
  {
    "id": "life-sciences",
    "label": "Life Science",
    "eyebrow": "CASE STUDY",
    "title": "Transforming regulatory operations through a zero-disruption Veeva Vault RIM migration",
    "summary": "How Wolvio helped a global pharmaceutical organization move from legacy Documentum D2 to a validated, scalable Veeva Regulatory Vault — preserving complex regulatory data integrity while accelerating the migration programme.",
    "meta": [
      {
        "label": "Industry",
        "value": "Global Pharmaceuticals"
      },
      {
        "label": "Capability",
        "value": "Regulatory Transformation"
      },
      {
        "label": "Platform",
        "value": "Veeva Vault RIM"
      },
      {
        "label": "Migrated from",
        "value": "Documentum D2"
      }
    ],
    "currentLabel": "CURRENT STATE",
    "currentValue": "Documentum D2",
    "wolvioValue": "Enterprise migration, engineered",
    "transformedLabel": "TRANSFORMED STATE",
    "transformedValue": "Veeva Vault RIM",
    "transformedDetail": "Regulatory transformation"
  },
  {
    "id": "enterprise-ai",
    "label": "Enterprise AI",
    "eyebrow": "CASE STUDY",
    "title": "Turning fragmented enterprise knowledge into an intelligent decision-support system",
    "summary": "How Wolvio Intelligence connected scattered documents, systems and expertise into a grounded, governed intelligence layer — so teams get cited answers instead of searching, and AI acts only where it is trusted to.",
    "meta": [
      {
        "label": "Client type",
        "value": "Global Enterprise"
      },
      {
        "label": "Capability",
        "value": "Knowledge Intelligence"
      },
      {
        "label": "Approach",
        "value": "Enterprise RAG"
      },
      {
        "label": "Governance",
        "value": "Human-in-the-loop"
      }
    ],
    "currentLabel": "CURRENT STATE",
    "currentValue": "Fragmented knowledge",
    "wolvioValue": "Grounded intelligence layer",
    "transformedLabel": "TRANSFORMED STATE",
    "transformedValue": "Connected intelligence",
    "transformedDetail": "Decisions supported in the flow of work"
  },
  {
    "id": "digital-transformation",
    "label": "Digital Transformation",
    "eyebrow": "CASE STUDY",
    "title": "Bringing governed execution to a fragmented enterprise delivery landscape",
    "summary": "How Wolvio helped an enterprise replace disconnected delivery, unclear accountability and limited visibility with a governed operating model — without stopping the work already in flight.",
    "meta": [
      {
        "label": "Client type",
        "value": "Global Enterprise"
      },
      {
        "label": "Capability",
        "value": "Transformation Governance"
      },
      {
        "label": "Scope",
        "value": "Multi-vendor delivery"
      },
      {
        "label": "Region",
        "value": "Multi-region"
      }
    ],
    "currentLabel": "CURRENT STATE",
    "currentValue": "Fragmented delivery",
    "wolvioValue": "Operating model, redesigned",
    "transformedLabel": "TRANSFORMED STATE",
    "transformedValue": "Governed execution",
    "transformedDetail": "Predictable enterprise delivery"
  }
];

export const CASE_STUDY_DETAILS: CaseDetail[] = [
  {
    "id": "life-sciences",
    "evidence": [
      {
        "value": "~2 months",
        "label": "Programme timeline reduction"
      },
      {
        "value": "100%",
        "label": "Data reconciliation accuracy"
      },
      {
        "value": "ZERO",
        "label": "Business disruption"
      },
      {
        "value": "ZERO",
        "label": "Critical post-migration defects"
      }
    ],
    "challenge": {
      "title": "A regulatory platform becoming a constraint on the business.",
      "summary": "Regulatory information had accumulated in a legacy environment over many years — deeply interconnected, heavily governed, and impossible to pause while the business kept filing.",
      "items": [
        {
          "title": "Content plans",
          "detail": "Structured regulatory relationships."
        },
        {
          "title": "Documents",
          "detail": "Versions, renditions and lifecycle states."
        },
        {
          "title": "Relationships",
          "detail": "Object-to-document integrity."
        },
        {
          "title": "Audit trails",
          "detail": "Historical traceability."
        },
        {
          "title": "Business continuity",
          "detail": "No interruption to live operations."
        }
      ],
      "constraint": "Documentum D2",
      "consequence": "Operational complexity across regulatory teams",
      "need": "TRANSFORMATION NEED"
    },
    "approach": {
      "title": "A transformation engineered around integrity, validation and continuity.",
      "summary": "Every stage was designed to prove correctness before the next one began — so nothing reached production unvalidated.",
      "stages": [
        {
          "number": "01",
          "title": "Extract",
          "detail": "Legacy content and metadata pulled with full lineage."
        },
        {
          "number": "02",
          "title": "Transform",
          "detail": "Mapped to the target model without losing regulatory meaning."
        },
        {
          "number": "03",
          "title": "Validate",
          "detail": "Checkpoints and dry runs before production commitment."
        },
        {
          "number": "04",
          "title": "Load",
          "detail": "Configuration-driven, repeatable execution."
        },
        {
          "number": "05",
          "title": "Reconcile",
          "detail": "Every migrated object accounted for and evidenced."
        }
      ],
      "layersLabel": "WHAT WAS PROTECTED THROUGHOUT",
      "layers": [
        "Master data",
        "Reference data",
        "Documents",
        "Versions",
        "Renditions",
        "Relationships",
        "Audit trails"
      ]
    },
    "spotlight": {
      "mode": "compare",
      "eyebrow": "THE PIVOTAL DECISION",
      "title": "Automate the complexity — or migrate it manually?",
      "comparison": {
        "first": {
          "label": "OPTION A",
          "title": "Manual-heavy approach",
          "items": [
            "High manual intervention",
            "Higher validation complexity",
            "Greater execution variability",
            "Longer projected timeline"
          ]
        },
        "second": {
          "label": "OPTION B · WOLVIO RECOMMENDATION",
          "title": "Configuration-driven automation",
          "items": [
            "Reduced manual intervention",
            "Lower validation burden",
            "Systematic execution",
            "Repeatable processing",
            "Dry-run validated performance"
          ]
        }
      },
      "chainLabel": "HOW THE DECISION WAS MADE",
      "chain": [
        {
          "number": "01",
          "title": "Performance testing"
        },
        {
          "number": "02",
          "title": "Dry runs"
        },
        {
          "number": "03",
          "title": "Evidence & analysis"
        },
        {
          "number": "04",
          "title": "Architecture decision"
        },
        {
          "number": "05",
          "title": "Configuration-driven automation"
        }
      ],
      "close": "Wolvio did not simply execute the migration. Wolvio made an evidence-backed engineering decision that materially improved the programme.",
      "metric": "~2 months saved"
    },
    "transformation": {
      "title": "The migration was the mechanism. Regulatory transformation was the outcome.",
      "pairs": [
        {
          "before": "Rigid workflows",
          "after": "Structured workflows"
        },
        {
          "before": "Manual workarounds",
          "after": "Scalable regulatory processes"
        },
        {
          "before": "Complex migration dependencies",
          "after": "Reconciled data foundation"
        },
        {
          "before": "Legacy limitations",
          "after": "Future-ready platform"
        },
        {
          "before": "Operational risk",
          "after": "Audit-ready environment"
        }
      ]
    },
    "impact": {
      "title": "What changed for the enterprise.",
      "primary": [
        {
          "title": "100%",
          "label": "DATA RECONCILIATION ACCURACY",
          "detail": "Complete reconciliation across migrated regulatory information."
        },
        {
          "title": "ZERO",
          "label": "BUSINESS DISRUPTION",
          "detail": "Regulatory operations continued throughout migration and go-live."
        },
        {
          "title": "~2 months",
          "label": "PROGRAMME TIMELINE REDUCTION",
          "detail": "Automation shortened the projected migration timeline."
        },
        {
          "title": "ZERO",
          "label": "CRITICAL POST-MIGRATION DEFECTS",
          "detail": "The migrated environment performed as expected following go-live."
        }
      ],
      "secondary": [
        {
          "title": "Stronger compliance readiness",
          "detail": "Validated and audit-ready regulatory environment."
        },
        {
          "title": "Greater scalability",
          "detail": "A foundation capable of supporting future regulatory operations."
        },
        {
          "title": "Improved user experience",
          "detail": "A modern platform replacing legacy operational friction."
        }
      ]
    },
    "principles": {
      "title": "What made the transformation successful.",
      "items": [
        {
          "title": "Domain expertise",
          "detail": "Understanding regulatory information, not merely moving data."
        },
        {
          "title": "Proven framework",
          "detail": "Migration complexity addressed systematically."
        },
        {
          "title": "Early validation",
          "detail": "Performance and accuracy tested before production commitment."
        },
        {
          "title": "Data-backed decisions",
          "detail": "Architecture decisions based on evidence."
        },
        {
          "title": "Automation first",
          "detail": "Reduced manual intervention, validation burden and risk."
        }
      ]
    },
    "cta": {
      "title": "Planning a complex Veeva transformation?",
      "summary": "Whether you're migrating from a legacy regulatory platform, modernizing an existing Vault environment or preparing for a broader Veeva transformation, Wolvio can help define and execute the right path.",
      "secondary": "Explore Veeva Capabilities"
    }
  },
  {
    "id": "enterprise-ai",
    "evidence": [
      {
        "value": "FASTER ANSWERS",
        "label": "Cited responses in place of manual search"
      },
      {
        "value": "GROUNDED",
        "label": "Every answer traceable to a source"
      },
      {
        "value": "GOVERNED",
        "label": "Human approval before enterprise action"
      }
    ],
    "challenge": {
      "title": "The knowledge existed. Finding and trusting it did not.",
      "summary": "Expertise sat across documents, applications and people. Answers were reachable in principle and expensive in practice — and nothing about that was safe to automate blindly.",
      "items": [
        {
          "title": "Siloed data",
          "detail": "Owned by different functions and platforms."
        },
        {
          "title": "Disconnected documents",
          "detail": "No shared structure or vocabulary."
        },
        {
          "title": "Manual decisions",
          "detail": "Repeated research for recurring questions."
        },
        {
          "title": "No governance",
          "detail": "No agreed control over AI-generated output."
        },
        {
          "title": "No measurement",
          "detail": "No way to prove answer quality."
        }
      ],
      "constraint": "Fragmented enterprise knowledge",
      "consequence": "Slow, inconsistent decision making",
      "need": "TRANSFORMATION NEED"
    },
    "approach": {
      "title": "Intelligence grounded in the enterprise — proven before it was trusted.",
      "summary": "The system earned autonomy stage by stage: retrieval before generation, evaluation before integration, integration before scale.",
      "stages": [
        {
          "number": "01",
          "title": "Discover",
          "detail": "Where answers are needed and what they cost today."
        },
        {
          "number": "02",
          "title": "Ground",
          "detail": "Connect authoritative sources with access control intact."
        },
        {
          "number": "03",
          "title": "Engineer",
          "detail": "Retrieval, context and generation built for the domain."
        },
        {
          "number": "04",
          "title": "Evaluate",
          "detail": "Accuracy and citation quality measured continuously."
        },
        {
          "number": "05",
          "title": "Integrate",
          "detail": "Delivered into the tools people already use."
        },
        {
          "number": "06",
          "title": "Scale",
          "detail": "Extended to new domains under the same controls."
        }
      ],
      "layersLabel": "WHAT WAS GOVERNED THROUGHOUT",
      "layers": [
        "Access control",
        "Source citation",
        "Evaluation",
        "Observability",
        "Human review",
        "Data residency"
      ]
    },
    "spotlight": {
      "mode": "chain",
      "eyebrow": "THE SIGNATURE INSIGHT",
      "title": "Building trust before autonomy.",
      "comparison": null,
      "chainLabel": "HOW INTELLIGENCE REACHES ENTERPRISE ACTION",
      "chain": [
        {
          "number": "01",
          "title": "Enterprise knowledge"
        },
        {
          "number": "02",
          "title": "Grounding"
        },
        {
          "number": "03",
          "title": "Retrieval"
        },
        {
          "number": "04",
          "title": "Reasoning"
        },
        {
          "number": "05",
          "title": "Evaluation"
        },
        {
          "number": "06",
          "title": "Human governance"
        },
        {
          "number": "07",
          "title": "Controlled enterprise action"
        }
      ],
      "close": "Autonomy was never the starting point. Each control had to hold before the system was allowed to act on its own.",
      "metric": "Trusted by design"
    },
    "transformation": {
      "title": "The model was the mechanism. Better decisions were the outcome.",
      "pairs": [
        {
          "before": "Manual search",
          "after": "Contextual, cited answers"
        },
        {
          "before": "Siloed information",
          "after": "Grounded enterprise context"
        },
        {
          "before": "Human-only decisions",
          "after": "AI-assisted decisions"
        },
        {
          "before": "Manual execution",
          "after": "Human + agent execution"
        },
        {
          "before": "Reactive operations",
          "after": "Predictive intelligence"
        }
      ]
    },
    "impact": {
      "title": "What changed for the enterprise.",
      "primary": [
        {
          "title": "Faster answers",
          "label": "TIME TO INFORMATION",
          "detail": "Questions resolved in the flow of work rather than through research."
        },
        {
          "title": "Traceable",
          "label": "ANSWER PROVENANCE",
          "detail": "Every response carries the sources behind it."
        },
        {
          "title": "Governed",
          "label": "CONTROLLED AUTONOMY",
          "detail": "Agents act only within approved boundaries."
        },
        {
          "title": "Repeatable",
          "label": "DOMAIN EXPANSION",
          "detail": "New knowledge domains onboarded through the same pattern."
        }
      ],
      "secondary": [
        {
          "title": "Stronger governance",
          "detail": "Evaluation and audit built into the operating model."
        },
        {
          "title": "Unified knowledge",
          "detail": "One grounded context serving many workflows."
        },
        {
          "title": "Improved productivity",
          "detail": "Expertise reaches the people who need it sooner."
        }
      ]
    },
    "principles": {
      "title": "What made the transformation successful.",
      "items": [
        {
          "title": "Domain context",
          "detail": "The system understood the business, not just the language."
        },
        {
          "title": "Enterprise integration",
          "detail": "Delivered inside existing systems and permissions."
        },
        {
          "title": "Human governance",
          "detail": "People stayed accountable for consequential actions."
        },
        {
          "title": "Model evaluation",
          "detail": "Quality measured continuously, not assumed."
        },
        {
          "title": "Production engineering",
          "detail": "Built to operate, monitor and improve."
        }
      ]
    },
    "cta": {
      "title": "Ready to move AI beyond experimentation?",
      "summary": "Whether you are grounding AI in enterprise knowledge, introducing copilots into daily work or preparing agentic workflows for production, Wolvio Intelligence can help define and execute the right path.",
      "secondary": "Explore AI Capabilities"
    }
  },
  {
    "id": "digital-transformation",
    "evidence": [
      {
        "value": "CLEAR OWNERSHIP",
        "label": "Accountability defined across vendors"
      },
      {
        "value": "GREATER VISIBILITY",
        "label": "One view of delivery health"
      },
      {
        "value": "PREDICTABLE",
        "label": "Execution against agreed measures"
      }
    ],
    "challenge": {
      "title": "Delivery was busy. Progress was hard to prove.",
      "summary": "Multiple vendors, parallel programmes and inherited processes made it difficult to see where work stood — and harder still to agree who owned the outcome.",
      "items": [
        {
          "title": "Multiple vendors",
          "detail": "Different methods, tools and reporting."
        },
        {
          "title": "Disconnected teams",
          "detail": "Dependencies discovered late."
        },
        {
          "title": "Unclear accountability",
          "detail": "Ownership diffused across the landscape."
        },
        {
          "title": "Limited visibility",
          "detail": "Status assembled manually."
        },
        {
          "title": "Legacy architecture",
          "detail": "Change carried unquantified risk."
        }
      ],
      "constraint": "Fragmented delivery governance",
      "consequence": "Unpredictable execution and rework",
      "need": "TRANSFORMATION NEED"
    },
    "approach": {
      "title": "Governance designed to enable delivery, not to observe it.",
      "summary": "The operating model was introduced alongside live delivery, proving itself on real work before being extended.",
      "stages": [
        {
          "number": "01",
          "title": "Assess",
          "detail": "Delivery landscape, dependencies and true status."
        },
        {
          "number": "02",
          "title": "Prioritize",
          "detail": "What creates business value first."
        },
        {
          "number": "03",
          "title": "Govern",
          "detail": "Ownership, controls and decision rights defined."
        },
        {
          "number": "04",
          "title": "Execute",
          "detail": "Delivery run against the agreed model."
        },
        {
          "number": "05",
          "title": "Measure",
          "detail": "Outcomes tracked and fed back into planning."
        }
      ],
      "layersLabel": "WHAT WAS MANAGED ACROSS EVERY STAGE",
      "layers": [
        "Dependencies",
        "Risk",
        "Change management",
        "Vendor alignment",
        "Reporting",
        "Business engagement"
      ]
    },
    "spotlight": {
      "mode": "chain",
      "eyebrow": "THE SIGNATURE INSIGHT",
      "title": "Accountability had to exist before speed could.",
      "comparison": null,
      "chainLabel": "HOW THE OPERATING MODEL WAS ESTABLISHED",
      "chain": [
        {
          "number": "01",
          "title": "Delivery baseline"
        },
        {
          "number": "02",
          "title": "Decision rights"
        },
        {
          "number": "03",
          "title": "Single delivery view"
        },
        {
          "number": "04",
          "title": "Cadence & escalation"
        },
        {
          "number": "05",
          "title": "Measured outcomes"
        }
      ],
      "close": "The change was organizational before it was technical — and that order is what made the delivery improvements hold.",
      "metric": "Governed by design"
    },
    "transformation": {
      "title": "The programme was the mechanism. A governed enterprise was the outcome.",
      "pairs": [
        {
          "before": "Reactive delivery",
          "after": "Governed execution"
        },
        {
          "before": "Fragmented reporting",
          "after": "One delivery view"
        },
        {
          "before": "Unclear ownership",
          "after": "Defined accountability"
        },
        {
          "before": "Late dependency discovery",
          "after": "Managed dependencies"
        },
        {
          "before": "Unmeasured outcomes",
          "after": "Evidence-based decisions"
        }
      ]
    },
    "impact": {
      "title": "What changed for the enterprise.",
      "primary": [
        {
          "title": "Visibility",
          "label": "DELIVERY TRANSPARENCY",
          "detail": "One shared view of status across vendors and programmes."
        },
        {
          "title": "Accountability",
          "label": "CLEAR OWNERSHIP",
          "detail": "Decision rights agreed and applied consistently."
        },
        {
          "title": "Predictability",
          "label": "RELIABLE EXECUTION",
          "detail": "Delivery measured against commitments that hold."
        },
        {
          "title": "Alignment",
          "label": "BUSINESS ENGAGEMENT",
          "detail": "Priorities set by business value rather than delivery convenience."
        }
      ],
      "secondary": [
        {
          "title": "Reduced rework",
          "detail": "Dependencies surfaced before they became escalations."
        },
        {
          "title": "Faster decisions",
          "detail": "Escalation paths short and unambiguous."
        },
        {
          "title": "Sustainable model",
          "detail": "Governance the enterprise can run without external support."
        }
      ]
    },
    "principles": {
      "title": "What made the transformation successful.",
      "items": [
        {
          "title": "Business alignment",
          "detail": "Delivery priorities anchored to business outcomes."
        },
        {
          "title": "Governance",
          "detail": "Controls that clarified rather than slowed."
        },
        {
          "title": "Engineering discipline",
          "detail": "Standards applied consistently across vendors."
        },
        {
          "title": "Change management",
          "detail": "Adoption treated as part of the delivery."
        },
        {
          "title": "Continuous measurement",
          "detail": "Progress evidenced, not asserted."
        }
      ]
    },
    "cta": {
      "title": "Navigating a complex enterprise transformation?",
      "summary": "Whether you are consolidating fragmented delivery, establishing governance across vendors or modernizing an enterprise platform landscape, Wolvio can help define and execute the right path.",
      "secondary": "Explore Our Capabilities"
    }
  }
];
