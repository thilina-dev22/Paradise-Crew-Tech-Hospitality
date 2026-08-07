import React, { useState } from "react";
import {
  Calculator,
  Utensils,
  Hotel,
  Bike,
  Waves,
  Compass,
  Car,
  ShoppingBag,
  Globe,
  Smartphone,
  Layers,
  CheckSquare,
  Square,
  ArrowRight,
  MessageSquare,
  Sparkles,
} from "lucide-react";

interface Option {
  id: string;
  name: string;
  priceUSD: number;
}

const businessTypes = [
  { id: "restaurant", name: "Restaurant / Cafe / Bar", icon: Utensils, baseUSD: 240 },
  { id: "hotel", name: "Hotel / Boutique Villa", icon: Hotel, baseUSD: 350 },
  { id: "scooter", name: "Scooter / Car Rental", icon: Bike, baseUSD: 300 },
  { id: "surf", name: "Surf School & Activities", icon: Waves, baseUSD: 250 },
  { id: "tour", name: "Tour Operator / Guide", icon: Compass, baseUSD: 280 },
  { id: "driver", name: "Private Driver / Taxi", icon: Car, baseUSD: 250 },
  { id: "shop", name: "Shop / Retail Outlet", icon: ShoppingBag, baseUSD: 220 },
];

const platforms = [
  { id: "web", name: "High-Converting Custom Web App", icon: Globe, mult: 1.0 },
  { id: "mobile", name: "iOS & Android Mobile Apps", icon: Smartphone, mult: 1.3 },
  { id: "both", name: "Complete Suite (Web + Mobile Apps)", icon: Layers, mult: 1.7 },
];

const featureAddons: Option[] = [
  { id: "qrmenu", name: "QR Table-Side Digital Menu & Ordering System", priceUSD: 90 },
  { id: "payment", name: "Multi-Currency Payment Gateway (Stripe / PayHere / PayPal)", priceUSD: 120 },
  { id: "whatsapp", name: "Automated Kitchen & WhatsApp Notification Bot", priceUSD: 90 },
  { id: "table_res", name: "Online Table Reservation & Seating Engine", priceUSD: 95 },
  { id: "calendar", name: "Real-Time Room or Activity Availability Calendar", priceUSD: 100 },
  { id: "gps", name: "GPS Live Location & Fleet Pickup Tracker", priceUSD: 150 },
  { id: "pms", name: "PMS & Channel Manager Integration (Cloudbeds/Smoobu)", priceUSD: 180 },
  { id: "loyalty", name: "Customer Digital Loyalty Stamp & Coupon Module", priceUSD: 85 },
];

const USD_TO_LKR = 300;

