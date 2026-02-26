import header from "@/assets/img/Hero.png";
import Header from "@/components/layout/Header/Header";
import TentangHero from "./Components/TentangHero";
import VisiMisi from "./Components/VisiMisi";
import TentangFokus from "./Components/TentangFokus";
import Founder from "./Components/Founder";
import Kolaborasi from "./Components/Kolaborasi";

const TentangKamiPage = () => {
  return (
    <div>
      <Header
        title="Halo Ini Kami CodeRing!"
        subtitle="Tentang Kami"
        bg={header}
      />
      <TentangHero />
      <VisiMisi />
      <TentangFokus />
      <Founder />
      <div className="py-10 md:py-16 lg:py-32">
        <Kolaborasi />
      </div>
    </div>
  );
};

export default TentangKamiPage;
