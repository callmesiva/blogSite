"use client";
import { useEffect, useRef, useState } from "react";

interface Stat {
  value: string;
  label: string;
}

interface StatsCounterProps {
  deliveryStats?: Stat[];
}

const defaultStats: Stat[] = [
  { value: "8+", label: "Certified Veeva Experts" },
  { value: "10+", label: "Specialist Delivery Partnerships" },
  { value: "15+", label: "Veeva Engagements Delivered" },
  { value: "50+", label: "Years of Combined Life Sciences Expertise" },
  { value: "3", label: "Continents Asia, Europe & North America" },
];

function AnimatedNumber({ value }: { value: string }) {
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  const numberValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = numberValue / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numberValue) {
        setDisplay(numberValue);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, numberValue]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function StatsCounter({
  deliveryStats = defaultStats,
}: StatsCounterProps) {
  return (
    <div className="mt-10 grid gap-y-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-5">
      {deliveryStats.map((stat: Stat) => (
        <article key={stat.label} className="text-center">
          <p className="text-[clamp(2rem,3vw,3rem)] font-semibold leading-none tracking-[-0.03em] text-[#f5f9fc]">
            <AnimatedNumber value={stat.value} />
          </p>
          <p className="mt-3">{stat.label}</p>
        </article>
      ))}
    </div>
  );
}
