import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { tabs, projects, contactFields } from "../data/portfolioData";

export default function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState("projects");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handler = () => setActiveTab("contact");
    window.addEventListener("openContactTab", handler);
    return () => window.removeEventListener("openContactTab", handler);
  }, []);

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const form = e.target;

    const firstName = form.firstName?.value?.trim();
    const lastName = form.lastName?.value?.trim();
    const email = form.email?.value?.trim();
    const phone = form.phone?.value?.trim();
    const message = form.message?.value?.trim();

    if (!firstName || !lastName || !email || !phone || !message) {
      setError("Please fill all fields ");
      setSuccess("");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address ");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("");
    setLoading(true);

    emailjs
      .sendForm(
        "service_632rx6d",
        "template_5is7sw4",
        form,
        "jR5LXEfqcZ4O4JalO"
      )
      .then(() => {
        setLoading(false);
        setSuccess("Message sent successfully ");
        form.reset();
        setTimeout(() => setSuccess(""), 4000);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        setError("Failed to send message, please try again later ");
      });
  };

  return (
    <section
      className=" relative overflow-hidden bg-[radial-gradient(circle_at_bottom,#1b1b3a,#0a0a12)] pt-32 pb-48 text-white" 
      id="portfolio"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* TABS */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/20">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3 rounded-full transition ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-[#8000ff] to-[#db00ff]"
                    : "text-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECTS */}
        {activeTab === "projects" && (
          <div className="grid lg:grid-cols-3 gap-6">

            {projects.map((p, i) => (
              <a
                key={i}
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="relative rounded-2xl overflow-hidden group block cursor-pointer"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-60 object-cover"
                />

                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center p-4">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="text-sm text-gray-300 mt-2">
                    {p.description}
                  </p>
                </div>
              </a>
            ))}

          </div>
        )}

        {/* CONTACT */}
        {activeTab === "contact" && (
          <div className="rounded-[40px] p-8 bg-gradient-to-r from-[#8000ff] to-[#0a0a23]">
            <div className="grid md:grid-cols-2 gap-8">

              <div className="hidden md:block">
                <img src="/contact.png" alt="contact" />
              </div>

              <form onSubmit={sendEmail} className="space-y-3">

                {contactFields.map((field, i) =>
                  field.type === "textarea" ? (
                    <textarea
                      key={i}
                      name={field.name}
                      placeholder={field.placeholder}
                      className="input h-32"
                      required
                    />
                  ) : (
                    <input
                      key={i}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      className="input"
                      required
                    />
                  )
                )}

                {error && (
                  <p className="text-red-400 text-sm">{error}</p>
                )}

                {success && (
                  <p className="text-green-400 text-sm">{success}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-white text-black py-2.5 rounded-lg w-full font-semibold disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send"}
                </button>

              </form>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}