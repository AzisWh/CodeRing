import { Card, CardContent } from "@/components/ui/card";
import commentIcon from "@/assets/img/commentorange.png";

interface FokusItem {
  id: number;
  title: string;
  description: string;
}

const DATA: FokusItem[] = [
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

const TentangFokus = () => {
  return (
    <section className="py-16 px-6 sm:px-12 lg:px-24 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Fokus Kami
        </h2>

        <div className="flex flex-col md:flex-row gap-8 justify-between">
          {DATA.map((item) => (
            <Card
              key={item.id}
              className="flex-1 border-none shadow-none bg-transparent"
            >
              <CardContent className="flex flex-col items-center text-center p-6">
                <img src={commentIcon} alt="icon" className="w-16 h-16 mb-6" />

                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>

                <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TentangFokus;
