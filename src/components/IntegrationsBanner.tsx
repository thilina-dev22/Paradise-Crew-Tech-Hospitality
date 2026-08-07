import React from "react";

const integrations = [
  { name: "Stripe", category: "Global Payments" },
  { name: "PayHere", category: "Sri Lanka Gateway" },
  { name: "PayPal", category: "Multi-Currency" },
  { name: "Cloudbeds", category: "PMS Integration" },
  { name: "Smoobu", category: "Channel Manager" },
  { name: "WhatsApp Business API", category: "Automated Bot" },
  { name: "React Native & Flutter", category: "Mobile Apps" },
  { name: "Node.js & AWS", category: "Cloud Backend" },
];

const IntegrationsBanner: React.FC = () => {
  return (
    <section className="py-12 bg-slate-950 border-y border-slate-800/80 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
            Powered by Enterprise-Grade Technology & Integration Partners
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {integrations.map((item) => (
            <div
              key={item.name}
              className="px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5 hover:border-ocean-500/40 transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <div className="text-xs font-bold text-slate-200">{item.name}</div>
                <div className="text-[10px] text-slate-400 font-mono">{item.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsBanner;
