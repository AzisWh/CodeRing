import Header from "@/components/layout/Header/Header";
import header from "@/assets/img/Hero.png";
import LayananHero from "./Component/LayananHero";
import LayananKami from "./Component/LayananKami";
import FokusKami from "./Component/FokusKami";
import Faq from "@/components/layout/Faq/Faq";

const LayananPage = () => {
  return (
    <>
      <Header title="Layanan CodeRing!" subtitle="Layanan" bg={header} />
      <LayananHero />
      <LayananKami />
      <FokusKami />
      <Faq />
    </>
  );
};

export default LayananPage;
