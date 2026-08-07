import React from "react";
import { Star, Quote, Building2, Bike, Waves, Compass } from "lucide-react";

interface Review {
  name: string;
  role: string;
  business: string;
  niche: string;
  icon: React.ElementType;
  text: string;
  rating: number;
  stats: string;
}

const reviews: Review[] = [
  {
    name: "Sanath Wickramasinghe",
    role: "Managing Director",
    business: "Aura Ocean Villa & Suites, Mirissa",
    niche: "Boutique Hotel & Villa",
    icon: Building2,
    text: "Before switching to Paradise Crew's direct booking engine, we lost nearly $1,500 every month in Airbnb and Booking.com commissions. Their system with PayHere & Stripe integration paid for itself in less than 45 days!",
    rating: 5,
    stats: "$18,000 Saved / Year",
  },
  {
    name: "Kasun Silva",
    role: "Founder",
    business: "Ella Coast Scooter & Quad Rentals",
    niche: "Vehicle Fleet Rental",
    icon: Bike,
    text: "Paradise Crew built us a custom iOS/Android mobile web app with online scooter reservation and WhatsApp automated receipt confirmation. Tourists now reserve scooters before even arriving in Sri Lanka!",
    rating: 5,
    stats: "98% Fleet Occupancy",
  },
  {
    name: "Liam & Dilini",
    role: "Co-Founders",
    business: "Southern Point Surf Academy, Arugam Bay",
    niche: "Surf School & Gear Rental",
    icon: Waves,
    text: "The surf class scheduling tool and tide widget integration revolutionized our booking process. Students sign digital waivers right on their phones and book instructor packages seamlessly.",
    rating: 5,
    stats: "+190% Direct Bookings",
  },
  {
    name: "Rohan Perera",
    role: "Head Tour Operator",
    business: "Lanka Excursion & Safari Adventures",
    niche: "Tour Agency & Guides",
    icon: Compass,
    text: "Our day trip itinerary booking system with Apple Wallet QR passes transformed our business. Guests love getting instant QR passes and meeting our guides with zero confusion.",
    rating: 5,
    stats: "4.9 ★ Rating on 400+ Trips",
  },
];

const ReviewsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-950 text-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            Verified Client Success
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Trusted by Leaders Across{" "}
            <span className="bg-gradient-to-r from-amber-300 via-sky-300 to-ocean-400 bg-clip-text text-transparent">
              Paradise Destinations
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Hear how Paradise Crew custom software solutions transform operations and direct revenue for real businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((rev) => {
            const Icon = rev.icon;
            return (
              <div
                key={rev.name}
                className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 space-y-6 relative hover:border-ocean-500/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-1.5 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] sm:text-xs font-bold shrink-0 max-w-full">
                      {rev.stats}
                    </span>
                  </div>

                  <Quote className="w-8 h-8 text-ocean-500/30" />

                  <p className="text-slate-200 text-sm md:text-base leading-relaxed italic font-light">
                    "{rev.text}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-slate-800/80">
                  <div className="w-12 h-12 rounded-2xl bg-ocean-500/20 border border-ocean-500/40 flex items-center justify-center text-ocean-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">{rev.name}</h4>
                    <p className="text-xs text-slate-400">{rev.role} • <span className="text-amber-400">{rev.business}</span></p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
