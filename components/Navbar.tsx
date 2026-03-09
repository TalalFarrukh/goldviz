"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1a1a2e] shadow-lg"
          : "bg-[#1a1a2e]/95 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20 lg:h-24">
          {/* Logo — fixed width so nav links stay centred */}
          <div className="w-[200px] shrink-0 flex items-center">
            <Link
              href="#home"
              className="flex items-center group"
              onClick={handleNavClick}
            >
              <Image
                src="/logo.png"
                alt="GoldViz Travels & Tours"
                width={220}
                height={75}
                className="h-20 lg:h-24 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Nav Links — centred in remaining space */}
          <ul className="hidden md:flex flex-1 items-center justify-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/80 hover:text-[#c9a227] text-sm font-[family-name:var(--font-body)] tracking-wide transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#c9a227] after:transition-all after:duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA — fixed width matching logo side */}
          <div className="hidden md:flex w-[200px] shrink-0 justify-end">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#c9a227] hover:bg-[#e8c84a] text-[#1a1a2e] font-[family-name:var(--font-body)] font-bold text-sm px-5 py-2.5 rounded-full transition-colors duration-200"
            >
              <Phone size={15} />
              Book Consultation
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden ml-auto">
            <button
              className="text-white p-2 rounded-md hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#1a1a2e] border-t border-white/10 px-4 pb-4 pt-2">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={handleNavClick}
                  className="block text-white/80 hover:text-[#c9a227] hover:bg-white/5 px-3 py-2.5 rounded-lg text-sm font-[family-name:var(--font-body)] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 pt-3 border-t border-white/10">
            <Link
              href="#contact"
              onClick={handleNavClick}
              className="flex items-center justify-center gap-2 bg-[#c9a227] hover:bg-[#e8c84a] text-[#1a1a2e] font-bold text-sm px-5 py-3 rounded-full transition-colors w-full"
            >
              <Phone size={15} />
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
