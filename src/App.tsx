import { useState, useEffect } from 'react';
import { Menu, X, TerminalSquare, Building2, ChevronRight, CheckCircle2, Play, Users, TrendingUp, Key } from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-ocean-600 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur shadow-sm py-4' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-slate-800">Paradise Crew</span>
              <span className="text-xs tracking-widest font-medium uppercase text-slate-500">Tech & Hospitality</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-ocean-600 transition-colors">Home</a>
              <a href="#services" className="hover:text-ocean-600 transition-colors">Services</a>
              <a href="#packages" className="hover:text-ocean-600 transition-colors">Packages</a>
              <a href="#approach" className="hover:text-ocean-600 transition-colors">Our Approach</a>
              <a href="#contact" className="px-5 py-2 bg-ocean-800 text-white rounded-md hover:bg-ocean-700 transition-all shadow-sm hover:shadow">Contact</a>
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
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-slate-800 hover:bg-slate-50 hover:text-ocean-600 rounded-md font-medium">Home</a>
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-slate-800 hover:bg-slate-50 hover:text-ocean-600 rounded-md font-medium">Services</a>
              <a href="#packages" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-slate-800 hover:bg-slate-50 hover:text-ocean-600 rounded-md font-medium">Packages</a>
              <a href="#approach" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-slate-800 hover:bg-slate-50 hover:text-ocean-600 rounded-md font-medium">Our Approach</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 mt-2 bg-ocean-800 text-white text-center rounded-md font-medium">Contact Us</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
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
                Where Tropical Hospitality Meets <br/><span className="text-ocean-700">Digital Innovation</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We provide custom software solutions and premier property management for the tourism sector. Maximize your revenue and streamline your operations with our dual-expertise approach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#services" className="px-8 py-4 bg-ocean-800 text-white rounded-md hover:bg-ocean-700 hover:shadow-lg transition-all flex items-center justify-center font-medium">
                  Explore Our Solutions
                  <ChevronRight size={18} className="ml-2" />
                </a>
                <a href="#contact" className="px-8 py-4 bg-white text-ocean-800 border-2 border-ocean-100 rounded-md hover:border-ocean-300 hover:bg-ocean-50 transition-all flex items-center justify-center font-medium">
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
                    <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">LIVE</div>
                  </div>
                  <div>
                    <div className="h-2 w-3/4 bg-slate-200 rounded mb-3"></div>
                    <div className="h-2 w-1/2 bg-slate-200 rounded mb-3"></div>
                    <div className="h-2 w-5/6 bg-slate-200 rounded"></div>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                    <span className="text-sm font-semibold text-slate-800">Booking Engine Active</span>
                    <span className="text-ocean-600 font-bold">+124%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Dual Expertise</h2>
            <p className="text-slate-600">The perfect synergy of ground-level hospitality management and high-level technical architecture.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Wing 1: Hospitality */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="h-16 w-16 bg-sand-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Building2 size={32} className="text-sand-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Hospitality & Property Management</h3>
              <p className="text-slate-600 mb-8">End-to-end management making your property a hands-off, high-yield asset.</p>
              
              <ul className="space-y-4">
                {[
                  "Full Villa & Hotel Operations",
                  "Premium Guest Relations",
                  "Dynamic Revenue Management",
                  "Staffing & Maintenance Oversight"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 size={20} className="text-ocean-600 mr-3 mt-1 flex-shrink-0" />
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
              <h3 className="text-2xl font-bold text-white mb-4 z-10 relative">Technology & Software Solutions</h3>
              <p className="text-ocean-100 mb-8 z-10 relative">Bespoke digital tools to eliminate OTA fees and capture direct bookings.</p>
              
              <ul className="space-y-4 z-10 relative">
                {[
                  "Custom Direct Booking Engines",
                  "PMS Integrations",
                  "High-Converting Hotel Websites",
                  "Automated Data Analytics Tools"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 size={20} className="text-sand-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-ocean-50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Service Packages</h2>
            <p className="text-slate-600">Transparent, high-value bundles to launch or scale your hospitality business.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            
            {/* Package 1 */}
            <div className="bg-white rounded-2xl p-8 border-2 border-ocean-600 shadow-xl relative transform md:-translate-y-4 flex flex-col">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-ocean-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Kickstart Launch Package</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-extrabold text-slate-900">25,000</span>
                <span className="text-lg text-slate-500 ml-2 font-medium">LKR</span>
              </div>
              <p className="text-sm text-slate-500 mb-8 pb-8 border-b border-slate-100 flex-grow">Perfect for new villas, boutique hotels, or properties needing a digital revamp.</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 size={18} className="text-ocean-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-700 text-sm font-medium">Full OTA Setup & Optimization (Airbnb, Booking.com, TripAdvisor)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={18} className="text-ocean-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-700 text-sm font-medium">Custom-Built Responsive Website</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={18} className="text-ocean-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-700 text-sm font-medium">Basic SEO & Speed Optimization</span>
                </li>
              </ul>
              
              <button className="w-full py-4 mt-auto rounded-lg bg-ocean-800 text-white font-bold hover:bg-ocean-700 transition-colors shadow-md hover:shadow-xl">
                Get Started
              </button>
            </div>

            {/* Placeholder Package 2 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 relative flex flex-col items-center justify-center text-center py-24 text-slate-400">
              <h3 className="text-xl font-bold text-slate-300 mb-2">Scale & Automate</h3>
              <span className="text-sm border border-slate-200 rounded-full px-3 py-1 mb-4">Coming Soon</span>
              <p className="text-xs">Advanced PMS & Channel Manager Setup</p>
            </div>

             {/* Placeholder Package 3 */}
             <div className="bg-white rounded-2xl p-8 border border-slate-200 relative hidden md:flex flex-col items-center justify-center text-center py-24 text-slate-400">
               <h3 className="text-xl font-bold text-slate-300 mb-2">Enterprise</h3>
              <span className="text-sm border border-slate-200 rounded-full px-3 py-1 mb-4">Custom</span>
              <p className="text-xs">Full Revenue & Property Management</p>
            </div>

          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="approach" className="py-20 bg-ocean-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Paradise Crew?</h2>
            <p className="text-ocean-200">We don't just write code. We operate properties.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-ocean-800 rounded-xl border border-ocean-700 hover:border-sand-500 transition-colors duration-300">
              <div className="mx-auto w-16 h-16 bg-ocean-900 rounded-full flex items-center justify-center mb-6">
                <Play size={28} className="text-sand-400" />
              </div>
              <h4 className="text-xl font-bold mb-3">The Live Feedback Loop</h4>
              <p className="text-ocean-100 text-sm leading-relaxed">
                We test every software feature in our own managed properties first. If it doesn't increase revenue or save time for us, we don't ship it to you.
              </p>
            </div>
            
             <div className="text-center p-6 bg-ocean-800 rounded-xl border border-ocean-700 hover:border-sand-500 transition-colors duration-300">
              <div className="mx-auto w-16 h-16 bg-ocean-900 rounded-full flex items-center justify-center mb-6">
                <Users size={28} className="text-sand-400" />
              </div>
              <h4 className="text-xl font-bold mb-3">Local Expertise</h4>
              <p className="text-ocean-100 text-sm leading-relaxed">
                Deep understanding of the regional tourism market, seasonal trends, and guest expectations in tropical destinations.
              </p>
            </div>

             <div className="text-center p-6 bg-ocean-800 rounded-xl border border-ocean-700 hover:border-sand-500 transition-colors duration-300">
              <div className="mx-auto w-16 h-16 bg-ocean-900 rounded-full flex items-center justify-center mb-6">
                <TrendingUp size={28} className="text-sand-400" />
              </div>
              <h4 className="text-xl font-bold mb-3">Dual Revenue Focus</h4>
              <p className="text-ocean-100 text-sm leading-relaxed">
                We optimize your profiles for OTA visibility while simultaneously driving high-margin direct bookings through your custom site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Let's Build Your Digital Property</h2>
              <p className="text-slate-600 mb-8 w-4/5">
                Whether you need a new booking engine or full property management, we're ready to elevate your hospitality business.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-full mr-4 group-hover:bg-ocean-50 transition-colors">
                    <Key size={20} className="text-ocean-700 group-hover:text-ocean-900 transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Email Us</p>
                    <p className="text-lg font-bold text-slate-900">hello@paradisecrew.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all outline-none" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all outline-none" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Business Type</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all outline-none bg-white">
                    <option>Select one...</option>
                    <option>Villa Owner</option>
                    <option>Boutique Hotel</option>
                    <option>Software Request</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all outline-none resize-none" placeholder="How can we help?"></textarea>
                </div>
                <button type="button" className="w-full py-4 bg-ocean-800 text-white rounded-lg hover:bg-ocean-700 transition-colors font-bold shadow-md hover:shadow-xl">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
          <div className="flex flex-col items-center justify-center mb-6">
             <span className="text-xl font-bold text-white tracking-tight mb-1">Paradise Crew</span>
             <span className="text-[10px] tracking-widest uppercase">Tech & Hospitality</span>
          </div>
          <p className="text-sm border-t border-slate-800 pt-6">
            © {new Date().getFullYear()} Paradise Crew Tech & Hospitality. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;