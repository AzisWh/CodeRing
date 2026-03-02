import Header from "@/components/layout/Header/Header";
import imgheader from "@/assets/img/header.png";
import Kegiatan from "./Components/Kegiatan";

const BeritaPage = () => {
  return (
    <>
      <Header
        bg={imgheader}
        title="Update Dengan Informasi Terbaru CodeRing!"
        subtitle="Berita"
      />
      <Kegiatan />
    </>
  );
};

export default BeritaPage;
