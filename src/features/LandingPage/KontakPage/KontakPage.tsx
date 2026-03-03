import Header from "@/components/layout/Header/Header";
import header from "@/assets/img/Hero.png";
import FormKontak from "./Components/FormKontak";
import MapKontak from "./Components/MapKontak";

const KontakPage = () => {
  return (
    <>
      <Header title="Kontak CodeRing!" subtitle="Kontak" bg={header} />
      <FormKontak />
      <MapKontak />
    </>
  );
};

export default KontakPage;
