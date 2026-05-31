import { useState } from "react";
import { Key, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  businessType: string;
  message: string;
}

const ContactSection = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    businessType: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>(
    "Something went wrong. Please try again or contact us directly.",
  );
  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || "";

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("Something went wrong. Please try again or contact us directly.");

    if (!formspreeEndpoint) {
      setStatus("error");
      setErrorMessage("Missing Formspree endpoint. Set VITE_FORMSPREE_ENDPOINT in your .env file.");
      return;
    }

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          businessType: form.businessType,
          message: form.message,
          _subject: `Contact Us: ${form.businessType} — ${form.name}`,
          _replyto: form.email,
        }),
      });

      const payload = (await response.json().catch(() => null)) as
        | { error?: string; message?: string }
        | null;

      if (!response.ok) {
        throw new Error(
          payload?.error ?? payload?.message ?? "Formspree request failed.",
        );
      }

      setStatus("success");
      setSubmittedEmail(form.email);
      setForm({ name: "", email: "", businessType: "", message: "" });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Contact request failed.";
      setErrorMessage(message);
      console.error("Contact form send error:", error);
      setStatus("error");
    }
  };

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
              <a
                href="mailto:hello@paradisecrew.site"
                className="flex items-center group"
              >
                <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-full mr-4 group-hover:bg-ocean-50 transition-colors">
                  <Key
                    size={20}
                    className="text-ocean-700 group-hover:text-ocean-900 transition-colors"
                  />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Email Us</p>
                  <p className="text-lg font-bold text-slate-900 group-hover:text-ocean-700 transition-colors">
                    hello@paradisecrew.site
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/94762825336"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 bg-[#25D366] hover:bg-[#1ebe5d] active:bg-[#17a84f] text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:shadow-green-200 transition-all duration-200 group w-fit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 shrink-0 group-hover:scale-110 transition-transform duration-200"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.18 1.535 5.971L.057 23.25a.75.75 0 0 0 .916.948l5.453-1.453A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.693 9.693 0 0 1-4.953-1.356l-.355-.211-3.676.981.993-3.585-.232-.369A9.718 9.718 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                </svg>
                <div className="text-left">
                  <p className="text-xs font-medium text-green-100 leading-none mb-0.5">
                    Chat on WhatsApp
                  </p>
                  <p className="text-base font-bold leading-none">
                    +94 76 282 5336
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12 gap-4">
                <CheckCircle2 size={56} className="text-green-500" />
                <h3 className="text-xl font-bold text-slate-900">
                  Message Sent!
                </h3>
                <p className="text-slate-500 max-w-xs">
                  Thanks for reaching out. We'll get back to you at{" "}
                  <span className="font-medium text-slate-700">
                    {submittedEmail || "your email"}
                  </span>{" "}
                  within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-sm text-ocean-700 hover:text-ocean-900 font-medium underline underline-offset-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="businessType"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Business Type
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    value={form.businessType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all outline-none bg-white"
                  >
                    <option value="" disabled>
                      Select one...
                    </option>
                    <option>Villa Owner</option>
                    <option>Boutique Hotel</option>
                    <option>Software Request</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all outline-none resize-none"
                    placeholder="How can we help?"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                    <AlertCircle size={16} className="shrink-0" />
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 bg-ocean-800 text-white rounded-lg hover:bg-ocean-700 active:bg-ocean-900 transition-colors font-bold shadow-md hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
