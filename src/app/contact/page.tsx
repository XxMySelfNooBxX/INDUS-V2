import { Metadata } from "next";
export const metadata: Metadata = { title: "Contact | Indus INC" };

export default function ContactPage() {
  return (
    <main className="pt-32 pb-20 px-6 md:px-12 min-h-screen animate-[fadeInUp_0.8s_ease-out_both]">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-[11px] tracking-[0.4em] text-champagne uppercase mb-6">Initiate Trade</p>
        <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.05] mb-20">
          The Export <span className="text-champagne italic">Desk.</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div className="p-10 border border-champagne/15 bg-obsidian-2/50 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] text-champagne uppercase mb-6">Main Office / Adat</p>
              <h3 className="font-serif text-3xl font-medium mb-6">Achhnera</h3>
              <p className="font-sans text-alabaster/70 leading-loose text-lg mb-8">
                Indus INC, B-26<br/>
                Naveen Mandi Sthal, APMC<br/>
                Achhnera, India
              </p>
            </div>
            <div>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSc7-XBm1-K8nFTW7_yvmXnV0Zv_q4SDo_sYvBBvH2PJgSJceg/viewform?usp=dialog" target="_blank" rel="noreferrer" className="inline-block border border-champagne/40 px-8 py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-champagne hover:text-obsidian transition-all duration-500">
                Submit Inquiry Form
              </a>
            </div>
          </div>
          <div className="p-10 border border-champagne/15 bg-obsidian-2/50 backdrop-blur-sm">
            <p className="font-mono text-[10px] tracking-[0.3em] text-champagne uppercase mb-6">Export / Import Office</p>
            <h3 className="font-serif text-3xl font-medium mb-6">Jaipur</h3>
            <p className="font-sans text-alabaster/70 leading-loose text-lg">
              184 - Nemi Nagar Extension<br/>
              Vaishali Nagar<br/>
              Jaipur 302021, India
            </p>
          </div>
        </div>

        <div className="text-center py-20 border-t border-alabaster/10">
          <h2 className="font-serif text-[clamp(2rem,6vw,5rem)] font-medium leading-[0.9] mb-12">
            Let's <span className="text-champagne italic">Connect.</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 font-mono text-sm tracking-widest">
            <a href="mailto:info@indusin.net" className="text-alabaster/80 hover:text-champagne transition-colors">info@indusin.net</a>
            <span className="hidden md:block text-alabaster/30">·</span>
            <a href="mailto:indusinc9@gmail.com" className="text-alabaster/80 hover:text-champagne transition-colors">indusinc9@gmail.com</a>
            <span className="hidden md:block text-alabaster/30">·</span>
            <a href="tel:+919982999942" className="text-alabaster/80 hover:text-champagne transition-colors">+91 99829 99942</a>
          </div>
        </div>
      </div>
    </main>
  );
}
