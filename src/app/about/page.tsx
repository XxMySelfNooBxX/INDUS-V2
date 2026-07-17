import { Metadata } from "next";
export const metadata: Metadata = { title: "About Us | Indus INC" };

const pillars = [
  { title: "Principals", desc: "Founded upon unwavering ethics and transparent trade practices that define every relationship." },
  { title: "Perseverance", desc: "Striving for excellence through market shifts, logistical challenges, and changing seasons." },
  { title: "Permanence", desc: "Combining people, technology, and process to build supply chains that stand the test of time." },
  { title: "Partnership", desc: "Empowering sustainable progress for our clients, farming communities, and ourselves." }
];

export default function AboutPage() {
  return (
    <main className="pt-32 pb-20 px-6 md:px-12 min-h-screen animate-[fadeInUp_0.8s_ease-out_both]">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-sm sm:text-base md:text-lg font-semibold tracking-[0.2em] md:tracking-[0.3em] text-champagne uppercase mb-4 md:mb-6">Our Legacy</p>
        <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.05] mb-12">
          Business Technologists <br/>in the <span className="text-champagne italic">Agricultural Realm.</span>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="font-serif text-[32px] mb-4 text-champagne">Our Vision</h2>
            <p className="font-sans text-[20px] text-alabaster/90 leading-relaxed text-justify">
              We envision a future where every client can thrive in a competitive landscape, guided by our core values of integrity, excellence, and collaboration. INDUS INC believes that combining people, technology and process is the way forward.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-[32px] mb-4 text-champagne">Our Mission</h2>
            <p className="font-sans text-[20px] text-alabaster/90 leading-relaxed text-justify">
              To strengthen India's development through innovative, sustainable, and high-quality Products and services to domestic and foreign customers with 100% satisfactory solutions. We are dedicated to delivering projects that empower communities, ensure safety, and promote environmental stewardship.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 border-y border-alabaster/10 py-12 text-center">
          <div><p className="font-serif text-4xl md:text-5xl text-champagne mb-2">50+</p><p className="font-mono text-[10px] tracking-[0.2em] uppercase text-alabaster/50">Global Clients</p></div>
          <div><p className="font-serif text-4xl md:text-5xl text-champagne mb-2">10M+</p><p className="font-mono text-[10px] tracking-[0.2em] uppercase text-alabaster/50">Turnover</p></div>
          <div><p className="font-serif text-4xl md:text-5xl text-champagne mb-2">100+</p><p className="font-mono text-[10px] tracking-[0.2em] uppercase text-alabaster/50">Turnkey Projects</p></div>
          <div><p className="font-serif text-4xl md:text-5xl text-champagne mb-2">700+</p><p className="font-mono text-[10px] tracking-[0.2em] uppercase text-alabaster/50">Export Shipments</p></div>
        </div>

        <div className="border-t border-alabaster/10 pt-20">
          <h2 className="font-serif text-5xl mb-16 text-center">The Four Pillars</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {pillars.map((p, i) => (
              <div key={i} className="p-8 border border-champagne/10 hover:border-champagne/40 transition-all duration-500 group bg-obsidian-2/30 text-center">
                <div className="mb-4 flex items-center justify-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-champagne"></div>
                  <h3 className="font-serif text-3xl text-champagne transition-colors">{p.title}</h3>
                </div>
                <p className="font-sans text-lg text-alabaster/90 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
