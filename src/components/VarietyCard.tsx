"use client";

import { useState } from "react";
import { RotateCw } from "lucide-react";

export default function VarietyCard({ item }: { item: any }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const hasDetails = !!item.extendedDesc;

  const FrontContent = () => (
    <div className="w-full h-full flex flex-col justify-start bg-obsidian-2/0 border border-transparent p-2">
      <div className="w-6 h-[2px] bg-champagne/60 mb-4 transition-all group-hover:w-12"></div>
      <h4 className="font-mono text-[18px] font-semibold tracking-[0.15em] text-champagne uppercase mb-3 flex items-center gap-2">
        {item.name}
      </h4>
      <p className="text-[19px] text-white leading-relaxed mb-4">{item.desc}</p>
      
      {hasDetails && (
        <button 
          onClick={() => setIsFlipped(true)} 
          className="mt-2 self-start text-[13px] font-mono text-champagne font-semibold hover:text-white uppercase tracking-[0.2em] flex items-center gap-2 transition-all pointer-events-auto"
        >
          Explore Variety <RotateCw className="w-3 h-3" />
        </button>
      )}
    </div>
  );

  const BackContent = () => (
    <div className="w-full h-full bg-obsidian-2/80 border border-champagne/20 p-6 flex flex-col shadow-xl">
      <div className="flex-1">
        <h4 className="font-serif text-[28px] text-champagne mb-3 border-b border-champagne/20 pb-3">{item.name}</h4>
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
          <div className="bg-alabaster/5 border-l-2 border-champagne p-3 mb-4">
            <p className="text-[16px] text-white leading-relaxed italic">
              "{item.differentiator}"
            </p>
          </div>
        )}
      </div>

      <button 
        onClick={() => setIsFlipped(false)} 
        className="mt-6 pt-4 border-t border-alabaster/10 w-full text-left text-[13px] font-mono text-alabaster/80 hover:text-white uppercase tracking-[0.2em] flex items-center gap-2 transition-colors pointer-events-auto"
      >
        <RotateCw className="w-3 h-3 -rotate-90" /> Return
      </button>
    </div>
  );

  return (
    <div className={`group w-full relative [perspective:2000px] ${isFlipped ? 'z-50' : 'z-0'}`}>
      
      {/* 
        ================= INVISIBLE LAYOUT DRIVER ================= 
        This is an incredibly advanced CSS technique. It uses CSS Grid to smoothly 
        animate the container's height between the Front side's height and the 
        Back side's height, preventing the layout from "snapping". 
      */}
      <div className="w-full relative opacity-0 pointer-events-none" aria-hidden="true">
        {/* Front Dummy */}
        <div className={`grid transition-[grid-template-rows] duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${!isFlipped ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
          <div className="overflow-hidden">
             <FrontContent />
          </div>
        </div>
        {/* Back Dummy */}
        {hasDetails && (
          <div className={`grid transition-[grid-template-rows] duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isFlipped ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
            <div className="overflow-hidden">
               <BackContent />
            </div>
          </div>
        )}
      </div>

      {/* 
        ================= VISIBLE 3D CARD ================= 
        This absolute wrapper perfectly stretches to the exact height of the 
        invisible Layout Driver above it, at every single frame of the animation.
      */}
      <div 
        className={`absolute inset-0 w-full h-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
      >
        {/* Front side */}
        <div className={`absolute inset-0 w-full h-full [backface-visibility:hidden] transition-opacity duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isFlipped ? 'opacity-0' : 'opacity-100'}`}>
          <FrontContent />
        </div>

        {/* Back side */}
        {hasDetails && (
          <div className={`absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] transition-opacity duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isFlipped ? 'opacity-100' : 'opacity-0'}`}>
            <BackContent />
          </div>
        )}
      </div>

    </div>
  );
}
