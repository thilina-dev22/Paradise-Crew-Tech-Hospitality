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
  RotateCcw,
  BadgeCheck,
} from "lucide-react";

interface FeatureOption {
  id: string;
  name: string;
  priceUSD: number;
  description: string;
  industries?: string[]; // If undefined/empty, applies to all industries
  defaultFor?: string[]; // Industries for which this feature is enabled by default
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

const featureAddons: FeatureOption[] = [
  // Restaurant Specific
  {
    id: "qrmenu",
    name: "QR Table-Side Digital Menu & Contactless Ordering",
    priceUSD: 90,
    description: "Interactive digital menu with table QR codes and direct ordering",
    industries: ["restaurant"],
    defaultFor: ["restaurant"],
  },
  {
    id: "table_res",
    name: "Online Table Reservation & Seating Engine",
    priceUSD: 95,
    description: "Real-time table booking with party size management",
    industries: ["restaurant"],
    defaultFor: ["restaurant"],
  },
  {
    id: "kds",
    name: "Kitchen Display System (KDS) & Order Status Tracker",
    priceUSD: 110,
    description: "Live order screen for kitchen staff & guest preparation updates",
    industries: ["restaurant"],
    defaultFor: [],
  },

  // Hotel / Villa Specific
  {
    id: "pms",
    name: "PMS & Channel Manager Integration (Cloudbeds / Smoobu / Beds24)",
    priceUSD: 180,
    description: "Sync calendar & rates across Booking.com, Airbnb, and direct site",
    industries: ["hotel"],
    defaultFor: ["hotel"],
  },
  {
    id: "room_cal",
    name: "Real-Time Room Availability Calendar & Direct Booking Engine",
    priceUSD: 120,
    description: "Commission-free direct booking portal with room rate calculator",
    industries: ["hotel"],
    defaultFor: ["hotel"],
  },
  {
    id: "keyless",
    name: "Digital Check-In & Guest Information Portal",
    priceUSD: 100,
    description: "Pre-arrival guest ID upload, house rules, and digital guidebook",
    industries: ["hotel"],
    defaultFor: [],
  },

  // Scooter / Vehicle Rental Specific
  {
    id: "rental_engine",
    name: "Vehicle Fleet Availability & Date Picker Engine",
    priceUSD: 110,
    description: "Daily/weekly rate calculator with instant bike/car availability",
    industries: ["scooter"],
    defaultFor: ["scooter"],
  },

  // Driver & Scooter Shared (GPS)
  {
    id: "gps",
    name: "GPS Live Vehicle Location & Fleet Tracker",
    priceUSD: 150,
    description: "Real-time location tracking for pickup and vehicle security",
    industries: ["scooter", "driver"],
    defaultFor: ["scooter", "driver"],
  },

  // Surf School & Activity Specific
  {
    id: "activity_cal",
    name: "Lesson Time-Slot & Instructor Scheduling Engine",
    priceUSD: 110,
    description: "Tide-aligned session booking & instructor allocation calendar",
    industries: ["surf"],
    defaultFor: ["surf"],
  },
  {
    id: "group_booking",
    name: "Group & Package Customizer with Invoice Generator",
    priceUSD: 95,
    description: "Multi-day package builder with custom invoice generation",
    industries: ["surf"],
    defaultFor: [],
  },

  // Tour Operator Specific
  {
    id: "tour_itinerary",
    name: "Interactive Tour Itinerary Builder & Departure Booking",
    priceUSD: 110,
    description: "Day-by-day tour breakdown with departure date selector",
    industries: ["tour"],
    defaultFor: ["tour"],
  },

  // Private Driver Specific
  {
    id: "driver_fare",
    name: "Distance & Route Fare Estimator (Google Maps API)",
    priceUSD: 120,
    description: "Instant price calculation based on pickup/drop-off distance",
    industries: ["driver"],
    defaultFor: ["driver"],
  },

  // Retail / Shop Specific
  {
    id: "catalog_cart",
    name: "E-Commerce Product Catalog & Shopping Cart",
    priceUSD: 110,
    description: "Product listings with variant pickers and cart checkout",
    industries: ["shop"],
    defaultFor: ["shop"],
  },
  {
    id: "inventory_sync",
    name: "Stock Inventory & Multi-Branch POS Sync",
    priceUSD: 130,
    description: "Real-time stock level updates across physical shop and website",
    industries: ["shop"],
    defaultFor: [],
  },

  // Universal / Common Add-ons (Applicable to ALL business types)
  {
    id: "payment",
    name: "Multi-Currency Payment Gateway (Stripe / PayHere / PayPal)",
    priceUSD: 120,
    description: "Accept card payments globally in USD, EUR, LKR & more",
    defaultFor: ["restaurant", "hotel", "scooter", "surf", "tour", "driver", "shop"],
  },
  {
    id: "whatsapp",
    name: "Instant WhatsApp Booking & Notification Bot",
    priceUSD: 90,
    description: "Automated instant order and booking alerts straight to WhatsApp",
    defaultFor: ["restaurant", "hotel", "scooter", "surf", "tour", "driver", "shop"],
  },
  {
    id: "multilang",
    name: "Multi-Language Content Switcher (EN, DE, RU, FR)",
    priceUSD: 80,
    description: "Reach international tourists with effortless language switching",
    defaultFor: ["hotel", "tour"],
  },
  {
    id: "loyalty",
    name: "Digital Customer Loyalty Stamp & Coupon Module",
    priceUSD: 85,
    description: "Repeat customer rewards, promo codes, and referral tracking",
    defaultFor: [],
  },
  {
    id: "seo",
    name: "Advanced Local SEO & Google Maps Rank Optimizer",
    priceUSD: 75,
    description: "Higher visibility on Google search and local Google Maps pack",
    defaultFor: [],
  },
];

const USD_TO_LKR = 300;

// Helper to get default features for a given business industry
const getDefaultFeaturesForBusiness = (bizId: string): string[] => {
  return featureAddons
    .filter((addon) => {
      // Must be applicable to this industry
      const isApplicable = !addon.industries || addon.industries.includes(bizId);
      // And flagged as default for this industry
      const isDefault = addon.defaultFor?.includes(bizId);
      return isApplicable && isDefault;
    })
    .map((addon) => addon.id);
};

const EstimatorSection: React.FC = () => {
  const [selectedBusiness, setSelectedBusiness] = useState<string>("restaurant");
  const [selectedPlatform, setSelectedPlatform] = useState<string>("both");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(() =>
    getDefaultFeaturesForBusiness("restaurant")
  );

  // Handle business selection change: update business and reset features to industry defaults
  const handleSelectBusiness = (bizId: string) => {
    setSelectedBusiness(bizId);
    const defaultFeatures = getDefaultFeaturesForBusiness(bizId);
    setSelectedFeatures(defaultFeatures);
  };

  // Reset current business features to default
  const handleResetDefaults = () => {
    const defaultFeatures = getDefaultFeaturesForBusiness(selectedBusiness);
    setSelectedFeatures(defaultFeatures);
  };

  // Available features for the selected business industry
  const availableFeatures = featureAddons.filter(
    (addon) => !addon.industries || addon.industries.includes(selectedBusiness)
  );

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
    const item = availableFeatures.find((a) => a.id === fId);
    return acc + (item ? item.priceUSD : 0);
  }, 0);

  const subtotal = basePrice + addonsTotal;
  const calculatedUSD = Math.round(subtotal * platObj.mult);
  const calculatedLKR = calculatedUSD * USD_TO_LKR;

  const getWhatsAppMessage = () => {
    const featureNames = selectedFeatures
      .map((id) => featureAddons.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join("\n  • ");

    const text = `Hi Paradise Crew Team! I used your web estimator on paradisecrew.site:
📌 Business: ${bizObj.name}
📱 Platform: ${platObj.name}
✨ Selected Features:\n  • ${featureNames || "Basic Package"}

💡 Estimated Budget: ~$${calculatedUSD} USD (LKR ${calculatedLKR.toLocaleString()})
I'd like to discuss this quote and get started!`;
    return `https://wa.me/94721410369?text=${encodeURIComponent(text)}`;
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
            Configure your business type, target platforms, and feature modules to receive an instant price range breakdown tailored to your business.
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
                      type="button"
                      key={biz.id}
                      onClick={() => handleSelectBusiness(biz.id)}
                      className={`p-3.5 rounded-xl border text-left flex flex-col items-start gap-2 transition-all ${
                        isSelected
                          ? "bg-ocean-600/20 border-ocean-500 text-white shadow-lg shadow-ocean-900/40 ring-1 ring-ocean-400/50"
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
                      type="button"
                      key={plat.id}
                      onClick={() => setSelectedPlatform(plat.id)}
                      className={`p-4 rounded-xl border text-left flex flex-col gap-2 transition-all ${
                        isSelected
                          ? "bg-ocean-600/20 border-ocean-500 text-white shadow-lg shadow-ocean-900/40 ring-1 ring-ocean-400/50"
                          : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <Icon className={`w-5 h-5 ${isSelected ? "text-amber-400" : "text-slate-400"}`} />
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-amber-300">
                          {plat.mult}x scale
                        </span>
                      </div>
                      <span className="text-xs font-bold">{plat.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Feature Add-ons */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="flex items-center gap-2 text-sm font-bold text-slate-200 uppercase tracking-wider">
                  <span className="w-6 h-6 rounded-full bg-ocean-500 text-white text-xs flex items-center justify-center font-mono">3</span>
                  Select Feature Modules ({availableFeatures.length} Available for {bizObj.name.split("/")[0]})
                </label>
                <button
                  type="button"
                  onClick={handleResetDefaults}
                  className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-amber-400 transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset Defaults</span>
                </button>
              </div>

              <div className="space-y-2.5">
                {availableFeatures.map((addon) => {
                  const isChecked = selectedFeatures.includes(addon.id);
                  const isIndustrySpecific = Boolean(addon.industries?.length);

                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleFeature(addon.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between gap-3 transition-all ${
                        isChecked
                          ? "bg-slate-950/90 border-ocean-500/60 text-white shadow-sm"
                          : "bg-slate-950/40 border-slate-800/80 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {isChecked ? (
                          <CheckSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        ) : (
                          <Square className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                        )}
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs md:text-sm font-medium text-slate-100">{addon.name}</span>
                            {isIndustrySpecific && (
                              <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-ocean-500/20 text-ocean-300 font-medium">
                                <BadgeCheck className="w-3 h-3 text-ocean-400" /> Recommended
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-400 mt-0.5 font-light">{addon.description}</p>
                        </div>
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

              {/* Price Calculation Breakdown */}
              <div className="space-y-2 text-xs border-t border-slate-800/80 pt-4">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Cost Breakdown</div>
                
                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-400">Base Industry Rate ({bizObj.name.split("/")[0]}):</span>
                  <span className="font-mono font-semibold">${basePrice}</span>
                </div>

                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-400">Add-ons ({selectedFeatures.length} selected):</span>
                  <span className="font-mono font-semibold text-emerald-400">+${addonsTotal}</span>
                </div>

                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-400">Platform Multiplier ({platObj.name.split(" ")[0]}):</span>
                  <span className="font-mono font-semibold text-amber-300">{platObj.mult}x</span>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-slate-800/60 font-bold text-slate-100">
                  <span>Subtotal × Scale:</span>
                  <span className="font-mono text-ocean-300">(${basePrice} + ${addonsTotal}) × {platObj.mult}</span>
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
