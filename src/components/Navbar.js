import { useState } from "react";
import { navLinks, personalInfo, socialLinks } from "../data/portfolioData";

import { FaLinkedinIn, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0A0B1A]/80 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 md:py-6 flex items-center justify-between">

        {/* BRAND */}
        <div className="text-white font-bold text-xl md:text-2xl">
          {personalInfo.shortName || "Portfolio"}
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-x-12 text-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-gray-300 hover:text-white transition relative
              after:content-[''] after:absolute after:left-0 after:-bottom-1
              after:w-0 after:h-[2px] after:bg-white after:transition-all
              hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* RIGHT SIDE DESKTOP */}
        <div className="hidden md:flex items-center gap-5">

          <div className="flex items-center gap-3">
            <a href={socialLinks[0].href} className="icon"><FiMail /></a>
            <a href={socialLinks[2].href} className="icon"><FaLinkedinIn /></a>
            <a href={socialLinks[1].href} className="icon"><FaGithub /></a>
            <a href={socialLinks[3].href} className="icon"><FaInstagram /></a>
            <a href={socialLinks[4].href} className="icon"><FaFacebook /></a>
            <a href={socialLinks[5].href} className="icon"><FiPhone /></a>
          </div>

          <button
            onClick={() => {
              document.querySelector("#portfolio")?.scrollIntoView({
                behavior: "smooth",
              });
              window.dispatchEvent(new Event("openContactTab"));
            }}
            className="ml-2 px-6 py-3 text-lg border border-white text-white rounded-full
            hover:bg-white hover:text-[#0A0B1A] transition duration-300"
          >
            Let's Connect
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0B1A]/95 backdrop-blur-lg border-t border-white/10 px-6 py-6 space-y-6">

          {/* LINKS */}
          <div className="flex flex-col gap-4 text-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-gray-300 hover:text-white transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">

            <a href={socialLinks[0].href} className="icon"><FiMail /></a>
            <a href={socialLinks[2].href} className="icon"><FaLinkedinIn /></a>
            <a href={socialLinks[1].href} className="icon"><FaGithub /></a>
            <a href={socialLinks[3].href} className="icon"><FaInstagram /></a>
            <a href={socialLinks[4].href} className="icon"><FaFacebook /></a>
            <a href={socialLinks[5].href} className="icon"><FiPhone /></a>

          </div>

          {/* CTA */}
          <button
            onClick={() => {
              setIsOpen(false);
              document.querySelector("#portfolio")?.scrollIntoView({
                behavior: "smooth",
              });
              window.dispatchEvent(new Event("openContactTab"));
            }}
            className="w-full px-6 py-3 text-lg border border-white text-white rounded-full
            hover:bg-white hover:text-[#0A0B1A] transition duration-300"
          >
            Let's Connect
          </button>

        </div>
      )}

      {/* ICON STYLE */}
      <style>{`
        .icon {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.06);
          color: white;
          transition: 0.3s;
          font-size: 18px;
        }

        .icon:hover {
          transform: scale(1.1);
          background: rgba(255,255,255,0.15);
        }
      `}</style>

    </header>
  );
}