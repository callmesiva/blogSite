"use client";

import React from "react";

export default function AiServiceGraphic() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Outer chamber arcs */
        .wv-oa  { animation: wv-oa-k  13s ease-in-out infinite; }
        @keyframes wv-oa-k  { 0%,100%{opacity:.5} 50%{opacity:.8} } /* increased for white bg */

        /* Inner chamber arcs — staggered breathing */
        .wv-i1  { animation: wv-i1-k  10s ease-in-out infinite; }
        .wv-i2  { animation: wv-i2-k  12s ease-in-out infinite 2.6s; }
        .wv-i3  { animation: wv-i3-k  15s ease-in-out infinite 5.3s; }
        @keyframes wv-i1-k  { 0%,100%{opacity:.3} 50%{opacity:.6} }
        @keyframes wv-i2-k  { 0%,100%{opacity:.2} 50%{opacity:.45} }
        @keyframes wv-i3-k  { 0%,100%{opacity:.15} 50%{opacity:.35} }

        /* Frame arcs top / bottom */
        .wv-fr  { animation: wv-fr-k  17s ease-in-out infinite; }
        @keyframes wv-fr-k  { 0%,100%{opacity:.3} 50%{opacity:.5} }

        /* Connector sweeps */
        .wv-cn  { animation: wv-cn-k   9s ease-in-out infinite; }
        .wv-cn2 { animation: wv-cn-k   9s ease-in-out infinite 3s; }
        @keyframes wv-cn-k  { 0%,100%{opacity:.4} 50%{opacity:.7} }

        /* Core convergence halos */
        .wv-h1  { animation: wv-h1-k  11s ease-in-out infinite; }
        .wv-h2  { animation: wv-h2-k  14s ease-in-out infinite 3.5s; }
        @keyframes wv-h1-k  { 0%,100%{opacity:.2} 50%{opacity:.45} }
        @keyframes wv-h2-k  { 0%,100%{opacity:.15} 50%{opacity:.3} }

        /* Core inner ring pulse */
        .wv-cr  { animation: wv-cr-k   8s ease-in-out infinite; }
        @keyframes wv-cr-k  { 0%,100%{opacity:.4} 50%{opacity:.8} }

        /* Tip anchor dots */
        .wv-tip { animation: wv-tip-k 10s ease-in-out infinite; }
        @keyframes wv-tip-k { 0%,100%{opacity:.4} 50%{opacity:.7} }
      `,
        }}
      />
      <svg
        viewBox="0 0 760 580"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "100%",
          maxWidth: "760px",
          height: "auto",
          display: "block",
        }}
        role="img"
        aria-label="Wolvio — life sciences and AI practices converging at a shared expert core"
      >
        {/* ═══════════════════════════════════════════════════════════
       SUBTLE AXIS GUIDES
  ══════════════════════════════════════════════════════════ */}
        <line
          x1="28"
          y1="290"
          x2="732"
          y2="290"
          stroke="#cbd5e1"
          strokeWidth="0.5"
          opacity="0.3"
        />
        <line
          x1="380"
          y1="55"
          x2="380"
          y2="525"
          stroke="#cbd5e1"
          strokeWidth="0.5"
          opacity="0.2"
        />

        {/* ═══════════════════════════════════════════════════════════
       STADIUM FRAME ARCS — top + bottom
  ══════════════════════════════════════════════════════════ */}
        <path
          d="M 118,72  Q 380,36  642,72"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="0.8"
          className="wv-fr"
        />
        <path
          d="M 118,508 Q 380,544 642,508"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="0.8"
          className="wv-fr"
        />

        {/* ═══════════════════════════════════════════════════════════
       LEFT CHAMBER — LIFE SCIENCES
       Outer arc + 3 inner arcs, cubic bezier, bowing left
  ══════════════════════════════════════════════════════════ */}

        {/* Outer arc */}
        <path
          d="M 118,72 C 12,150 12,430 118,508"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="1.3"
          className="wv-oa"
        />

        {/* Inner arc 1 */}
        <path
          d="M 160,104 C 62,180 62,400 160,476"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="1.0"
          className="wv-i1"
        />

        {/* Inner arc 2 */}
        <path
          d="M 202,138 C 114,208 114,372 202,442"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="0.8"
          className="wv-i2"
        />

        {/* Inner arc 3 */}
        <path
          d="M 244,170 C 168,236 168,344 244,410"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="0.6"
          className="wv-i3"
        />

        {/* ═══════════════════════════════════════════════════════════
       RIGHT CHAMBER — AI
       Mirror of left, cubic bezier, bowing right
  ══════════════════════════════════════════════════════════ */}

        {/* Outer arc */}
        <path
          d="M 642,72 C 748,150 748,430 642,508"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="1.3"
          className="wv-oa"
        />

        {/* Inner arc 1 */}
        <path
          d="M 600,104 C 698,180 698,400 600,476"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="1.0"
          className="wv-i1"
        />

        {/* Inner arc 2 */}
        <path
          d="M 558,138 C 646,208 646,372 558,442"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="0.8"
          className="wv-i2"
        />

        {/* Inner arc 3 */}
        <path
          d="M 516,170 C 592,236 592,344 516,410"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="0.6"
          className="wv-i3"
        />

        {/* ═══════════════════════════════════════════════════════════
       CONNECTOR SWEEPS — four curves from arc tips to core
  ══════════════════════════════════════════════════════════ */}

        {/* Left top → core */}
        <path
          d="M 118,72 Q 248,168 380,290"
          fill="none"
          stroke="#2F6F73"
          strokeWidth="1.0"
          className="wv-cn"
        />

        {/* Left bottom → core */}
        <path
          d="M 118,508 Q 248,412 380,290"
          fill="none"
          stroke="#2F6F73"
          strokeWidth="1.0"
          className="wv-cn2"
        />

        {/* Right top → core */}
        <path
          d="M 642,72 Q 512,168 380,290"
          fill="none"
          stroke="#2E7A78"
          strokeWidth="1.0"
          className="wv-cn2"
        />

        {/* Right bottom → core */}
        <path
          d="M 642,508 Q 512,412 380,290"
          fill="none"
          stroke="#2E7A78"
          strokeWidth="1.0"
          className="wv-cn"
        />

        {/* ═══════════════════════════════════════════════════════════
       ARC TIP ANCHORS
  ══════════════════════════════════════════════════════════ */}
        <circle cx="118" cy="72" r="3.5" fill="#0A2540" className="wv-tip" />
        <circle cx="118" cy="508" r="3.5" fill="#0A2540" className="wv-tip" />
        <circle cx="642" cy="72" r="3.5" fill="#0A2540" className="wv-tip" />
        <circle cx="642" cy="508" r="3.5" fill="#0A2540" className="wv-tip" />

        {/* ═══════════════════════════════════════════════════════════
       SIGNAL DOTS — travel along connectors toward core
  ══════════════════════════════════════════════════════════ */}

        {/* Left top connector */}
        <circle r="3" fill="#2F6F73">
          <animate
            attributeName="opacity"
            values="0;0;.85;.85;0"
            keyTimes="0;.06;.18;.88;1"
            dur="10s"
            begin="0s"
            repeatCount="indefinite"
          />
          <animateMotion
            path="M 118,72 Q 248,168 380,290"
            dur="10s"
            begin="0s"
            repeatCount="indefinite"
          />
        </circle>
        <circle r="3" fill="#2F6F73">
          <animate
            attributeName="opacity"
            values="0;0;.85;.85;0"
            keyTimes="0;.06;.18;.88;1"
            dur="10s"
            begin="5s"
            repeatCount="indefinite"
          />
          <animateMotion
            path="M 118,72 Q 248,168 380,290"
            dur="10s"
            begin="5s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Left bottom connector */}
        <circle r="3" fill="#2F6F73">
          <animate
            attributeName="opacity"
            values="0;0;.85;.85;0"
            keyTimes="0;.06;.18;.88;1"
            dur="11s"
            begin="2.5s"
            repeatCount="indefinite"
          />
          <animateMotion
            path="M 118,508 Q 248,412 380,290"
            dur="11s"
            begin="2.5s"
            repeatCount="indefinite"
          />
        </circle>
        <circle r="3" fill="#2F6F73">
          <animate
            attributeName="opacity"
            values="0;0;.85;.85;0"
            keyTimes="0;.06;.18;.88;1"
            dur="11s"
            begin="8s"
            repeatCount="indefinite"
          />
          <animateMotion
            path="M 118,508 Q 248,412 380,290"
            dur="11s"
            begin="8s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Right top connector */}
        <circle r="3" fill="#2E7A78">
          <animate
            attributeName="opacity"
            values="0;0;.85;.85;0"
            keyTimes="0;.06;.18;.88;1"
            dur="10s"
            begin="1.8s"
            repeatCount="indefinite"
          />
          <animateMotion
            path="M 642,72 Q 512,168 380,290"
            dur="10s"
            begin="1.8s"
            repeatCount="indefinite"
          />
        </circle>
        <circle r="3" fill="#2E7A78">
          <animate
            attributeName="opacity"
            values="0;0;.85;.85;0"
            keyTimes="0;.06;.18;.88;1"
            dur="10s"
            begin="6.8s"
            repeatCount="indefinite"
          />
          <animateMotion
            path="M 642,72 Q 512,168 380,290"
            dur="10s"
            begin="6.8s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Right bottom connector */}
        <circle r="3" fill="#2E7A78">
          <animate
            attributeName="opacity"
            values="0;0;.85;.85;0"
            keyTimes="0;.06;.18;.88;1"
            dur="11s"
            begin="4.2s"
            repeatCount="indefinite"
          />
          <animateMotion
            path="M 642,508 Q 512,412 380,290"
            dur="11s"
            begin="4.2s"
            repeatCount="indefinite"
          />
        </circle>
        <circle r="3" fill="#2E7A78">
          <animate
            attributeName="opacity"
            values="0;0;.85;.85;0"
            keyTimes="0;.06;.18;.88;1"
            dur="11s"
            begin="9.7s"
            repeatCount="indefinite"
          />
          <animateMotion
            path="M 642,508 Q 512,412 380,290"
            dur="11s"
            begin="9.7s"
            repeatCount="indefinite"
          />
        </circle>

        {/* ═══════════════════════════════════════════════════════════
       CORE CONVERGENCE HALOS
  ══════════════════════════════════════════════════════════ */}
        <circle
          cx="380"
          cy="290"
          r="96"
          fill="none"
          stroke="#cbd5e1"
          strokeWidth="0.8"
          className="wv-h2"
        />
        <circle
          cx="380"
          cy="290"
          r="68"
          fill="none"
          stroke="#cbd5e1"
          strokeWidth="1.0"
          className="wv-h1"
        />

        {/* ═══════════════════════════════════════════════════════════
       PRACTICE LABELS — inside each chamber
  ══════════════════════════════════════════════════════════ */}

        {/* Life Sciences — left chamber */}
        <text
          x="195"
          y="278"
          textAnchor="middle"
          fontFamily="system-ui,-apple-system,'Segoe UI',Helvetica,Arial,sans-serif"
          fontSize="10"
          letterSpacing="3.2"
          fill="#475569"
          opacity="0.80"
        >
          LIFE
        </text>
        <text
          x="195"
          y="296"
          textAnchor="middle"
          fontFamily="system-ui,-apple-system,'Segoe UI',Helvetica,Arial,sans-serif"
          fontSize="10"
          letterSpacing="3.2"
          fill="#475569"
          opacity="0.80"
        >
          SCIENCES
        </text>
        <line
          x1="148"
          y1="305"
          x2="242"
          y2="305"
          stroke="#94a3b8"
          strokeWidth="0.6"
          opacity="0.6"
        />
        <text
          x="195"
          y="319"
          textAnchor="middle"
          fontFamily="system-ui,-apple-system,'Segoe UI',Helvetica,Arial,sans-serif"
          fontSize="7.5"
          letterSpacing="2.2"
          fill="#64748B"
          opacity="0.6"
        >
          VEEVA PRACTICE
        </text>

        {/* AI — right chamber */}
        <text
          x="565"
          y="287"
          textAnchor="middle"
          fontFamily="system-ui,-apple-system,'Segoe UI',Helvetica,Arial,sans-serif"
          fontSize="13"
          letterSpacing="5"
          fill="#475569"
          opacity="0.80"
        >
          AI
        </text>
        <line
          x1="518"
          y1="299"
          x2="612"
          y2="299"
          stroke="#94a3b8"
          strokeWidth="0.6"
          opacity="0.6"
        />
        <text
          x="565"
          y="313"
          textAnchor="middle"
          fontFamily="system-ui,-apple-system,'Segoe UI',Helvetica,Arial,sans-serif"
          fontSize="7.5"
          letterSpacing="2.2"
          fill="#64748B"
          opacity="0.6"
        >
          AUTOMATION
        </text>

        {/* ═══════════════════════════════════════════════════════════
       CENTRAL WOLVIO CORE
  ══════════════════════════════════════════════════════════ */}

        {/* Outer shell */}
        <circle
          cx="380"
          cy="290"
          r="46"
          fill="#ffffff"
          stroke="#0A2540"
          strokeWidth="1.8"
        />

        {/* Inner teal accent ring — pulses */}
        <circle
          cx="380"
          cy="290"
          r="38"
          fill="none"
          stroke="#2F6F73"
          strokeWidth="1.2"
          className="wv-cr"
        />

        {/* Label */}
        <text
          x="380"
          y="290"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="system-ui,-apple-system,'Segoe UI',Helvetica,Arial,sans-serif"
          fontSize="11"
          letterSpacing="2.5"
          fill="#0A2540"
          fontWeight="700"
        >
          WOLVIO
        </text>
      </svg>
    </>
  );
}
