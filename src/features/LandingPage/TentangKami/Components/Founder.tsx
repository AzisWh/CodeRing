import img1 from "@/assets/img/gptimg.png";
import img2 from "@/assets/img/gptimg-2.png";
import { Card, CardContent } from "@/components/ui/card";
import basecolor from "@/constant/color";

interface FounderItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const DATA: FounderItem[] = [
  {
    id: 1,
    title: "Sujatmiko Supri",
    description: "Co-Founder, Chief of Business",
    image: img1,
  },
  {
    id: 2,
    title: "Supriyadi Rostad",
    description: "Co-Founder, Chief of Evolution (Product & Content)",
    image: img2,
  },
  {
    id: 3,
    title: "Muhammad Trunojoyo",
    description: "Co-Founder, Chief of Technology",
    image: img1,
  },
];

const Founder = () => {
  return (
    <section className="py-5 px-4 sm:px-8 lg:px-16" data-aos="fade-up">
      <div className="md:px-5 px-0 pb-2">
        <h2 className="text-2xl font-semibold text-center">
          Berkenalan dengan Pendiri{" "}
          <span style={{ color: basecolor.orange }}>CodeRing</span>{" "}
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {DATA.map((item) => (
          <Card
            key={item.id}
            data-aos="fade-up"
            style={{ background: basecolor.grey }}
            className="w-full max-w-sm p-0 rounded-lg"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>

            <CardContent className="p-4 text-center">
              <h3 className=" text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Founder;
