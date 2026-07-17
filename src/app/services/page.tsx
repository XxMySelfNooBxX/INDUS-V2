import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import InquiryModal from "@/components/InquiryModal";

export const metadata: Metadata = { title: "Services | Indus INC" };

const services = [
  { 
    title: "Dams and Canals", 
    desc: "INDUS has vast experience in large infrastructure consultancy and development projects. We possess skills in building big-ticket projects such as earthen dams and canals. Since 2006, the Company has been executing canal work for various clients across India and SEA with continuous research and up-to-date techniques.",
    image: "/images/services/Dam.jpeg"
  },
  { 
    title: "Irrigation Systems", 
    desc: "We specialize in delivering comprehensive irrigation solutions for large-scale government projects, ensuring sustainable water management and optimal land productivity. Utilizing cutting-edge technology like automated drip and sprinkler systems, we maximize water efficiency while meeting strict regulatory standards.",
    image: "/images/services/Irrigation.jpeg"
  },
  { 
    title: "Road Construction", 
    desc: "Since its inception, INDUS has made unmatched contributions to road construction in and around central India, including highways and connecting roads. Serving private, government, and semi-government sectors, we bring invaluable experience, technology, and innovation to every infrastructure project.",
    image: "/images/services/Road.jpeg"
  },
  { 
    title: "Supply Chain Tech", 
    desc: "Leveraging our identity as 'Business Technologists' to optimize routing, storage, and delivery, ensuring competitive pricing and reliability for all our agricultural and infrastructure exports.",
    image: "/images/services/Supply.jpeg"
  }
];

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-20 min-h-screen animate-[fadeInUp_0.8s_ease-out_both]">
      {/* Hero Header */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32 md:mb-48">
        <p className="font-mono text-sm sm:text-base md:text-lg font-semibold tracking-[0.2em] md:tracking-[0.3em] text-champagne uppercase mb-4 md:mb-6">Our Capabilities</p>
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.05]">
              The Architecture of <br/><span className="text-champagne italic">Infrastructure.</span>
            </h1>
          </div>
          <div className="lg:col-span-5 pb-4">
            <p className="font-sans text-alabaster/90 text-[18px] lg:text-[20px] leading-relaxed border-l border-champagne/60 pl-6">
              Combining engineering precision with business technology to execute massive turnkey projects across India and South East Asia.
            </p>
          </div>
        </div>
      </section>

      {/* Services List (Asymmetrical Broken Grid) */}
      <section className="bg-obsidian-2/30 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          {services.map((s, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={i} className="py-20 md:py-32 border-b border-alabaster/5 last:border-0 relative group">
                <div className={`grid md:grid-cols-12 gap-12 md:gap-16 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>
                  
                  {/* Text Content */}
                  <div className={`md:col-span-6 flex flex-col justify-center z-20 ${isEven ? 'md:order-1' : 'md:order-2'}`}>

                    <h3 className="font-serif text-[clamp(2.5rem,4vw,4rem)] leading-[1.05] mb-8 group-hover:text-champagne transition-colors duration-500">
                      {s.title}
                    </h3>
                    <p className="font-sans text-[19px] text-white leading-relaxed text-justify hyphens-auto">
                      {s.desc}
                    </p>
                  </div>

                  {/* Image Content */}
                  <div className={`md:col-span-6 relative z-10 ${isEven ? 'md:order-2' : 'md:order-1'} mt-12 md:mt-0`}>
                    <div className="aspect-[4/3] md:aspect-[16/10] relative overflow-hidden border border-champagne/10">
                      <div className="absolute inset-0 bg-obsidian/40 group-hover:bg-transparent transition-colors duration-1000 z-10 pointer-events-none"></div>
                      <Image 
                        src={s.image} 
                        alt={s.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
                      />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Scale & CTA */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto text-center border-t border-alabaster/10">
        <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] mb-8">Ready to Build the Future?</h2>
        <p className="font-sans text-white max-w-3xl mx-auto text-xl leading-relaxed mb-12">
          From complex government irrigation networks to private highway construction, we bring unmatched scale, technology, and permanence to every project we touch.
        </p>
        <InquiryModal 
          buttonText="Initiate a Project" 
          buttonClassName="inline-block border border-champagne/60 px-12 py-5 text-[13px] font-semibold tracking-[0.3em] uppercase hover:bg-champagne hover:text-obsidian transition-all duration-500 text-champagne"
        />
      </section>
    </main>
  );
}
