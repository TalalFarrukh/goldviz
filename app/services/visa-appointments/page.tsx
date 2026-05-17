import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import ServiceCTA from "@/components/ServiceCTA";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Motion";
import {
  USA_VISA_CATEGORIES,
  USA_APPOINTMENT_ROUTES,
  VISA_PURPOSES,
  SCHENGEN_COUNTRIES,
  OTHER_VISA_COUNTRIES,
} from "@/data/visas";
import {
  MapPin,
  CheckCircle2,
  Globe2,
  Stamp,
  CalendarCheck,
  FileText,
  ShieldCheck,
  Zap,
  UserCog,
  MessagesSquare,
} from "lucide-react";

const INCLUDED_FEATURES = [
  {
    icon: CalendarCheck,
    title: "Embassy Appointment Assistance",
    text: "We book the earliest available slot and walk you through what to expect.",
  },
  {
    icon: FileText,
    title: "Complete Documentation Support",
    text: "Every form, every supporting document — reviewed before submission.",
  },
  {
    icon: ShieldCheck,
    title: "Travel Insurance Guidance",
    text: "Schengen-compliant travel insurance arranged where required.",
  },
  {
    icon: Zap,
    title: "Fast & Smooth Processing",
    text: "We know the bottlenecks. We avoid them so your application keeps moving.",
  },
  {
    icon: UserCog,
    title: "Personalised Solutions",
    text: "Visit, work, study or family — your case isn't a template. Neither is our approach.",
  },
  {
    icon: MessagesSquare,
    title: "Interview Preparation",
    text: "Coaching on visa interview questions, dress code and what consular officers look for.",
  },
];

export const metadata: Metadata = {
  title: "Visa & Embassy Appointments — USA, Schengen & Global VFS",
  description:
    "Early USA B1/B2/F1/F2 appointments via Dubai, UAE, UK, Canada and Oman. Schengen visa appointments — Italy, Spain, Belgium, Netherlands, Austria, Greece. Qatar and Japan supported.",
  alternates: { canonical: "/services/visa-appointments" },
};

