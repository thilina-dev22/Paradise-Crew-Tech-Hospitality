import { Play, Users, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ApproachCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const cards: ApproachCard[] = [
  {
    icon: Play,
    title: "The Live Feedback Loop",
    description:
      "We test every software feature in our own managed properties first. If it doesn't increase revenue or save time for us, we don't ship it to you.",
  },
  {
    icon: Users,
    title: "Local Expertise",
    description:
      "Deep understanding of the regional tourism market, seasonal trends, and guest expectations in tropical destinations.",
  },
  {
    icon: TrendingUp,
    title: "Dual Revenue Focus",
    description:
      "We optimize your profiles for OTA visibility while simultaneously driving high-margin direct bookings through your custom site.",
  },
];

const ApproachSection = () => {
  return (
    <section
      id="approach"
      className="py-20 bg-ocean-900 text-white scroll-mt-28 md:scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Why Paradise Crew?
          </h2>
          <p className="text-ocean-200">
            We don't just write code. We operate properties.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="text-center p-6 bg-ocean-800 rounded-xl border border-ocean-700 hover:border-sand-500 transition-colors duration-300"
            >
              <div className="mx-auto w-16 h-16 bg-ocean-900 rounded-full flex items-center justify-center mb-6">
                <Icon size={28} className="text-sand-400" />
              </div>
              <h4 className="text-xl font-bold mb-3">{title}</h4>
              <p className="text-ocean-100 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
