import img1 from "@/assets/img/gptimg.png";
import img2 from "@/assets/img/gptimg-2.png";
import { Card, CardContent } from "@/components/ui/card";
import basecolor from "@/constant/color";

interface LayananItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const DATA: LayananItem[] = [
  {
    id: 1,
    title: "Web Development Basics",
    description: "Learn HTML, CSS, and JS fundamentals.",
    image: img1,
  },
  {
    id: 2,
    title: "React Intensive",
    description: "State management, hooks, and routing.",
    image: img2,
  },
  {
    id: 3,
    title: "UI/UX Foundations",
    description: "Design thinking and prototyping basics.",
    image: img1,
  },
  {
    id: 4,
    title: "Backend Essentials",
    description: "Node.js, REST APIs and databases.",
    image: img2,
  },
];

const LayananKami = () => {
  return (
    <section className="py-5 px-4 sm:px-8 lg:px-16" data-aos="fade-up">
      <div className="md:px-5 px-0 pb-2">
        <h2 className="text-2xl font-semibold">Layanan Kami</h2>
        <p className="leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {DATA.map((item) => (
          <Card
            key={item.id}
            data-aos="fade-up"
            style={{ background: basecolor.grey }}
            className="relative mx-auto w-full max-w-sm pt-0 rounded-lg"
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

export default LayananKami;
