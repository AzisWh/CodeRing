import Header from "@/components/layout/Header/Header";
import header from "@/assets/img/Hero.png";
import Bootcamp from "./components/Bootcamp";
import Keunggulan from "./components/Keunggulan";
import Faq from "@/components/layout/Faq/Faq";

const ProgramPage = () => {
  return (
    <div>
      <Header
        title="Bootcamp Program CodeRing!"
        subtitle="Program"
        bg={header}
      />
      <Bootcamp />
      <Keunggulan />
      <Faq />
    </div>
  );
};

export default ProgramPage;
