import tentangImg from "@/assets/img/aboutus.png";
import basecolor from "@/constant/color";

const TentangHero = () => {
  return (
    <section data-aos="fade-up" className="py-12 px-12">
      <div className="py-5 px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className=" text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-bold">
              Apasih itu{" "}
              <span style={{ color: basecolor.orange }}>CodeRing</span>{" "}
            </h3>

            <p className="mt-4  leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerisque, libero et volutpat varius, eros turpis cursus risus,
              eget ullamcorper elit arcu non libero. Integer vulputate, lectus
              at egestas consequat, risus lorem imperdiet metus, id gravida
              lectus quam eget risus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nullam scelerisque, libero et volutpat varius,
              eros turpis cursus risus, eget ullamcorper elit vulputate, lectus
              at egestas consequat, risus lorem imperdiet metus, id gravida
              lectus quam eget risus.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div
              className="rounded-xl overflow-hidden p-3"
              style={{
                maxWidth: 560,
              }}
            >
              <img
                src={tentangImg}
                alt="Layanan"
                className="w-full h-56 md:h-72 object-cover rounded-lg "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TentangHero;
