import React, { useState } from "react";
import {
  FolderKanban,
  ExternalLink,
  CheckCircle2,
  Building2,
  Utensils,
  Compass,
  Bike,
  Car,
  X,
  Sparkles,
  TrendingUp,
} from "lucide-react";

interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  location: string;
  category: "hotel" | "restaurant" | "tourguide" | "rental" | "transport";
  categoryLabel: string;
  icon: React.ElementType;
  image: string;
  tagline: string;
  metrics: { label: string; value: string }[];
  deliverables: string[];
  techStack: string[];
  description: string;
  testimonial?: {
    quote: string;
    author: string;
  };
}

const portfolioData: PortfolioItem[] = [
  // 1. HOTEL PORTFOLIO
  {
    id: "aura-villa",
    title: "Aura Ocean Villa & Suites",
    client: "Boutique Beach Resort",
    location: "Mirissa, Southern Province",
    category: "hotel",
    categoryLabel: "Hotel & Villa",
    icon: Building2,
    image: "/images/hotel_booking_app.png",
    tagline: "Commission-Free Direct Booking Engine & Guest Web App",
    metrics: [
      { label: "OTA Fees Saved", value: "$18,500/yr" },
      { label: "Direct Bookings", value: "+145%" },
      { label: "Checkout Time", value: "< 40 Sec" },
    ],
    deliverables: [
      "Custom responsive Direct Booking Web App",
      "Stripe & PayHere Sri Lanka multi-currency gateway",
      "Cloudbeds PMS real-time availability calendar sync",
      "WhatsApp automated guest concierge & pre-arrival forms",
    ],
    techStack: ["React", "TypeScript", "TailwindCSS", "Node.js", "PayHere API", "Cloudbeds PMS"],
    description:
      "Aura Villa previously lost up to 18% in OTA commission on every booking. We designed and engineered a luxury direct booking engine that syncs in real-time with their PMS, enabling guests to pay in USD, EUR, or LKR with instant WhatsApp confirmation.",
    testimonial: {
      quote:
        "The direct booking engine transformed our bottom line. We recovered our entire software development investment in under two months!",
      author: "Sanath Wickramasinghe — Owner, Aura Villa",
    },
  },

  // 2. TOUR GUIDE PORTFOLIO
  {
    id: "lanka-heritage-tours",
    title: "Sigiriya Heritage & Safari Guides",
    client: "Independent Tour Guide Operator",
    location: "Sigiriya & Yala National Park",
    category: "tourguide",
    categoryLabel: "Tour Guide & Agency",
    icon: Compass,
    image: "/images/tour_guide_portfolio.png",
    tagline: "Excursion Itinerary Builder & QR Ticket Mobile App",
    metrics: [
      { label: "Completed Tours", value: "850+ Trips" },
      { label: "Average Rating", value: "4.9 ★" },
      { label: "Pickup Confusion", value: "0% Errors" },
    ],
    deliverables: [
      "Interactive multi-day safari & cultural itinerary builder",
      "Digital QR pass ticket compatible with Apple Wallet",
      "Live GPS meeting point tracking for tour guides",
      "Automated post-trip TripAdvisor review prompt engine",
    ],
    techStack: ["React Native", "Node.js", "Stripe API", "Google Maps API", "WhatsApp Business"],
    description:
      "Independent tour guide Rohan needed a way for foreign tourists to reserve private safari and cultural day trips online without relying on third-party agencies. We built a custom web app and mobile QR pass ticket system.",
    testimonial: {
      quote:
        "Tourists love downloading their QR tickets before arriving. Our safari bookings doubled in our first high season!",
      author: "Rohan Perera — Head Guide, Lanka Heritage Tours",
    },
  },

  // 3. RESTAURANT & CAFE PORTFOLIO
  {
    id: "galle-fort-bistro",
    title: "Ocean Front Bistro & Cafe",
    client: "Beachfront Restaurant & Lounge",
    location: "Galle Fort & Unawatuna",
    category: "restaurant",
    categoryLabel: "Restaurant & Cafe",
    icon: Utensils,
    image: "/images/restaurant_cafe_app.png",
    tagline: "Contactless QR Table Ordering & Takeaway App",
    metrics: [
      { label: "Table Turnover", value: "30% Faster" },
      { label: "Average Bill", value: "+35% Higher" },
      { label: "Menu Languages", value: "6 Auto-Sync" },
    ],
    deliverables: [
      "Table-side QR code ordering & split bill payment",
      "Automated kitchen display notification & WhatsApp order bot",
      "Digital multi-language auto-translate menu (English, Russian, French, German)",
      "Takeaway pre-ordering app with real-time pickup countdown",
    ],
    techStack: ["React PWA", "Node.js", "PayHere API", "Stripe", "WhatsApp API", "PosSync"],
    description:
      "Located in high-footfall Galle Fort, Ocean Front Bistro faced long table wait times during peak hours. We built a QR table-side ordering web app that lets diners order food & drinks directly from their phones.",
    testimonial: {
      quote:
        "Our staff spend less time writing orders and more time greeting guests. Cocktail orders increased by 40%!",
      author: "Dilini Alwis — General Manager, Ocean Front Bistro",
    },
  },

  // 4. SCOOTER RENTAL PORTFOLIO
  {
    id: "mirissa-scooter-rentals",
    title: "Ella & Mirissa Coastal Rides",
    client: "Scooter & Vehicle Rental Fleet",
    location: "Ella & Mirissa",
    category: "rental",
    categoryLabel: "Scooter & Car Rental",
    icon: Bike,
    image: "/images/scooter_rental_app.png",
    tagline: "Tourist Scooter Rental Booking & GPS Map App",
    metrics: [
      { label: "Fleet Occupancy", value: "96% Average" },
      { label: "Online Bookings", value: "70% Total" },
      { label: "ID Verification", value: "Instant" },
    ],
    deliverables: [
      "GPS Pickup map & vehicle model availability grid",
      "Digital rental contract PDF with e-signature",
      "Security deposit pre-authorization & refund manager",
      "24/7 Roadside assistance & helmet add-on module",
    ],
    techStack: ["React", "React Native", "Google Maps API", "Stripe", "Node.js"],
    description:
      "Coastal Rides managed 60+ scooters across Ella and Mirissa manually. We deployed an online reservation app allowing tourists to reserve scooters online before arriving in Sri Lanka.",
  },

  // 5. PRIVATE DRIVER PORTFOLIO
  {
    id: "lanka-driver-express",
    title: "Island Transfer & Private Drivers",
    client: "Airport Taxi & Private Transfers",
    location: "Bandaranaike Airport & Islandwide",
    category: "transport",
    categoryLabel: "Driver & Airport Transfers",
    icon: Car,
    image: "/images/hero_3d_mockup.png",
    tagline: "Airport Transfer Fare Calculator & WhatsApp Dispatch",
    metrics: [
      { label: "Airport Pickups", value: "1,200+/yr" },
      { label: "Direct Bookings", value: "90% Total" },
      { label: "Driver Rating", value: "4.95 ★" },
    ],
    deliverables: [
      "Distance & location fare calculation engine",
      "Airport arrival flight tracker integration",
      "Vehicle tier options (Van, Luxury SUV, Tuk-Tuk)",
      "Instant WhatsApp automated booking confirmation",
    ],
    techStack: ["React", "Google Distance Matrix", "WhatsApp Business", "PayHere"],
    description:
      "Connecting airport arrivals with trusted private drivers across Sri Lanka with transparent distance-based pricing and instant flight arrival monitoring.",
  },
];

