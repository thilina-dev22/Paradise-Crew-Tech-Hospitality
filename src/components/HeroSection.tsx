import { TerminalSquare, Building2, ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
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
              We provide custom software solutions and premier property management
              for the tourism sector. Maximize your revenue and streamline your
              operations with our dual-expertise approach.
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

          <div className="hidden lg:flex justify-center relative">
            <div className="relative w-[500px] h-[500px]">
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
  );
};

export default HeroSection;
