"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Plane,
  Stamp,
  ShieldCheck,
  Palmtree,
  Ticket,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/data/services";

const ICON_MAP: Record<string, LucideIcon> = {
  Plane,
  Stamp,
  ShieldCheck,
  Palmtree,
  Ticket,
  MessageCircle,
};

type NavLink =
  | { label: string; href: string; type?: "link" }
  | { label: string; href: string; type: "services" };

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services", type: "services" },
  { label: "About", href: "/#why-us" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  };

  // Small hover delay so the dropdown doesn't snap closed when the cursor
  // crosses the gap between the link and the panel.
  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const closeServices = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

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
          {/* Logo */}
          <div className="w-[200px] shrink-0 flex items-center">
            <Link
              href="/"
              className="flex items-center group"
              onClick={handleNavClick}
            >
              <Image
                src="/logo.webp"
                alt="GoldViz Travels & Tours"
                width={220}
                height={75}
                className="h-20 lg:h-24 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex flex-1 items-center justify-center gap-8">
            {NAV_LINKS.map((link) => {
              if (link.type === "services") {
                return (
                  <li
                    key={link.href}
                    className="relative"
                    onMouseEnter={openServices}
                    onMouseLeave={closeServices}
                  >
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-1 text-white/80 hover:text-[#c9a227] text-sm font-[family-name:var(--font-body)] tracking-wide transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#c9a227] after:transition-all after:duration-200"
                      aria-haspopup="true"
                      aria-expanded={servicesOpen}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Link>

                    {/* Dropdown */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${
                        servicesOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                    >
                      <div className="w-[320px] bg-[#1a1a2e] border border-[#c9a227]/30 rounded-2xl shadow-2xl shadow-black/40 p-2 relative">
                        {/* Arrow notch */}
                        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1a1a2e] border-l border-t border-[#c9a227]/30 rotate-45" />

                        <ul className="relative">
                          {SERVICES.map((service) => {
                            const Icon = ICON_MAP[service.icon];
                            return (
                              <li key={service.id}>
                                <Link
                                  href={service.href}
                                  onClick={() => setServicesOpen(false)}
                                  className="group flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors duration-200"
                                >
                                  <span className="shrink-0 w-9 h-9 rounded-full bg-[#6b9e2b]/15 flex items-center justify-center group-hover:bg-[#c9a227]/20 group-hover:scale-110 transition-all duration-200">
                                    {Icon && (
                                      <Icon
                                        size={16}
                                        className="text-[#6b9e2b] group-hover:text-[#c9a227] transition-colors"
                                        strokeWidth={1.75}
                                      />
                                    )}
                                  </span>
                                  <span className="min-w-0">
                                    <span className="block font-[family-name:var(--font-body)] text-white text-sm font-bold group-hover:text-[#c9a227] transition-colors">
                                      {service.title}
                                    </span>
                                    <span className="block font-[family-name:var(--font-body)] text-white/50 text-xs leading-snug mt-0.5 line-clamp-2">
                                      {service.description}
                                    </span>
                                  </span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              }

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-[#c9a227] text-sm font-[family-name:var(--font-body)] tracking-wide transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#c9a227] after:transition-all after:duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex w-[200px] shrink-0 justify-end">
            <Link
              href="/#contact"
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
          isOpen ? "max-h-[680px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#1a1a2e] border-t border-white/10 px-4 pb-4 pt-2">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              if (link.type === "services") {
                return (
                  <li key={link.href}>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full flex items-center justify-between text-white/80 hover:text-[#c9a227] hover:bg-white/5 px-3 py-2.5 rounded-lg text-sm font-[family-name:var(--font-body)] transition-colors"
                      aria-expanded={mobileServicesOpen}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        mobileServicesOpen
                          ? "max-h-[480px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul className="pl-3 mt-1 mb-2 border-l-2 border-[#c9a227]/30 ml-3 space-y-0.5">
                        {SERVICES.map((service) => {
                          const Icon = ICON_MAP[service.icon];
                          return (
                            <li key={service.id}>
                              <Link
                                href={service.href}
                                onClick={handleNavClick}
                                className="flex items-center gap-2.5 text-white/70 hover:text-[#c9a227] hover:bg-white/5 px-3 py-2 rounded-lg text-sm font-[family-name:var(--font-body)] transition-colors"
                              >
                                {Icon && (
                                  <Icon
                                    size={15}
                                    className="text-[#6b9e2b] shrink-0"
                                    strokeWidth={1.75}
                                  />
                                )}
                                {service.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                );
              }

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={handleNavClick}
                    className="block text-white/80 hover:text-[#c9a227] hover:bg-white/5 px-3 py-2.5 rounded-lg text-sm font-[family-name:var(--font-body)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-3 pt-3 border-t border-white/10">
            <Link
              href="/#contact"
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
