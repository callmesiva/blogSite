"use client";

export default function SolutionDiagram() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 800"
      className="w-full h-auto"
      style={{ overflow: "visible" }}
    >
      <defs>
        {/* Radial for outer ambient glow */}
        <radialGradient id="ambientGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2F6F73" stopOpacity="0.07" />
          <stop offset="100%" stopColor="#2F6F73" stopOpacity="0" />
        </radialGradient>

        {/* Radial fills for primary cluster nodes */}
        <radialGradient id="primFill" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#D9E2EC" />
        </radialGradient>

        {/* Radial fills for outer nodes */}
        <radialGradient id="outerFill" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#D9E2EC" />
        </radialGradient>

        {/* Soft shadow filter for primary nodes */}
        <filter id="nodeShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="6" result="blur" />
          <feFlood floodColor="#0A2540" floodOpacity="0.10" result="color" />
          <feComposite in="color" in2="blur" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Lighter shadow for outer nodes */}
        <filter id="outerShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
          <feFlood floodColor="#0A2540" floodOpacity="0.07" result="color" />
          <feComposite in="color" in2="blur" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Glow for hub ring */}
        <filter id="ringGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Clip circles for node backgrounds */}
        <clipPath id="cPrim48">
          <circle r="48" />
        </clipPath>
        <clipPath id="cOuter36">
          <circle r="36" />
        </clipPath>

        {/* Motion paths: hub → primary nodes */}
        <path id="mPH" d="M 400 400 L 400 290" />
        <path id="mPBR" d="M 400 400 L 495 455" />
        <path id="mPBL" d="M 400 400 L 305 455" />

        {/* Motion paths: primary → outer nodes (clockwise from top) */}
        <path id="mPC1" d="M 400 290 L 400 130" />
        <path id="mPC2" d="M 495 455 L 630 200" />
        <path id="mPC3" d="M 495 455 L 640 530" />
        <path id="mPC4" d="M 305 455 L 400 640" />
        <path id="mPC5" d="M 305 455 L 160 530" />
        <path id="mPC6" d="M 400 290 L 170 200" />
      </defs>

      {/* ─── Ambient background glow ─── */}
      <circle cx="400" cy="400" r="340" fill="url(#ambientGlow)" />

      {/* ─── Orbit ring 1 (inner) ─── */}
      <circle
        cx="400"
        cy="400"
        r="158"
        fill="none"
        stroke="#2F6F73"
        strokeWidth="0.6"
        strokeDasharray="3 9"
        opacity="0.18"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 400 400"
          to="360 400 400"
          dur="80s"
          repeatCount="indefinite"
        />
      </circle>

      {/* ─── Orbit ring 2 (outer) ─── */}
      <circle
        cx="400"
        cy="400"
        r="272"
        fill="none"
        stroke="#2F6F73"
        strokeWidth="0.8"
        strokeDasharray="4 12"
        opacity="0.12"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 400 400"
          to="-360 400 400"
          dur="120s"
          repeatCount="indefinite"
        />
      </circle>

      {/* ─── Decorative grid dot field (very subtle) ─── */}
      <g opacity="0.05">
        <rect x="300" y="100" width="4" height="4" rx="2" fill="#2F6F73" />
        <rect x="340" y="100" width="4" height="4" rx="2" fill="#2F6F73" />
        <rect x="460" y="100" width="4" height="4" rx="2" fill="#2F6F73" />
        <rect x="500" y="100" width="4" height="4" rx="2" fill="#2F6F73" />
        <rect x="620" y="180" width="4" height="4" rx="2" fill="#2F6F73" />
        <rect x="660" y="180" width="4" height="4" rx="2" fill="#2F6F73" />
        <rect x="640" y="560" width="4" height="4" rx="2" fill="#2F6F73" />
        <rect x="680" y="560" width="4" height="4" rx="2" fill="#2F6F73" />
        <rect x="150" y="180" width="4" height="4" rx="2" fill="#2F6F73" />
        <rect x="110" y="180" width="4" height="4" rx="2" fill="#2F6F73" />
        <rect x="130" y="560" width="4" height="4" rx="2" fill="#2F6F73" />
        <rect x="90" y="560" width="4" height="4" rx="2" fill="#2F6F73" />
        <rect x="360" y="670" width="4" height="4" rx="2" fill="#2F6F73" />
        <rect x="400" y="670" width="4" height="4" rx="2" fill="#2F6F73" />
        <rect x="440" y="670" width="4" height="4" rx="2" fill="#2F6F73" />
      </g>

      {/* ══════════════════════════════════════════════
         CONNECTOR LINES — hub to primary nodes
      ══════════════════════════════════════════════ */}
      <line
        x1="400"
        y1="352"
        x2="400"
        y2="338"
        stroke="#64748B"
        strokeWidth="0.8"
        opacity="0.35"
      />
      <line
        x1="447"
        y1="427"
        x2="459"
        y2="434"
        stroke="#64748B"
        strokeWidth="0.8"
        opacity="0.35"
      />
      <line
        x1="353"
        y1="427"
        x2="341"
        y2="434"
        stroke="#64748B"
        strokeWidth="0.8"
        opacity="0.35"
      />

      {/* ══════════════════════════════════════════════
         CONNECTOR LINES — primary to outer nodes
      ══════════════════════════════════════════════ */}
      <line
        x1="400"
        y1="242"
        x2="400"
        y2="166"
        stroke="#64748B"
        strokeWidth="0.7"
        opacity="0.25"
      />
      <line
        x1="532"
        y1="440"
        x2="598"
        y2="222"
        stroke="#64748B"
        strokeWidth="0.7"
        opacity="0.25"
      />
      <line
        x1="540"
        y1="468"
        x2="608"
        y2="514"
        stroke="#64748B"
        strokeWidth="0.7"
        opacity="0.25"
      />
      <line
        x1="316"
        y1="490"
        x2="388"
        y2="606"
        stroke="#64748B"
        strokeWidth="0.7"
        opacity="0.25"
      />
      <line
        x1="272"
        y1="462"
        x2="200"
        y2="510"
        stroke="#64748B"
        strokeWidth="0.7"
        opacity="0.25"
      />
      <line
        x1="358"
        y1="264"
        x2="218"
        y2="210"
        stroke="#64748B"
        strokeWidth="0.7"
        opacity="0.25"
      />

      {/* ══════════════════════════════════════════════
         INTER-OUTER soft arcs (topology feel)
      ══════════════════════════════════════════════ */}
      <path
        d="M 400 130 Q 520 160 630 200"
        fill="none"
        stroke="#64748B"
        strokeWidth="0.5"
        opacity="0.12"
      />
      <path
        d="M 630 200 Q 670 360 640 530"
        fill="none"
        stroke="#64748B"
        strokeWidth="0.5"
        opacity="0.12"
      />
      <path
        d="M 640 530 Q 520 660 400 640"
        fill="none"
        stroke="#64748B"
        strokeWidth="0.5"
        opacity="0.12"
      />
      <path
        d="M 400 640 Q 270 660 160 530"
        fill="none"
        stroke="#64748B"
        strokeWidth="0.5"
        opacity="0.12"
      />
      <path
        d="M 160 530 Q 130 360 170 200"
        fill="none"
        stroke="#64748B"
        strokeWidth="0.5"
        opacity="0.12"
      />
      <path
        d="M 170 200 Q 280 150 400 130"
        fill="none"
        stroke="#64748B"
        strokeWidth="0.5"
        opacity="0.12"
      />

      {/* ══════════════════════════════════════════════
         TRAVEL PARTICLES — hub to primaries
      ══════════════════════════════════════════════ */}
      <circle r="2.2" fill="#2F6F73" opacity="0.7">
        <animateMotion dur="3s" repeatCount="indefinite" begin="0s">
          <mpath href="#mPH" />
        </animateMotion>
        <animate
          attributeName="opacity"
          values="0;0.7;0"
          dur="3s"
          repeatCount="indefinite"
          begin="0s"
        />
      </circle>
      <circle r="2.2" fill="#2F6F73" opacity="0.7">
        <animateMotion dur="3s" repeatCount="indefinite" begin="1s">
          <mpath href="#mPBR" />
        </animateMotion>
        <animate
          attributeName="opacity"
          values="0;0.7;0"
          dur="3s"
          repeatCount="indefinite"
          begin="1s"
        />
      </circle>
      <circle r="2.2" fill="#2F6F73" opacity="0.7">
        <animateMotion dur="3s" repeatCount="indefinite" begin="2s">
          <mpath href="#mPBL" />
        </animateMotion>
        <animate
          attributeName="opacity"
          values="0;0.7;0"
          dur="3s"
          repeatCount="indefinite"
          begin="2s"
        />
      </circle>

      {/* ══════════════════════════════════════════════
         TRAVEL PARTICLES — primaries to outer
      ══════════════════════════════════════════════ */}
      <circle r="1.6" fill="#2E7A78" opacity="0.55">
        <animateMotion dur="4.5s" repeatCount="indefinite" begin="0.3s">
          <mpath href="#mPC1" />
        </animateMotion>
        <animate
          attributeName="opacity"
          values="0;0.55;0"
          dur="4.5s"
          repeatCount="indefinite"
          begin="0.3s"
        />
      </circle>
      <circle r="1.6" fill="#2E7A78" opacity="0.55">
        <animateMotion dur="4.5s" repeatCount="indefinite" begin="1.05s">
          <mpath href="#mPC2" />
        </animateMotion>
        <animate
          attributeName="opacity"
          values="0;0.55;0"
          dur="4.5s"
          repeatCount="indefinite"
          begin="1.05s"
        />
      </circle>
      <circle r="1.6" fill="#2E7A78" opacity="0.55">
        <animateMotion dur="4.5s" repeatCount="indefinite" begin="1.8s">
          <mpath href="#mPC3" />
        </animateMotion>
        <animate
          attributeName="opacity"
          values="0;0.55;0"
          dur="4.5s"
          repeatCount="indefinite"
          begin="1.8s"
        />
      </circle>
      <circle r="1.6" fill="#2E7A78" opacity="0.55">
        <animateMotion dur="4.5s" repeatCount="indefinite" begin="2.55s">
          <mpath href="#mPC4" />
        </animateMotion>
        <animate
          attributeName="opacity"
          values="0;0.55;0"
          dur="4.5s"
          repeatCount="indefinite"
          begin="2.55s"
        />
      </circle>
      <circle r="1.6" fill="#2E7A78" opacity="0.55">
        <animateMotion dur="4.5s" repeatCount="indefinite" begin="3.3s">
          <mpath href="#mPC5" />
        </animateMotion>
        <animate
          attributeName="opacity"
          values="0;0.55;0"
          dur="4.5s"
          repeatCount="indefinite"
          begin="3.3s"
        />
      </circle>
      <circle r="1.6" fill="#2E7A78" opacity="0.55">
        <animateMotion dur="4.5s" repeatCount="indefinite" begin="4.05s">
          <mpath href="#mPC6" />
        </animateMotion>
        <animate
          attributeName="opacity"
          values="0;0.55;0"
          dur="4.5s"
          repeatCount="indefinite"
          begin="4.05s"
        />
      </circle>

      {/* ══════════════════════════════════════════════
         OUTER NODES
      ══════════════════════════════════════════════ */}
      {/* Clinical */}
      <g transform="translate(400,130)" filter="url(#outerShadow)">
        <circle
          r="36"
          fill="#F8FAFC"
          stroke="#2F6F73"
          strokeWidth="0.9"
          opacity="0.92"
        >
          <animate
            attributeName="opacity"
            values="0.7;0.92;0.7"
            dur="9s"
            begin="0s"
            repeatCount="indefinite"
          />
        </circle>
        <polyline
          points="-12,0 -6,0 -3,-9 0,9 3,0 12,0"
          fill="none"
          stroke="#2F6F73"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.65"
        />
        <text
          y="20"
          textAnchor="middle"
          fontFamily="-apple-system,BlinkMacSystemFont,'DM Sans',sans-serif"
          fontSize="9.5"
          fontWeight="500"
          fill="#0A2540"
          letterSpacing="0.8"
          opacity="0.75"
        >
          CLINICAL
        </text>
      </g>

      {/* Regulatory */}
      <g transform="translate(632,210)" filter="url(#outerShadow)">
        <circle
          r="41"
          fill="#F8FAFC"
          stroke="#2F6F73"
          strokeWidth="0.9"
          opacity="0.88"
        >
          <animate
            attributeName="opacity"
            values="0.65;0.88;0.65"
            dur="10s"
            begin="1.5s"
            repeatCount="indefinite"
          />
        </circle>
        <rect
          x="-10"
          y="-12"
          width="20"
          height="24"
          rx="3"
          fill="none"
          stroke="#2F6F73"
          strokeWidth="1.3"
          opacity="0.65"
        />
        <line
          x1="-5"
          y1="-5"
          x2="5"
          y2="-5"
          stroke="#2F6F73"
          strokeWidth="1.1"
          strokeLinecap="round"
          opacity="0.55"
        />
        <line
          x1="-5"
          y1="0"
          x2="5"
          y2="0"
          stroke="#2F6F73"
          strokeWidth="1.1"
          strokeLinecap="round"
          opacity="0.55"
        />
        <line
          x1="-5"
          y1="5"
          x2="2"
          y2="5"
          stroke="#2F6F73"
          strokeWidth="1.1"
          strokeLinecap="round"
          opacity="0.55"
        />
        <text
          y="22"
          dy="2"
          textAnchor="middle"
          fontFamily="-apple-system,BlinkMacSystemFont,'DM Sans',sans-serif"
          fontSize="9"
          fontWeight="500"
          fill="#0A2540"
          letterSpacing="0.6"
          opacity="0.72"
        >
          REGULATORY
        </text>
      </g>

      {/* Quality */}
      <g transform="translate(644,524)" filter="url(#outerShadow)">
        <circle
          r="36"
          fill="#F8FAFC"
          stroke="#2F6F73"
          strokeWidth="0.9"
          opacity="0.86"
        >
          <animate
            attributeName="opacity"
            values="0.62;0.86;0.62"
            dur="11s"
            begin="3s"
            repeatCount="indefinite"
          />
        </circle>
        <path
          d="M 0 -13 L 10 -8 L 10 2 Q 10 12 0 16 Q -10 12 -10 2 L -10 -8 Z"
          fill="none"
          stroke="#2F6F73"
          strokeWidth="1.3"
          strokeLinejoin="round"
          opacity="0.65"
        />
        <polyline
          points="-5,2 -1,6 7,-4"
          fill="none"
          stroke="#2F6F73"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.65"
        />
        <text
          y="22"
          dy="4"
          textAnchor="middle"
          fontFamily="-apple-system,BlinkMacSystemFont,'DM Sans',sans-serif"
          fontSize="9.5"
          fontWeight="500"
          fill="#0A2540"
          letterSpacing="0.8"
          opacity="0.72"
        >
          QUALITY
        </text>
      </g>

      {/* Safety */}
      <g transform="translate(400,640)" filter="url(#outerShadow)">
        <circle
          r="36"
          fill="#F8FAFC"
          stroke="#2F6F73"
          strokeWidth="0.9"
          opacity="0.9"
        >
          <animate
            attributeName="opacity"
            values="0.68;0.9;0.68"
            dur="9.5s"
            begin="4.5s"
            repeatCount="indefinite"
          />
        </circle>
        <line
          x1="0"
          y1="-11"
          x2="0"
          y2="11"
          stroke="#2F6F73"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.65"
        />
        <line
          x1="-11"
          y1="0"
          x2="11"
          y2="0"
          stroke="#2F6F73"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.65"
        />
        <text
          y="22"
          textAnchor="middle"
          fontFamily="-apple-system,BlinkMacSystemFont,'DM Sans',sans-serif"
          fontSize="9.5"
          fontWeight="500"
          fill="#0A2540"
          letterSpacing="0.8"
          opacity="0.72"
        >
          SAFETY
        </text>
      </g>

      {/* Medical */}
      <g transform="translate(190,520)" filter="url(#outerShadow)">
        <circle
          r="36"
          fill="#F8FAFC"
          stroke="#2F6F73"
          strokeWidth="0.9"
          opacity="0.87"
        >
          <animate
            attributeName="opacity"
            values="0.64;0.87;0.64"
            dur="10.5s"
            begin="2.2s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="0"
          cy="-3"
          r="9"
          fill="none"
          stroke="#2F6F73"
          strokeWidth="1.3"
          opacity="0.65"
        />
        <circle
          cx="0"
          cy="-3"
          r="4"
          fill="none"
          stroke="#2F6F73"
          strokeWidth="1.1"
          opacity="0.5"
        />
        <line
          x1="0"
          y1="6"
          x2="0"
          y2="12"
          stroke="#2F6F73"
          strokeWidth="1.3"
          strokeLinecap="round"
          opacity="0.55"
        />
        <text
          y="22"
          textAnchor="middle"
          fontFamily="-apple-system,BlinkMacSystemFont,'DM Sans',sans-serif"
          fontSize="9.5"
          fontWeight="500"
          fill="#0A2540"
          letterSpacing="0.8"
          opacity="0.72"
        >
          MEDICAL
        </text>
      </g>

      {/* CRM */}
      <g transform="translate(168,208)" filter="url(#outerShadow)">
        <circle
          r="36"
          fill="#F8FAFC"
          stroke="#2F6F73"
          strokeWidth="0.9"
          opacity="0.85"
        >
          <animate
            attributeName="opacity"
            values="0.62;0.85;0.62"
            dur="12s"
            begin="0.8s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="0"
          cy="-7"
          r="5"
          fill="none"
          stroke="#2F6F73"
          strokeWidth="1.3"
          opacity="0.65"
        />
        <path
          d="M -9 8 Q -9 2 0 2 Q 9 2 9 8"
          fill="none"
          stroke="#2F6F73"
          strokeWidth="1.3"
          strokeLinecap="round"
          opacity="0.65"
        />
        <text
          y="22"
          textAnchor="middle"
          fontFamily="-apple-system,BlinkMacSystemFont,'DM Sans',sans-serif"
          fontSize="9.5"
          fontWeight="500"
          fill="#0A2540"
          letterSpacing="0.8"
          opacity="0.72"
        >
          CRM
        </text>
      </g>

      {/* ══════════════════════════════════════════════
         PRIMARY CLUSTER NODES
      ══════════════════════════════════════════════ */}
      <g transform="translate(400,290)" filter="url(#nodeShadow)">
        <circle
          r="54"
          fill="none"
          stroke="#2F6F73"
          strokeWidth="0.6"
          opacity="0.12"
        >
          <animate
            attributeName="r"
            values="50;60;50"
            dur="8s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.12;0.04;0.12"
            dur="8s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          r="48"
          fill="url(#primFill)"
          stroke="#2F6F73"
          strokeWidth="1.2"
          opacity="0.95"
        >
          <animate
            attributeName="r"
            values="48;50;48"
            dur="8s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          r="40"
          fill="none"
          stroke="#2F6F73"
          strokeWidth="0.5"
          opacity="0.2"
        />
        <text
          y="5"
          textAnchor="middle"
          fontFamily="-apple-system,BlinkMacSystemFont,'DM Sans',sans-serif"
          fontSize="11"
          fontWeight="600"
          fill="#0A2540"
          letterSpacing="0.8"
          opacity="0.85"
        >
          PHARMA
        </text>
      </g>

      <g transform="translate(496,456)" filter="url(#nodeShadow)">
        <circle
          r="52"
          fill="none"
          stroke="#2F6F73"
          strokeWidth="0.6"
          opacity="0.1"
        >
          <animate
            attributeName="r"
            values="48;58;48"
            dur="9s"
            begin="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.10;0.03;0.10"
            dur="9s"
            begin="2s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          r="48"
          fill="url(#primFill)"
          stroke="#2F6F73"
          strokeWidth="1.2"
          opacity="0.95"
        >
          <animate
            attributeName="r"
            values="48;50;48"
            dur="9s"
            begin="2s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          r="40"
          fill="none"
          stroke="#2F6F73"
          strokeWidth="0.5"
          opacity="0.2"
        />
        <text
          y="5"
          textAnchor="middle"
          fontFamily="-apple-system,BlinkMacSystemFont,'DM Sans',sans-serif"
          fontSize="11"
          fontWeight="600"
          fill="#0A2540"
          letterSpacing="0.8"
          opacity="0.85"
        >
          MEDTECH
        </text>
      </g>

      <g transform="translate(304,456)" filter="url(#nodeShadow)">
        <circle
          r="52"
          fill="none"
          stroke="#2F6F73"
          strokeWidth="0.6"
          opacity="0.1"
        >
          <animate
            attributeName="r"
            values="48;58;48"
            dur="10s"
            begin="4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.10;0.03;0.10"
            dur="10s"
            begin="4s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          r="48"
          fill="url(#primFill)"
          stroke="#2F6F73"
          strokeWidth="1.2"
          opacity="0.95"
        >
          <animate
            attributeName="r"
            values="48;50;48"
            dur="10s"
            begin="4s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          r="40"
          fill="none"
          stroke="#2F6F73"
          strokeWidth="0.5"
          opacity="0.2"
        />
        <text
          y="5"
          textAnchor="middle"
          fontFamily="-apple-system,BlinkMacSystemFont,'DM Sans',sans-serif"
          fontSize="11"
          fontWeight="600"
          fill="#0A2540"
          letterSpacing="0.8"
          opacity="0.85"
        >
          BIOTECH
        </text>
      </g>

      {/* ══════════════════════════════════════════════
         HUB — dead centre (400, 400)
      ══════════════════════════════════════════════ */}
      <circle
        cx="400"
        cy="400"
        r="38"
        fill="none"
        stroke="#2F6F73"
        strokeWidth="0.5"
        opacity="0.08"
      >
        <animate
          attributeName="r"
          values="35;48;35"
          dur="7s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.08;0.02;0.08"
          dur="7s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        cx="400"
        cy="400"
        r="28"
        fill="none"
        stroke="#2F6F73"
        strokeWidth="0.7"
        opacity="0.18"
      >
        <animate
          attributeName="r"
          values="28;34;28"
          dur="7s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        cx="400"
        cy="400"
        r="22"
        fill="#0A2540"
        stroke="#2F6F73"
        strokeWidth="1.2"
        filter="url(#ringGlow)"
      >
        <animate
          attributeName="r"
          values="22;24;22"
          dur="7s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="400" cy="400" r="10" fill="#2F6F73" opacity="0.85">
        <animate
          attributeName="r"
          values="10;12;10"
          dur="7s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.85;0.6;0.85"
          dur="7s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}
