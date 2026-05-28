import { Star, Quote } from "lucide-react";

interface Review {
  quote: string;
  name: string;
  role: string;
  initials: string;
  avatarClass: string;
}

const reviews: Review[] = [
  {
    quote:
      "Since partnering with Paradise Crew, our direct bookings have skyrocketed. We reduced our reliance on OTA platforms and increased our profit margins by over 30% within the first six months.",
    name: "Sarah Jenkins",
    role: "Owner, Azure Villa Retreat",
    initials: "SJ",
    avatarClass: "bg-ocean-100 text-ocean-800",
  },
  {
    quote:
      "The custom booking engine they built for our boutique hotel is flawless. It perfectly captures our brand's vibe while making the reservation process incredibly smooth for our guests.",
    name: "Marcus Rodriguez",
    role: "Director, The Palms Resort",
    initials: "MR",
    avatarClass: "bg-sand-200 text-sand-800",
  },
  {
    quote:
      "What sets Paradise Crew apart is their ground-level hospitality experience. They don't just write code; they understand the nuances of managing a property. An invaluable partnership.",
    name: "Elena Lin",
    role: "Manager, Sunset Horizon",
    initials: "EL",
    avatarClass: "bg-slate-100 text-slate-700",
  },
];

const ReviewsSection = () => {
  return (
    <section
      id="reviews"
      className="py-20 bg-slate-50 scroll-mt-28 md:scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            What Our Partners Say
          </h2>
          <p className="text-slate-600">
            Hear from property owners who have transformed their businesses with
            our dual-expertise approach.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map(({ quote, name, role, initials, avatarClass }) => (
            <div
              key={name}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative hover:-translate-y-1 transition-transform duration-300"
            >
              <Quote
                size={40}
                className="absolute top-6 right-6 text-ocean-100 opacity-50"
              />
              <div className="flex gap-1 mb-6 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-700 mb-8 italic relative z-10 text-sm leading-relaxed">
                "{quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${avatarClass}`}
                >
                  {initials}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{name}</h4>
                  <p className="text-xs text-slate-500">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
