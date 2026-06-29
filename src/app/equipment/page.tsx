import Link from 'next/link';
import Image from 'next/image';

export default function EquipmentPage() {
  return (
    <main className="min-h-screen bg-obsidian text-alabaster pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-32">
        {/* Page Header */}
        <div className="text-center mb-20">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Equipment <span className="text-champagne italic">Directory</span></h1>
          <p className="font-sans text-lg text-white font-medium max-w-2xl mx-auto">
            Discover our premium range of agricultural equipment designed for maximum efficiency and yield.
          </p>
        </div>

        {/* HAULAGE */}
        <section id="haulage" className="scroll-mt-32">
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h2 className="font-serif text-5xl text-champagne">HAULAGE</h2>
              <Link href="/contact" className="hidden md:inline-block px-8 py-3 border-2 border-champagne bg-champagne/10 text-champagne text-sm font-bold font-mono tracking-widest uppercase hover:bg-champagne hover:text-obsidian transition-colors mt-4 md:mt-0">
                Contact Distribution Partner
              </Link>
            </div>
            <h3 className="text-2xl font-medium mb-4 text-white">Tractor-attached Trailers/Trolley</h3>
            <p className="text-white font-medium max-w-3xl leading-relaxed">
              Superior High-tonnage capacity Trailers for transport and logistics. We produce Tipping Trailers, Non-tipping Trailers, 3-Way Tipping Trailers, and Water Tankers for tractors.
            </p>
            <Link href="/contact" className="inline-block md:hidden px-8 py-3 border-2 border-champagne bg-champagne/10 text-champagne text-sm font-bold font-mono tracking-widest uppercase hover:bg-champagne hover:text-obsidian transition-colors mt-6">
              Contact Distribution Partner
            </Link>
          </div>

          <div className="space-y-8 md:space-y-16">
            {/* Tractor Trailers */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-obsidian-2/50 border border-alabaster/5 p-6 md:p-8 group/card transition-colors hover:border-champagne/30">
              <div className="aspect-video bg-obsidian border border-alabaster/10 flex items-center justify-center w-full relative overflow-hidden group">
                <Image src="/images/equipments/new-trailer.jpeg" alt="Tractor Trailers" fill className="object-cover transition-all duration-700 group-hover/card:scale-105 grayscale group-hover/card:grayscale-0" />
              </div>
              <div>
                <h4 className="font-serif text-4xl text-champagne mb-4 uppercase relative w-fit after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-champagne after:scale-x-0 after:origin-left after:transition-transform after:duration-500 group-hover/card:after:scale-x-100">Tractor Trailers</h4>
                <p className="text-xl mb-6 text-white">Loading, moving, and unloading logistics with ease</p>
                <p className="text-white font-medium mb-8 leading-relaxed">
                  Well-designed and robustly made trailer for every purpose: Commercial or Agriculture
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/equipment/tipping-trailers" className="px-6 py-3 border border-champagne text-champagne font-mono text-sm uppercase tracking-widest hover:bg-champagne hover:text-obsidian transition-colors">
                    Tipping Trailers
                  </Link>
                  <Link href="/equipment/non-tipping-trailers" className="px-6 py-3 border border-champagne text-champagne font-mono text-sm uppercase tracking-widest hover:bg-champagne hover:text-obsidian transition-colors">
                    Non-Tipping Trailers
                  </Link>
                  <Link href="/equipment/3-way-tipping-trailers" className="px-6 py-3 border border-champagne text-champagne font-mono text-sm uppercase tracking-widest hover:bg-champagne hover:text-obsidian transition-colors mt-2 md:mt-0">
                    3-Way Tipping Trailers
                  </Link>
                </div>
              </div>
            </div>

            {/* Water Tanker */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-obsidian-2/50 border border-alabaster/5 p-6 md:p-8 group/card transition-colors hover:border-champagne/30">
              <div className="order-2 md:order-1">
                <h4 className="font-serif text-4xl text-champagne mb-4 uppercase relative w-fit after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-champagne after:scale-x-0 after:origin-left after:transition-transform after:duration-500 group-hover/card:after:scale-x-100">Water Tanker</h4>
                <p className="text-xl mb-6 text-white">Water Storage, Transporting, and Utility Equipment</p>
                <p className="text-white font-medium mb-8 leading-relaxed">
                  Domestic water supply, irrigation, commercial purposes, extinguishing purposes
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/equipment/water-tankers-bowsers" className="px-6 py-3 border border-champagne text-champagne font-mono text-sm uppercase tracking-widest hover:bg-champagne hover:text-obsidian transition-colors">
                    Water Tankers / Bowsers
                  </Link>
                </div>
              </div>
              <div className="order-1 md:order-2 aspect-video bg-obsidian border border-alabaster/10 flex items-center justify-center w-full relative overflow-hidden group">
                <Image src="/images/equipments/water-tanker.jpeg" alt="Water Tanker" fill className="object-cover transition-all duration-700 group-hover/card:scale-105 grayscale group-hover/card:grayscale-0" />
              </div>
            </div>
          </div>
        </section>

        {/* CROP PROTECTION */}
        <section id="crop-protection" className="scroll-mt-32">
          <div className="mb-12">
            <div className="mb-4">
              <h2 className="font-serif text-5xl text-champagne">CROP PROTECTION</h2>
            </div>
            <h3 className="text-2xl font-medium mb-4 text-white">Sprayers and Spreaders: maximum precision for maximum yield</h3>
            <p className="text-white font-medium max-w-3xl leading-relaxed">
              Our range of sprayers and fertilizer spreaders combine high performance and high yield in all conditions. A range of configurations is available, reliable, and efficient, and they can meet the farmer's needs.
            </p>
          </div>

          <div className="space-y-8 md:space-y-16">
            {/* Sprayers */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-obsidian-2/50 border border-alabaster/5 p-6 md:p-8 group/card transition-colors hover:border-champagne/30">
              <div className="aspect-video bg-obsidian border border-alabaster/10 flex items-center justify-center w-full relative overflow-hidden group">
                <Image src="/images/equipments/sprayer.jpeg" alt="Sprayer" fill className="object-cover transition-all duration-700 group-hover/card:scale-105 grayscale group-hover/card:grayscale-0" />
              </div>
              <div>
                <h4 className="font-serif text-4xl text-champagne mb-4 uppercase relative w-fit after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-champagne after:scale-x-0 after:origin-left after:transition-transform after:duration-500 group-hover/card:after:scale-x-100">Sprayers</h4>
                <p className="text-xl mb-6 text-white">Economical & Professional sprayers: 400, 500, and 600 liters</p>
                <p className="text-white font-medium mb-8 leading-relaxed">
                  3-point linkage Tractor Mounted Sprayers with high flow rate with optimum storage capacities delivering functional efficiency at low costs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/equipment/boom-sprayer" className="px-6 py-3 border border-champagne text-champagne font-mono text-sm uppercase tracking-widest hover:bg-champagne hover:text-obsidian transition-colors">
                    Boom Sprayer
                  </Link>
                  <Link href="/equipment/tractor-mounted-sprayer" className="px-6 py-3 border border-champagne text-champagne font-mono text-sm uppercase tracking-widest hover:bg-champagne hover:text-obsidian transition-colors">
                    Tractor Mounted Sprayer
                  </Link>
                </div>
              </div>
            </div>

            {/* Fertilizer Spreaders */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-obsidian-2/50 border border-alabaster/5 p-6 md:p-8 group/card transition-colors hover:border-champagne/30">
              <div className="order-2 md:order-1">
                <h4 className="font-serif text-4xl text-champagne mb-4 uppercase relative w-fit after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-champagne after:scale-x-0 after:origin-left after:transition-transform after:duration-500 group-hover/card:after:scale-x-100">Fertilizer Spreaders</h4>
                <p className="text-xl mb-6 text-white">Simple Equipment for spreading granular fertilizers</p>
                <p className="text-white font-medium mb-8 leading-relaxed">
                  Ease of use, consistency & efficiency; the traits of Farmking Fertilizer Spreaders
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/equipment/fertilizer-spreader" className="px-6 py-3 border border-champagne text-champagne font-mono text-sm uppercase tracking-widest hover:bg-champagne hover:text-obsidian transition-colors">
                    Fertilizer Spreader
                  </Link>
                </div>
              </div>
              <div className="order-1 md:order-2 aspect-video bg-obsidian border border-alabaster/10 flex items-center justify-center w-full relative overflow-hidden group">
                <Image src="/images/equipments/spreader.jpeg" alt="Fertilizer Spreader" fill className="object-cover transition-all duration-700 group-hover/card:scale-105 grayscale group-hover/card:grayscale-0" />
              </div>
            </div>
          </div>
        </section>

        {/* HARVESTING */}
        <section id="harvesting" className="scroll-mt-32">
          <div className="mb-12">
            <div className="mb-4">
              <h2 className="font-serif text-5xl text-champagne">HARVESTING</h2>
            </div>
            <h3 className="text-2xl font-medium mb-4 text-white">Harvesting, Cutting & Post-harvest Management equipments</h3>
            <p className="text-white font-medium max-w-3xl leading-relaxed">
              The harvesting of crops, cutting of fodder crops, and management of crop residues, all these processes require efficiency and quality. Our range of Harvest and Post-Harvest equipment allows us to perform these tasks effortlessly.
            </p>
          </div>

          <div className="space-y-8 md:space-y-16">
            {/* Mulcher */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-obsidian-2/50 border border-alabaster/5 p-6 md:p-8 group/card transition-colors hover:border-champagne/30">
              <div className="aspect-video bg-obsidian border border-alabaster/10 flex items-center justify-center w-full relative overflow-hidden group">
                <Image src="/images/equipments/mulcher.jpeg" alt="Mulcher" fill className="object-cover transition-all duration-700 group-hover/card:scale-105 grayscale group-hover/card:grayscale-0" />
              </div>
              <div>
                <h4 className="font-serif text-4xl text-champagne mb-4 uppercase relative w-fit after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-champagne after:scale-x-0 after:origin-left after:transition-transform after:duration-500 group-hover/card:after:scale-x-100">Mulcher</h4>
                <p className="text-xl mb-6 text-white">Chopping crop residue into organic matter</p>
                <p className="text-white font-medium mb-8 leading-relaxed">
                  Mulchers are used for proper management of farm residues, unwanted grass, shrubs etc by chopping them into smaller pieces for better and faster decomposition
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/equipment/rotary-mulcher-flail-mower" className="px-6 py-3 border border-champagne text-champagne font-mono text-sm uppercase tracking-widest hover:bg-champagne hover:text-obsidian transition-colors">
                    Rotary Mulcher / Flail Mower
                  </Link>
                </div>
              </div>
            </div>

            {/* Forage Mower */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-obsidian-2/50 border border-alabaster/5 p-6 md:p-8 group/card transition-colors hover:border-champagne/30">
              <div className="order-2 md:order-1">
                <h4 className="font-serif text-4xl text-champagne mb-4 uppercase relative w-fit after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-champagne after:scale-x-0 after:origin-left after:transition-transform after:duration-500 group-hover/card:after:scale-x-100">Forage Mower</h4>
                <p className="text-xl mb-6 text-white">Fine cutting of grass or fodder crops</p>
                <p className="text-white font-medium mb-8 leading-relaxed">
                  Easy to use and high versatility equipment for cutting fodder crops
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/equipment/sickle-bar-mower-forage-mower" className="px-6 py-3 border border-champagne text-champagne font-mono text-sm uppercase tracking-widest hover:bg-champagne hover:text-obsidian transition-colors">
                    Sickle Bar Mower / Forage Mower
                  </Link>
                </div>
              </div>
              <div className="order-1 md:order-2 aspect-video bg-obsidian border border-alabaster/10 flex items-center justify-center w-full relative overflow-hidden group">
                <Image src="/images/equipments/forage-mower.jpeg" alt="Forage Mower" fill className="object-cover transition-all duration-700 group-hover/card:scale-105 grayscale group-hover/card:grayscale-0" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
