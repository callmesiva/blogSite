"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimatedUnderlineProps {
  children: React.ReactNode;
}

export default function AnimatedUnderline({ children }: AnimatedUnderlineProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a slight delay to allow the text to reveal first
          setTimeout(() => {
            setIsVisible(true);
          }, 300);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <span ref={ref} className="relative inline-block whitespace-nowrap">
      <span className="relative z-10">{children}</span>
      <span
        className="absolute left-0 -bottom-1 h-[0.14em] z-0 bg-[#2f8b92] transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] rounded-sm"
        style={{ width: isVisible ? "100%" : "0%" }}
      />
    </span>
  );
}
