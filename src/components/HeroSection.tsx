import { ChevronRight, Sparkles, Smartphone, Globe, Calculator } from "lucide-react";
import Hero3DCanvas from "./Hero3DCanvas";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative pt-24 pb-16 lg:pt-36 lg:pb-28 overflow-hidden bg-slate-950 text-white"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ocean-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-1.5 px-3 py-2 rounded-full bg-slate-900/90 border border-ocean-500/30 text-ocean-400 text-[11px] sm:text-xs font-semibold tracking-wide shadow-lg shadow-ocean-950/50">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse shrink-0" />
              <span>CUSTOM WEB &amp; MOBILE APP STUDIO</span>
              <span className="bg-ocean-500/20 text-ocean-300 text-[9px] sm:text-[10px] px-2 py-0.5 rounded-md font-mono whitespace-nowrap">
                FOR HOSPITALITY, DINING &amp; RENTALS
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              Web &amp; Mobile Apps for Hotels,{" "}
              <span className="bg-gradient-to-r from-ocean-400 via-sky-300 to-amber-300 bg-clip-text text-transparent">
                Restaurants, Cafes &amp; Tourism
              </span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              We build commission-free direct booking engines, QR menu ordering apps, table reservation systems, scooter &amp; fleet rental software, and automated WhatsApp bots for hotels, restaurants, cafes, beach bars, surf schools, and tour operators.
            </p>

            {/* Industry Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              {[
                "🍽️ Restaurants & Cafes",
                "🏨 Hotels & Villas",
                "🛵 Scooter & Car Rentals",
                "🍹 Beach Bars & Clubs",
                "🏄 Surf & Watersports",
                "🌴 Tour Agencies & Guides",
                "🚗 Drivers & Transfers",
                "🛍️ Shops & Outlets",
              ].map((niche) => (
                <span
                  key={niche}
                  className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 text-[11px] sm:text-xs font-medium hover:border-ocean-500/40 transition-colors"
                >
                  {niche}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-3">
              <a
                href="#estimator"
                className="px-6 py-4 bg-gradient-to-r from-ocean-500 to-ocean-600 hover:from-ocean-400 hover:to-ocean-500 text-white font-bold rounded-xl shadow-xl shadow-ocean-600/30 hover:shadow-ocean-500/50 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
              >
                <Calculator className="w-5 h-5 text-amber-300 group-hover:rotate-12 transition-transform" />
                <span>Calculate App Cost</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#solutions"
                className="px-6 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 font-semibold rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Globe className="w-5 h-5 text-ocean-400" />
                <span>Explore Solutions</span>
              </a>
            </div>

            {/* Trust highlights */}
            <div className="grid grid-cols-3 gap-3 pt-5 border-t border-slate-800/80 text-center lg:text-left">
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-amber-400">QR & Web</div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-medium">Digital Table Ordering</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-sky-400">iOS & Android</div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-medium">Native & Web Apps</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-400">0% Commission</div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-medium">Direct Revenue Control</div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Canvas & Floating Mockup — HIDDEN on mobile, shown lg+ */}
          <div className="hidden lg:flex lg:col-span-5 relative items-center justify-center">
            <div className="relative w-full max-w-[500px]">
              {/* 3D WebGL Globe Canvas background */}
              <div className="absolute inset-0 z-0 opacity-80">
                <Hero3DCanvas />
              </div>

              {/* Floating Preview Card Over 3D Scene */}
              <div className="relative z-10 p-6 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-800 shadow-2xl space-y-4 hover:border-ocean-500/40 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-ocean-500/20 border border-ocean-500/30 flex items-center justify-center text-ocean-400">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-100">Web & Mobile Apps Suite</h4>
                      <p className="text-xs text-slate-400">Hotels, Restaurants & Tourism</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    LIVE DEMO
                  </span>
                </div>

                <div className="rounded-xl overflow-hidden border border-slate-800 shadow-inner group">
                  <img
                    src="/images/restaurant_cafe_app.png"
                    alt="Restaurant & Cafe Digital Ordering App"
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                    <div className="text-slate-400 font-medium">QR Menu & Direct Booking</div>
                    <div className="text-lg font-bold text-amber-400">+140% Revenue</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                    <div className="text-slate-400 font-medium">Automated Kitchen/WhatsApp</div>
                    <div className="text-lg font-bold text-emerald-400">Instant Confirm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-only visual card (no heavy 3D canvas) */}
          <div className="lg:hidden relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <img
                src="/images/restaurant_cafe_app.png"
                alt="Restaurant & Cafe Digital Ordering App"
                className="w-full h-52 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-900/90 backdrop-blur border border-slate-800">
                  <div className="text-slate-400 font-medium">QR Menu & Booking</div>
                  <div className="text-base font-bold text-amber-400">+140% Revenue</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 backdrop-blur border border-slate-800">
                  <div className="text-slate-400 font-medium">WhatsApp Automation</div>
                  <div className="text-base font-bold text-emerald-400">Instant Confirm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
