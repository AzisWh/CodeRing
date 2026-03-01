import Header from "@/components/layout/Header/Header";
import imgheader from "@/assets/img/header.png";
import HeroPorto from "./Components/HeroPorto";
import HasilPorto from "./Components/HasilPorto";

const PortofolioPage = () => {
  return (
    <>
      <Header bg={imgheader} title="Lihat Proyek Kami!" subtitle="Portofolio" />
      <HeroPorto />
      <HasilPorto />
    </>
  );
};

export default PortofolioPage;
