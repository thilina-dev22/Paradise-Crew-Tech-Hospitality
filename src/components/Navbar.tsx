import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur shadow-sm py-4" : "bg-transparent py-4"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center">
            <img
              src="/Logo.png"
              alt="Paradise Crew Logo"
              className="h-24 md:h-32 w-auto object-contain py-2 md:py-0"
            />
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-ocean-600 transition-colors">
              Home
            </a>
            <a href="#reviews" className="hover:text-ocean-600 transition-colors">
              Reviews
            </a>
            <a href="#services" className="hover:text-ocean-600 transition-colors">
              Services
            </a>
            <a href="#packages" className="hover:text-ocean-600 transition-colors">
              Packages
            </a>
            <a href="#approach" className="hover:text-ocean-600 transition-colors">
              Our Approach
            </a>
            <a
              href="#contact"
              className="px-5 py-2 bg-ocean-800 text-white rounded-md hover:bg-ocean-700 transition-all shadow-sm hover:shadow"
            >
              Contact
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-800 hover:text-ocean-600"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-lg border-t border-slate-100">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            {[
              { href: "#home", label: "Home" },
              { href: "#reviews", label: "Reviews" },
              { href: "#services", label: "Services" },
              { href: "#packages", label: "Packages" },
              { href: "#approach", label: "Our Approach" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-slate-800 hover:bg-slate-50 hover:text-ocean-600 rounded-md font-medium"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-3 mt-2 bg-ocean-800 text-white text-center rounded-md font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
