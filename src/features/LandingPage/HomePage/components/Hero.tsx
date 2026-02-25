import React from "react";
import heroImg from "@/assets/img/Hero.png";
import { basecolor } from "../../../../constant/color";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section
      data-aos="fade-up"
      aria-label="Hero"
      style={{
        backgroundImage: ` url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full min-h-[90vh] flex items-center"
    >
      <div className="max-w-7xl w-full px-6 sm:px-10 lg:pl-24 xl:pl-32">
        <div className="flex">
          <div className="w-full lg:w-7/12 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight w-[120%]">
              Kuasai Teknologi, Raih Kesuksesan Di Industri!
            </h1>

            <p className="mt-6 text-sm sm:text-base text-gray-100 max-w-150">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerisque, libero et volutpat varius, eros turpis cursus risus,
              eget ullamcorper elit arcu non libero. Integer vulputate, lectus
              at egestas consequat, risus lorem imperdiet metus, id gravida
              lectus quam eget risus.
            </p>

            <p className="mt-6 text-md font-medium text-gray-200 fw-bold">
              Ingin tahu lebih lanjut?
            </p>

            <div className="mt-6">
              <Button
                className="px-12 py-5 w-[80%] text-lg font-semibold"
                style={{ backgroundColor: basecolor.orange }}
              >
                Konsultasi
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
