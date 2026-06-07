import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "The Archive | Indus INC" };

const categories = [
  { 
    title: "Premium Rice Varieties", 
    desc: "We specialize in wholesale and export of premium rice varieties that meet international quality standards. Sourced, processed, and packaged for freshness.",
    items: [
      { name: "1509 Basmati", desc: "Premium long-grain variety known for its aromatic fragrance and excellent cooking quality." },
      { name: "1718 Basmati", desc: "Extra-long grain variety with superior taste and texture." },
      { name: "Sugandha", desc: "Aromatic non-basmati variety offering excellent value." },
      { name: "1847 Basmati", desc: "High-yield premium variety with exceptional grain length and aroma." }
    ],
    tag: "01",
    image: "/images/products/rice.jpeg"
  },
  { 
    title: "Grains", 
    desc: "Sourced from trusted farms and undergo rigorous quality checks for milling and international export.",
    items: [
      { name: "Wheat", desc: "High-protein varieties suitable for flour milling, food processing, and animal feed." },
      { name: "Barley (JO)", desc: "Premium quality barley for brewing, animal feed, and food applications." },
      { name: "Pearl Millets", desc: "Nutritious and drought-resistant gluten-free alternative." }
    ],
    tag: "02",
    image: "/images/products/grains.jpeg"
  },
  { 
    title: "Oilseeds", 
    desc: "Premium quality oilseeds for oil extraction, food processing, and agricultural purposes.",
    items: [
      { name: "Mustard Seeds", desc: "Black & Yellow high oil content varieties for edible oil and condiments." },
      { name: "Peanuts (Groundnuts)", desc: "Premium quality Java and Bold peanuts for oil extraction and snacks." }
    ],
    tag: "03",
    image: "/images/products/oilseeds.jpeg"
  },
  { 
    title: "Pulses & Lentils", 
    desc: "Carefully selected and processed to maintain nutritional value. Catering to wholesale distributors globally.",
    items: [
      { name: "Urad Dal", desc: "High-protein pulse available in whole and split varieties." },
      { name: "Moong Dal", desc: "Versatile pulse with excellent nutritional profile." },
      { name: "Chana", desc: "Premium quality chickpeas available in various grades." },
      { name: "Toor Dal", desc: "Staple pulse with consistent demand and reliable supply." }
    ],
    tag: "04",
    image: "/images/products/pulses.jpeg"
  },
  { 
    title: "Specialty Crops", 
    desc: "Catering to niche markets and specific industrial applications.",
    items: [
      { name: "Dhaincha (Sesbania)", desc: "Green manure crop and fodder plant for organic farming." },
      { name: "Moringa Powder", desc: "Superfood for nutritional supplements and cosmetics." }
    ],
    tag: "05",
    image: "/images/products/specialty_crops.jpeg"
  },
  { 
    title: "Premium Spices", 
    desc: "High-quality spices for domestic and international markets.",
    items: [
      { name: "Whole & Ground Spices", desc: "Export-grade spices maintaining natural aroma and oils." }
    ],
    tag: "06",
    image: "/images/products/premium_spices.jpeg"
  },
];

const reasons = [
  { title: "Competitive Pricing", desc: "Transparent wholesale deals with absolutely no hidden charges." },
  { title: "Quality Assurance", desc: "Rigorous procurement and testing of all agricultural products." },
  { title: "Export Documentation", desc: "End-to-end support for international trade requirements." },
  { title: "Reliable Supply Chain", desc: "Consistent availability and timely delivery across the globe." },
  { title: "Custom Packaging", desc: "Flexible packaging options tailored for wholesale and export." },
  { title: "Global Reach", desc: "An established export network spanning multiple continents." }
];

export default function ProductsPage() {
  return (
    <main className="pt-32 pb-20 min-h-screen animate-[fadeInUp_0.8s_ease-out_both]">
      
      {/* Hero Header */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20 md:mb-32">
        <p className="font-mono text-[11px] tracking-[0.4em] text-champagne uppercase mb-6">The Archive</p>
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-medium leading-[1.05]">
              Premium Commodities, <br/>Sourced with <span className="text-champagne italic">Precision.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 pb-4">
            <p className="font-sans text-alabaster/60 text-lg leading-relaxed border-l border-champagne/40 pl-6">
              A leading wholesale supplier and exporter. We provide bulk quantities to businesses worldwide, ensuring unmatched quality and reliable delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Catalog / Asymmetrical Rows */}
      <section className="bg-obsidian-2/30 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          {categories.map((cat, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={i} className="py-24 md:py-32 border-b border-alabaster/10 last:border-0 relative group">
                <div className={`grid md:grid-cols-12 gap-12 md:gap-16 items-start ${isEven ? '' : 'md:flex-row-reverse'}`}>
                  
                  {/* Image Block */}
                  <div className={`md:col-span-5 relative z-10 ${isEven ? 'md:order-1' : 'md:order-2'} group`}>
                    <div className="aspect-[4/5] relative overflow-hidden border border-champagne/15">
                      <div className="absolute inset-0 bg-obsidian/40 group-hover:bg-transparent transition-colors duration-1000 z-10 pointer-events-none"></div>
                      <Image 
                        src={cat.image} 
                        alt={cat.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
                      />
                    </div>
                  </div>

                  {/* Content Block */}
                  <div className={`md:col-span-7 flex flex-col justify-center z-20 ${isEven ? 'md:order-2 md:pl-8' : 'md:order-1 md:pr-8'}`}>
                    <span className="font-mono text-xs tracking-[0.4em] text-champagne mb-6 block">NO. {cat.tag}</span>
                    <h2 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.1] mb-6 group-hover:text-champagne transition-colors duration-500">
                      {cat.title}
                    </h2>
                    <p className="font-sans text-xl text-alabaster/60 leading-relaxed font-light mb-12 max-w-2xl">
                      {cat.desc}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
                      {cat.items.map((item, idx) => (
                        <div key={idx} className="relative">
                          <div className="w-4 h-px bg-champagne/40 mb-4"></div>
                          <h4 className="font-mono text-[11px] tracking-[0.15em] text-alabaster uppercase mb-3">{item.name}</h4>
                          <p className="text-sm text-alabaster/50 leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust Signals / The Advantage */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-alabaster/10">
        <div className="text-center mb-20">
          <p className="font-mono text-[11px] tracking-[0.4em] text-champagne uppercase mb-6">The Advantage</p>
          <h2 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)]">Why Partner With Us?</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {reasons.map((reason, i) => (
            <div key={i} className="p-10 border border-champagne/10 bg-obsidian-2/30 hover:border-champagne/30 transition-all duration-500 group">
              <span className="font-mono text-xs text-champagne/50 block mb-6">0{i+1}</span>
              <h3 className="font-serif text-2xl mb-4 group-hover:text-champagne transition-colors">{reason.title}</h3>
              <p className="font-sans text-alabaster/60 text-base leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
