import React, { useState } from "react";
import { Sparkles, Check } from "lucide-react";

interface AppItem {
  id: string;
  category: string;
  name: string;
  clientType: string;
  image: string;
  headline: string;
  features: string[];
  specs: { label: string; value: string }[];
}

const appItems: AppItem[] = [
  {
    id: "restaurant",
    category: "Restaurants & Cafes",
    name: "The Coastline Beach Club & Bistro App",
    clientType: "Restaurant, Cafe & Beach Lounge",
    image: "/images/restaurant_cafe_app.png",
    headline: "QR Digital Menu & Table Ordering System",
    features: [
      "Contactless QR table-side menu ordering & bill splitting",
      "Automated kitchen display notification & WhatsApp order bot",
      "Stripe, PayHere & PayPal multi-currency instant payment",
      "Customer digital loyalty stamp card & daily Happy Hour push alerts",
    ],
    specs: [
      { label: "Table Turnover", value: "+30% Faster" },
      { label: "Order Size", value: "+35% Higher" },
      { label: "Platform", value: "Web & Mobile PWA" },
    ],
  },
  {
    id: "hotel",
    category: "Hospitality & Villas",
    name: "Aura Beach Resort Direct Engine",
    clientType: "Luxury Villa & Boutique Hotel",
    image: "/images/hotel_booking_app.png",
    headline: "0% Commission Direct Booking Web & Guest Portal",
    features: [
      "Multi-currency Stripe & PayHere payment gateway checkout",
      "Automated Cloudbeds & Smoobu channel availability sync",
      "Instant WhatsApp confirmation & guest QR pass",
      "Interactive room 3D gallery & availability calendar",
    ],
    specs: [
      { label: "Commission Fee", value: "0% Saved" },
      { label: "Booking Speed", value: "< 45 Seconds" },
      { label: "Platform", value: "Web & Mobile PWA" },
    ],
  },
  {
    id: "scooter",
    category: "Fleet & Rentals",
    name: "Mirissa Ride Scooter & Car App",
    clientType: "Scooter & Vehicle Rental Business",
    image: "/images/scooter_rental_app.png",
    headline: "Tourist Scooter Rental Booking & GPS Map App",
    features: [
      "GPS Pickup location map & instant vehicle model select",
      "Digital rental agreement with photo ID verification",
      "Security deposit authorization & automated return refund",
      "24/7 Roadside assistance & helmet add-on selector",
    ],
    specs: [
      { label: "Fleet Occupancy", value: "96% Average" },
      { label: "Deposit Speed", value: "Instant Refund" },
      { label: "Platform", value: "iOS & Android" },
    ],
  },
  {
    id: "surf",
    category: "Sports & Activities",
    name: "Wave Riders Surf School App",
    clientType: "Surf School & Equipment Rental",
    image: "/images/surf_school_app.png",
    headline: "Surf Class Scheduling & Instructor Booking App",
    features: [
      "Daily surf lesson schedule & tide condition widget",
      "Instructor assignment & capacity management",
      "Digital liability waiver signature form",
      "Surfboard size & gear rental package checkout",
    ],
    specs: [
      { label: "Lesson Bookings", value: "+180% Growth" },
      { label: "Waiver Process", value: "100% Digital" },
      { label: "Platform", value: "Web & iOS App" },
    ],
  },
  {
    id: "tour",
    category: "Excursions & Travel",
    name: "Paradise Safari Tour Operator",
    clientType: "Tour Agency & Private Excursions",
    image: "/images/tour_agency_app.png",
    headline: "Excursion Booking Engine & Apple Wallet QR Ticket",
    features: [
      "Interactive day trip & safari itinerary builder",
      "Digital QR ticket pass downloadable to smartphone",
      "Tour guide live GPS meeting location tracking",
      "Automated post-trip TripAdvisor review prompt",
    ],
    specs: [
      { label: "Seat Capacity", value: "Maximized" },
      { label: "Review Rate", value: "4.9 ★ Rating" },
      { label: "Platform", value: "Cross-Platform" },
    ],
  },
];

const AppShowcaseSection: React.FC = () => {
  const [selectedApp, setSelectedApp] = useState<string>("restaurant");

  const currentApp = appItems.find((a) => a.id === selectedApp) || appItems[0];

  return (
    <section id="showcase" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ocean-500/10 border border-ocean-500/30 text-ocean-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Live App Suite Showcase
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            See Our Software in{" "}
            <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Explore real-world software applications designed and engineered for restaurants, cafes, hotels, rentals, and tour brands.
          </p>
        </div>

        {/* App Selector Tabs — swipeable horizontal scroll container */}
        <div className="relative mb-10">
          <div className="flex items-center gap-2.5 overflow-x-auto pb-3 pt-1 px-1 no-scrollbar snap-x snap-mandatory scroll-smooth">
            {appItems.map((app) => {
              const isActive = app.id === selectedApp;
              return (
                <button
                  key={app.id}
                  onClick={() => setSelectedApp(app.id)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 whitespace-nowrap shrink-0 snap-start ${
                    isActive
                      ? "bg-slate-950 text-amber-400 border border-amber-500/40 shadow-xl shadow-amber-500/10 scale-105"
                      : "bg-slate-950/40 text-slate-400 border border-slate-800 hover:text-white"
                  }`}
                >
                  {app.category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Showcase Stage */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center bg-slate-950/80 border border-slate-800 rounded-3xl p-5 sm:p-6 md:p-10 shadow-2xl">
          {/* Screenshot Display */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
              <img
                src={currentApp.image}
                alt={currentApp.name}
                className="w-full h-52 sm:h-64 md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-60" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur border border-slate-800 text-xs font-mono text-ocean-400 font-bold">
                {currentApp.clientType}
              </div>
            </div>
          </div>

          {/* Details & Specifications */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs text-amber-400 font-mono font-bold uppercase tracking-wider">
                {currentApp.category}
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-1">
                {currentApp.name}
              </h3>
              <p className="text-slate-300 text-sm md:text-base mt-2 font-medium">
                {currentApp.headline}
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Technical Capabilities</div>
              <ul className="space-y-2.5">
                {currentApp.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-200">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Spec Cards */}
            <div className="grid grid-cols-3 gap-3 border-t border-slate-800 pt-6">
              {currentApp.specs.map((sp) => (
                <div key={sp.label} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                  <div className="text-[10px] text-slate-400 font-medium uppercase">{sp.label}</div>
                  <div className="text-xs md:text-sm font-bold text-amber-400 mt-0.5">{sp.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcaseSection;
