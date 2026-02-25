import { Card, CardContent } from "@/components/ui/card";
import basecolor from "@/constant/color";
import commentIcon from "@/assets/img/comment.png";

interface FokusKamiItem {
  id: number;
  title: string;
  description: string;
}

const DATA: FokusKamiItem[] = [
  {
    id: 1,
    title: "Kebutuhan Kostumer",
    description:
      "Kami fokus pada kebutuhan Anda dan menyesuaikan pekerjaan kami untuk memecahkan masalah Anda.",
  },
  {
    id: 2,
    title: "Kebutuhan Kostumer",
    description:
      "Kami fokus pada kebutuhan Anda dan menyesuaikan pekerjaan kami untuk memecahkan masalah Anda.",
  },
  {
    id: 3,
    title: "Kebutuhan Kostumer",
    description:
      "Kami fokus pada kebutuhan Anda dan menyesuaikan pekerjaan kami untuk memecahkan masalah Anda.",
  },
  {
    id: 4,
    title: "Kebutuhan Kostumer",
    description:
      "Kami fokus pada kebutuhan Anda dan menyesuaikan pekerjaan kami untuk memecahkan masalah Anda.",
  },
];

const FokusKami = () => {
  return (
    <section
      className="py-16 px-4 sm:px-8 lg:px-16"
      data-aos="fade-up"
      style={{ backgroundColor: basecolor.lightBlue }}
    >
      <div className="text-center text-white mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">Fokus Kami</h2>
        <p className="text-sm sm:text-base opacity-90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {DATA.map((item) => (
          <Card
            key={item.id}
            className="rounded-xl bg-white border-none shadow-md hover:shadow-lg transition duration-300"
          >
            <CardContent className="flex flex-col items-center text-center p-8">
              <img src={commentIcon} alt="icon" className="w-12 h-12 mb-4" />

              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FokusKami;