const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredData =
    activeFilter === "all"
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ocean-500/10 border border-ocean-500/30 text-ocean-400 text-xs font-bold uppercase tracking-wider">
            <FolderKanban className="w-3.5 h-3.5 text-amber-400" />
            Verified Case Studies & Portfolios
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Our Proven{" "}
            <span className="bg-gradient-to-r from-amber-300 via-sky-300 to-ocean-400 bg-clip-text text-transparent">
              Client Work
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Explore live digital platforms built for hotels, tour guides, restaurants, cafes, scooter rentals, and transport services.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 mb-12 gap-3 no-scrollbar">
          {[
            { id: "all", label: "All Portfolios" },
            { id: "hotel", label: "Hotels & Villas" },
            { id: "tourguide", label: "Tour Guides & Safari" },
            { id: "restaurant", label: "Restaurants & Cafes" },
            { id: "rental", label: "Scooter Rentals" },
            { id: "transport", label: "Drivers & Transfers" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold whitespace-nowrap transition-all ${
                activeFilter === tab.id
                  ? "bg-gradient-to-r from-ocean-500 to-ocean-600 text-white shadow-lg shadow-ocean-600/30 scale-105"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden hover:border-ocean-500/50 transition-all duration-300 group cursor-pointer flex flex-col justify-between hover:shadow-2xl hover:shadow-ocean-950/50"
              >
                <div>
                  {/* Thumbnail Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur border border-slate-800 text-xs font-mono text-amber-400 font-bold flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5 text-ocean-400" />
                      <span>{item.categoryLabel}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">{item.location}</div>
                      <h3 className="text-xl font-bold text-white group-hover:text-ocean-400 transition-colors mt-0.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-300 font-medium mt-1">
                        {item.tagline}
                      </p>
                    </div>

                    {/* Performance Metrics */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-800/80 text-center">
                      {item.metrics.map((m) => (
                        <div key={m.label} className="bg-slate-950/60 p-2 rounded-lg">
                          <div className="text-[10px] text-slate-400 font-medium">{m.label}</div>
                          <div className="text-xs font-bold text-emerald-400 mt-0.5">{m.value}</div>
                        </div>
                      ))}
                    </div>

                    <ul className="space-y-1.5 pt-1">
                      {item.deliverables.slice(0, 3).map((d) => (
                        <li key={d} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span className="truncate">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer Button */}
                <div className="p-6 pt-0">
                  <div className="w-full py-3 bg-slate-950 hover:bg-ocean-600 text-slate-300 hover:text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 border border-slate-800">
                    <span>View Case Study & Tech Stack</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Drawer for Selected Portfolio Item */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 space-y-6 relative shadow-2xl">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold">
                <Sparkles className="w-4 h-4" />
                <span>{selectedItem.categoryLabel} Portfolio Case Study</span>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">{selectedItem.title}</h3>
                <p className="text-sm text-slate-400">{selectedItem.client} • {selectedItem.location}</p>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-800 max-h-72">
                <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-full object-cover" />
              </div>

              <p className="text-slate-200 text-sm leading-relaxed">{selectedItem.description}</p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3">
                {selectedItem.metrics.map((m) => (
                  <div key={m.label} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                    <div className="text-[10px] text-slate-400 uppercase">{m.label}</div>
                    <div className="text-sm md:text-base font-bold text-emerald-400 mt-0.5">{m.value}</div>
                  </div>
                ))}
              </div>

              {/* Deliverables */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase">Deliverables Provided</div>
                <div className="grid sm:grid-cols-2 gap-2">
                  {selectedItem.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-xs text-slate-200 p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase">Technologies & APIs Used</div>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-lg bg-ocean-500/10 border border-ocean-500/30 text-ocean-400 text-xs font-mono font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial if exists */}
              {selectedItem.testimonial && (
                <div className="p-4 rounded-xl bg-slate-950/80 border border-amber-500/30 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
                    <TrendingUp className="w-4 h-4" />
                    <span>Client Impact</span>
                  </div>
                  <p className="text-xs italic text-slate-200 font-light">"{selectedItem.testimonial.quote}"</p>
                  <div className="text-[11px] font-bold text-amber-400">{selectedItem.testimonial.author}</div>
                </div>
              )}

              <div className="pt-2 flex justify-end">
                <a
                  href="#contact"
                  onClick={() => setSelectedItem(null)}
                  className="px-6 py-3 bg-gradient-to-r from-ocean-500 to-ocean-600 text-white text-xs font-bold rounded-xl hover:from-ocean-400 hover:to-ocean-500"
                >
                  Request Similar Build for Your Business
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
