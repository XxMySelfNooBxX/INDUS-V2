import VarietyCard from "@/components/VarietyCard";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const traditionalSpices = [
  {
    name: "Turmeric",
    desc: "Golden spice known for its earthy flavor and powerful curcuminoids.",
    extendedDesc: "Our premium turmeric is sourced from regions renowned for high curcumin content. It imparts a vibrant yellow color and a warm, slightly bitter flavor to dishes, making it essential for traditional curries and modern wellness blends.",
    specs: [
      { label: "CURCUMIN", value: "Min 3-5%" },
      { label: "MOISTURE", value: "Max 10%" },
      { label: "FORM", value: "Whole & Powder" }
    ],
    differentiator: "Sun-dried to naturally preserve its brilliant hue and potent anti-inflammatory properties."
  },
  {
    name: "Cumin",
    desc: "Aromatic spice with a warm, nutty, and peppery flavor profile.",
    extendedDesc: "A staple in global cuisines, our cumin seeds are carefully harvested and graded for size and oil content. The robust aroma and distinctive flavor make it perfect for tempering, roasting, and blending into complex spice mixes.",
    specs: [
      { label: "VOLATILE OIL", value: "Min 2.5%" },
      { label: "PURITY", value: "99%" },
      { label: "FORM", value: "Seeds & Ground" }
    ],
    differentiator: "Mechanically cleaned and sorted to ensure zero impurities and consistent flavor."
  },
  {
    name: "Coriander",
    desc: "Citrusy, sweet spice that forms the base of many savory dishes.",
    extendedDesc: "Our coriander seeds offer a delicate balance of citrus and woody notes. They are highly versatile, acting as a thickening agent and flavor enhancer in gravies, marinades, and pickling brines.",
    specs: [
      { label: "VOLATILE OIL", value: "Min 0.3%" },
      { label: "SPLIT SEEDS", value: "Max 5%" },
      { label: "FORM", value: "Whole & Powder" }
    ],
    differentiator: "Roasted gently before grinding to unlock its full aromatic potential."
  },
  {
    name: "Red Chilli",
    desc: "Vibrant and fiery, providing heat and rich color to culinary creations.",
    extendedDesc: "Available in various heat levels (from mild Kashmiri to pungent varieties), our red chillies are carefully dried to maintain their vivid red color and capsaicin content. Perfect for adding a kick to any dish.",
    specs: [
      { label: "ASTA COLOR", value: "Up to 100" },
      { label: "SHU (HEAT)", value: "Variable" },
      { label: "FORM", value: "Whole, Flakes, Powder" }
    ],
    differentiator: "Stemless and strictly graded for consistent heat and uncompromising color."
  }
];

export default function TraditionalSpicesPage() {
  return (
    <main className="pt-32 pb-20 animate-[fadeInUp_0.8s_ease-out_both] bg-obsidian text-white flex-grow">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Link href="/products" className="inline-flex items-center gap-2 text-champagne/80 hover:text-champagne font-mono text-[13px] tracking-widest uppercase mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </Link>
        
        <header className="mb-16">
          <p className="font-mono text-[16px] font-semibold tracking-[0.3em] text-champagne uppercase mb-4">Premium Selection</p>
          <h1 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.1] mb-6">Traditional Spices</h1>
          <p className="font-sans text-[22px] text-white/90 leading-relaxed">
            Sourced directly from heritage farms, our traditional spices deliver the quintessential flavors and aromas that have defined local cuisines for centuries.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-12 max-w-5xl">
          {traditionalSpices.map((spice, idx) => (
            <VarietyCard key={idx} item={spice} />
          ))}
        </div>
      </div>
    </main>
  );
}
