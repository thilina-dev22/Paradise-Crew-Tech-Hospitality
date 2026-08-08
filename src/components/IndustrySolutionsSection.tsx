import React, { useState } from "react";
import {
  Utensils,
  Hotel,
  Bike,
  Waves,
  Compass,
  Car,
  ShoppingBag,
  CheckCircle2,
  Smartphone,
  Globe,
  Zap,
  ArrowRight,
} from "lucide-react";

interface VerticalSolution {
  id: string;
  name: string;
  icon: React.ElementType;
  badge: string;
  title: string;
  description: string;
  image: string;
  webFeatures: string[];
  mobileFeatures: string[];
  businessImpact: string;
}

const solutions: VerticalSolution[] = [
  {
    id: "restaurants",
    name: "Restaurants & Cafes",
    icon: Utensils,
    badge: "Restaurants, Cafes, Beach Bars & Outlets",
    title: "QR Code Menu Ordering & Online Table Reservation Systems",
    description:
      "Transform dining experiences for tourists and locals. We build contactless QR code digital menus, table ordering web apps, kitchen notification bots, and automated takeaway ordering systems.",
    image: "/images/restaurant_cafe_app.png",
    webFeatures: [
      "Interactive QR digital menu with multi-language auto-translate",
      "Online table reservation engine with instant confirmation",
      "Stripe, PayHere & PayPal multi-currency digital payment",
      "POS & Kitchen Display System (KDS) WhatsApp integration",
    ],
    mobileFeatures: [
      "Table-side scan-to-order & split bill smartphone checkout",
      "Pre-order takeaway app with real-time pickup timer",
      "Digital loyalty stamp card & VIP discount coupons",
      "Daily Happy Hour & live music event push notifications",
    ],
    businessImpact: "Boost average table order value by 35% and speed up table turnover by 30%.",
  },
  {
    id: "hotels",
    name: "Hotels & Villas",
    icon: Hotel,
    badge: "Boutique Stays & Luxury Resorts",
    title: "Commission-Free Direct Booking Engines & Guest Apps",
    description:
      "Eliminate expensive 15-20% OTA commissions on Booking.com and Airbnb. We build direct web booking portals and guest experience mobile apps with instant multi-currency payment checkout.",
    image: "/images/hotel_booking_app.png",
    webFeatures: [
      "Real-time room availability & interactive calendar",
      "Stripe, PayHere & PayPal multi-currency gateway",
      "PMS & Channel Manager sync (Cloudbeds/Smoobu)",
      "Dynamic seasonal pricing & promo coupon engine",
    ],
    mobileFeatures: [
      "Digital keyless room access & contactless check-in",
      "In-room dining & mini-bar ordering mobile app",
      "Instant WhatsApp concierge & room service requests",
      "Guest arrival flight tracker & transfer manager",
    ],
    businessImpact: "Save $12,000+ per year in OTA fees with direct guest bookings.",
  },
  {
    id: "rentals",
    name: "Scooter & Vehicle Rentals",
    icon: Bike,
    badge: "Scooters, Cars, Bikes & Quad Fleet",
    title: "Instant Scooter & Rental Car Booking Platforms",
    description:
      "Transform your vehicle rental shop into a tech-driven fleet business. Allow tourists to book scooters or cars online with instant deposit verification, digital agreements, and WhatsApp unlock.",
    image: "/images/scooter_rental_app.png",
    webFeatures: [
      "Vehicle model selector with live inventory status",
      "Hourly, daily, & monthly dynamic rate calculator",
      "Digital rental contract PDF with e-signature",
      "Security deposit authorization & automated refunds",
    ],
    mobileFeatures: [
      "Tourist GPS pickup map & delivery drop-off locator",
      "License ID photo upload & instant verification",
      "24/7 Roadside emergency assistance trigger",
      "Helmet & accessory add-on selector",
    ],
    businessImpact: "Achieve 95%+ fleet occupancy with online automated reservations.",
  },
  {
    id: "surf",
    name: "Surf Schools & Sports",
    icon: Waves,
    badge: "Surf Schools, Diving & Yoga Studios",
    title: "Class Scheduling & Instructor Booking Systems",
    description:
      "Streamline lesson signups, equipment rental tracking, and instructor availability. Give students a sleek web & mobile app to book beginner or advanced surf packages.",
    image: "/images/surf_school_app.png",
    webFeatures: [
      "Interactive lesson timetable & skill level selector",
      "Tide, ocean condition & surf forecast widget sync",
      "Instructor assignment & capacity manager",
      "Board size & wet-suit rental size inventory",
    ],
    mobileFeatures: [
      "Student lesson reminder & surf spot notification",
      "Photo/Video package add-on digital gallery",
      "Digital liability waiver signature form",
      "Group package & family discount checkout",
    ],
    businessImpact: "Increase lesson bookings by 180% with instant online schedule confirmation.",
  },
  {
    id: "tours",
    name: "Tour Agencies & Guides",
    icon: Compass,
    badge: "Excursion Operators & Safari Guides",
    title: "Excursion Booking Engine & QR Ticket Apps",
    description:
      "Present safari, cultural, and day trip itineraries with high-converting booking flows, instant seat reservations, and automated QR pass tickets.",
    image: "/images/tour_agency_app.png",
    webFeatures: [
      "Custom multi-day tour itinerary builder",
      "Pick-up location selector & map pin drop",
      "Tiered pricing for adults, children & private groups",
      "TripAdvisor & Google Review auto-prompt integration",
    ],
    mobileFeatures: [
      "Digital QR ticket pass on Apple Wallet & Android",
      "Tour guide live GPS meeting location tracking",
      "Offline itinerary access for tourists",
      "Automated pre-trip packing list & weather alerts",
    ],
    businessImpact: "Double trip bookings while automating customer pickup coordination.",
  },
  {
    id: "drivers",
    name: "Drivers & Transport",
    icon: Car,
    badge: "Private Taxis, Airport Transfers & Tuk-Tuks",
    title: "Airport Transfer & Private Driver Dispatch Apps",
    description:
      "Empower your transport fleet or driver service with a dedicated booking platform. Tourists enter pickup locations and instantly receive fare quotes and WhatsApp confirmations.",
    image: "/images/hero_3d_mockup.png",
    webFeatures: [
      "Distance & location fare calculation engine",
      "Airport transfer arrival flight number tracker",
      "Vehicle tier options (Sedan, Van, Luxury SUV, Tuk-Tuk)",
      "Instant WhatsApp booking link creation",
    ],
    mobileFeatures: [
      "Driver dispatch alert & arrival status update",
      "Driver photo, rating & vehicle details view",
      "One-click emergency SOS & driver call",
      "Cashless digital card payment gateway",
    ],
    businessImpact: "Eliminate commission cuts from middleman ride apps.",
  },
  {
    id: "shops",
    name: "Shops & Local Retail",
    icon: ShoppingBag,
    badge: "Souvenir Shops, Boutiques & Outlets",
    title: "Tourism E-Commerce Stores & Mobile Shopping",
    description:
      "Sell local handcrafted products, souvenir merchandise, or launch digital catalogs for your retail outlet with instant WhatsApp order notification.",
    image: "/images/hotel_booking_app.png",
    webFeatures: [
      "E-Commerce store with multi-currency checkout",
      "Custom gift card & voucher purchasing",
      "Instagram shop feed & social proof integration",
      "International shipping rate calculator",
    ],
    mobileFeatures: [
      "Customer loyalty stamp card on smartphone",
      "Push notifications for new souvenir arrivals",
      "In-store QR scanner for product story & price",
      "Takeaway pickup order timer status",
    ],
    businessImpact: "Expand customer reach globally even after tourists return home.",
  },
];

const IndustrySolutionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("restaurants");

  const currentSolution =
    solutions.find((s) => s.id === activeTab) || solutions[0];

  return (
    <section id="solutions" className="py-16 sm:py-24 bg-slate-900 text-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ocean-500/10 border border-ocean-500/30 text-ocean-400 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            Tailored Industry Solutions
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Built Specifically for Your{" "}
            <span className="bg-gradient-to-r from-ocean-400 to-amber-300 bg-clip-text text-transparent">
              Business Vertical
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Specialized revenue-generating software systems built for restaurants, cafes, hotels, rentals, transport, and tourism enterprises.
          </p>
        </div>

        {/* Vertical Tabs — centered on desktop, swipeable on mobile */}
        <div className="relative mb-10 flex flex-col items-center">
          <div className="flex items-center gap-2.5 overflow-x-auto pb-3 pt-1 px-1 no-scrollbar snap-x snap-mandatory scroll-smooth max-w-full">
            {solutions.map((item) => {
              const Icon = item.icon;
              const isActive = item.id === activeTab;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 shrink-0 snap-start ${
                    isActive
                      ? "bg-gradient-to-r from-ocean-600 to-ocean-500 text-white shadow-lg shadow-ocean-600/30 scale-105"
                      : "bg-slate-950/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-amber-300" : "text-slate-400"}`} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>

          {/* Swipe indicator hint for mobile screens */}
          <div className="sm:hidden flex items-center justify-end w-full gap-1 text-[10px] text-slate-500 pt-1 font-mono">
            <span>Swipe for more verticals</span>
            <ArrowRight className="w-3 h-3 text-ocean-400 animate-pulse" />
          </div>
        </div>

        {/* Selected Industry Card Showcase */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center bg-slate-950/90 border border-slate-800 rounded-3xl p-5 sm:p-6 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-ocean-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Side: Content & Features */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold">
              {currentSolution.badge}
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              {currentSolution.title}
            </h3>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              {currentSolution.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-2">
              {/* Web Features */}
              <div className="space-y-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2 text-ocean-400 font-bold text-sm">
                  <Globe className="w-4 h-4" />
                  <span>Custom Web Platform</span>
                </div>
                <ul className="space-y-2">
                  {currentSolution.webFeatures.map((feat) => (
                    <li key={feat} className="flex items-start text-xs text-slate-300 gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile Features */}
              <div className="space-y-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Smartphone className="w-4 h-4" />
                  <span>iOS & Android Mobile App</span>
                </div>
                <ul className="space-y-2">
                  {currentSolution.mobileFeatures.map((feat) => (
                    <li key={feat} className="flex items-start text-xs text-slate-300 gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ROI Impact Highlight */}
            <div className="p-4 rounded-xl bg-ocean-950/60 border border-ocean-500/30 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-ocean-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Expected Business Impact</div>
                <div className="text-sm font-bold text-white">{currentSolution.businessImpact}</div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#estimator"
                className="inline-flex items-center gap-2 text-sm font-bold text-ocean-400 hover:text-ocean-300 transition-colors"
              >
                <span>Get a custom quote for {currentSolution.name}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Side: Visual Mockup Showcase — shows above text on mobile */}
          <div className="lg:col-span-5 relative flex items-center justify-center order-first lg:order-last">
            <div className="relative w-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
              <img
                src={currentSolution.image}
                alt={currentSolution.title}
                className="w-full h-52 sm:h-64 md:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/90 backdrop-blur border border-slate-800 flex justify-between items-center gap-2">
                <div className="min-w-0">
                  <div className="text-[10px] text-slate-400">Target Platform</div>
                  <div className="text-xs sm:text-sm font-bold text-white truncate">{currentSolution.name} Software Suite</div>
                </div>
                <span className="px-2 sm:px-3 py-1 rounded-full bg-ocean-500 text-white font-bold text-[10px] sm:text-xs shrink-0">
                  Production Ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutionsSection;
