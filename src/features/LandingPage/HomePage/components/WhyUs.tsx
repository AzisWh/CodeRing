import whyusImg from "@/assets/img/whyus.png";
import { Button } from "@/components/ui/button";
import basecolor from "@/constant/color";

const WhyUs = () => {
  return (
    <section
      data-aos="fade-up"
      className="py-12"
      style={{ backgroundColor: basecolor.darkBlue }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-white text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-bold">
              Kenapa Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>

            <p className="mt-4 text-white/90 leading-relaxed">
              Kuasai strategi menjadi freelancer profesional untuk tingkatkan
              pendapatan secara langsung bersama para pakar berpengalaman.
            </p>

            <div className="mt-6 flex justify-center lg:justify-start">
              <Button
                className="inline-flex items-center gap-3 w-[50%] px-10 py-3 rounded-md shadow-md text-white"
                style={{ backgroundColor: basecolor.orange }}
              >
                <span>Lihat Semua</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div
              className="rounded-xl overflow-hidden p-3"
              style={{
                border: `4px solid ${basecolor.orange}`,
                backgroundColor: basecolor.lightBlue,
                maxWidth: 560,
              }}
            >
              <img
                src={whyusImg}
                alt="Why us"
                className="w-full h-56 md:h-72 object-cover rounded-lg shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
