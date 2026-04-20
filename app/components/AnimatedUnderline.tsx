"use client";

import React, { useEffect, useRef, useState, useId } from "react";

interface AnimatedUnderlineProps {
  children: React.ReactNode;
}

export default function AnimatedUnderline({
  children,
}: AnimatedUnderlineProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  const patternId = useId();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), 300);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className="relative inline-block whitespace-nowrap">
      <span className="relative z-10">{children}</span>
      <svg
        className="absolute left-0 -bottom-1.5 z-0 h-[7px] w-full"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id={patternId}
            x="0"
            y="0"
            width="12"
            height="7"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0,3.5 Q3,0.5 6,3.5 T12,3.5"
              fill="none"
              stroke="#2f8b92"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </pattern>
        </defs>

        <rect
          x="0"
          y="0"
          height="100%"
          fill={`url(#${patternId})`}
          style={{
            width: isVisible ? "100%" : "0%",
            transition: "width 800ms cubic-bezier(0.22,1,0.36,1)",
          }}
        />
      </svg>
    </span>
  );
}
