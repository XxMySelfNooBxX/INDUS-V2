import VarietyCard from "@/components/VarietyCard";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const tropicalSpices = [
  {
    name: "Black Pepper",
    desc: "The 'King of Spices', celebrated for its sharp, penetrating aroma and heat.",
    extendedDesc: "Grown in nutrient-rich tropical soils, our black pepper is harvested at peak maturity and sun-dried to perfection. It delivers a bold, pungent flavor that enhances both savory and sweet dishes universally.",
    specs: [
      { label: "PIPERINE", value: "Min 4%" },
      { label: "BULK DENSITY", value: "500-600 g/l" },
      { label: "FORM", value: "Whole & Ground" }
    ],
    differentiator: "Sourced from high-altitude estates ensuring a denser, more flavorful peppercorn."
  },
  {
    name: "Cinnamon",
    desc: "True cinnamon offering a delicate, sweet flavor and floral notes.",
    extendedDesc: "Distinct from ordinary bark, our authentic Cinnamon is hand-rolled from the inner bark of the Cinnamomum tree. We supply both Ceylon and Cassia grades depending on the destination market requirements, offering a sophisticated sweetness perfect for baking, beverages, and gourmet savory dishes.",
    specs: [
      { label: "APPLICATIONS", value: "Bakery, dips, wet rubs, ready meals" },
      { label: "COUMARIN", value: "Ultra Low (<0.004%)" },
      { label: "FORM", value: "Quills & Powder" }
    ],
    differentiator: "100% authentic Ceylon origin, ensuring safe daily consumption and superior taste."
  },
  {
    name: "Cardamom",
    desc: "Highly aromatic, complex spice with minty, citrusy, and herbal tones.",
    extendedDesc: "Known as the 'Queen of Spices', our green cardamom is shade-cured to retain its vibrant green color and intense volatile oils. It is a critical ingredient in premium curries, Scandinavian baking, and specialty coffees.",
    specs: [
      { label: "SIZE", value: "7-8mm Extra Bold" },
      { label: "VOLATILE OIL", value: "Min 8%" },
      { label: "FORM", value: "Whole Pods & Seeds" }
    ],
    differentiator: "Hand-picked and shade-dried to guarantee maximum aromatic retention."
  },
  {
    name: "Cloves",
    desc: "Intensely warm and sweet spice with a powerful, numbing bite.",
    extendedDesc: "Our cloves are carefully harvested just before the buds open. They are incredibly rich in eugenol, providing a strong, sweet-spicy flavor that is indispensable in spice blends, marinades, and festive baking.",
    specs: [
      { label: "EUGENOL", value: "Min 15%" },
      { label: "MOISTURE", value: "Max 12%" },
      { label: "HEADLESS CLOVES", value: "Max 2%" }
    ],
    differentiator: "Strictly sorted to ensure fully formed, oil-rich buds with minimal stems."
  },
  {
    name: "Fennel",
    desc: "Sweet, licorice-like flavor offering a cooling and refreshing finish.",
    extendedDesc: "Our fennel seeds are plump, green, bold in aroma, and uniform in size. Packed to strict export specifications, they are widely used as a digestive aid, a flavor base in Mediterranean and Indian cooking, and an essential component in absinthe and sausages.",
    specs: [
      { label: "APPLICATIONS", value: "Tea infusions, digestive health, baking" },
      { label: "VOLATILE OIL", value: "Min 1.5%" },
      { label: "FORM", value: "Whole & Powder" }
    ],
    differentiator: "Harvested at peak greenness to ensure a sweeter, more robust licorice profile."
  },
  {
    name: "Ginger",
    desc: "Warm, zesty, and biting spice essential for both culinary and medicinal uses.",
    extendedDesc: "Our dried ginger is expertly processed to remove fibrous textures while concentrating its sharp, spicy flavor. It is a cornerstone ingredient in Asian cuisine, gingerbread, and immune-boosting teas.",
    specs: [
      { label: "APPLICATIONS", value: "Wellness shots, nutraceuticals, marinades" },
      { label: "GINGEROL", value: "Min 1.5%" },
      { label: "FORM", value: "Whole, Sliced, Powder" }
    ],
    differentiator: "Carefully peeled and dried to prevent mold and preserve its intense, zesty bite."
  }
];

export default function TropicalSpicesPage() {
  return (
    <main className="pt-32 pb-20 animate-[fadeInUp_0.8s_ease-out_both] bg-obsidian text-white flex-grow">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Link href="/products" className="inline-flex items-center gap-2 text-champagne/80 hover:text-champagne font-mono text-[13px] tracking-widest uppercase mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </Link>
        
        <header className="mb-16">
          <p className="font-mono text-[16px] font-semibold tracking-[0.3em] text-champagne uppercase mb-4">Premium Selection</p>
          <h1 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.1] mb-6">Tropical Spices</h1>
          <p className="font-sans text-[22px] text-white/90 leading-relaxed">
            Grown in nutrient-rich tropical soils, these exotic spices boast intense flavors and striking aromas. Perfect for adding a bold, unique profile to premium culinary creations.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {tropicalSpices.map((spice, idx) => (
            <VarietyCard key={idx} item={spice} />
          ))}
        </div>
      </div>
    </main>
  );
}
