import { equipmentData } from '@/data/equipmentData';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { BackButton } from '@/components/BackButton';
import { EquipmentGallery } from '@/components/EquipmentGallery';
import { 
  Tractor, Truck, Box, Dumbbell, CheckCircle2, Plus, ArrowLeft,
  Activity, Database, CloudRain, Triangle, Settings, Radio, Ruler, Weight
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Tractor: Tractor,
  Truck: Truck,
  Box: Box,
  Dumbbell: Dumbbell,
  Activity: Activity,
  Database: Database,
  CloudRain: CloudRain,
  Triangle: Triangle,
  Settings: Settings,
  Radio: Radio,
  Ruler: Ruler,
  Weight: Weight
};

export function generateStaticParams() {
  return equipmentData.map((item) => ({
    slug: item.id,
  }));
}

export default async function EquipmentDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const equipment = equipmentData.find((item) => item.id === resolvedParams.slug);

  if (!equipment) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-obsidian text-alabaster pt-32 pb-24 font-sans">
      <div className="max-w-[95rem] mx-auto px-6 md:px-16 lg:px-24">
        <BackButton fallbackHref={`/equipment#${equipment.category.toLowerCase().replace(/\s+/g, '-')}`} />

        {/* Top Section: Image & Details */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-16">
          {/* Left: Images */}
          <EquipmentGallery id={equipment.id} title={equipment.title} />

          {/* Right: Features */}
          <div>
            <h1 className="text-4xl md:text-6xl font-serif text-champagne uppercase tracking-wide mb-2">
              {equipment.title}
            </h1>
            <p className="text-alabaster/70 uppercase tracking-widest text-sm mb-8">
              {equipment.category} {equipment.subCategory && `/ ${equipment.subCategory}`}
            </p>

            {equipment.features && equipment.features.length > 0 ? (
              <ul className="space-y-5">
                {equipment.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-champagne/80 mt-0.5 shrink-0" />
                    <span className="text-alabaster leading-relaxed text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="space-y-5">
                {equipment.specs.map((spec, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-champagne/80 mt-0.5 shrink-0" />
                    <span className="text-alabaster leading-relaxed text-lg">{spec}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Middle Section: Stats */}
        {equipment.stats && equipment.stats.length > 0 && (
          <div className="border-y border-alabaster/10 py-8 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {equipment.stats.map((stat, idx) => {
                const Icon = iconMap[stat.iconName] || CheckCircle2;
                return (
                  <div key={idx} className="flex items-center gap-4">
                    <Icon className="w-10 h-10 text-champagne" strokeWidth={1.5} />
                    <div>
                      <p className="text-sm text-alabaster/80 mb-1">{stat.label}</p>
                      <p className="text-lg font-bold text-alabaster">{stat.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom Section: Accordion */}
        <div className="w-full">
          <div className="bg-champagne/10 border-b-2 border-champagne text-champagne font-bold px-8 py-5 uppercase tracking-widest text-base">
            {equipment.title}
          </div>
          
          <div className="flex items-center justify-between px-8 py-6 bg-obsidian-2 text-alabaster border-b border-alabaster/10 cursor-pointer hover:bg-obsidian-2/70 transition-colors">
            <span className="font-bold tracking-widest uppercase text-base">Technical Specification</span>
            <Plus className="w-6 h-6 text-champagne" strokeWidth={3} />
          </div>
          
          <div className="flex items-center justify-between px-8 py-6 bg-obsidian-2 text-alabaster border-b border-alabaster/10 cursor-pointer hover:bg-obsidian-2/70 transition-colors">
            <span className="font-bold tracking-widest uppercase text-base">Optional</span>
            <Plus className="w-6 h-6 text-champagne" strokeWidth={3} />
          </div>
          
          <div className="flex items-center justify-between px-8 py-6 bg-obsidian-2 text-alabaster border-b border-alabaster/10 cursor-pointer hover:bg-obsidian-2/70 transition-colors">
            <span className="font-bold tracking-widest uppercase text-base">Video</span>
            <Plus className="w-6 h-6 text-champagne" strokeWidth={3} />
          </div>

          <div className="mt-12">
            <Link href="/contact" className="inline-block px-10 py-4 border-2 border-champagne bg-champagne/5 text-champagne font-bold text-sm tracking-widest uppercase hover:bg-champagne hover:text-obsidian transition-colors rounded-sm shadow-[0_0_15px_rgba(212,175,55,0.1)]">
              Send Enquiry
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
