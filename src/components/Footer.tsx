import React from "react";
import { Phone, Mail, MapPin, ArrowUp, Globe } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-12 pb-8 sm:pt-16 sm:pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand Col */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-4">
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

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-1">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=100089712229802"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Paradise Crew on Facebook"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#1877F2]/60 hover:bg-[#1877F2]/10 text-slate-400 hover:text-[#1877F2] flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/paradisecrew"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Paradise Crew on Instagram"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#E1306C]/60 hover:bg-[#E1306C]/10 text-slate-400 hover:text-[#E1306C] flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/paradisecrew"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Paradise Crew on LinkedIn"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/10 text-slate-400 hover:text-[#0A66C2] flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
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
          <div className="lg:col-span-4 space-y-3">
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
                <span>info@paradisecrew.site</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>+94 72 141 0369</span>
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
