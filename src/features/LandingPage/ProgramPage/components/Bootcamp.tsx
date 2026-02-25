import React, { useEffect, useMemo, useState } from "react";
import bootcampImg from "@/assets/img/bootcamp.png";
import { Button } from "@/components/ui/button";
import { basecolor } from "@/constant/color";
import { Card, CardContent } from "@/components/ui/card";

interface BootcampItem {
  id: number;
  title: string;
  description: string;
  image: string;
  type: "full-day" | "night";
}

const BOOTCAMPS: BootcampItem[] = [
  {
    id: 1,
    title: "Web Development Basics",
    description: "Learn HTML, CSS, and JS fundamentals.",
    image: "https://via.placeholder.com/560x320.png?text=Bootcamp+1",
    type: "full-day",
  },
  {
    id: 2,
    title: "React Intensive",
    description: "State management, hooks, and routing.",
    image: "https://via.placeholder.com/560x320.png?text=Bootcamp+2",
    type: "night",
  },
  {
    id: 3,
    title: "UI/UX Foundations",
    description: "Design thinking and prototyping basics.",
    image: "https://via.placeholder.com/560x320.png?text=Bootcamp+3",
    type: "full-day",
  },
  {
    id: 4,
    title: "Backend Essentials",
    description: "Node.js, REST APIs and databases.",
    image: "https://via.placeholder.com/560x320.png?text=Bootcamp+4",
    type: "night",
  },
  {
    id: 5,
    title: "Fullstack Project",
    description: "Build and deploy a fullstack app.",
    image: "https://via.placeholder.com/560x320.png?text=Bootcamp+5",
    type: "full-day",
  },
  {
    id: 6,
    title: "Testing & QA",
    description: "Automated testing with Jest and Playwright.",
    image: "https://via.placeholder.com/560x320.png?text=Bootcamp+6",
    type: "night",
  },
  {
    id: 7,
    title: "Performance Optimization",
    description: "Improve web performance and monitoring.",
    image: "https://via.placeholder.com/560x320.png?text=Bootcamp+7",
    type: "full-day",
  },
  {
    id: 8,
    title: "Career Prep",
    description: "Interview prep, resumes, and portfolios.",
    image: "https://via.placeholder.com/560x320.png?text=Bootcamp+8",
    type: "night",
  },
];

const Bootcamp: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "full-day" | "night">("all");
  const [visibleCount, setVisibleCount] = useState<number>(8);
  const [isAllVisible, setIsAllVisible] = useState(false);

  useEffect(() => {
    const computeInitial = () => {
      const w = window.innerWidth;
      if (w < 640) return 4;
      return 8;
    };

    setVisibleCount(computeInitial());

    const onResize = () => {
      if (!isAllVisible) setVisibleCount(computeInitial());
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isAllVisible]);

  const filtered = useMemo(() => {
    if (filter === "all") return BOOTCAMPS;
    return BOOTCAMPS.filter((b) => b.type === filter);
  }, [filter]);

  const visibleList = isAllVisible ? filtered : filtered.slice(0, visibleCount);

  const showMoreNeeded = filtered.length > visibleCount && !isAllVisible;

  return (
    <section className="py-10 px-4 sm:px-8 lg:px-16" data-aos="fade-up">
      <h2 className="text-2xl font-semibold mb-4">Topik Bootcamp</h2>

      <div className="flex gap-3 mb-6 flex-wrap">
        {[
          { label: "Full-Day Bootcamp", value: "full-day" },
          { label: "Night Bootcamp", value: "night" },
          { label: "Semua", value: "all" },
        ].map((btn) => {
          const isActive = filter === btn.value;

          return (
            <Button
              key={btn.value}
              onClick={() => {
                setFilter(btn.value as "all" | "full-day" | "night");
                setIsAllVisible(false);
              }}
              style={{
                backgroundColor: isActive ? "#000000" : basecolor.orange,
                color: "white",
              }}
              className="transition-all duration-300 hover:opacity-90"
            >
              {btn.label}
            </Button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleList.map((b) => (
          <Card
            key={b.id}
            data-aos="fade-up"
            className="overflow-hidden border border-gray-200 hover:shadow-md transition duration-300"
          >
            <div className="h-44 w-full overflow-hidden bg-slate-100">
              <img
                src={bootcampImg}
                alt={b.title}
                className="object-cover w-full h-full"
              />
            </div>

            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-1">{b.title}</h3>
              <p className="text-sm text-gray-600">{b.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {showMoreNeeded && (
        <div className="mt-8 flex justify-center">
          <Button
            onClick={() => setIsAllVisible(true)}
            style={{ backgroundColor: basecolor.darkBlue, color: "white" }}
            className="w-full sm:w-auto px-6"
          >
            Lihat Lebih Lengkap
          </Button>
        </div>
      )}
    </section>
  );
};

export default Bootcamp;
