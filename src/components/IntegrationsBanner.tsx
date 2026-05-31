const integrations = [
  {
    src: "/booking.png",
    alt: "Booking.com",
    label: "Booking.com",
    height: "h-6 md:h-8",
  },
  { src: "/airbnb.png", alt: "Airbnb", label: "Airbnb", height: "h-8 md:h-10" },
  { src: "/stripe.png", alt: "Stripe", label: "Stripe", height: "h-8 md:h-10" },
  {
    src: "/expedia.png",
    alt: "Expedia",
    label: "Expedia",
    height: "h-6 md:h-8",
  },
  { src: "/agoda.png", alt: "Agoda", label: "Agoda", height: "h-6 md:h-8" },
  {
    src: "/tripadvisor.png",
    alt: "TripAdvisor",
    label: "TripAdvisor",
    height: "h-8 md:h-10",
  },
];

const IntegrationsBanner = () => {
  return (
    <section className="py-8 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
          Seamlessly integrating with your favorite platforms
        </p>
        <div className="flex flex-wrap justify-center items-end gap-10 md:gap-16 transition-all duration-500">
          {integrations.map(({ src, alt, label, height }) => (
            <div key={alt} className="flex flex-col items-center gap-3">
              <img src={src} alt={alt} className={`${height} object-contain`} />
              <span className="text-sm font-semibold text-slate-800">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsBanner;
