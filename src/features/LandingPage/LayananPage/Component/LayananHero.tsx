import basecolor from "@/constant/color";
import layananimg from "@/assets/img/layanan.png";

const LayananHero = () => {
  return (
    <section data-aos="fade-up" className="py-12">
      <div className="py-5 px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className=" text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-bold">CodeRing</h3>

            <p className="mt-4  leading-relaxed">
              Kuasai strategi menjadi freelancer profesional untuk tingkatkan
              pendapatan secara langsung bersama para pakar berpengalaman.
            </p>
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
                src={layananimg}
                alt="Layanan"
                className="w-full h-56 md:h-72 object-cover rounded-lg shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LayananHero;
