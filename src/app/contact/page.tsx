import { Metadata } from "next";
import InquiryModal from "@/components/InquiryModal";

export const metadata: Metadata = { title: "Contact | Indus INC" };

export default function ContactPage() {
  return (
    <main className="pt-32 pb-20 px-6 md:px-12 min-h-screen animate-[fadeInUp_0.8s_ease-out_both]">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-[15px] font-semibold tracking-[0.4em] text-champagne uppercase mb-6">Initiate Trade</p>
        <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.05] mb-20">
          The Export <span className="text-champagne italic">Desk.</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div className="p-10 border border-champagne/15 bg-obsidian-2/50 backdrop-blur-sm">
            <p className="font-mono text-[15px] font-semibold tracking-[0.3em] text-champagne uppercase mb-6">Main Office / Adat</p>
            <h3 className="font-serif text-3xl font-medium mb-6">Achhnera</h3>
            <p className="font-sans text-white leading-loose text-lg mb-8">
              Indus INC, B-26<br/>
              Naveen Mandi Sthal, APMC<br/>
              Achhnera, India
            </p>
            <div className="w-full h-64 relative border border-champagne/15 overflow-hidden group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.3170530513953!2d77.7455756!3d27.177770199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39738f4bacff1c5f%3A0x36dfe79e907c385f!2sINDUS%20INC%20(Adatiya%20%2F%20Wholesaler%20of%20Grains%2C%20OilSeeds%2C%20Paddy%2C%20Millet)!5e0!3m2!1sen!2sin!4v1784231845064!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="p-10 border border-champagne/15 bg-obsidian-2/50 backdrop-blur-sm">
            <p className="font-mono text-[15px] font-semibold tracking-[0.3em] text-champagne uppercase mb-6">Export / Import Office</p>
            <h3 className="font-serif text-3xl font-medium mb-6">Jaipur</h3>
            <p className="font-sans text-white leading-loose text-lg mb-8">
              184 - Nemi Nagar Extension<br/>
              Vaishali Nagar<br/>
              Jaipur 302021, India
            </p>
            <div className="w-full h-64 relative border border-champagne/15 overflow-hidden group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.702214187272!2d75.7316337!3d26.9129443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db38976448a8f%3A0x2712395c732ebe9a!2sIndus%20Inc!5e0!3m2!1sen!2sin!4v1784231987573!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-20">
          <InquiryModal buttonClassName="inline-block border border-champagne/60 px-12 py-5 text-[13px] font-semibold tracking-[0.3em] uppercase hover:bg-champagne hover:text-obsidian transition-all duration-500 text-champagne" />
        </div>

        <div className="text-center py-20 border-t border-alabaster/10 mt-20">
          <h2 className="font-serif text-[clamp(2rem,6vw,5rem)] font-medium leading-[0.9] mb-12">
            Let's <span className="text-champagne italic">Connect.</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 font-mono text-[16px] tracking-widest">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-champagne transition-colors">FACEBOOK</a>
            <span className="hidden md:block text-alabaster/50">·</span>
            <a href="https://www.instagram.com/indusinc9/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-champagne transition-colors">INSTAGRAM</a>
            <span className="hidden md:block text-alabaster/50">·</span>
            <a href="https://wa.me/918005508939" target="_blank" rel="noopener noreferrer" className="text-white hover:text-champagne transition-colors">WHATSAPP</a>
          </div>
        </div>
      </div>
    </main>
  );
}
