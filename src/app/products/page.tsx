import { Metadata } from "next";
import Image from "next/image";
import VarietyCard from "@/components/VarietyCard";

export const metadata: Metadata = { title: "The Archive | Indus INC" };

const categories = [
  { 
    title: "Premium Rice Varieties", 
    desc: "We specialize in wholesale and export of premium rice varieties that meet international quality standards. Sourced, processed, and packaged for freshness.",
    items: [
      { 
        name: "1509 Basmati", 
        desc: "Premium long-grain variety known for its aromatic fragrance and excellent cooking quality.",
        extendedDesc: "The 1509 Basmati variety is an early-maturing rice that cooks faster than traditional basmati. It provides a soft, fluffy texture and is highly preferred by catering services and hotels due to its high yield and efficiency.",
        specs: [
          { label: "Grain Length (Raw)", value: "8.2 - 8.4 mm" },
          { label: "Cooking Time", value: "Fast (12-15 mins)" },
          { label: "Aroma", value: "Moderate to High" }
        ],
        differentiator: "Unmatched speed of cooking and high yield, making it the favorite for bulk daily use."
      },
      { 
        name: "1718 Basmati", 
        desc: "Extra-long grain variety with superior taste and texture.",
        extendedDesc: "Engineered for disease resistance (specifically Bacterial Blight) while maintaining premium luxury quality. It boasts exceptional elongation, often tripling in length after cooking, and remains fluffy and non-sticky.",
        specs: [
          { label: "Grain Length (Raw)", value: "8.3 - 8.4 mm" },
          { label: "Elongation Ratio", value: "2.5x - 3x" },
          { label: "Best Suited For", value: "Biryani & Festive Dishes" }
        ],
        differentiator: "Resilient and robust without sacrificing the premium, extra-long luxury characteristics."
      },
      { 
        name: "Sugandha", 
        desc: "Aromatic non-basmati variety offering excellent value.",
        extendedDesc: "Sugandha is generally positioned as a more economical option compared to the premium Pusa varieties. It possesses a pleasant aroma and soft texture, preferred for high-quality everyday household cooking.",
        specs: [
          { label: "Grain Length (Raw)", value: "7.8 - 8.0 mm" },
          { label: "Aroma", value: "Mild and Pleasant" },
          { label: "Texture", value: "Soft and separate" }
        ],
        differentiator: "An economical aromatic choice perfect for everyday home consumption."
      },
      { 
        name: "1847 Basmati", 
        desc: "High-yield premium variety with exceptional grain length and aroma.",
        extendedDesc: "Developed as the cutting-edge successor to 1509, it retains the desirable extra-long, slender grain characteristics but with built-in resistance to bacterial blight and blast diseases.",
        specs: [
          { label: "Grain Length (Raw)", value: "8.3 mm+" },
          { label: "Disease Resistance", value: "High (Blight & Blast)" },
          { label: "Cooking Quality", value: "Excellent elongation" }
        ],
        differentiator: "Combines the fast-cooking efficiency of 1509 with significantly improved agricultural resilience."
      }
    ],
    tag: "01",
    image: "/images/products/rice.jpeg"
  },
  { 
    title: "Grains", 
    desc: "Sourced from trusted farms and undergo rigorous quality checks for milling and international export.",
    items: [
      { 
        name: "Wheat", 
        desc: "High-protein varieties suitable for flour milling, food processing, and animal feed.",
        extendedDesc: "Indian wheat is globally renowned for its high protein content and robust milling properties. It is extensively used in the production of flatbreads, pasta, and baked goods due to its excellent gluten network and nutritional density.",
        specs: [
          { label: "PROTEIN CONTENT", value: "11% - 13%" },
          { label: "MOISTURE", value: "Max 12%" },
          { label: "TEST WEIGHT", value: "Min 78 kg/hl" }
        ],
        differentiator: "Sourced directly from the fertile plains of Punjab and Haryana, guaranteeing exceptional purity and baking quality."
      },
      { 
        name: "Barley (JO)", 
        desc: "Premium quality barley for brewing, animal feed, and food applications.",
        extendedDesc: "Our premium barley is selected for its high starch content and low protein, making it ideal for malting and brewing. It also serves as a highly digestible and energy-dense feed grain for livestock.",
        specs: [
          { label: "MOISTURE", value: "Max 13%" },
          { label: "PLUMP GRAINS", value: "Min 85%" },
          { label: "PROTEIN (BREWING)", value: "9% - 11.5%" }
        ],
        differentiator: "Meticulously graded to ensure uniform grain size and optimal germination rates for malting."
      },
      { 
        name: "Pearl Millets", 
        desc: "Nutritious and drought-resistant gluten-free alternative.",
        extendedDesc: "A nutrient powerhouse, pearl millet is rich in iron, zinc, and dietary fiber. This gluten-free grain is perfect for health-conscious consumers and thrives in arid conditions, making it an incredibly sustainable crop.",
        specs: [
          { label: "PURITY", value: "Min 99%" },
          { label: "MOISTURE", value: "Max 12%" },
          { label: "PROTEIN", value: "10% - 14%" }
        ],
        differentiator: "An ancient supergrain offering unmatched nutritional value and complete gluten-free security."
      }
    ],
    tag: "02",
    image: "/images/products/grains.jpeg"
  },
  { 
    title: "Oilseeds", 
    desc: "Premium quality oilseeds for oil extraction, food processing, and agricultural purposes.",
    items: [
      { 
        name: "Mustard Seeds", 
        desc: "Black & Yellow high oil content varieties for edible oil and condiments.",
        extendedDesc: "Sourced from pristine agricultural zones, our mustard seeds boast an exceptionally high oil content and pungent aroma. They are rigorously cleaned and sorted to remove impurities, ensuring a premium yield for cold-pressed oil extraction and culinary uses.",
        specs: [
          { label: "OIL CONTENT", value: "38% - 42%" },
          { label: "MOISTURE", value: "Max 8%" },
          { label: "PURITY", value: "Min 99%" }
        ],
        differentiator: "Premium bold seeds with an intense flavor profile and superior oil extraction rates."
      },
      { 
        name: "Peanuts (Groundnuts)", 
        desc: "Premium quality Java and Bold peanuts for oil extraction and snacks.",
        extendedDesc: "Our export-grade peanuts are cultivated in optimal soil conditions, yielding robust, uniform kernels with excellent crunch and flavor. They undergo stringent aflatoxin testing and are ideal for peanut butter manufacturing, roasting, and direct consumption.",
        specs: [
          { label: "AFLATOXIN", value: "Under 5 PPB" },
          { label: "MOISTURE", value: "Max 7%" },
          { label: "DEFECTIVE", value: "Max 1%" }
        ],
        differentiator: "Strictly tested for aflatoxin compliance, delivering guaranteed safety and exceptional nutty richness."
      }
    ],
    tag: "03",
    image: "/images/products/oilseeds.jpeg"
  },
  { 
    title: "Pulses & Lentils", 
    desc: "Carefully selected and processed to maintain nutritional value. Catering to wholesale distributors globally.",
    items: [
      { 
        name: "Urad Dal", 
        desc: "High-protein pulse available in whole and split varieties.",
        extendedDesc: "Known for its rich, earthy flavor and dense nutritional profile, our Urad Dal is carefully processed to retain its natural proteins and dietary fiber. It is a staple in South Asian cuisine, perfect for creating smooth, creamy gravies and traditional batters.",
        specs: [
          { label: "PROTEIN", value: "Min 24%" },
          { label: "MOISTURE", value: "Max 10%" },
          { label: "FOREIGN MATTER", value: "Max 0.5%" }
        ],
        differentiator: "Machine-cleaned and sortexed to guarantee zero adulteration and uniform cooking time."
      },
      { 
        name: "Moong Dal", 
        desc: "Versatile pulse with excellent nutritional profile.",
        extendedDesc: "Our premium Moong Dal is exceptionally easy to digest and packed with essential vitamins. Cultivated using sustainable farming practices, these lentils offer a quick cooking time and a mild, versatile taste that absorbs flavors beautifully.",
        specs: [
          { label: "PROTEIN", value: "Min 22%" },
          { label: "MOISTURE", value: "Max 10%" },
          { label: "SPLIT RATIO", value: "Min 98%" }
        ],
        differentiator: "Triple-polished for a pristine finish, ensuring a silky texture and rapid softening."
      },
      { 
        name: "Chana", 
        desc: "Premium quality chickpeas available in various grades.",
        extendedDesc: "Sourced from the finest chickpea harvests, our Chana is celebrated for its nutty flavor and firm texture that holds up flawlessly in slow-cooked stews and curries. High in complex carbohydrates and iron, it's an essential pantry staple.",
        specs: [
          { label: "CALIBER", value: "7 - 9 mm" },
          { label: "MOISTURE", value: "Max 12%" },
          { label: "WEEVILED", value: "Max 1%" }
        ],
        differentiator: "Carefully size-graded to ensure even cooking and exceptional visual appeal."
      },
      { 
        name: "Toor Dal", 
        desc: "Staple pulse with consistent demand and reliable supply.",
        extendedDesc: "Our Toor Dal (Pigeon Peas) delivers an authentic, mildly sweet, and nutty flavor profile. It is expertly de-husked and split to reduce cooking time while preserving its vital amino acids, making it the perfect foundation for hearty dals and soups.",
        specs: [
          { label: "PROTEIN", value: "Min 21%" },
          { label: "MOISTURE", value: "Max 10%" },
          { label: "FOREIGN MATTER", value: "Max 0.2%" }
        ],
        differentiator: "Unpolished and natural, maintaining its inherent fiber and rich, authentic taste."
      }
    ],
    tag: "04",
    image: "/images/products/pulses.jpeg"
  },
  { 
    title: "Specialty Crops", 
    desc: "Catering to niche markets and specific industrial applications.",
    items: [
      { 
        name: "Dhaincha (Sesbania)", 
        desc: "Green manure crop and fodder plant for organic farming.",
        extendedDesc: "A highly effective green manure crop that revitalizes soil health by fixing atmospheric nitrogen and adding significant organic matter. Ideal for crop rotation, it dramatically reduces the need for synthetic fertilizers while improving soil aeration and water retention.",
        specs: [
          { label: "GERMINATION", value: "Min 80%" },
          { label: "PURITY", value: "Min 98%" },
          { label: "MOISTURE", value: "Max 10%" }
        ],
        differentiator: "An indispensable, eco-friendly solution for sustainable and organic farming systems globally."
      },
      { 
        name: "Moringa Powder", 
        desc: "Superfood for nutritional supplements and cosmetics.",
        extendedDesc: "Milled from shade-dried, organically grown Moringa oleifera leaves to preserve their vivid green color and intense nutritional profile. Loaded with antioxidants, vitamins, and amino acids, it is an essential ingredient for premium dietary supplements and natural cosmetics.",
        specs: [
          { label: "PROTEIN", value: "Min 25%" },
          { label: "PARTICLE SIZE", value: "80-100 Mesh" },
          { label: "MOISTURE", value: "Max 8%" }
        ],
        differentiator: "100% pure and organic, unlocking maximum bioavailability and therapeutic benefits."
      }
    ],
    tag: "05",
    image: "/images/products/specialty_crops.jpeg"
  },
  { 
    title: "Premium Spices", 
    desc: "High-quality spices for domestic and international markets.",
    items: [
      { 
        name: "Whole & Ground Spices", 
        desc: "Export-grade spices maintaining natural aroma and oils.",
        extendedDesc: "Carefully sourced from premium spice-growing belts, our whole and ground spices are processed using cold-grinding techniques to preserve their essential volatile oils, intense aroma, and vibrant color. Perfect for global culinary and industrial uses.",
        specs: [
          { label: "VOLATILE OIL", value: "Min 2.5%" },
          { label: "MOISTURE", value: "Max 10%" },
          { label: "ASH CONTENT", value: "Max 7%" }
        ],
        differentiator: "Guaranteed zero artificial colors or fillers, offering uncompromised authenticity and culinary brilliance."
      }
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
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-8 md:mb-12">
        <p className="font-mono text-[16px] font-semibold tracking-[0.3em] text-champagne uppercase mb-6">The Archive</p>
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="font-serif text-[clamp(1.5rem,3.5vw,3.8rem)] font-medium leading-[1.05]">
              Premium Commodities, Sourced with <span className="text-champagne italic">Precision.</span>
            </h1>
          </div>
          <div className="pb-4">
            <p className="font-sans text-alabaster/90 text-xl leading-relaxed border-l border-champagne/40 pl-6 max-w-3xl">
              A leading wholesale supplier and exporter. We provide bulk quantities to businesses worldwide, ensuring unmatched quality and reliable delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Catalog / Asymmetrical Rows */}
      <section className="bg-obsidian-2/30 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pb-12">
          {categories.map((cat, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={i} className="py-24 md:py-32 first:pt-8 md:first:pt-12 border-b border-alabaster/10 last:border-0 relative group">
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
                    <h2 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.1] mb-6 group-hover:text-champagne transition-colors duration-500">
                      {cat.title}
                    </h2>
                    <p className="font-sans text-[22px] text-white leading-relaxed mb-12 max-w-2xl">
                      {cat.desc}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
                      {cat.items.map((item, idx) => (
                        <VarietyCard key={idx} item={item} />
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
          <p className="font-mono text-[15px] tracking-[0.4em] text-champagne uppercase mb-6 font-semibold">The Advantage</p>
          <h2 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)]">Why Partner With Us?</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {reasons.map((reason, i) => (
            <div key={i} className="p-10 border border-champagne/10 bg-obsidian-2/30 hover:border-champagne/30 transition-all duration-500 group">
              <h3 className="font-serif text-[28px] mb-4 text-champagne flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-champagne rotate-45 block flex-shrink-0"></span>
                {reason.title}
              </h3>
              <p className="font-sans text-alabaster/90 text-lg leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
