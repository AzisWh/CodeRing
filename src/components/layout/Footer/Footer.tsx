import React from "react";
import basecolor from "@/constant/color";
import { FooterLogo } from "./components/FooterLogo";
import { FooterContact } from "./components/FooterContact";
import { FooterLinks } from "./components/FooterLinks";
import { FooterBottom } from "./components/FooterBottom";

const Footer: React.FC = () => {
  return (
    <footer className="relative" data-aos="fade-up">
      <div
        style={{ backgroundColor: basecolor.lightBlue }}
        className="pt-16 md:pt-12 pb-16"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="flex flex-col items-center md:items-start">
              <FooterLogo />
            </div>

            <div className="flex justify-center md:justify-start">
              <FooterContact />
            </div>

            <div className="flex justify-center md:justify-end">
              <FooterLinks />
            </div>
          </div>
        </div>
      </div>

      <FooterBottom />
    </footer>
  );
};

export default Footer;
