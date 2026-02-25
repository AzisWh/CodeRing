import Banner from "./components/Banner";
import PortfolioSection from "./components/PortofolioSection";
import { FloatingSection } from "./components/FloatingCard";
import Hero from "./components/Hero";
import Program from "./components/Program";
import WhyUs from "./components/WhyUs";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FloatingSection />
      <Program />
      <Banner />
      <WhyUs />
      <PortfolioSection />
    </div>
  );
};

export default HomePage;
