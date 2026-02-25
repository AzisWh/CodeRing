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
    image: bootcampImg,
    type: "full-day",
  },
  {
    id: 2,
    title: "React Intensive",
    description: "State management, hooks, and routing.",
    image: bootcampImg,
    type: "night",
  },
  {
    id: 3,
    title: "UI/UX Foundations",
    description: "Design thinking and prototyping basics.",
    image: bootcampImg,
    type: "full-day",
  },
  {
    id: 4,
    title: "Backend Essentials",
    description: "Node.js, REST APIs and databases.",
    image: bootcampImg,
    type: "night",
  },
  {
    id: 5,
    title: "Fullstack Project",
    description: "Build and deploy a fullstack app.",
    image: bootcampImg,
    type: "full-day",
  },
  {
    id: 6,
    title: "Testing & QA",
    description: "Automated testing with Jest and Playwright.",
    image: bootcampImg,
    type: "night",
  },
  {
    id: 7,
    title: "Performance Optimization",
    description: "Improve web performance and monitoring.",
    image: bootcampImg,
    type: "full-day",
  },
  {
    id: 8,
    title: "Career Prep",
    description: "Interview prep, resumes, and portfolios.",
    image: bootcampImg,
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
            style={{ background: basecolor.grey }}
            className="relative mx-auto w-full max-w-sm pt-0 rounded-lg"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={b.image}
                alt={b.title}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>

            <CardContent className="p-4 text-center">
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
