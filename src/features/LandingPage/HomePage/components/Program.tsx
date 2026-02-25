import programImg from "@/assets/img/program.png";
import magnetric from "@/assets/img/magnetric.png";

const FeatureCard = ({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="flex items-start gap-3">
      <img src={icon} alt="feature" className="w-10 h-10" />
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-gray-500">{desc}</div>
      </div>
    </div>
  );
};

const Program = () => {
  return (
    <section data-aos="fade-up" className="bg-white pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src={programImg}
              alt="program"
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Kenapa <span className="text-orange-500">CodeRing</span> Menjadi
              Tempat Belajar Coding Terbaik
            </h2>

            <p className="mt-3 text-gray-700">
              <span className="font-semibold">CodeRing</span> sudah teruji
              menghasilkan lulusan yang kompeten di industri melalui program
              bootcamp
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard
                icon={magnetric}
                title="Lorem ipsum"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
              <FeatureCard
                icon={magnetric}
                title="Lorem ipsum"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
              <FeatureCard
                icon={magnetric}
                title="Lorem ipsum"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
              <FeatureCard
                icon={magnetric}
                title="Lorem ipsum"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