const EstimatorSection: React.FC = () => {
  const [selectedBusiness, setSelectedBusiness] = useState<string>("restaurant");
  const [selectedPlatform, setSelectedPlatform] = useState<string>("both");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "qrmenu",
    "payment",
    "whatsapp",
  ]);

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  // Calculation Logic
  const bizObj = businessTypes.find((b) => b.id === selectedBusiness) || businessTypes[0];
  const platObj = platforms.find((p) => p.id === selectedPlatform) || platforms[0];

  const basePrice = bizObj.baseUSD;
  const addonsTotal = selectedFeatures.reduce((acc, fId) => {
    const item = featureAddons.find((a) => a.id === fId);
    return acc + (item ? item.priceUSD : 0);
  }, 0);

  const calculatedUSD = Math.round((basePrice + addonsTotal) * platObj.mult);
  const calculatedLKR = calculatedUSD * USD_TO_LKR;

  const getWhatsAppMessage = () => {
    const featureNames = selectedFeatures
      .map((id) => featureAddons.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(", ");

    const text = `Hi Paradise Crew Team! I used your web estimator on paradisecrew.site:
- Business: ${bizObj.name}
- Platform: ${platObj.name}
- Features: ${featureNames || "Basic"}
- Estimated Budget: ~$${calculatedUSD} (LKR ${calculatedLKR.toLocaleString()})
I'd like to get started on a formal quote!`;
    return `https://wa.me/94770000000?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="estimator" className="py-16 sm:py-24 bg-slate-950 text-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            Interactive Cost Calculator
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Calculate Your{" "}
            <span className="bg-gradient-to-r from-amber-300 via-sky-300 to-ocean-400 bg-clip-text text-transparent">
              Project Estimate
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Configure your business type, target platforms, and feature modules to receive an instant price range breakdown.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Step Configurator */}
          <div className="lg:col-span-8 order-last lg:order-first space-y-6 sm:space-y-8 bg-slate-900/80 border border-slate-800 rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl">
            {/* Step 1: Business Category */}
            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-slate-200 uppercase tracking-wider mb-4">
                <span className="w-6 h-6 rounded-full bg-ocean-500 text-white text-xs flex items-center justify-center font-mono">1</span>
                Select Your Business Industry
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {businessTypes.map((biz) => {
                  const Icon = biz.icon;
                  const isSelected = selectedBusiness === biz.id;
                  return (
                    <button
                      key={biz.id}
                      onClick={() => setSelectedBusiness(biz.id)}
                      className={`p-3.5 rounded-xl border text-left flex flex-col items-start gap-2 transition-all ${
                        isSelected
                          ? "bg-ocean-600/20 border-ocean-500 text-white shadow-lg shadow-ocean-900/40"
                          : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isSelected ? "text-amber-400" : "text-slate-400"}`} />
                      <span className="text-xs font-bold">{biz.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Target Platform */}
            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-slate-200 uppercase tracking-wider mb-4">
                <span className="w-6 h-6 rounded-full bg-ocean-500 text-white text-xs flex items-center justify-center font-mono">2</span>
                Choose Target Platforms
              </label>
              <div className="grid sm:grid-cols-3 gap-3">
                {platforms.map((plat) => {
                  const Icon = plat.icon;
                  const isSelected = selectedPlatform === plat.id;
                  return (
                    <button
                      key={plat.id}
                      onClick={() => setSelectedPlatform(plat.id)}
                      className={`p-4 rounded-xl border text-left flex flex-col gap-2 transition-all ${
                        isSelected
                          ? "bg-ocean-600/20 border-ocean-500 text-white shadow-lg shadow-ocean-900/40"
                          : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isSelected ? "text-amber-400" : "text-slate-400"}`} />
                      <span className="text-xs font-bold">{plat.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Feature Add-ons */}
            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-slate-200 uppercase tracking-wider mb-4">
                <span className="w-6 h-6 rounded-full bg-ocean-500 text-white text-xs flex items-center justify-center font-mono">3</span>
                Select Required Modules & Features
              </label>
              <div className="space-y-2.5">
                {featureAddons.map((addon) => {
                  const isChecked = selectedFeatures.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleFeature(addon.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between gap-3 transition-all ${
                        isChecked
                          ? "bg-slate-950/90 border-ocean-500/50 text-white"
                          : "bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {isChecked ? (
                          <CheckSquare className="w-5 h-5 text-emerald-400 shrink-0" />
                        ) : (
                          <Square className="w-5 h-5 text-slate-600 shrink-0" />
                        )}
                        <span className="text-xs md:text-sm font-medium">{addon.name}</span>
                      </div>
                      <span className="text-xs font-mono text-amber-400 font-bold shrink-0">
                        +${addon.priceUSD}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Price Summary Box — appears first on mobile, sticky only on lg+ */}
          <div className="lg:col-span-4 order-first lg:order-last lg:sticky lg:top-28 space-y-6">
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-ocean-500/40 rounded-3xl p-6 md:p-8 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="text-xs font-mono text-ocean-400 font-bold uppercase tracking-wider">Estimated Project Budget</div>
                <Sparkles className="w-4 h-4 text-amber-400 animate-bounce" />
              </div>

              <div className="space-y-1">
                <div className="text-4xl md:text-5xl font-black text-white">
                  ${calculatedUSD.toLocaleString()}
                  <span className="text-sm text-slate-400 font-normal ml-2">USD</span>
                </div>
                <div className="text-lg font-bold text-amber-400">
                  ≈ LKR {calculatedLKR.toLocaleString()}
                </div>
                <p className="text-[11px] text-slate-400 font-light">
                  Includes full source code ownership, testing, deployment & 30 days free support.
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-4">
                <div className="flex justify-between">
                  <span className="text-slate-400">Selected Vertical:</span>
                  <span className="font-semibold text-slate-100">{bizObj.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Target Platform:</span>
                  <span className="font-semibold text-slate-100">{platObj.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Active Add-ons:</span>
                  <span className="font-semibold text-emerald-400">{selectedFeatures.length} Modules</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={getWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-950/50 flex items-center justify-center gap-2 text-sm transition-all transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Quote to WhatsApp</span>
                </a>

                <a
                  href="#contact"
                  className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold rounded-xl flex items-center justify-center gap-2 text-xs transition-all"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstimatorSection;
