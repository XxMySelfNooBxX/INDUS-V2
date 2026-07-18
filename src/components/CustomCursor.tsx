"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on pointer (non-touch) devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    setIsVisible(true);

    let dotX = -100, dotY = -100;
    let ringX = -100, ringY = -100;
    let animFrame: number;

    const moveDot = (e: MouseEvent) => {
      dotX = e.clientX;
      dotY = e.clientY;
    };

    const animate = () => {
      // Ring smoothly lags behind the dot
      ringX += (dotX - ringX) * 0.12;
      ringY += (dotY - ringY) * 0.12;
      setPos({ x: ringX, y: ringY });
      setDotPos({ x: dotX, y: dotY });
      animFrame = requestAnimationFrame(animate);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [role='button'], input, textarea, select, label");
      setIsHovering(!!interactive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveDot);
    window.addEventListener("mouseover", handleMouseOver);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    animFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", moveDot);
      window.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ring — smooth lag */}
      <div
        className="fixed pointer-events-none z-[999999] transition-[width,height,opacity] duration-300"
        style={{
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
          width: isHovering ? "48px" : "32px",
          height: isHovering ? "48px" : "32px",
          border: "1.5px solid rgba(212, 175, 55, 0.7)",
          borderRadius: "50%",
          opacity: isVisible ? 1 : 0,
          mixBlendMode: "difference",
        }}
      />
      {/* Inner dot — instant */}
      <div
        className="fixed pointer-events-none z-[999999]"
        style={{
          left: dotPos.x,
          top: dotPos.y,
          transform: "translate(-50%, -50%)",
          width: isHovering ? "4px" : "5px",
          height: isHovering ? "4px" : "5px",
          backgroundColor: "#D4AF37",
          borderRadius: "50%",
          transition: "width 0.2s, height 0.2s",
        }}
      />
    </>
  );
}
