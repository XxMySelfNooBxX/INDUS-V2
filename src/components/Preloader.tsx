"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const tl = gsap.timeline({ onComplete: () => setIsVisible(false) });
    tl.to(".stalk", { strokeDashoffset: 0, duration: 1.2, ease: "power2.inOut" })
      .to(".leaf1", { strokeDashoffset: 0, duration: 0.6 }, "-=0.4")
      .to(".leaf2", { strokeDashoffset: 0, duration: 0.6 }, "-=0.4")
      .to(".leaf3", { strokeDashoffset: 0, duration: 0.6 }, "-=0.4")
      .to(".grain", { opacity: 1, duration: 0.4 }, "-=0.2")
      .to(".year", { opacity: 1, duration: 0.5 }, "-=0.2")
      .to(".preloader-container", { opacity: 0, duration: 0.8, delay: 0.5 });
  }, []);
  if (!isVisible) return null;
  return (
    <div className="preloader-container fixed inset-0 bg-obsidian z-[10000] flex flex-col items-center justify-center gap-8">
      <svg viewBox="0 0 80 120" fill="none" stroke="#D4AF37" strokeWidth="1" className="w-20 h-32">
        <path className="stalk" d="M40 120 L40 30" strokeDasharray="100" strokeDashoffset="100" />
        <path className="leaf1" d="M40 80 Q20 75 15 60" strokeDasharray="50" strokeDashoffset="50" />
        <path className="leaf2" d="M40 65 Q60 60 65 45" strokeDasharray="50" strokeDashoffset="50" />
        <path className="leaf3" d="M40 50 Q25 45 20 30" strokeDasharray="50" strokeDashoffset="50" />
        <circle className="grain" cx="40" cy="20" r="3" fill="#D4AF37" opacity="0" />
      </svg>
      <div className="year font-mono text-xs text-champagne tracking-[0.3em] opacity-0">EST · 2006</div>
    </div>
  );
}
