import React from "react";
import { Phone, Mail, MapPin, ArrowUp, Globe } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid md:grid-cols-12 gap-8">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-amber-500/40 shadow-lg bg-slate-900 flex items-center justify-center">
                <img
                  src="/images/logo.png"
                  alt="Paradise Crew Tech & Hospitality Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5 leading-none">
                  PARADISE <span className="text-amber-400">CREW</span>
                </div>
                <div className="text-[11px] text-ocean-400 font-mono font-bold tracking-widest uppercase mt-1">
                  Tech & Hospitality
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
              Sri Lanka & Global custom software development agency specialized in Web & Mobile Apps for Hotels, Restaurants, Cafes, Scooter Rentals, Tour Guides, Transport Services & Local Retail.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Solutions & Verticals</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#solutions" className="hover:text-ocean-400">Restaurants & Cafes QR Ordering</a></li>
              <li><a href="#solutions" className="hover:text-ocean-400">Hotels & Villas Direct Booking</a></li>
              <li><a href="#solutions" className="hover:text-ocean-400">Scooter & Fleet Rentals System</a></li>
              <li><a href="#solutions" className="hover:text-ocean-400">Tour Excursions & QR Pass Apps</a></li>
              <li><a href="#solutions" className="hover:text-ocean-400">Driver & Airport Transfer Dispatch</a></li>
            </ul>
          </div>

          {/* Tools & Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Interactive Tools & Contact</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#estimator" className="text-amber-400 font-bold hover:underline">Interactive App Cost Calculator</a></li>
              <li><a href="#portfolio" className="hover:text-ocean-400">Case Studies & Portfolios</a></li>
              <li><a href="#packages" className="hover:text-ocean-400">Pricing Packages & Tiers</a></li>
              <li className="flex items-center gap-2 pt-2 text-slate-300">
                <Globe className="w-3.5 h-3.5 text-ocean-400" />
                <a href="https://paradisecrew.site" target="_blank" rel="noopener noreferrer" className="hover:underline text-amber-400 font-bold">
                  paradisecrew.site
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>hello@paradisecrew.site</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>+94 77 123 4567</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>Southern Province & Colombo, Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & scroll to top */}
        <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Paradise Crew Tech & Hospitality (paradisecrew.site). All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors flex items-center gap-2"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
