const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="md:col-span-1 lg:col-span-1">
            <a href="#home">
              <img
                src="/Logo.png"
                alt="Paradise Crew Logo"
                className="h-24 w-auto opacity-80 mb-4"
              />
            </a>
            <p className="text-sm text-slate-400 leading-relaxed">
              Fusing ground-level hospitality management with high-level
              technical architecture to maximize your property's potential.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-4">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#home", label: "Home" },
                { href: "#services", label: "Services" },
                { href: "#packages", label: "Packages" },
                { href: "#reviews", label: "Reviews" },
                { href: "#approach", label: "Our Approach" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-4">
              Connect
            </h4>
            <ul className="space-y-3 text-slate-400">
              <li className="hover:text-white transition-colors">
                <a href="mailto:hello@paradisecrew.com">
                  hello@paradisecrew.com
                </a>
              </li>
              <li className="hover:text-white transition-colors">
                <a
                  href="https://wa.me/94762825336"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +94 76 282 5336
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Form
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-4">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1EA2MhggzG/?mibextid=wwXIfr"
                aria-label="Facebook"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/paradisecrew.site/"
                aria-label="Instagram"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 border-t border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
          <p>
            © {new Date().getFullYear()} Paradise Crew Tech & Hospitality. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
