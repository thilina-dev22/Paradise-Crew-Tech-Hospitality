import { useState, useEffect, useRef } from "react";
import { Calculator, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside (mouse & touch support for iOS)
  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside, { passive: true });
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    }
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Solutions", href: "#solutions" },
    { name: "Live Showcase", href: "#showcase" },
    { name: "Portfolios", href: "#portfolio" },
    { name: "Cost Estimator", href: "#estimator" },
    { name: "Packages", href: "#packages" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <nav
      ref={menuRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl overflow-hidden border border-amber-500/40 shadow-lg shadow-ocean-600/30 group-hover:scale-105 transition-transform bg-slate-900 flex items-center justify-center">
            <img
              src="/images/logo.png"
              alt="Paradise Crew Tech & Hospitality Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="font-extrabold text-lg tracking-tight text-white flex items-center gap-1.5 leading-none">
              PARADISE <span className="text-amber-400">CREW</span>
            </div>
            <div className="text-[10px] text-ocean-400 font-mono font-bold tracking-widest uppercase mt-1">
              Tech &amp; Hospitality
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold text-slate-300 hover:text-ocean-400 transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#estimator"
            className="px-5 py-2.5 bg-gradient-to-r from-ocean-500 to-ocean-600 hover:from-ocean-400 hover:to-ocean-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-ocean-600/30 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
          >
            <Calculator className="w-4 h-4 text-amber-300" />
            <span>Cost Estimator</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown — animated slide-down */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-slate-950/98 backdrop-blur-md border-b border-slate-800 px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center text-sm font-semibold text-slate-200 hover:text-ocean-400 hover:bg-slate-800/50 py-3 px-3 rounded-xl transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 bg-gradient-to-r from-ocean-500 to-ocean-600 text-white font-bold rounded-xl text-center flex items-center justify-center gap-2 text-sm shadow-lg shadow-ocean-900/50"
            >
              <Calculator className="w-4 h-4 text-amber-300" />
              <span>Calculate Project Cost</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
