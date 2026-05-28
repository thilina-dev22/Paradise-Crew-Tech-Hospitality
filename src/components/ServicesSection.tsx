import { Building2, TerminalSquare, CheckCircle2 } from "lucide-react";

const ServicesSection = () => {
  return (
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
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <CheckCircle2 size={20} className="text-ocean-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

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
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <CheckCircle2 size={20} className="text-sand-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-ocean-50">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
