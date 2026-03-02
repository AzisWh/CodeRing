import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { basecolor } from "@/constant/color";
import phpimg from "@/assets/img/php.png";

const ITEMS_PER_PAGE = 9;

const articles = [
  {
    id: 1,
    title: "Framework PHP Mana Yang Tepat",
    category: "Web Development",
    date: "29 Dec, 2025",
    description:
      "Berikut adalah panduan untuk memilih Framework PHP mana yang tepat untuk aplikasi Anda.",
    image: phpimg,
  },
  {
    id: 2,
    title: "Framework PHP Mana Yang Tepat",
    category: "Web Development",
    date: "29 Dec, 2025",
    description:
      "Berikut adalah panduan untuk memilih Framework PHP mana yang tepat untuk aplikasi Anda.",
    image: phpimg,
  },
  {
    id: 3,
    title: "Framework PHP Mana Yang Tepat",
    category: "Web Development",
    date: "29 Dec, 2025",
    description:
      "Berikut adalah panduan untuk memilih Framework PHP mana yang tepat untuk aplikasi Anda.",
    image: phpimg,
  },
  {
    id: 4,
    title: "Framework PHP Mana Yang Tepat",
    category: "Web Development",
    date: "29 Dec, 2025",
    description:
      "Berikut adalah panduan untuk memilih Framework PHP mana yang tepat untuk aplikasi Anda.",
    image: phpimg,
  },
  {
    id: 5,
    title: "Framework PHP Mana Yang Tepat",
    category: "Web Development",
    date: "29 Dec, 2025",
    description:
      "Berikut adalah panduan untuk memilih Framework PHP mana yang tepat untuk aplikasi Anda.",
    image: phpimg,
  },
  {
    id: 6,
    title: "Framework PHP Mana Yang Tepat",
    category: "Web Development",
    date: "29 Dec, 2025",
    description:
      "Berikut adalah panduan untuk memilih Framework PHP mana yang tepat untuk aplikasi Anda.",
    image: phpimg,
  },
  {
    id: 7,
    title: "Framework PHP Mana Yang Tepat",
    category: "Web Development",
    date: "29 Dec, 2025",
    description:
      "Berikut adalah panduan untuk memilih Framework PHP mana yang tepat untuk aplikasi Anda.",
    image: phpimg,
  },
  {
    id: 8,
    title: "Framework PHP Mana Yang Tepat",
    category: "Web Development",
    date: "29 Dec, 2025",
    description:
      "Berikut adalah panduan untuk memilih Framework PHP mana yang tepat untuk aplikasi Anda.",
    image: phpimg,
  },
  {
    id: 9,
    title: "Framework PHP Mana Yang Tepat",
    category: "Web Development",
    date: "29 Dec, 2025",
    description:
      "Berikut adalah panduan untuk memilih Framework PHP mana yang tepat untuk aplikasi Anda.",
    image: phpimg,
  },
  {
    id: 10,
    title: "Framework PHP Mana Yang Tepat",
    category: "UI/UX",
    date: "29 Dec, 2025",
    description:
      "Berikut adalah panduan untuk memilih Framework PHP mana yang tepat untuk aplikasi Anda.",
    image: phpimg,
  },
  {
    id: 11,
    title: "Framework PHP Mana Yang Tepat",
    category: "Backend",
    date: "29 Dec, 2025",
    description:
      "Berikut adalah panduan untuk memilih Framework PHP mana yang tepat untuk aplikasi Anda.",
    image: phpimg,
  },
  {
    id: 12,
    title: "Framework PHP Mana Yang Tepat",
    category: "Graphic Design",
    date: "29 Dec, 2025",
    description:
      "Berikut adalah panduan untuk memilih Framework PHP mana yang tepat untuk aplikasi Anda.",
    image: phpimg,
  },
];

const categories = ["Web Development", "UI/UX", "Backend", "Graphic Design"];

const Kegiatan = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);
  const paginatedArticles = articles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <section
      className="py-12 px-4 sm:px-6 lg:px-16 bg-white"
      data-aos="fade-up"
    >
      <div className="mb-8">
        <h1
          className="text-3xl sm:text-4xl font-bold"
          style={{ color: basecolor.darkBlue }}
        >
          Berita &amp; Kegiatan
        </h1>
        <p className="text-sm mt-1" style={{ color: basecolor.darkgrey }}>
          Membuka Pengetahuan, Pikiran yang Menginspirasi
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1 lg:w-[70%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {paginatedArticles.map((article) => (
              <div key={article.id}>
                <Card
                  className="overflow-hidden border-0 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 cursor-pointer gap-0 py-0"
                  style={{ backgroundColor: basecolor.lightGrey }}
                >
                  <div className="w-full h-44 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <CardContent className="px-4 pt-3 pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="text-xs italic font-medium"
                        style={{ color: basecolor.darkgrey }}
                      >
                        {article.category}
                      </span>
                      <span
                        className="text-xs"
                        style={{ color: basecolor.darkgrey }}
                      >
                        {article.date}
                      </span>
                    </div>

                    <h3
                      className="text-sm font-bold leading-snug mb-1"
                      style={{ color: basecolor.darkBlue }}
                    >
                      {article.title}
                    </h3>

                    <p
                      className="text-xs italic leading-relaxed line-clamp-3"
                      style={{ color: basecolor.darkgrey }}
                    >
                      {article.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className="w-8 h-8 rounded text-sm font-medium transition-all duration-200"
                style={{
                  backgroundColor:
                    currentPage === page ? basecolor.darkBlue : basecolor.grey,
                  color: currentPage === page ? "#ffffff" : basecolor.darkgrey,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {page}
              </button>
            ))}
          </div>
        </div>

        <aside className="w-full lg:w-[28%] lg:top-24 self-start">
          <div className="p-5">
            <h2
              className="text-lg font-bold mb-4 relative inline-block"
              style={{ color: basecolor.darkBlue }}
            >
              Category
              <span
                className="absolute left-0 -bottom-1 h-0.75 w-1/4 rounded-full"
                style={{ backgroundColor: basecolor.darkBlue }}
              />
            </h2>

            <ul className="flex flex-col gap-3 mt-4">
              {categories.map((cat, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <span
                    className="w-3 h-3 rounded-full shrink-0 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: basecolor.darkBlue }}
                  />
                  <span
                    className="text-sm font-semibold group-hover:underline"
                    style={{ color: basecolor.darkBlue }}
                  >
                    {cat}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Kegiatan;
