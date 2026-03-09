"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Send, CheckCircle2 } from "lucide-react";

const CONTACT_OPTIONS = [
  {
    id: "phone",
    Icon: Phone,
    label: "Call Us",
    value: "+92-302-0438715",
    href: "tel:+923020438715",
    color: "#6b9e2b",
  },
  {
    id: "whatsapp",
    Icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with our team",
    href: "https://wa.me/923020438715?text=Hi%20GTT%2C%20I%27d%20like%20to%20enquire%20about%20your%20services.",
    color: "#25D366",
  },
  {
    id: "email",
    Icon: Mail,
    label: "Email Us",
    value: "travel@goldviz.com.pk",
    href: "mailto:travel@goldviz.com.pk",
    color: "#3a9bd5",
  },
];

const SERVICES = [
  "Umrah Package",
  "Ticketing",
  "Visa",
  "Hotel Booking",
  "Transport",
  "Consultation",
];

type FormState = {
  name: string;
  phone: string;
  service: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // EmailJS integration point — replace with your service/template/public key
    // await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY');
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#faf7f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#6b9e2b] font-[family-name:var(--font-body)] font-bold uppercase tracking-widest text-xs mb-3">
            Get In Touch
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4">
            Ready to Plan Your Journey?
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#7a7a7a] text-base sm:text-lg max-w-xl mx-auto">
            Get in touch and we&apos;ll take care of everything from here.
          </p>
        </div>

        {/* Contact option cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {CONTACT_OPTIONS.map((opt) => {
            const { Icon } = opt;
            return (
              <a
                key={opt.id}
                href={opt.href}
                target={opt.id !== "phone" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-[#e8e0d0] hover:shadow-md hover:border-[#c9a227] transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${opt.color}18` }}
                >
                  <Icon
                    size={22}
                    strokeWidth={1.75}
                    style={{ color: opt.color }}
                  />
                </div>
                <p className="font-[family-name:var(--font-heading)] font-bold text-[#1a1a2e] text-base mb-1">
                  {opt.label}
                </p>
                <p className="font-[family-name:var(--font-body)] text-[#7a7a7a] text-xs break-all">
                  {opt.value}
                </p>
              </a>
            );
          })}
        </motion.div>

        {/* Contact form */}
        <motion.div
          className="max-w-2xl mx-auto bg-white rounded-3xl shadow-md border border-[#e8e0d0] p-8 sm:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle2
                size={52}
                className="text-[#6b9e2b] mx-auto mb-4"
                strokeWidth={1.5}
              />
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1a1a2e] text-2xl mb-2">
                Enquiry Sent!
              </h3>
              <p className="font-[family-name:var(--font-body)] text-[#7a7a7a] text-sm">
                Thank you, {form.name}. We&apos;ll be in touch with you very
                soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block font-[family-name:var(--font-body)] text-[#1a1a2e] text-xs font-bold uppercase tracking-widest mb-1.5">
                    Your Name <span className="text-[#c9a227]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Ahmed Khan"
                    className="w-full bg-[#faf7f0] border border-[#e8e0d0] rounded-xl px-4 py-3 text-sm font-[family-name:var(--font-body)] text-[#1a1a2e] placeholder-[#b0a89a] focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227] transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-[family-name:var(--font-body)] text-[#1a1a2e] text-xs font-bold uppercase tracking-widest mb-1.5">
                    Phone / WhatsApp <span className="text-[#c9a227]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+92 300 0000000"
                    className="w-full bg-[#faf7f0] border border-[#e8e0d0] rounded-xl px-4 py-3 text-sm font-[family-name:var(--font-body)] text-[#1a1a2e] placeholder-[#b0a89a] focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227] transition-colors"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="block font-[family-name:var(--font-body)] text-[#1a1a2e] text-xs font-bold uppercase tracking-widest mb-1.5">
                  Service Interested In
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full bg-[#faf7f0] border border-[#e8e0d0] rounded-xl px-4 py-3 text-sm font-[family-name:var(--font-body)] text-[#1a1a2e] focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227] transition-colors appearance-none"
                >
                  <option value="">Select a service...</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block font-[family-name:var(--font-body)] text-[#1a1a2e] text-xs font-bold uppercase tracking-widest mb-1.5">
                  Message{" "}
                  <span className="text-[#7a7a7a] normal-case font-normal">
                    (optional)
                  </span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your travel plans, dates, group size..."
                  className="w-full bg-[#faf7f0] border border-[#e8e0d0] rounded-xl px-4 py-3 text-sm font-[family-name:var(--font-body)] text-[#1a1a2e] placeholder-[#b0a89a] focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227] transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-[#c9a227] hover:bg-[#e8c84a] disabled:opacity-70 text-[#1a1a2e] font-[family-name:var(--font-body)] font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 shadow-md shadow-[#c9a227]/20"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#1a1a2e]/30 border-t-[#1a1a2e] rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send My Enquiry
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
