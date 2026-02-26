import { Button } from "@/components/ui/button";
import kolaborasi from "@/assets/img/kolaborasi.png";
import basecolor from "@/constant/color";
import { useNavigate } from "react-router-dom";

const Kolaborasi = () => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full">
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${kolaborasi})`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: basecolor.darkBlue,
            opacity: 0.8,
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center text-center py-20 px-6 sm:px-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-8">
            Mari Berkolaborasi
          </h2>

          <div className="flex flex-col gap-4 w-full md:w-200 ">
            <Button
              className="px-8 py-6 text-white hover:opacity-90 transition"
              style={{ backgroundColor: basecolor.orange }}
              onClick={() => navigate("/kontak")}
            >
              Kontak Kami
            </Button>

            <Button
              className="px-8 py-6 text-white hover:opacity-90 transition"
              style={{ backgroundColor: basecolor.orange }}
              onClick={() => navigate("/portofolio")}
            >
              Lihat Portofolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kolaborasi;
