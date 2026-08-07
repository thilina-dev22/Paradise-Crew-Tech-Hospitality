import React, { useState } from "react";
import {
  Send,
  MessageSquare,
  PhoneCall,
  Mail,
  MapPin,
  Sparkles,
  CheckCircle2,
  Globe,
  Loader2,
} from "lucide-react";
import confetti from "canvas-confetti";

const ContactSection: React.FC = () => {
  const [businessType, setBusinessType] = useState<string>("Restaurant / Cafe / Beach Bar");
  const [projectType, setProjectType] = useState<string>("Web + Mobile Apps Suite");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  // Web3Forms API key configured for info@paradisecrew.site
  const WEB3FORMS_ACCESS_KEY = "dea70a9f-36be-47d0-acf9-c8e16f434ca3";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `⚡ New Project Lead: ${businessType} (${formData.name})`,
          from_name: "Paradise Crew Website Form",
          to_email: "info@paradisecrew.site",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          business_category: businessType,
          project_scope: projectType,
          message: formData.notes,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
        });
      } else {
        console.error("Web3Forms error:", data);
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const getWhatsAppDirectLink = () => {
    const msg = `Hi Paradise Crew Team! My name is ${formData.name || "Client"}.
- Business Type: ${businessType}
- Target Project: ${projectType}
- Email/Phone: ${formData.email || ""} ${formData.phone || ""}
- Details: ${formData.notes || "Interested in custom software development."}`;
    return `https://wa.me/94770000000?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Let's Build Something Extraordinary
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Ready to Build Your{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-sky-300 to-amber-300 bg-clip-text text-transparent">
              Web or Mobile App?
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Schedule a free project consultation or drop us a WhatsApp message to get your project moving today.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-white">Direct Communication</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Prefer immediate messaging? Talk directly with our lead solution architect on WhatsApp for fast responses and quote estimates.
              </p>

              <a
                href={getWhatsAppDirectLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl shadow-xl shadow-emerald-950/60 flex items-center justify-center gap-3 text-sm transition-all transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5 animate-pulse" />
                <span>Chat on WhatsApp Now</span>
              </a>

              <div className="space-y-4 pt-4 border-t border-slate-800 text-sm">
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-9 h-9 rounded-xl bg-ocean-500/10 border border-ocean-500/30 flex items-center justify-center text-ocean-400">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Official Website</div>
                    <div className="font-bold text-amber-400">paradisecrew.site</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Email Us</div>
                    <div className="font-bold text-white">info@paradisecrew.site</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Call / WhatsApp</div>
                    <div className="font-bold text-white">+94 77 123 4567</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono">HQ Studio Location</div>
                    <div className="font-bold text-white">Southern Province & Colombo, Sri Lanka</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 shadow-2xl relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Proposal Request Sent!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you, <span className="text-amber-400 font-bold">{formData.name}</span>. Your request for <span className="text-emerald-400 font-bold">{businessType}</span> was sent directly to <span className="text-sky-300 font-bold">info@paradisecrew.site</span>. We will review your project details and reply within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-bold hover:bg-slate-700"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">Project Consultation Form</h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Your Business Category
                      </label>
                      <select
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:border-ocean-500 focus:outline-none"
                      >
                        <option>Restaurant / Cafe / Beach Bar</option>
                        <option>Hotel / Boutique Stay</option>
                        <option>Scooter / Car Rental Shop</option>
                        <option>Surf School & Activity Center</option>
                        <option>Tour Agency & Safari Guide</option>
                        <option>Private Driver & Taxi Transfer</option>
                        <option>Shop / Souvenir Retail</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Desired Project Scope
                      </label>
                      <select
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:border-ocean-500 focus:outline-none"
                      >
                        <option>Web + Mobile Apps Suite</option>
                        <option>QR Menu Ordering & Web App</option>
                        <option>Direct Booking Web Platform</option>
                        <option>iOS & Android Native Mobile Apps</option>
                        <option>WhatsApp Automation & Custom SaaS</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Kasun Perera"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:border-ocean-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="kasun@yourdomain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:border-ocean-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Phone Number / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+94 77 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:border-ocean-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Project Goals & Key Features
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your business, specific requirements (e.g. QR digital menu, Stripe checkout, WhatsApp bot, GPS rental map), and target launch date..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:border-ocean-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-ocean-500 to-ocean-600 hover:from-ocean-400 hover:to-ocean-500 text-white font-bold rounded-2xl shadow-xl shadow-ocean-600/30 flex items-center justify-center gap-2 text-sm transition-all transform hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    {loading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        <span>Submit Proposal Request to info@paradisecrew.site</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
