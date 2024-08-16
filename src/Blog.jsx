import Blogs from "./components/Blogs/Blogs";
import WorkTogether from "./components/WorkTogether/WorkTogether";

const Thoughts = () => {
  return (
    <>
      <Blogs />

      <div className="pt-[12rem]">
        <WorkTogether />
      </div>
    </>
  );
};

export default Thoughts;
