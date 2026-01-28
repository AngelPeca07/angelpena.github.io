"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 300); // Aparece después de bajar 300px
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="
        fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full bg-black text-white 
        flex items-center justify-center 
        shadow-lg hover:shadow-xl 
        transition-all duration-300
        hover:-translate-y-1 active:scale-95
      "
    >
      <ArrowUp size={24} />
    </button>
  );
}
