"use client";

import { useEffect } from "react";


declare global {
  interface Window {
    Bookings?: {
      inlineEmbed: (config: {
        url: string;
        parent: string;
        height: string;
      }) => void;
    };
  }
}

export default function BookingWidget() {
  useEffect(() => {
    // 2. Dynamically load the Nimbuspop script
    const scriptId = "nimbus-booking-script";
    const existingScript = document.getElementById(scriptId);

    const initBooking = () => {
      if (window.Bookings) {
        window.Bookings.inlineEmbed({
          url: "https://meetus.wolviosolutions.com/portal-embed#/business-enquiry",
          parent: "#inline-container",
          height: "600px", // Increased slightly from your original 520px to match the new embed's default
        });
      }
    };

    if (!existingScript) {
      // Create and append script if it doesn't exist
      const script = document.createElement("script");
      script.src = "https://bookings.nimbuspop.com/assets/embed.js";
      script.id = scriptId;
      script.async = true;
      script.onload = initBooking;
      document.body.appendChild(script);
    } else {
      // If script is already loaded (e.g., navigating back to this component), initialize immediately
      initBooking();
    }
  }, []);

  return (
    // 3. Your original Tailwind wrapper classes
    <div className="site-card overflow-hidden rounded-[18px] border border-[#d6e0e8] bg-[#f8fafc]">
      {/* 4. Target container for the embed script to mount into */}
      <div id="inline-container" className="w-full min-h-[600px]"></div>
    </div>
  );
}
