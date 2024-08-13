import DesignThoughts from "./components/DesignThoughts/DesignThoughts";
import WorkTogether from "./components/WorkTogether/WorkTogether";

const Thoughts = () => {
  return (
    <>
      <DesignThoughts />

      <div className="pt-[12rem]">
        <WorkTogether />
      </div>
    </>
  );
};

export default Thoughts;
