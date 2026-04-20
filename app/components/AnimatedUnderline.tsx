"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimatedUnderlineProps {
  children: React.ReactNode;
}

export default function AnimatedUnderline({
  children,
}: AnimatedUnderlineProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

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
        className="absolute left-0 -bottom-1 z-0 w-full overflow-visible"
        height="6"
        viewBox="0 0 100 6"
        preserveAspectRatio="none"
        style={{
          /* clipPath reveals the SVG from left to right like a mask */
          clipPath: isVisible
            ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
            : "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          transition: "clip-path 700ms cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* A wedge shape: thicker on the left, pinches to a thin point on the right */}
        <path d="M0,2 Q50,2 100,1 L100,2 Q50,5 0,5 Z" fill="#2f8b92" />
      </svg>
    </span>
  );
}
