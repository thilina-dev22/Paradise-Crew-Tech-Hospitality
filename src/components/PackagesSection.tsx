import { CheckCircle2, Sparkles, MessageSquare } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Package {
  name: string;
  priceUSD: string;
  priceLKR: string;
  badge?: string;
  description: string;
  targetAudience: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

const packages: Package[] = [
  {
    name: "Starter Digital & Booking",
    priceUSD: "$250",
    priceLKR: "75,000 LKR",
    badge: "Ideal for New Businesses",
    description:
      "Essential high-converting digital presence with QR menus, WhatsApp ordering, and Google Business setup.",
    targetAudience: "Cafes, Beach Bars, Surf Instructors, Scooter Rental Outlets, Tour Guides",
    features: [
      "Custom responsive mobile-optimized website",
      "QR Code digital menu or service catalog",
      "Direct WhatsApp instant reservation/order button",
      "Interactive photo gallery & pricing menu",
      "Google Business Profile & Maps location setup",
      "Basic SEO & blazing fast mobile speed",
      "1 Year free cloud hosting & SSL certificate",
    ],
    cta: "Launch Starter Web",
  },
  {
    name: "Pro Web & Booking Engine",
    priceUSD: "$450",
    priceLKR: "135,000 LKR",
    badge: "Most Popular Choice",
    description:
      "Full web ordering/booking portal with payment gateway, real-time calendar, and automated client notifications.",
    targetAudience: "Restaurants, Hotels, Villas, Fleet Rental Shops, Tour Agencies",
    features: [
      "Everything in Starter, plus:",
      "Direct Payment Gateway (Stripe, PayHere, PayPal)",
      "QR Table-Side ordering or room booking engine",
      "Real-time availability calendar & table reservation",
      "Automated confirmation emails & WhatsApp kitchen bots",
      "PMS & POS system integration capabilities",
      "Multi-currency & multi-language switcher",
    ],
    cta: "Build Pro Platform",
    highlight: true,
  },
  {
    name: "Enterprise Web & Mobile Suite",
    priceUSD: "$950+",
    priceLKR: "Custom Quote",
    badge: "Full Custom Software",
    description:
      "Native iOS & Android Mobile Apps + Custom Web SaaS Backend with real-time GPS tracking & multi-branch POS/PMS.",
    targetAudience: "Restaurant Chains, Resorts, Scooter Fleets, Tour Operators",
    features: [
      "Full iOS & Android Mobile Apps (App Store & Google Play)",
      "Custom Web Admin Dashboard & Multi-Branch POS/KDS",
      "Customer digital loyalty stamp card & push alerts",
      "Real-time GPS vehicle location & pickup tracker",
      "Keyless digital guest access & QR scanner mobile app",
      "Custom REST/GraphQL API & database architecture",
      "Dedicated 24/7 technical support & SLA guarantee",
    ],
    cta: "Request Custom Quote",
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
      { threshold: 0.1 }
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
      className="py-24 bg-slate-950 text-white scroll-mt-28 md:scroll-mt-32 relative"
    >
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 space-y-4 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ocean-500/10 border border-ocean-500/30 text-ocean-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Transparent Investment Pricing
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Clear Packages for Every{" "}
            <span className="bg-gradient-to-r from-amber-300 via-sky-300 to-ocean-400 bg-clip-text text-transparent">
              Stage of Growth
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Fixed transparent pricing with zero hidden fees. Pick a package or request a custom build estimate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`transition-all duration-700 ease-out ${cardDelays[index]} ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              } ${pkg.highlight ? "md:-mt-4 md:mb-4" : ""}`}
            >
              <div
                className={`bg-slate-900/90 rounded-3xl p-8 flex flex-col h-full group transition-all duration-300 hover:shadow-2xl ${
                  pkg.highlight
                    ? "border-2 border-ocean-500 shadow-xl shadow-ocean-500/10 relative"
                    : "border border-slate-800"
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-ocean-500 to-amber-500 text-slate-950 font-black px-4 py-1 rounded-full text-xs uppercase tracking-wider shadow-lg">
                    {pkg.badge}
                  </div>
                )}

                {!pkg.highlight && pkg.badge && (
                  <div className="text-xs font-mono font-bold text-amber-400 mb-2">
                    {pkg.badge}
                  </div>
                )}

                <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-ocean-400">
                  {pkg.name}
                </h3>

                <div className="mb-4">
                  <div className="text-3xl md:text-4xl font-extrabold text-white">
                    {pkg.priceUSD}
                  </div>
                  <div className="text-sm font-bold text-amber-400 mt-0.5">
                    ≈ {pkg.priceLKR}
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-4 pb-4 border-b border-slate-800 font-light">
                  {pkg.description}
                </p>

                <div className="mb-6 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Best for:</div>
                  <div className="text-xs font-medium text-slate-200 mt-0.5">{pkg.targetAudience}</div>
                </div>

                <ul className="space-y-3 mb-8 grow">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2
                        size={16}
                        className="text-emerald-400 shrink-0 mt-0.5"
                      />
                      <span
                        dangerouslySetInnerHTML={{
                          __html: feature.replace(
                            "Everything in Starter",
                            "<strong class='text-amber-400'>Everything in Starter</strong>"
                          ),
                        }}
                      />
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={scrollToContact}
                  className={`w-full py-4 mt-auto rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                    pkg.highlight
                      ? "bg-gradient-to-r from-ocean-500 to-ocean-600 text-white hover:from-ocean-400 hover:to-ocean-500 shadow-lg shadow-ocean-600/30"
                      : "bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700"
                  }`}
                >
                  <span>{pkg.cta}</span>
                  <MessageSquare className="w-4 h-4" />
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
