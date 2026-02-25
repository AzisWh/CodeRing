import React from "react";

interface HeaderProps {
  title: string;
  subtitle?: string;
  bg: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, bg }) => {
  return (
    <section
      className="relative w-full h-90 flex items-center justify-center text-white"
      data-aos="fade-up"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 "></div>

      <div className="relative text-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        {subtitle && <p className="mt-2 text-lg">{subtitle}</p>}
      </div>
    </section>
  );
};

export default Header;
