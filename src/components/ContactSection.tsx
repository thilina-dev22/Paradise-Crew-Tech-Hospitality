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

  // Web3Forms API key loaded from environment variable VITE_WEB3FORMS_ACCESS_KEY
  const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "";

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

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
        try {
          const confetti = (await import("canvas-confetti")).default;
          confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 },
          });
        } catch {
          // Ignore confetti errors if canvas fails on mobile
        }
      } else {
        console.error("Web3Forms error:", data);
        setErrorMessage(data.message || "Failed to send proposal. Please contact us directly via WhatsApp or email.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setErrorMessage("Network error. Please try submitting again or reach out on WhatsApp.");
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
    return `https://wa.me/94721410369?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-950 text-white relative">
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
            Get an instant response within 2 hours. Submit your details below or connect directly on WhatsApp with our lead engineers.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6 bg-slate-900/80 border border-slate-800 p-6 sm:p-8 rounded-3xl backdrop-blur-xl">
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold">Direct Channels</h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Prefer immediate messaging? Our team is active 7 days a week on WhatsApp and email.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {/* WhatsApp Card */}
              <a
                href={getWhatsAppDirectLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 hover:border-emerald-500/60 transition-all flex items-center gap-4 block"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-emerald-400 font-mono font-bold uppercase">Fastest Response</div>
                  <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    Chat on WhatsApp
                  </div>
                  <div className="text-xs text-slate-400 truncate">+94 72 141 0369</div>
                </div>
              </a>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-ocean-500/20 text-ocean-400 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-ocean-400 font-mono font-bold uppercase">Email Inquiry</div>
                  <div className="text-sm font-bold text-white">info@paradisecrew.site</div>
                  <div className="text-xs text-slate-400">Replies in &lt; 2 Hours</div>
                </div>
              </div>

              {/* Phone Direct */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-amber-400 font-mono font-bold uppercase">Direct Line</div>
                  <div className="text-sm font-bold text-white">+94 72 141 0369</div>
                  <div className="text-xs text-slate-400">Mon - Sun (8:00 AM - 10:00 PM IST)</div>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-sky-400 font-mono font-bold uppercase">Development Studio</div>
                  <div className="text-sm font-bold text-white">Southern Province &amp; Colombo</div>
                  <div className="text-xs text-slate-400">Sri Lanka &amp; Worldwide Remote</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex items-center gap-3 text-xs text-slate-400">
              <Globe className="w-4 h-4 text-ocean-400 shrink-0" />
              <span>We work with international clients across Europe, Australia, UK &amp; Asia-Pacific.</span>
            </div>
          </div>

          {/* Right Column: Project Proposal Form */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 p-6 sm:p-8 rounded-3xl backdrop-blur-xl shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Proposal Request Received!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you! Our lead technical architect has received your project details and will review your scope right away.
                </p>
                <div className="pt-4 flex justify-center">
                  <a
                    href={getWhatsAppDirectLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl flex items-center gap-2 shadow-lg shadow-emerald-500/20"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Speed Up via WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">Project Scope Form</h3>
                  <p className="text-xs text-slate-400">
                    Fill in your details below for a customized proposal and timeline estimate.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-medium leading-relaxed">
                    {errorMessage}
                  </div>
                )}

                {/* Business Type Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 block">Select Your Industry / Business Type</label>
                  <select
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:border-ocean-500"
                  >
                    <option value="Restaurant / Cafe / Beach Bar">Restaurant / Cafe / Beach Bar / Nightclub</option>
                    <option value="Hotel / Villa / Resort">Hotel / Boutique Villa / Resort / Guest House</option>
                    <option value="Scooter / Vehicle Rental">Scooter / Car / Bike Rental Business</option>
                    <option value="Surf School & Watersports">Surf School / Watersports / Diving Center</option>
                    <option value="Tour Operator & Agency">Tour Operator / Safari / Day Trip Agency</option>
                    <option value="Private Driver & Transport">Private Driver / Airport Taxi Dispatch</option>
                    <option value="Shop & Retail Outlet">Retail Shop / Clothing / Souvenir Store</option>
                    <option value="Other Industry">Other Custom Business Software</option>
                  </select>
                </div>

                {/* Scope Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 block">Target Software Package</label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:border-ocean-500"
                  >
                    <option value="Web + Mobile Apps Suite">Complete Suite (Web + iOS/Android Mobile Apps)</option>
                    <option value="Custom Web App Only">Custom Web Application / Booking Engine Only</option>
                    <option value="iOS & Android Apps Only">Native / Hybrid iOS &amp; Android Apps Only</option>
                    <option value="QR Menu & Order Bot">QR Menu Ordering &amp; WhatsApp Bot System</option>
                    <option value="UI/UX Design & Prototype">UI/UX Design &amp; Clickable Prototype Only</option>
                  </select>
                </div>

                {/* Inputs grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ruwan Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:border-ocean-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="ruwan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:border-ocean-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">WhatsApp / Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+94 72 141 0369"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:border-ocean-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Project Details &amp; Requirements</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your business, specific feature needs, current website/app (if any), and target launch timeline..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:border-ocean-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-ocean-500 to-ocean-600 hover:from-ocean-400 hover:to-ocean-500 text-white font-bold rounded-xl shadow-xl shadow-ocean-600/30 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 text-amber-300" />
                      <span>Submit Proposal Request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
