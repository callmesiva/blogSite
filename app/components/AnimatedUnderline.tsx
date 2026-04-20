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

      {/* TOP BRISTLE: Ends a little early, keeps color until 90% */}
      <span
        className="absolute left-0 -bottom-[2px] z-0 h-[1.5px] rounded-l-sm bg-[linear-gradient(to_right,#2f8b92_0%,#2f8b92_90%,transparent_100%)] transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ width: isVisible ? "96%" : "0%" }}
      />

      {/* MAIN CORE: The thickest part, short fade starting at 85% */}
      <span
        className="absolute left-0 -bottom-1 z-0 h-[2px] rounded-l-sm bg-[linear-gradient(to_right,#2f8b92_0%,#2f8b92_85%,transparent_100%)] transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ width: isVisible ? "100%" : "0%" }}
      />

      {/* BOTTOM BRISTLE: Thinnest, slightly longer for a streaky tail, very sharp fade */}
      <span
        className="absolute left-0 -bottom-[5px] z-0 h-[1px] rounded-l-sm bg-[linear-gradient(to_right,#2f8b92_0%,#2f8b92_95%,transparent_100%)] transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ width: isVisible ? "102%" : "0%" }}
      />
    </span>
  );
}
