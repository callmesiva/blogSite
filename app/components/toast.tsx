"use client";
import { useEffect } from "react";

interface Props {
  message: string;
  onDismiss: () => void;
  duration?: number;
}

export function Toast({ message, onDismiss, duration = 4000 }: Props) {
  useEffect(() => {
    const t = setTimeout(onDismiss, duration);
    return () => clearTimeout(t);
  }, [onDismiss, duration]);

  return (
    <div className="fixed top-6 left-1/2 z-50 -translate-x-1/2 rounded-xl border-[1px] border-[#9fe1cb] animate-in fade-in slide-in-from-top-4 zoom-in-95 bg-[#0f6e56]/95 backdrop-blur">

      <div className="flex items-center gap-3 rounded-xl  bg-[#0f6e56] px-5 py-3.5 text-[14px] font-medium text-[#e1f5ee] ">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1d9e75]">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M2 5l2 2 4-4"
              stroke="#e1f5ee"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        {message}
        <button
          onClick={onDismiss}
          className="ml-2 opacity-70 hover:opacity-100"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M1 1l10 10M11 1L1 11"
              stroke="#e1f5ee"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}