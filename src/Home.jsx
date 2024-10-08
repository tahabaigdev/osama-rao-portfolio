import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";
import FeatureProjects from "./components/FeatureProjects/FeatureProjects";
import PremiumTools from "./components/PremiumTools/PremiumTools";
import Blogs from "./components/Blogs/Blogs";
import WorkTogether from "./components/WorkTogether/WorkTogether";
import Education from "./components/Education/Education";

const Home = () => {
  return (
    <>
      <Hero />

      <div className="pt-[12rem]">
        <Education />
      </div>

      <div className="py-[12rem]">
        <Experience />
      </div>

      <FeatureProjects />

      <div className="py-[12rem]">
        <PremiumTools />
      </div>

      <Blogs />

      <div className="pt-[12rem]">
        <WorkTogether />
      </div>
    </>
  );
};

export default Home;
