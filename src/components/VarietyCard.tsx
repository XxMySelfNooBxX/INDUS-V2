"use client";

import { useState } from "react";
import { RotateCw } from "lucide-react";
import Link from "next/link";

export default function VarietyCard({ item }: { item: any }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const hasDetails = !!item.extendedDesc && !item.href;

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      setIsExpanded(true);
      setIsOpening(false);
    }, 300);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsExpanded(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <div className="w-full group">
      {!isExpanded ? (
        /* ===== FRONT: normal document flow, height = its own content ===== */
        <div className={`w-full flex flex-col justify-start p-2 ${
          isOpening ? "animate-[fadeOut_0.3s_ease-out_forwards]" : "animate-[fadeIn_0.3s_ease-out]"
        }`}>
          <div className="w-6 h-[2px] bg-champagne/60 mb-4 transition-all duration-300 group-hover:w-12" />
          <h4 className="font-mono text-[18px] font-semibold tracking-[0.15em] text-champagne uppercase mb-3">
            {item.name}
          </h4>
          <p className="text-[19px] text-white leading-relaxed mb-4">{item.desc}</p>

          {item.href ? (
            <Link
              href={item.href}
              className="mt-2 self-start text-[13px] font-mono text-champagne font-semibold hover:text-white uppercase tracking-[0.2em] flex items-center gap-2 transition-colors"
            >
              Explore Variety <RotateCw className="w-3 h-3" />
            </Link>
          ) : hasDetails ? (
            <button
              onClick={handleOpen}
              className="mt-2 self-start text-[13px] font-mono text-champagne font-semibold hover:text-white uppercase tracking-[0.2em] flex items-center gap-2 transition-colors"
            >
              Explore Variety <RotateCw className="w-3 h-3" />
            </button>
          ) : null}
        </div>
      ) : (
        /* ===== BACK: normal document flow, height = its own content, page expands ===== */
        <div
          onClick={handleClose}
          className={`w-full bg-obsidian-2/80 border border-champagne/20 p-6 flex flex-col shadow-xl cursor-pointer ${
            isClosing ? "animate-[fadeOut_0.3s_ease-out_forwards]" : "animate-[fadeIn_0.3s_ease-out]"
          }`}
          title="Click anywhere to return"
        >
          <div className="flex items-start justify-between mb-3 border-b border-champagne/20 pb-3">
            <h4 className="font-serif text-[28px] text-champagne">{item.name}</h4>
          </div>

          <p className="text-[17px] text-white leading-relaxed mb-6">{item.extendedDesc}</p>

          {item.specs && item.specs.length > 0 && (
            <div className="space-y-3 mb-6">
              {item.specs.map((spec: any, i: number) => (
                <div key={i} className="flex justify-between items-end border-b border-alabaster/5 pb-2">
                  <span className="text-white/90 text-[14px] tracking-wider uppercase font-mono">{spec.label}</span>
                  <span className="text-white text-[16px] font-semibold">{spec.value}</span>
                </div>
              ))}
            </div>
          )}

          {item.differentiator && (
            <div className="bg-alabaster/5 border-l-2 border-champagne p-3">
              <p className="text-[16px] text-white leading-relaxed italic">"{item.differentiator}"</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
