import { useState, useEffect } from "react";
import {
  Menu,
  X,
  TerminalSquare,
  Building2,
  ChevronRight,
  CheckCircle2,
  Play,
  Users,
  TrendingUp,
  Key,
  Star,
  Quote,
  MessageSquare,
  Share2,
  Camera,
} from "lucide-react";

const App = () => {
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
    <div className="min-h-screen bg-slate-50 selection:bg-ocean-600 selection:text-white antialiased">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        html { scroll-behavior: smooth; }
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
      `,
        }}
      />

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur shadow-sm py-4" : "bg-transparent py-4"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#home" className="flex items-center">
              <img
                src="/Logo.png"
                alt="Paradise Crew Logo"
                className="h-24 md:h-32 w-auto object-contain py-2 md:py-0"
              />
            </a>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="hover:text-ocean-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#reviews"
                className="hover:text-ocean-600 transition-colors"
              >
                Reviews
              </a>
              <a
                href="#services"
                className="hover:text-ocean-600 transition-colors"
              >
                Services
              </a>
              <a
                href="#packages"
                className="hover:text-ocean-600 transition-colors"
              >
                Packages
              </a>
              <a
                href="#approach"
                className="hover:text-ocean-600 transition-colors"
              >
                Our Approach
              </a>
              <a
                href="#contact"
                className="px-5 py-2 bg-ocean-800 text-white rounded-md hover:bg-ocean-700 transition-all shadow-sm hover:shadow"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`text-slate-800 hover:text-ocean-600`}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white absolute w-full shadow-lg border-t border-slate-100">
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              <a
                href="#home"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-slate-800 hover:bg-slate-50 hover:text-ocean-600 rounded-md font-medium"
              >
                Home
              </a>
              <a
                href="#reviews"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-slate-800 hover:bg-slate-50 hover:text-ocean-600 rounded-md font-medium"
              >
                Reviews
              </a>
              <a
                href="#services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-slate-800 hover:bg-slate-50 hover:text-ocean-600 rounded-md font-medium"
              >
                Services
              </a>
              <a
                href="#packages"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-slate-800 hover:bg-slate-50 hover:text-ocean-600 rounded-md font-medium"
              >
                Packages
              </a>
              <a
                href="#approach"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-slate-800 hover:bg-slate-50 hover:text-ocean-600 rounded-md font-medium"
              >
                Our Approach
              </a>
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

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-ocean-50 rounded-bl-[100px] opacity-70 hidden lg:block"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-sand-100 text-ocean-800 text-sm font-semibold mb-6 tracking-wide">
                <span className="flex h-2 w-2 bg-sand-500 rounded-full mr-2"></span>
                PREMIER AGENCY
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                Where Tropical Hospitality Meets <br />
                <span className="text-ocean-700">Digital Innovation</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We provide custom software solutions and premier property
                management for the tourism sector. Maximize your revenue and
                streamline your operations with our dual-expertise approach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#services"
                  className="px-8 py-4 bg-ocean-800 text-white rounded-md hover:bg-ocean-700 hover:shadow-lg transition-all flex items-center justify-center font-medium"
                >
                  Explore Our Solutions
                  <ChevronRight size={18} className="ml-2" />
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 bg-white text-ocean-800 border-2 border-ocean-100 rounded-md hover:border-ocean-300 hover:bg-ocean-50 transition-all flex items-center justify-center font-medium"
                >
                  Partner With Us
                </a>
              </div>
            </div>

            {/* Hero Abstract Graphic */}
            <div className="hidden lg:flex justify-center relative">
              <div className="relative w-[500px] h-[500px]">
                {/* Abstract geometric elements representing code/waves/villas */}
                <div className="absolute top-10 right-10 w-64 h-80 border-4 border-sand-500 rounded-2xl z-0"></div>
                <div className="absolute bottom-10 left-10 w-72 h-72 bg-ocean-800 rounded-full z-10 opacity-90 shadow-2xl flex items-center justify-center">
                  <Building2 size={80} className="text-sand-300 opacity-50" />
                </div>
                <div className="absolute top-24 left-24 w-80 h-64 bg-white bg-opacity-90 backdrop-blur border border-slate-100 rounded-2xl z-20 shadow-xl p-6 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-500">
                  <div className="flex justify-between items-start">
                    <TerminalSquare size={40} className="text-ocean-600" />
                    <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                      LIVE
                    </div>
                  </div>
                  <div>
                    <div className="h-2 w-3/4 bg-slate-200 rounded mb-3"></div>
                    <div className="h-2 w-1/2 bg-slate-200 rounded mb-3"></div>
                    <div className="h-2 w-5/6 bg-slate-200 rounded"></div>
                  </div>
                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-slate-800">
                        Direct Bookings
                      </span>
                      <span className="text-ocean-600 font-bold">+124%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-slate-800">
                        OTA Fees Saved
                      </span>
                      <span className="text-green-600 font-bold">$14,250</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Banner */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
            Seamlessly integrating with your favorite platforms
          </p>
          <div className="flex flex-wrap justify-center items-end gap-10 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex flex-col items-center gap-3">
              <img
                src="/booking.png"
                alt="Booking.com"
                className="h-6 md:h-8 object-contain"
              />
              <span className="text-sm font-semibold text-slate-800">
                Booking.com
              </span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img
                src="/airbnb.png"
                alt="Airbnb"
                className="h-8 md:h-10 object-contain"
              />
              <span className="text-sm font-semibold text-slate-800">
                Airbnb
              </span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img
                src="/stripe.png"
                alt="Stripe"
                className="h-8 md:h-10 object-contain"
              />
              <span className="text-sm font-semibold text-slate-800">
                Stripe
              </span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img
                src="/expedia.png"
                alt="Expedia"
                className="h-6 md:h-8 object-contain"
              />
              <span className="text-sm font-semibold text-slate-800">
                Expedia
              </span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img
                src="/agoda.png"
                alt="Agoda"
                className="h-6 md:h-8 object-contain"
              />
              <span className="text-sm font-semibold text-slate-800">
                Agoda
              </span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img
                src="/tripadvisor.png"
                alt="TripAdvisor"
                className="h-8 md:h-10 object-contain"
              />
              <span className="text-sm font-semibold text-slate-800">
                TripAdvisor
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-white scroll-mt-28 md:scroll-mt-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Dual Expertise
            </h2>
            <p className="text-slate-600">
              The perfect synergy of ground-level hospitality management and
              high-level technical architecture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Wing 1: Hospitality */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="h-16 w-16 bg-sand-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Building2 size={32} className="text-sand-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Hospitality & Property Management
              </h3>
              <p className="text-slate-600 mb-8">
                End-to-end management making your property a hands-off,
                high-yield asset.
              </p>

              <ul className="space-y-4">
                {[
                  "Full Villa & Hotel Operations",
                  "Premium Guest Relations",
                  "Dynamic Revenue Management",
                  "Staffing & Maintenance Oversight",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2
                      size={20}
                      className="text-ocean-600 mr-3 mt-1 flex-shrink-0"
                    />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Wing 2: Technology */}
            <div className="p-8 rounded-2xl bg-ocean-900 text-white hover:shadow-xl hover:shadow-ocean-900/20 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-ocean-800 rounded-bl-[100px] opacity-50"></div>
              <div className="h-16 w-16 bg-ocean-800 rounded-xl flex items-center justify-center mb-6 z-10 relative group-hover:scale-110 transition-transform">
                <TerminalSquare size={32} className="text-ocean-100" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 z-10 relative">
                Technology & Software Solutions
              </h3>
              <p className="text-ocean-100 mb-8 z-10 relative">
                Bespoke digital tools to eliminate OTA fees and capture direct
                bookings.
              </p>

              <ul className="space-y-4 z-10 relative">
                {[
                  "Custom Direct Booking Engines",
                  "PMS Integrations",
                  "High-Converting Hotel Websites",
                  "Automated Data Analytics Tools",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2
                      size={20}
                      className="text-sand-500 mr-3 mt-1 flex-shrink-0"
                    />
                    <span className="text-ocean-50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section
        id="packages"
        className="py-20 bg-slate-50 scroll-mt-28 md:scroll-mt-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Service Packages
            </h2>
            <p className="text-slate-600">
              Transparent, high-value bundles to launch or scale your
              hospitality business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Package 1 */}
            <div className="bg-white rounded-2xl p-8 border-2 border-ocean-600 shadow-xl relative transform md:-translate-y-4 flex flex-col">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-ocean-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Kickstart Launch Package
              </h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-extrabold text-slate-900">
                  25,000
                </span>
                <span className="text-lg text-slate-500 ml-2 font-medium">
                  LKR
                </span>
              </div>
              <p className="text-sm text-slate-500 mb-8 pb-8 border-b border-slate-100 flex-grow">
                Perfect for new villas, boutique hotels, or properties needing a
                digital revamp.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle2
                    size={18}
                    className="text-ocean-600 mr-3 mt-1 flex-shrink-0"
                  />
                  <span className="text-slate-700 text-sm font-medium">
                    Full OTA Setup & Optimization (Airbnb, Booking.com,
                    TripAdvisor)
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2
                    size={18}
                    className="text-ocean-600 mr-3 mt-1 flex-shrink-0"
                  />
                  <span className="text-slate-700 text-sm font-medium">
                    Custom-Built Responsive Website
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2
                    size={18}
                    className="text-ocean-600 mr-3 mt-1 flex-shrink-0"
                  />
                  <span className="text-slate-700 text-sm font-medium">
                    Basic SEO & Speed Optimization
                  </span>
                </li>
              </ul>

              <button className="w-full py-4 mt-auto rounded-lg bg-ocean-800 text-white font-bold hover:bg-ocean-700 transition-colors shadow-md hover:shadow-xl">
                Get Started
              </button>
            </div>

            {/* Package 2 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Scale & Automate
              </h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-extrabold text-slate-900">
                  75,000
                </span>
                <span className="text-lg text-slate-500 ml-2 font-medium">
                  LKR
                </span>
              </div>
              <p className="text-sm text-slate-500 mb-8 pb-8 border-b border-slate-100 flex-grow">
                For established properties looking to optimize operations and
                maximize direct revenue.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle2
                    size={18}
                    className="text-ocean-600 mr-3 mt-1 flex-shrink-0"
                  />
                  <span className="text-slate-700 text-sm font-medium">
                    <strong>Everything in Kickstart</strong>, plus:
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2
                    size={18}
                    className="text-ocean-600 mr-3 mt-1 flex-shrink-0"
                  />
                  <span className="text-slate-700 text-sm font-medium">
                    Direct Booking Engine with Payment Gateway
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2
                    size={18}
                    className="text-ocean-600 mr-3 mt-1 flex-shrink-0"
                  />
                  <span className="text-slate-700 text-sm font-medium">
                    Advanced PMS & Channel Manager Setup
                  </span>
                </li>
              </ul>

              <button className="w-full py-4 mt-auto rounded-lg bg-slate-800 text-white font-bold hover:bg-slate-700 transition-colors">
                Choose Scale
              </button>
            </div>

            {/* Package 3 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Full Management
              </h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-extrabold text-slate-900">
                  Custom
                </span>
              </div>
              <p className="text-sm text-slate-500 mb-8 pb-8 border-b border-slate-100 flex-grow">
                A complete hands-off partnership. We run your property, you
                collect the profits.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle2
                    size={18}
                    className="text-ocean-600 mr-3 mt-1 flex-shrink-0"
                  />
                  <span className="text-slate-700 text-sm font-medium">
                    Full Property & Revenue Management
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2
                    size={18}
                    className="text-ocean-600 mr-3 mt-1 flex-shrink-0"
                  />
                  <span className="text-slate-700 text-sm font-medium">
                    All Technology Solutions Included
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2
                    size={18}
                    className="text-ocean-600 mr-3 mt-1 flex-shrink-0"
                  />
                  <span className="text-slate-700 text-sm font-medium">
                    Staffing, Training & Guest Relations
                  </span>
                </li>
              </ul>

              <button className="w-full py-4 mt-auto rounded-lg bg-slate-800 text-white font-bold hover:bg-slate-700 transition-colors">
                Contact for Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section
        id="approach"
        className="py-20 bg-ocean-900 text-white scroll-mt-28 md:scroll-mt-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Paradise Crew?
            </h2>
            <p className="text-ocean-200">
              We don't just write code. We operate properties.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-ocean-800 rounded-xl border border-ocean-700 hover:border-sand-500 transition-colors duration-300">
              <div className="mx-auto w-16 h-16 bg-ocean-900 rounded-full flex items-center justify-center mb-6">
                <Play size={28} className="text-sand-400" />
              </div>
              <h4 className="text-xl font-bold mb-3">The Live Feedback Loop</h4>
              <p className="text-ocean-100 text-sm leading-relaxed">
                We test every software feature in our own managed properties
                first. If it doesn't increase revenue or save time for us, we
                don't ship it to you.
              </p>
            </div>

            <div className="text-center p-6 bg-ocean-800 rounded-xl border border-ocean-700 hover:border-sand-500 transition-colors duration-300">
              <div className="mx-auto w-16 h-16 bg-ocean-900 rounded-full flex items-center justify-center mb-6">
                <Users size={28} className="text-sand-400" />
              </div>
              <h4 className="text-xl font-bold mb-3">Local Expertise</h4>
              <p className="text-ocean-100 text-sm leading-relaxed">
                Deep understanding of the regional tourism market, seasonal
                trends, and guest expectations in tropical destinations.
              </p>
            </div>

            <div className="text-center p-6 bg-ocean-800 rounded-xl border border-ocean-700 hover:border-sand-500 transition-colors duration-300">
              <div className="mx-auto w-16 h-16 bg-ocean-900 rounded-full flex items-center justify-center mb-6">
                <TrendingUp size={28} className="text-sand-400" />
              </div>
              <h4 className="text-xl font-bold mb-3">Dual Revenue Focus</h4>
              <p className="text-ocean-100 text-sm leading-relaxed">
                We optimize your profiles for OTA visibility while
                simultaneously driving high-margin direct bookings through your
                Custom site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section
        id="approach"
        className="py-20 bg-ocean-900 text-white scroll-mt-28 md:scroll-mt-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Paradise Crew?
            </h2>
            <p className="text-ocean-200">
              We don't just write code. We operate properties.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-ocean-800 rounded-xl border border-ocean-700 hover:border-sand-500 transition-colors duration-300">
              <div className="mx-auto w-16 h-16 bg-ocean-900 rounded-full flex items-center justify-center mb-6">
                <Play size={28} className="text-sand-400" />
              </div>
              <h4 className="text-xl font-bold mb-3">The Live Feedback Loop</h4>
              <p className="text-ocean-100 text-sm leading-relaxed">
                We test every software feature in our own managed properties
                first. If it doesn't increase revenue or save time for us, we
                don't ship it to you.
              </p>
            </div>

            <div className="text-center p-6 bg-ocean-800 rounded-xl border border-ocean-700 hover:border-sand-500 transition-colors duration-300">
              <div className="mx-auto w-16 h-16 bg-ocean-900 rounded-full flex items-center justify-center mb-6">
                <Users size={28} className="text-sand-400" />
              </div>
              <h4 className="text-xl font-bold mb-3">Local Expertise</h4>
              <p className="text-ocean-100 text-sm leading-relaxed">
                Deep understanding of the regional tourism market, seasonal
                trends, and guest expectations in tropical destinations.
              </p>
            </div>

            <div className="text-center p-6 bg-ocean-800 rounded-xl border border-ocean-700 hover:border-sand-500 transition-colors duration-300">
              <div className="mx-auto w-16 h-16 bg-ocean-900 rounded-full flex items-center justify-center mb-6">
                <TrendingUp size={28} className="text-sand-400" />
              </div>
              <h4 className="text-xl font-bold mb-3">Dual Revenue Focus</h4>
              <p className="text-ocean-100 text-sm leading-relaxed">
                We optimize your profiles for OTA visibility while
                simultaneously driving high-margin direct bookings through your
                custom site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section
        id="reviews"
        className="py-20 bg-slate-50 scroll-mt-28 md:scroll-mt-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              What Our Partners Say
            </h2>
            <p className="text-slate-600">
              Hear from property owners who have transformed their businesses
              with our dual-expertise approach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative hover:-translate-y-1 transition-transform duration-300">
              <Quote
                size={40}
                className="absolute top-6 right-6 text-ocean-100 opacity-50"
              />
              <div className="flex gap-1 mb-6 text-yellow-400">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>
              <p className="text-slate-700 mb-8 italic relative z-10 text-sm leading-relaxed">
                "Since partnering with Paradise Crew, our direct bookings have
                skyrocketed. We reduced our reliance on OTA platforms and
                increased our profit margins by over 30% within the first six
                months."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center font-bold text-ocean-800">
                  SJ
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Sarah Jenkins
                  </h4>
                  <p className="text-xs text-slate-500">
                    Owner, Azure Villa Retreat
                  </p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative hover:-translate-y-1 transition-transform duration-300">
              <Quote
                size={40}
                className="absolute top-6 right-6 text-ocean-100 opacity-50"
              />
              <div className="flex gap-1 mb-6 text-yellow-400">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>
              <p className="text-slate-700 mb-8 italic relative z-10 text-sm leading-relaxed">
                "The custom booking engine they built for our boutique hotel is
                flawless. It perfectly captures our brand's vibe while making
                the reservation process incredibly smooth for our guests."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-sand-200 rounded-full flex items-center justify-center font-bold text-sand-800">
                  MR
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Marcus Rodriguez
                  </h4>
                  <p className="text-xs text-slate-500">
                    Director, The Palms Resort
                  </p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative hover:-translate-y-1 transition-transform duration-300">
              <Quote
                size={40}
                className="absolute top-6 right-6 text-ocean-100 opacity-50"
              />
              <div className="flex gap-1 mb-6 text-yellow-400">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>
              <p className="text-slate-700 mb-8 italic relative z-10 text-sm leading-relaxed">
                "What sets Paradise Crew apart is their ground-level hospitality
                experience. They don't just write code; they understand the
                nuances of managing a property. An invaluable partnership."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-700">
                  EL
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Elena Lin
                  </h4>
                  <p className="text-xs text-slate-500">
                    Manager, Sunset Horizon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-white scroll-mt-28 md:scroll-mt-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Let's Build Your Digital Property
              </h2>
              <p className="text-slate-600 mb-8 w-4/5">
                Whether you need a new booking engine or full property
                management, we're ready to elevate your hospitality business.
              </p>

              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-full mr-4 group-hover:bg-ocean-50 transition-colors">
                    <Key
                      size={20}
                      className="text-ocean-700 group-hover:text-ocean-900 transition-colors"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">
                      Email Us
                    </p>
                    <p className="text-lg font-bold text-slate-900">
                      hello@paradisecrew.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-full mr-4 group-hover:bg-green-50 transition-colors">
                    <MessageSquare
                      size={20}
                      className="text-green-600 group-hover:text-green-800 transition-colors"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">
                      Chat on WhatsApp
                    </p>
                    <p className="text-lg font-bold text-slate-900">
                      +94 77 123 4567
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Business Type
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all outline-none bg-white">
                    <option>Select one...</option>
                    <option>Villa Owner</option>
                    <option>Boutique Hotel</option>
                    <option>Software Request</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all outline-none resize-none"
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="w-full py-4 bg-ocean-800 text-white rounded-lg hover:bg-ocean-700 transition-colors font-bold shadow-md hover:shadow-xl"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About */}
            <div className="md:col-span-1 lg:col-span-1">
              <a href="#home">
                <img
                  src="/Logo.png"
                  alt="Paradise Crew Logo"
                  className="h-24 w-auto opacity-80 mb-4"
                />
              </a>
              <p className="text-sm text-slate-400 leading-relaxed">
                Fusing ground-level hospitality management with high-level
                technical architecture to maximize your property's potential.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-4">
                Navigate
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#home"
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#packages"
                    className="hover:text-white transition-colors"
                  >
                    Packages
                  </a>
                </li>
                <li>
                  <a
                    href="#reviews"
                    className="hover:text-white transition-colors"
                  >
                    Reviews
                  </a>
                </li>
                <li>
                  <a
                    href="#approach"
                    className="hover:text-white transition-colors"
                  >
                    Our Approach
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-4">
                Connect
              </h4>
              <ul className="space-y-3 text-slate-400">
                <li className="hover:text-white transition-colors">
                  <a href="mailto:hello@paradisecrew.com">
                    hello@paradisecrew.com
                  </a>
                </li>
                <li className="hover:text-white transition-colors">
                  <a
                    href="https://wa.me/94771234567"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +94 77 123 4567
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact Form
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Share2 size={24} />
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Camera size={24} />
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-900 border-t border-slate-800 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
            <p>
              © {new Date().getFullYear()} Paradise Crew Tech & Hospitality. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
