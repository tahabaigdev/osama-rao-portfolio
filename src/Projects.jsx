import FeatureProjects from "./components/FeatureProjects/FeatureProjects";
import WorkTogether from "./components/WorkTogether/WorkTogether";

const Projects = () => {
  return (
    <>
      <FeatureProjects />

      <div className="pt-[12rem]">
        <WorkTogether />
      </div>
    </>
  );
};

export default Projects;
