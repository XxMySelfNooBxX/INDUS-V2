"use client";

import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import { useEffect, useState } from "react";

export default function Home() {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("hasVisitedHome")) {
      setIsFirstLoad(false);
    } else {
      sessionStorage.setItem("hasVisitedHome", "true");
    }
  }, []);

  return (
    <main className="relative min-h-screen">
      <HeroCanvas />
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6 relative z-10 overflow-hidden">
        <div className={`relative z-10 flex flex-col items-center ${isFirstLoad ? "animate-[fadeInUp_1s_ease-out_3.5s_both]" : "animate-[fadeInUp_1s_ease-out_both]"}`}>
          <p className="font-mono text-[11px] tracking-[0.4em] text-champagne uppercase mb-6">
            Premium Wholesale Agricultural Products & Grains
          </p>
          <h1 className="font-serif text-[clamp(3rem,10vw,10rem)] font-medium leading-[0.9] tracking-[0.02em]">
            INDUS INC
          </h1>
          <p className="mt-8 text-sm tracking-[0.25em] uppercase text-alabaster/70">
            Cultivating <span className="text-champagne">Permanence</span>
          </p>
          <p className="mt-8 max-w-2xl text-alabaster/60 font-sans leading-relaxed">
            Founded in 2006. We are a leading wholesale supplier and exporter of premium quality agricultural products, grains, cereals, oilseeds, and pulses to over 10 countries.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-8">
            <Link href="/about" className="border border-champagne/40 px-10 py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-champagne hover:text-obsidian transition-all duration-500">
              Discover Legacy
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <p className="font-mono text-[10px] tracking-widest text-champagne uppercase opacity-70">Scroll Down</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-32 px-6 md:px-12 relative z-10 border-t border-alabaster/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <p className="font-mono text-[11px] tracking-[0.4em] text-champagne uppercase mb-6">Who We Are</p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.1] mb-8">
              Business Technologists <br />
              <span className="text-champagne italic">in the Agricultural Realm.</span>
            </h2>
            <p className="font-sans text-alabaster/60 leading-relaxed text-lg mb-8">
              INDUS INC empowers sustainable progress for our clients and partners, the wider community, and ourselves. Since our inception, we have been committed to delivering exceptional business solutions that drive success.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-alabaster/10 pt-8">
              <div>
                <p className="font-serif text-3xl text-champagne mb-2">100+</p>
                <p className="font-mono text-[10px] tracking-widest uppercase text-alabaster/50">Turnkey Projects</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-champagne mb-2">700+</p>
                <p className="font-mono text-[10px] tracking-widest uppercase text-alabaster/50">Export Shipments</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="aspect-[4/5] border border-champagne/20 bg-obsidian p-8 flex flex-col justify-end relative overflow-hidden group">
              <div className="absolute inset-0 opacity-30 bg-[url('/images/home/home.jpeg')] bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent z-10 pointer-events-none"></div>
              
              <div className="relative z-20">
                <p className="font-serif text-2xl mb-4 text-champagne">A Global Footprint</p>
                <p className="font-sans text-alabaster/50 leading-relaxed">
                  We have successfully exported hundreds of shipments to the United States, European Union, United Arab Emirates, and South East Asia, establishing ourselves as a pillar of reliability in international trade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="py-32 px-6 md:px-12 relative z-10 border-t border-alabaster/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-mono text-[11px] tracking-[0.4em] text-champagne uppercase mb-6">Our Expertise</p>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.05]">
              Two Divisions, <br /><span className="text-champagne italic">One Standard of Excellence.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Commodities */}
            <div className="border border-alabaster/10 hover:border-champagne/40 transition-colors duration-500 p-12 group bg-obsidian-2/30">
              <p className="font-mono text-[10px] tracking-[0.3em] text-champagne mb-8">01 / The Archive</p>
              <h3 className="font-serif text-3xl mb-6">Agricultural Commodities</h3>
              <p className="font-sans text-alabaster/60 leading-relaxed mb-12">
                Premium wholesale supply and export of top-tier rice varieties, wheat, barley, oilseeds, and specialty crops. Cultivated with care, sourced with precision.
              </p>
              <Link href="/products" className="inline-block border-b border-champagne pb-1 text-champagne font-mono text-[11px] tracking-widest uppercase group-hover:opacity-70 transition-opacity">
                Explore Products
              </Link>
            </div>

            {/* Infrastructure */}
            <div className="border border-alabaster/10 hover:border-champagne/40 transition-colors duration-500 p-12 group bg-obsidian-2/30">
              <p className="font-mono text-[10px] tracking-[0.3em] text-champagne mb-8">02 / Capabilities</p>
              <h3 className="font-serif text-3xl mb-6">Civil Infrastructure</h3>
              <p className="font-sans text-alabaster/60 leading-relaxed mb-12">
                Large-scale infrastructure development including earthen dams, canal networks, automated irrigation systems, and highway construction across central India.
              </p>
              <Link href="/services" className="inline-block border-b border-champagne pb-1 text-champagne font-mono text-[11px] tracking-widest uppercase group-hover:opacity-70 transition-opacity">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}