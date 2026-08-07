import { useState, useEffect } from "react";
import { Calculator, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              Tech & Hospitality
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

        {/* Action Button */}
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
          className="md:hidden p-2 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-200 hover:text-ocean-400 py-1.5"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#estimator"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-3 bg-ocean-600 text-white font-bold rounded-xl text-center flex items-center justify-center gap-2 text-xs"
          >
            <Calculator className="w-4 h-4 text-amber-300" />
            <span>Calculate Project Cost</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
