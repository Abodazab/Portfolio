import { useState } from "react";
import { socialLinks } from "../data/portfolioData";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

export default function FooterCTA() {

  const [submitted, setSubmitted] = useState(false);

  const CV_URL = "/CV-AbdelrahmanAlaa.pdf";

  const handleView = () => window.open(CV_URL, "_blank");

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = CV_URL;
    a.download = "Abdelrahman-CV.pdf";
    a.click();

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const getIcon = (label) => {
    switch (label.toLowerCase()) {
      case "linkedin": return FaLinkedinIn;
      case "email": return FiMail;
      case "phone": return FiPhone;
      case "github": return FaGithub;
      default: return null;
    }
  };

  return (
    <div className=" ">

      <footer className="relative z-10 pt-28 md:pt-32 pb-8 text-white
        bg-[radial-gradient(circle_at_top,#1b1b3a,#0a0a12)]">

        {/* FLOATING CTA */}
        <div className="absolute left-1/2 -translate-x-1/2
          -top-16 md:-top-24 w-[92%] sm:w-[90%] md:w-full max-w-5xl px-2 sm:px-4 z-20">

          <div className="bg-white/5 backdrop-blur-xl border border-white/20 text-black 
            rounded-[25px] md:rounded-[60px]
            p-4 sm:p-5 md:p-8 
            shadow-2xl flex flex-col md:flex-row
            items-center justify-between gap-3 md:gap-6 text-center md:text-left">

            <div className="max-w-xl">
              <h2 className="text-white/80 text-base sm:text-lg md:text-3xl font-bold">
                Explore My CV & Experience
              </h2>

              <p className="text-white/60 mt-2 text-sm md:text-base">
                View my CV online or download it instantly.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto items-center">

              <button
                onClick={handleView}
                className="px-6 py-3 rounded-full border-2 border-[#8000ff]
                text-[#8000ff] font-semibold hover:bg-[#8000ff]
                hover:text-white transition"
              >
                View CV
              </button>

              <button
                onClick={handleDownload}
                className="px-6 py-3 rounded-full bg-gradient-to-r
                from-[#8000ff] to-[#db00ff] text-white font-semibold
                hover:scale-105 transition shadow-lg"
              >
                Download CV
              </button>

            </div>
          </div>

          {submitted && (
            <p className="text-center text-green-400 mt-3 text-sm">
              CV downloaded successfully
            </p>
          )}
        </div>

        {/* FOOTER CONTENT */}
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <h3 className="text-2xl font-bold  ">Portfolio</h3>

          <div className="flex gap-4">
            {socialLinks
              .filter((s) =>
                ["linkedin", "email", "phone", "github"].includes(
                  s.label.toLowerCase()
                )
              )
              .map((item, i) => {
                const Icon = getIcon(item.label);
                return (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center
                    rounded-full border border-gray-400
                    hover:border-white hover:bg-white hover:text-black
                    transition"
                  >
                    {Icon && <Icon size={18} />}
                  </a>
                );
              })}
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-white/10 text-center text-xs text-gray-400">
          © copyright 2026 — All Rights Reserved by Abdelrahman Alaa
        </div>

      </footer>
    </div>
  );
}