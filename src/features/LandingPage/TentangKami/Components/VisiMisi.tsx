import basecolor from "@/constant/color";

const VisiMisi = () => {
  return (
    <section
      data-aos="fade-up"
      className="py-16 px-6 sm:px-12 lg:px-24"
      style={{ backgroundColor: basecolor.lightBlue }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Visi Lorem
            </h2>
            <p className="text-white/80 leading-relaxed text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerisque, libero et volutpat varius, eros turpis cursus risus,
              eget ullamcorper elit arcu non libero.
            </p>
          </div>

          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Misi Lorem
            </h2>
            <p className="text-white/80 leading-relaxed text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerisque, libero et volutpat varius, eros turpis cursus risus,
              eget ullamcorper elit arcu non libero.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
