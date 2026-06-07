import type { Metadata } from "next";
import { Cinzel, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel", weight: ["400", "500", "600", "700"], display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", weight: ["400", "500"], display: "swap" });

export const metadata: Metadata = { 
  title: "Indus INC | Premium Wholesale Agricultural Products", 
  description: "Leading Wholesale supplier and Exporter of premium quality Paddy, Wheat, Pulses, and Oilseeds since 2006." 
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body>
        <Preloader />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