export default function VisaAppointmentsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServiceHero
          eyebrow="Visa & Embassy Appointments"
          title="Hard-to-Get Appointments,"
          highlight="Made Simple"
          subtitle="Early USA visa slots, Schengen bookings and global VFS appointments — handled by a team that knows the process inside out."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/#services" },
            { label: "Visa Appointments" },
          ]}
        />

        {/* USA Section — Featured */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
              {/* Left — context */}
              <Reveal className="lg:col-span-1" x={-30} y={0}>
                <p className="text-[#6b9e2b] font-[family-name:var(--font-body)] font-bold uppercase tracking-widest text-xs mb-3">
                  Featured
                </p>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4 leading-tight">
                  USA Visa <span className="text-[#c9a227]">Early Appointments</span>
                </h2>
                <p className="font-[family-name:var(--font-body)] text-[#7a7a7a] text-base leading-relaxed mb-6">
                  Skip the long Pakistan wait times. We secure early USA visa
                  appointment slots through third countries — Karachi and
                  Islamabad applicants supported.
                </p>

                {/* Categories */}
                <div className="mb-6">
                  <p className="font-[family-name:var(--font-body)] text-[#1a1a2e] text-xs font-bold uppercase tracking-widest mb-3">
                    Visa Categories
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {USA_VISA_CATEGORIES.map((cat) => (
                      <span
                        key={cat}
                        className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#c9a227]/10 text-[#1a1a2e] text-sm font-bold font-[family-name:var(--font-body)]"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Cities */}
                <div className="flex items-center gap-2 text-[#1a1a2e] font-[family-name:var(--font-body)] text-sm">
                  <MapPin size={16} className="text-[#6b9e2b]" />
                  <span className="font-bold">Karachi &amp; Islamabad</span>
                  <span className="text-[#7a7a7a]">— reasonable prices</span>
                </div>
              </Reveal>

              {/* Right — routes */}
              <Reveal className="lg:col-span-2" x={30} y={0} delay={0.15}>
                <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0d2016] rounded-3xl p-8 lg:p-10 border-2 border-[#c9a227]/30 shadow-xl">
                  <p className="text-[#c9a227] font-[family-name:var(--font-body)] font-bold uppercase tracking-widest text-xs mb-5">
                    Appointment Routes
                  </p>
                  <h3 className="font-[family-name:var(--font-heading)] text-white text-2xl sm:text-3xl font-bold mb-6">
                    From → United States 🇺🇸
                  </h3>
                  <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-3" stagger={0.06}>
                    {USA_APPOINTMENT_ROUTES.map((route) => (
                      <StaggerItem key={route.from}>
                        <div className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#c9a227]/50 rounded-xl px-4 py-3 transition-all duration-300 hover:scale-[1.03] cursor-default">
                          <span className="text-2xl shrink-0 group-hover:scale-125 group-hover:-rotate-6 transition-transform duration-300">{route.fromFlag}</span>
                          <span className="font-[family-name:var(--font-body)] text-white text-sm font-bold flex-1">
                            {route.from}
                          </span>
                          <span className="text-white/40 text-sm group-hover:text-[#c9a227] group-hover:translate-x-1 transition-all duration-300">→</span>
                          <span className="text-xl group-hover:scale-125 transition-transform duration-300">🇺🇸</span>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerGroup>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 lg:py-24 bg-[#faf7f0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-14">
              <p className="text-[#6b9e2b] font-[family-name:var(--font-body)] font-bold uppercase tracking-widest text-xs mb-3">
                What&apos;s Included
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4">
                Let Us Handle the Process
              </h2>
              <p className="font-[family-name:var(--font-body)] text-[#7a7a7a] text-base sm:text-lg max-w-2xl mx-auto">
                You focus on your dreams — we handle the paperwork, the
                appointments, and everything in between.
              </p>
            </Reveal>

            <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {INCLUDED_FEATURES.map(({ icon: Icon, title, text }) => (
                <StaggerItem key={title}>
                  <div className="group h-full bg-white rounded-2xl p-6 shadow-sm border border-[#e8e0d0] hover:shadow-xl hover:border-[#c9a227] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#c9a227] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                    <div className="w-12 h-12 rounded-full bg-[#c9a227]/10 flex items-center justify-center mb-5 group-hover:bg-[#c9a227]/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon size={22} className="text-[#c9a227]" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1a1a2e] text-lg mb-2 group-hover:text-[#c9a227] transition-colors duration-300">
                      {title}
                    </h3>
                    <p className="font-[family-name:var(--font-body)] text-[#7a7a7a] text-sm leading-relaxed">
                      {text}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* Schengen Section */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-12">
              <p className="text-[#6b9e2b] font-[family-name:var(--font-body)] font-bold uppercase tracking-widest text-xs mb-3 flex items-center justify-center gap-2">
                <Stamp size={14} /> Schengen &amp; Europe
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4">
                One Visa, <span className="text-[#c9a227]">Multiple Destinations</span>
              </h2>
              <p className="font-[family-name:var(--font-body)] text-[#7a7a7a] text-base sm:text-lg max-w-2xl mx-auto">
                With a single Schengen visa, you can travel across Europe&apos;s
                most beautiful destinations — endless possibilities, one
                application.
              </p>
            </Reveal>

            <StaggerGroup className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10" stagger={0.05}>
              {SCHENGEN_COUNTRIES.map((country) => (
                <StaggerItem key={country.name}>
                  <div className="group h-full bg-white rounded-2xl p-5 text-center border border-[#e8e0d0] hover:shadow-lg hover:border-[#c9a227] hover:-translate-y-2 transition-all duration-300 cursor-default">
                    <div className="text-4xl mb-2.5 group-hover:scale-125 group-hover:-rotate-6 transition-transform duration-300">{country.flag}</div>
                    <p className="font-[family-name:var(--font-heading)] font-bold text-[#1a1a2e] text-base mb-0.5 group-hover:text-[#c9a227] transition-colors">
                      {country.name}
                    </p>
                    {country.notes && (
                      <p className="font-[family-name:var(--font-body)] text-[#7a7a7a] text-xs">
                        {country.notes}
                      </p>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>

            {/* Purposes */}
            <Reveal className="bg-white rounded-2xl border border-[#e8e0d0] p-6 sm:p-8">
              <p className="font-[family-name:var(--font-body)] text-[#1a1a2e] text-xs font-bold uppercase tracking-widest mb-4">
                Visa Purposes Supported
              </p>
              <div className="flex flex-wrap gap-3">
                {VISA_PURPOSES.map((p) => (
                  <span
                    key={p}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6b9e2b]/10 hover:bg-[#6b9e2b]/20 hover:scale-105 text-[#1a1a2e] text-sm font-[family-name:var(--font-body)] font-bold transition-all duration-300 cursor-default"
                  >
                    <CheckCircle2 size={14} className="text-[#6b9e2b]" />
                    {p}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Global VFS / Other */}
        <section className="py-20 lg:py-24 bg-[#faf7f0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-12">
              <p className="text-[#6b9e2b] font-[family-name:var(--font-body)] font-bold uppercase tracking-widest text-xs mb-3 flex items-center justify-center gap-2">
                <Globe2 size={14} /> Global VFS
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4">
                Other Embassy Appointments
              </h2>
              <p className="font-[family-name:var(--font-body)] text-[#7a7a7a] text-base sm:text-lg max-w-2xl mx-auto">
                Beyond USA and Schengen — we book appointments globally.
              </p>
            </Reveal>

            <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto" stagger={0.1}>
              {OTHER_VISA_COUNTRIES.map((country) => (
                <StaggerItem key={country.name}>
                  <div className="group flex items-center gap-4 bg-white hover:bg-white rounded-2xl px-6 py-5 border border-[#e8e0d0] hover:border-[#c9a227] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
                    <span className="text-4xl group-hover:scale-125 group-hover:-rotate-6 transition-transform duration-300">{country.flag}</span>
                    <div>
                      <p className="font-[family-name:var(--font-heading)] font-bold text-[#1a1a2e] text-lg group-hover:text-[#c9a227] transition-colors">
                        {country.name}
                      </p>
                      {country.notes && (
                        <p className="font-[family-name:var(--font-body)] text-[#7a7a7a] text-sm">
                          {country.notes}
                        </p>
                      )}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>

            <p className="text-center font-[family-name:var(--font-body)] text-[#7a7a7a] text-sm mt-8">
              Don&apos;t see your destination? Get in touch — we likely cover it.
            </p>
          </div>
        </section>

        <ServiceCTA
          heading="Need an Appointment Fast?"
          subheading="Tell us your visa type and preferred location — we'll find the earliest slot we can."
          whatsappText="Hi GTT, I'd like to enquire about a visa appointment."
        />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
