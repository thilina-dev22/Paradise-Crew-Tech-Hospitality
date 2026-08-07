import React from "react";
import { Search, Layout, Code2, Rocket, CheckCircle2 } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Discovery & Architecture",
    icon: Search,
    description:
      "We analyze your business vertical (Hotel, Scooter Rental, Surf School, Tour Operator, Transport), define direct booking conversion flows, and select the optimal tech stack.",
  },
  {
    step: "02",
    title: "UI/UX & Mobile Design",
    icon: Layout,
    description:
      "We design sleek, ultra-fast web interfaces and native mobile app layouts tuned for maximum tourist engagement and instant payment checkout.",
  },
  {
    step: "03",
    title: "Engineering & Integrations",
    icon: Code2,
    description:
      "We write clean scalable code, integrate local & global payment gateways (Stripe/PayHere/PayPal), build automated WhatsApp notifications, and sync PMS/Channel Managers.",
  },
  {
    step: "04",
    title: "Launch & Revenue Scaling",
    icon: Rocket,
    description:
      "We handle Google Maps & App Store deployment, train your staff, and launch your commission-free direct booking platform with 24/7 technical oversight.",
  },
];

const ApproachSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ocean-500/10 border border-ocean-500/30 text-ocean-400 text-xs font-bold uppercase tracking-wider">
            Our Development Process
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            From Concept to{" "}
            <span className="bg-gradient-to-r from-amber-300 to-ocean-400 bg-clip-text text-transparent">
              High-Yield Platform
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            A proven 4-stage engineering workflow delivering reliable software apps on time and within budget.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="bg-slate-950/80 border border-slate-800 rounded-3xl p-6 relative group hover:border-ocean-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="w-12 h-12 rounded-2xl bg-ocean-500/10 border border-ocean-500/30 flex items-center justify-center text-ocean-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black font-mono text-slate-800 group-hover:text-ocean-500/30 transition-colors">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{s.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {s.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Quality Assured</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
