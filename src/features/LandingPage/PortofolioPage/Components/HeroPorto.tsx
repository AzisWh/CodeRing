import { useState } from "react";
import basecolor from "@/constant/color";
import { Button } from "@/components/ui/button";
import img1 from "@/assets/img/Halaman1.png";
import img2 from "@/assets/img/Halaman2.png";

interface SlideItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

const SLIDES: SlideItem[] = [
  {
    id: 1,
    title: "Website Kampus",
    subtitle: "Universitas Lorem Ipsum",
    image: img1,
  },
  {
    id: 2,
    title: "Website Sekolah",
    subtitle: "PT Ipsum",
    image: img2,
  },
];

const ArrowButton = ({
  dir = "left",
  onClick,
}: {
  dir?: "left" | "right";
  onClick?: () => void;
}) => {
  const common =
    "absolute top-1/2 -translate-y-1/2 p-2 rounded-full text-white cursor-pointer z-20";
  const pos = dir === "left" ? "left-4" : "right-4";

  return (
    <button
      onClick={onClick}
      className={`${common} ${pos} hover:text-gray-300 transition`}
      aria-label={dir === "left" ? "Previous" : "Next"}
    >
      {dir === "left" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      )}
    </button>
  );
};

const HeroPorto = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const current = SLIDES[index];

  return (
    <section
      data-aos="fade-up"
      className="py-16"
      style={{ backgroundColor: "#F5F7FA" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="md:flex-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              Portofolio Hasil Pekerjaan Kami
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerisque, libero et volutpat varius, eros turpis cursus risus,
              eget ullamcorper elit arcu non libero.
            </p>
          </div>

          <div className="md:ml-6 md:shrink-0">
            <Button
              className="px-6 py-2 rounded-lg shadow-md text-white"
              style={{ backgroundColor: basecolor.orange }}
            >
              LIHAT SEMUA
            </Button>
          </div>
        </div>

        <div className="mt-10 relative rounded-2xl overflow-hidden h-64 md:h-80 lg:h-112.5">
          <img
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover transition-all duration-500"
          />

          <div className="absolute inset-0" />

          <div className="absolute bottom-10 left-8 md:left-12 z-10 text-white">
            <h3 className="text-2xl md:text-4xl font-semibold">
              {current.title}
            </h3>
            <p className="mt-2 text-sm md:text-base opacity-90">
              {current.subtitle}
            </p>
          </div>

          <ArrowButton dir="left" onClick={prevSlide} />
          <ArrowButton dir="right" onClick={nextSlide} />
        </div>
      </div>
    </section>
  );
};

export default HeroPorto;
