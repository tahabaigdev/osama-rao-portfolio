import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";
import FeatureProjects from "./components/FeatureProjects/FeatureProjects";
import PremiumTools from "./components/PremiumTools/PremiumTools";
import DesignThoughts from "./components/DesignThoughts/DesignThoughts";
import WorkTogether from "./components/WorkTogether/WorkTogether";

const Home = () => {
  return (
    <>
      <Hero />

      <div className="py-[12rem]">
        <Experience />
      </div>

      <FeatureProjects />

      <div className="py-[12rem]">
        <PremiumTools />
      </div>

      <DesignThoughts />

      <div className="pt-[12rem]">
        <WorkTogether />
      </div>
    </>
  );
};

export default Home;
