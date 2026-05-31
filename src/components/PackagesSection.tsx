import { CheckCircle2 } from "lucide-react";

interface Package {
  name: string;
  price: string;
  currency?: string;
  description: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

const packages: Package[] = [
  {
    name: "Kickstart Launch Package",
    price: "25,000",
    currency: "LKR",
    description:
      "Perfect for new villas, boutique hotels, or properties needing a digital revamp.",
    features: [
      "Full OTA Setup & Optimization (Airbnb, Booking.com, TripAdvisor)",
      "Custom-Built Responsive Website",
      "Basic SEO & Speed Optimization",
    ],
    cta: "Get Started",
    highlight: true,
  },
  {
    name: "Scale & Automate",
    price: "75,000",
    currency: "LKR",
    description:
      "For established properties looking to optimize operations and maximize direct revenue.",
    features: [
      "Everything in Kickstart, plus:",
      "Direct Booking Engine with Payment Gateway",
      "Advanced PMS & Channel Manager Setup",
    ],
    cta: "Choose Scale",
  },
  {
    name: "Full Management",
    price: "Custom",
    description:
      "A complete hands-off partnership. We run your property, you collect the profits.",
    features: [
      "Full Property & Revenue Management",
      "All Technology Solutions Included",
      "Staffing, Training & Guest Relations",
    ],
    cta: "Contact for Quote",
  },
];

const PackagesSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
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
            Transparent, high-value bundles to launch or scale your hospitality
            business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`bg-white rounded-2xl p-8 flex flex-col ${
                pkg.highlight
                  ? "border-2 border-ocean-600 shadow-xl relative transform md:-translate-y-4"
                  : "border border-slate-200"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-ocean-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-extrabold text-slate-900">{pkg.price}</span>
                {pkg.currency && (
                  <span className="text-lg text-slate-500 ml-2 font-medium">{pkg.currency}</span>
                )}
              </div>
              <p className="text-sm text-slate-500 mb-8 pb-8 border-b border-slate-100 grow">
                {pkg.description}
              </p>
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckCircle2 size={18} className="text-ocean-600 mr-3 mt-1 shrink-0" />
                    <span
                      className="text-slate-700 text-sm font-medium"
                      dangerouslySetInnerHTML={{
                        __html: feature.replace("Everything in Kickstart", "<strong>Everything in Kickstart</strong>"),
                      }}
                    />
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={scrollToContact}
                className={`w-full py-4 mt-auto rounded-lg font-bold transition-colors ${
                  pkg.highlight
                    ? "bg-ocean-800 text-white hover:bg-ocean-700 shadow-md hover:shadow-xl"
                    : "bg-slate-800 text-white hover:bg-slate-700"
                }`}
              >
                {pkg.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
