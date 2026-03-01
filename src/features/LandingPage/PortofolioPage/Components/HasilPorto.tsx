import bootcampImg from "@/assets/img/bootcamp.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import basecolor from "@/constant/color";
import { useEffect, useMemo, useState } from "react";

interface BootcampItem {
  id: number;
  title: string;
  description: string;
  image: string;
  type: "website" | "fe" | "be" | "uiux" | "grapdesg";
}

const BOOTCAMPS: BootcampItem[] = [
  {
    id: 7,
    title: "User Research Fundamentals",
    description: "Conduct interviews and usability testing.",
    image: bootcampImg,
    type: "uiux",
  },
  {
    id: 2,
    title: "Brand Identity Design",
    description: "Create strong visual branding and logo systems.",
    image: bootcampImg,
    type: "grapdesg",
  },
  {
    id: 16,
    title: "Build Full E-Commerce Website",
    description:
      "Create a complete e-commerce platform with cart, checkout, and payment integration.",
    image: bootcampImg,
    type: "website",
  },
  {
    id: 4,
    title: "Figma to Prototype",
    description: "Interactive prototyping and usability flow.",
    image: bootcampImg,
    type: "uiux",
  },
  {
    id: 13,
    title: "Frontend Performance",
    description: "Optimize rendering and reduce bundle size.",
    image: bootcampImg,
    type: "fe",
  },
  {
    id: 9,
    title: "Next.js Fullstack Apps",
    description: "SSR, routing, and backend integration.",
    image: bootcampImg,
    type: "fe",
  },
  {
    id: 18,
    title: "Landing Page Conversion Mastery",
    description: "Build high-converting landing pages with SEO optimization.",
    image: bootcampImg,
    type: "website",
  },
  {
    id: 1,
    title: "Advanced React Patterns",
    description: "Context, compound components, and performance tuning.",
    image: bootcampImg,
    type: "fe",
  },
  {
    id: 20,
    title: "CMS-Based Blog Website",
    description:
      "Develop a blog platform with admin dashboard and content management system.",
    image: bootcampImg,
    type: "website",
  },
  {
    id: 6,
    title: "Database Architecture",
    description: "Design relational and NoSQL database systems.",
    image: bootcampImg,
    type: "be",
  },
  {
    id: 11,
    title: "Wireframing & UX Strategy",
    description: "Low-fidelity to high-fidelity wireframes.",
    image: bootcampImg,
    type: "uiux",
  },
  {
    id: 3,
    title: "REST API Development",
    description: "Build scalable APIs with Node.js and Express.",
    image: bootcampImg,
    type: "be",
  },
  {
    id: 17,
    title: "Company Profile Website Development",
    description: "Design and deploy a professional company profile website.",
    image: bootcampImg,
    type: "website",
  },
  {
    id: 14,
    title: "Authentication & Security",
    description: "JWT, OAuth, and backend security best practices.",
    image: bootcampImg,
    type: "be",
  },
  {
    id: 5,
    title: "Responsive Web Design",
    description: "Master flexbox, grid, and mobile-first design.",
    image: bootcampImg,
    type: "fe",
  },
  {
    id: 19,
    title: "Portfolio Website for Developers",
    description:
      "Create a modern portfolio website with animation and deployment.",
    image: bootcampImg,
    type: "website",
  },
  {
    id: 10,
    title: "Microservices Architecture",
    description: "Design distributed backend systems.",
    image: bootcampImg,
    type: "be",
  },
  {
    id: 8,
    title: "Social Media Design",
    description: "Create engaging content for digital platforms.",
    image: bootcampImg,
    type: "grapdesg",
  },
  {
    id: 15,
    title: "Design System Creation",
    description: "Build reusable UI components and style guides.",
    image: bootcampImg,
    type: "uiux",
  },
  {
    id: 12,
    title: "Typography & Layout Design",
    description: "Visual hierarchy and modern composition.",
    image: bootcampImg,
    type: "grapdesg",
  },
];

const HasilPorto = () => {
  const [filter, setFilter] = useState<
    "all" | "website" | "fe" | "be" | "uiux" | "grapdesg"
  >("all");
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
          { label: "WEBSITE", value: "website" },
          { label: "FRONT END", value: "fe" },
          { label: "BACK END", value: "be" },
          { label: "UI/UX DESIGN", value: "uiux" },
          { label: "GRAPHIC DESIGN", value: "grapdesg" },
          { label: "SEMUA", value: "all" },
        ].map((btn) => {
          const isActive = filter === btn.value;

          return (
            <Button
              key={btn.value}
              onClick={() => {
                setFilter(
                  btn.value as "all" | "fe" | "be" | "uiux" | "grapdesg",
                );
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
            <div
              className="relative aspect-video overflow-hidden p-4 rounded-t-lg"
              style={{ backgroundColor: basecolor.darkBlue }}
            >
              <img
                src={b.image}
                alt={b.title}
                className="w-full h-full object-cover rounded-md"
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

export default HasilPorto;
