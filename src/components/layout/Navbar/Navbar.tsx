import React, { useState } from "react";
import { Link } from "react-router-dom";
import { basecolor } from "../../../constant/color";
import idFlag from "@/assets/img/id.png";
import engFlag from "@/assets/img/eng.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full">
      {/* TOP BAR */}
      <div
        style={{ background: basecolor.darkBlue }}
        className="text-white text-sm w-full"
      >
        <div className="w-full px-6 lg:px-12 py-2 flex items-center justify-between">
          <div className="hidden md:flex items-center gap-6">
            <span className="opacity-80">📍 Lorem ipsum lorem ipsum</span>
            <span className="opacity-80">✉️ Lorem.ipsum@lorem.gmail.com</span>
          </div>

          <div className="flex items-center gap-3">
            <img
              src={engFlag}
              alt="English"
              className="w-5.5 h-4 object-cover cursor-pointer opacity-80 hover:opacity-100 transition"
            />

            <img
              src={idFlag}
              alt="Indonesia"
              className="w-5.5 h-4 object-cover cursor-pointer opacity-80 hover:opacity-100 transition"
            />
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div
        style={{ background: basecolor.lightBlue }}
        className="shadow-md w-full"
      >
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            {/* LOGO */}
            <Link
              to="/"
              className="text-white font-bold text-2xl tracking-wide"
            >
              CodeRing
            </Link>

            {/* DESKTOP MENU */}
            <nav className="hidden md:flex items-stretch h-full text-white font-medium">
              <Link
                to="/program"
                className="flex items-center px-4 hover:opacity-90"
              >
                PROGRAM
              </Link>

              <Link
                to="/layanan"
                className="flex items-center px-4 hover:opacity-90"
              >
                LAYANAN
              </Link>

              <Link to="#" className="flex items-center px-4 hover:opacity-90">
                TENTANG KAMI
              </Link>

              <Link to="#" className="flex items-center px-4 hover:opacity-90">
                PORTOFOLIO
              </Link>

              <Link to="#" className="flex items-center px-4 hover:opacity-90">
                BERITA
              </Link>

              <Link
                to="/hubungi"
                className="flex items-center px-6 text-white font-semibold"
                style={{ background: basecolor.orange }}
              >
                HUBUNGI KAMI
              </Link>
            </nav>

            {/* HAMBURGER BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white text-2xl"
              aria-label="Toggle Menu"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* MOBILE DROPDOWN */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ background: basecolor.lightBlue }}
        >
          <div className="flex flex-col text-white font-medium divide-y divide-white/20">
            <Link
              to="/program"
              onClick={() => setIsOpen(false)}
              className="px-6 py-4 hover:bg-white/10 transition"
            >
              PROGRAM
            </Link>

            <Link
              to="#"
              onClick={() => setIsOpen(false)}
              className="px-6 py-4 hover:bg-white/10 transition"
            >
              LAYANAN
            </Link>

            <Link
              to="#"
              onClick={() => setIsOpen(false)}
              className="px-6 py-4 hover:bg-white/10 transition"
            >
              TENTANG KAMI
            </Link>

            <Link
              to="#"
              onClick={() => setIsOpen(false)}
              className="px-6 py-4 hover:bg-white/10 transition"
            >
              PORTOFOLIO
            </Link>

            <Link
              to="#"
              onClick={() => setIsOpen(false)}
              className="px-6 py-4 hover:bg-white/10 transition"
            >
              BERITA
            </Link>

            <Link
              to="/hubungi"
              onClick={() => setIsOpen(false)}
              className="px-6 py-4 font-semibold"
              style={{ background: basecolor.orange }}
            >
              HUBUNGI KAMI
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
