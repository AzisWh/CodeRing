import basecolor from "@/constant/color";
import secIcon from "@/assets/img/sec.png";
import sec2Icon from "@/assets/img/sec-1.png";

const Banner = () => {
  return (
    <section data-aos="fade-up" className="pb-4 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Pilihan Program dan Layanan yang Bervariasi di{" "}
          <span style={{ color: basecolor.lightBlue }}>CodeRing</span>
        </h2>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          scelerisque, libero et volutpat varius, eros turpis cursus risus, eget
          ullamcorper elit arcu non libero.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button
            style={{ backgroundColor: basecolor.lightBlue }}
            className="flex items-center gap-2 text-white px-6 py-3 rounded-lg shadow-md hover:opacity-95 transition"
          >
            <img src={secIcon} alt="icon" className="w-5 h-5 object-contain" />
            Lorem Ipsumrol
          </button>

          <button
            style={{ backgroundColor: basecolor.greyBlue }}
            className="flex items-center gap-2 text-white px-6 py-3 rounded-lg shadow-md hover:opacity-95 transition"
          >
            <img src={sec2Icon} alt="icon" className="w-5 h-5 object-contain" />
            Lorem Ipsumrol
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
