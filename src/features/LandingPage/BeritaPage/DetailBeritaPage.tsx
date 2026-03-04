import { useNavigate, useParams } from "react-router-dom";
import { articles } from "./type/data";
import Header from "@/components/layout/Header/Header";
import basecolor from "@/constant/color";
import phpimg from "@/assets/img/php.png";

const DetailBeritaPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const article = articles.find((a) => a.id === Number(id));
  const relatedPosts = articles.filter((a) => a.id !== Number(id)).slice(0, 3);

  if (!article) {
    return <div className="p-10">Artikel tidak ditemukan</div>;
  }

  return (
    <>
      <Header
        title={article.title}
        subtitle={article.category}
        bg={article.detailimage}
      />

      <section className="py-12 px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          <div
            className="flex-1 rounded-2xl p-8"
            style={{ backgroundColor: basecolor.lightgrey }}
          >
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: basecolor.darkBlue }}
            >
              {article.title}
            </h2>

            <p className="text-sm mb-6" style={{ color: basecolor.darkgrey }}>
              {article.date}
            </p>

            <p className="leading-relaxed mb-8 text-justify">
              {article.description}
              <br />
              <br />
              {article.content}
            </p>

            <img
              src={article.image}
              alt="additional"
              className="w-full rounded-lg mb-8"
            />

            <p className="leading-relaxed mb-8 text-justify">
              {article.content}
            </p>

            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 text-white rounded"
              style={{ backgroundColor: basecolor.darkBlue }}
            >
              Kembali
            </button>
          </div>

          {/* Right: Related Posts */}
          <div className="lg:w-72 xl:w-80 shrink-0">
            <div className="mb-6">
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: basecolor.darkBlue }}
              >
                Related Posts
              </h3>
              <div
                className="h-0.5 w-1/4 rounded"
                style={{ backgroundColor: basecolor.darkBlue }}
              />
            </div>

            <div className="flex flex-col gap-4">
              {relatedPosts.map((post) => (
                <div
                  key={post.id}
                  className="flex items-center gap-3 cursor-pointer group"
                  onClick={() => navigate(`/berita/${post.id}`)}
                >
                  <img
                    src={phpimg}
                    alt={post.title}
                    className="w-16 h-16 object-cover rounded-lg shrink-0"
                  />
                  <div>
                    <p
                      className="text-xs mb-1"
                      style={{ color: basecolor.darkgrey }}
                    >
                      {post.category}
                    </p>
                    <p
                      className="text-sm font-bold leading-snug group-hover:underline"
                      style={{ color: basecolor.darkBlue }}
                    >
                      {post.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailBeritaPage;
