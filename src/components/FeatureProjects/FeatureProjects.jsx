import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FeatureProjectsData } from "../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeatureProjects = () => {
  const featureRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      featureRef.current,
      { opacity: 0, y: "-30px" },
      {
        y: "0px",
        opacity: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: featureRef.current,
          start: "top 70%",
          end: "bottom 20%",
        },
      },
    );
  }, []);

  return (
    <section ref={featureRef}>
      <div>
        <h2 className="text-center text-[6rem] font-bold leading-[6rem] md:text-[9rem] md:leading-[9rem] lg:text-left">
          FEATURED <span className="block text-Black4">PROJECTS</span>
        </h2>
      </div>

      <div className="mt-[2rem] flex flex-col">
        {FeatureProjectsData.map((item) => (
          <div key={item.id}>
            <NavLink
              to={item.link}
              className="group relative flex rounded-[1.6rem] px-[1.6rem] py-[2.4rem] transition-all duration-[0.3s] hover:bg-[#1C1A19]"
            >
              <div className="flex items-center gap-[2rem]">
                <div className="h-[11.4rem] w-[11rem] overflow-hidden rounded-[.8rem]">
                  <img
                    src={item.imgURL}
                    alt="image"
                    className="h-[100%] w-[100%] object-cover"
                  />
                </div>

                <div className="flex flex-col gap-[1rem]">
                  <h4 className="text-[2.6rem] font-semibold leading-[3.12rem]">
                    {item.title}
                  </h4>

                  <h5 className="text-[1.6rem] leading-[2.24rem] text-[#998F8F]">
                    {item.subTitle}
                  </h5>
                </div>
              </div>

              <svg
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                viewBox="0 0 24 24"
                color="rgb(255, 255, 255)"
                style={{
                  userSelect: "none",
                  display: "inline-block",
                  fill: "rgb(255, 255, 255)",
                  flexShrink: 0,
                  width: "2rem",
                  height: "2rem",
                  rotate: "-45deg",
                }}
                width="24"
                height="24"
                className="absolute right-[1.6rem] top-[3.6rem] transition-all duration-[0.3s] group-hover:right-[.4rem] group-hover:top-[2.4rem]"
              >
                <path
                  d="M15 5l-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z"
                  fill="#F46C38"
                ></path>
              </svg>
            </NavLink>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureProjects;
