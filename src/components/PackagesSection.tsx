import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

const cardDelays = ["delay-[100ms]", "delay-[250ms]", "delay-[400ms]"];

const PackagesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header slides up on scroll */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Service Packages
          </h2>
          <p className="text-slate-600">
            Transparent, high-value bundles to launch or scale your hospitality
            business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, index) => (
            /* Outer wrapper: scroll entrance animation + highlight offset via margin */
            <div
              key={pkg.name}
              className={`transition-all duration-700 ease-out ${cardDelays[index]} ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              } ${pkg.highlight ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {/* Inner card: hover effects */}
              <div
                className={`bg-white rounded-2xl p-8 flex flex-col h-full group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                  pkg.highlight
                    ? "border-2 border-ocean-600 shadow-xl relative"
                    : "border border-slate-200"
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-ocean-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <h3 className="text-xl font-bold text-slate-900 mb-2 transition-colors duration-300 group-hover:text-ocean-700">
                  {pkg.name}
                </h3>

                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-extrabold text-slate-900 inline-block transition-transform duration-300 group-hover:scale-105 origin-left">
                    {pkg.price}
                  </span>
                  {pkg.currency && (
                    <span className="text-lg text-slate-500 ml-2 font-medium">
                      {pkg.currency}
                    </span>
                  )}
                </div>

                <p className="text-sm text-slate-500 mb-8 pb-8 border-b border-slate-100 grow">
                  {pkg.description}
                </p>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start group/item">
                      <CheckCircle2
                        size={18}
                        className="text-ocean-600 mr-3 mt-1 shrink-0 transition-transform duration-200 group-hover/item:scale-110"
                      />
                      <span
                        className="text-slate-700 text-sm font-medium"
                        dangerouslySetInnerHTML={{
                          __html: feature.replace(
                            "Everything in Kickstart",
                            "<strong>Everything in Kickstart</strong>",
                          ),
                        }}
                      />
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={scrollToContact}
                  className={`w-full py-4 mt-auto rounded-lg font-bold transition-all duration-200 hover:scale-[1.02] active:scale-95 ${
                    pkg.highlight
                      ? "bg-ocean-800 text-white hover:bg-ocean-700 shadow-md hover:shadow-xl"
                      : "bg-slate-800 text-white hover:bg-slate-700"
                  }`}
                >
                  {pkg.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
