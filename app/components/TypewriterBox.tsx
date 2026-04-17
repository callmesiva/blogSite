"use client";

import { useEffect, useState, useRef } from "react";

interface TypewriterBoxProps {
  text: string;
  delay?: number; // Delay before typing starts
  speed?: number; // Typing speed per character
}

export default function TypewriterBox({ text, delay = 1200, speed = 25 }: TypewriterBoxProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let i = 0;
    
    // Delay allows the cursor to blink a few times ("two cursor blink") before typing begins
    const startTimeout = setTimeout(() => {
      const intervalId = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(intervalId);
          setIsFinished(true); // End of typing
        }
      }, speed);
      
      return () => clearInterval(intervalId);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [hasStarted, text, delay, speed]);

  return (
    <div 
      ref={containerRef}
      className="relative flex w-full flex-col justify-center rounded-[20px] bg-[#041b33] border-[1.5px] border-[#1f4a6d] shadow-[0_12px_40px_rgba(0,0,0,0.2)] p-6 sm:p-8 lg:p-10 transition-all"
    >
      <div className="flex gap-4 sm:gap-5 items-start">
        {/* Input Prompt Icon */}
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2f8b92]/20 text-[#5DCAA5]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4" strokeWidth="2.5">
             <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>

        {/* Text output */}
        <div className="font-['DM_Sans',sans-serif] text-[16px] sm:text-[18px] lg:text-[19px] leading-[1.65] text-[#d6e4f0] tracking-[0.01em]">
            <span>{displayedText}</span>
            {/* Blinking Cursor */}
            <span 
              className={`inline-block w-[3px] bg-[#5DCAA5] h-[1.1em] ml-[2px] -mb-[2px] transition-opacity ${
                !isFinished || displayedText.length === 0 ? 'animate-[pulse_1s_infinite]' : 'animate-[pulse_1s_infinite]'
              }`}
            ></span>
        </div>
      </div>
    </div>
  );
}
