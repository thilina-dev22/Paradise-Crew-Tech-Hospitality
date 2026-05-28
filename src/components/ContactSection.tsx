import { Key, MessageSquare } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-white scroll-mt-28 md:scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Let's Build Your Digital Property
            </h2>
            <p className="text-slate-600 mb-8 w-4/5">
              Whether you need a new booking engine or full property management,
              we're ready to elevate your hospitality business.
            </p>

            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-full mr-4 group-hover:bg-ocean-50 transition-colors">
                  <Key
                    size={20}
                    className="text-ocean-700 group-hover:text-ocean-900 transition-colors"
                  />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Email Us</p>
                  <p className="text-lg font-bold text-slate-900">
                    hello@paradisecrew.com
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/94762825336"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-full mr-4 group-hover:bg-green-50 transition-colors">
                  <MessageSquare
                    size={20}
                    className="text-green-600 group-hover:text-green-800 transition-colors"
                  />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">
                    Chat on WhatsApp
                  </p>
                  <p className="text-lg font-bold text-slate-900">
                    +94 76 282 5336
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="business-type" className="block text-sm font-medium text-slate-700 mb-2">
                  Business Type
                </label>
                <select id="business-type" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all outline-none bg-white">
                  <option>Select one...</option>
                  <option>Villa Owner</option>
                  <option>Boutique Hotel</option>
                  <option>Software Request</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all outline-none resize-none"
                  placeholder="How can we help?"
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full py-4 bg-ocean-800 text-white rounded-lg hover:bg-ocean-700 transition-colors font-bold shadow-md hover:shadow-xl"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
