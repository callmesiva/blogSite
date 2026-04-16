"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollFadeGridProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollFadeGrid({
  children,
  className = "",
}: ScrollFadeGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    // Target anything inside this grid that has the "fade-up" class
    const cards = gridRef.current?.querySelectorAll(".fade-up");
    cards?.forEach((card) => observer.observe(card));

    return () => {
      cards?.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div ref={gridRef} className={className}>
      {children}
    </div>
  );
}
