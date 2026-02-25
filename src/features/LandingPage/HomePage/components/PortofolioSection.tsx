import basecolor from "@/constant/color";
import carouselImg from "@/assets/img/carousels.png";
import { Button } from "@/components/ui/button";

const ArrowButton = ({
  dir = "left",
  onClick,
}: {
  dir?: "left" | "right";
  onClick?: () => void;
}) => {
  const common =
    "absolute top-1/2 -translate-y-1/2 p-2 rounded-full text-white cursor-pointer";
  const pos = dir === "left" ? "left-4" : "right-4";

  return (
    <button
      onClick={onClick}
      className={`${common} ${pos} hover:text-gray-400`}
      aria-label={dir === "left" ? "Previous" : "Next"}
    >
      {dir === "left" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
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
          className="w-6 h-6"
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

const PortfolioSection = () => {
  return (
    <section data-aos="fade-up" className="py-16" style={{ backgroundColor: "#F5F7FA" }} >
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
              className="px-6 py-2 rounded-lg shadow-md"
              style={{ backgroundColor: basecolor.orange }}
            >
              LIHAT SEMUA
            </Button>
          </div>
        </div>

        <div className="mt-8 relative rounded-xl overflow-hidden">
          <img
            src={carouselImg}
            alt="carousel"
            className="w-full object-cover h-56 md:h-64 lg:h-112.5"
          />

          <ArrowButton dir="left" />
          <ArrowButton dir="right" />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
