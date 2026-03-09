"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-40 inline-flex items-center justify-center rounded-full bg-[#c9a227] text-[#1a1a2e] shadow-lg shadow-[#c9a227]/30 hover:bg-[#e8c84a] transition-colors h-11 w-11 sm:h-12 sm:w-12 cursor-pointer"
    >
      <ArrowUp size={18} />
    </button>
  );
}

