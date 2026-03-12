import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MessageCircle, Facebook, Instagram } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const SERVICE_LINKS = [
  { label: "Umrah Packages", href: "#" },
  { label: "Ticketing", href: "#" },
  { label: "Visas", href: "#" },
  { label: "Hotels", href: "#" },
  { label: "Transport", href: "#" },
  { label: "Consultation", href: "#" },
];

const SOCIAL_LINKS = [
  {
    Icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61568150724674",
    label: "Facebook",
  },
  {
    Icon: Instagram,
    href: "https://www.instagram.com/GoldvizTravels",
    label: "Instagram",
  },
  {
    Icon: MessageCircle,
    href: "https://wa.me/923020438715",
    label: "WhatsApp",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1 — Brand */}
          <div>
            <div className="mb-2">
              <Image
                src="/logo.webp"
                alt="GoldViz Travels & Tours"
                width={200}
                height={70}
                className="h-24 w-auto object-contain"
              />
            </div>
            <p className="font-[family-name:var(--font-body)] text-white/50 text-sm leading-relaxed italic mb-4">
              Where Comfort Meets True Care.
            </p>
            <p className="font-[family-name:var(--font-body)] text-white/40 text-xs leading-relaxed">
              Your trusted travel partner for Umrah, ticketing, visas, hotels,
              and more — serving families across Pakistan.
            </p>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="text-white font-[family-name:var(--font-body)] font-bold text-xs uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-[family-name:var(--font-body)] text-white/50 hover:text-[#c9a227] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h4 className="text-white font-[family-name:var(--font-body)] font-bold text-xs uppercase tracking-widest mb-5">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-[family-name:var(--font-body)] text-white/50 hover:text-[#c9a227] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="text-white font-[family-name:var(--font-body)] font-bold text-xs uppercase tracking-widest mb-5">
              Contact Us
            </h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href="tel:+923020438715"
                  className="flex items-center gap-2.5 text-white/50 hover:text-[#c9a227] transition-colors group"
                >
                  <Phone size={14} className="shrink-0 text-[#c9a227]" strokeWidth={1.75} />
                  <span className="font-[family-name:var(--font-body)] text-sm">
                    +92-302-0438715
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923020438715"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-white/50 hover:text-[#c9a227] transition-colors"
                >
                  <MessageCircle size={14} className="shrink-0 text-[#c9a227]" strokeWidth={1.75} />
                  <span className="font-[family-name:var(--font-body)] text-sm">
                    WhatsApp Us
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:travel@goldviz.com.pk"
                  className="flex items-center gap-2.5 text-white/50 hover:text-[#c9a227] transition-colors"
                >
                  <Mail size={14} className="shrink-0 text-[#c9a227]" strokeWidth={1.75} />
                  <span className="font-[family-name:var(--font-body)] text-sm break-all">
                    travel@goldviz.com.pk
                  </span>
                </a>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#c9a227]/20 flex items-center justify-center text-white/50 hover:text-[#c9a227] transition-all duration-200"
                >
                  <Icon size={15} strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-[family-name:var(--font-body)] text-white/30 text-xs">
            © 2026 GoldViz Travels & Tours · All Rights Reserved
          </p>
          <p className="font-[family-name:var(--font-body)] text-white/20 text-xs">
            www.goldviztravels.com
          </p>
        </div>
      </div>
    </footer>
  );
}
