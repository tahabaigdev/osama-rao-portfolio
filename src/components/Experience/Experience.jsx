import { useEffect, useRef } from "react";
import { ExperienceData } from "../../constants";
import Navlink from "./Navlink";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const experienceRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      experienceRef.current,
      { opacity: 0, y: "-30px" },
      {
        y: "0px",
        opacity: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 70%",
          end: "bottom 20%",
        },
      },
    );
  }, []);

  return (
    <section ref={experienceRef}>
      <div>
        <h2 className="text-center text-[7rem] font-bold leading-[7rem] md:text-[11rem] md:leading-[11rem] lg:text-left">
          5 YEARS OF <span className="block text-Black4">EXPERIENCE</span>
        </h2>
      </div>

      <div className="mt-[2rem] flex flex-col">
        {ExperienceData.map((item) => (
          <div key={item.id}>
            <Navlink
              to={item.link}
              icon={item.iconURL}
              title={item.title}
              content={item.content}
              date={item.date}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
