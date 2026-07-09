"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 px-6 md:px-12 flex justify-between items-center z-[10000] transition-all duration-500 ${
        scrolled ? "py-4 bg-obsidian/95 backdrop-blur-md border-b border-alabaster/10" : "py-8 md:py-10 bg-transparent"
      }`}
    >
      <Link href="/" className="font-serif text-xl tracking-[0.3em] text-white hover:opacity-80 transition-opacity">
        INDUS INC
      </Link>
      <ul className="hidden md:flex gap-10 list-none">
        {links.map((link) => (
          <li key={link.href}>
            <Link 
              href={link.href} 
              className={`text-white text-[13px] font-semibold tracking-[0.25em] uppercase transition-all duration-300 ${
                pathname === link.href ? "opacity-100 border-b border-champagne pb-1 text-champagne" : "opacity-100 hover:text-champagne"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}