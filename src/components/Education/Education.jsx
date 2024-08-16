import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const educationRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      educationRef.current,
      { opacity: 0, y: "-30px" },
      {
        y: "0px",
        opacity: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: educationRef.current,
          start: "top 70%",
          end: "bottom 20%",
        },
      },
    );
  }, []);

  return (
    <section ref={educationRef}>
      <div>
        <h2 className="text-center text-[7rem] font-bold leading-[7rem] md:text-[11rem] md:leading-[11rem] lg:text-left">
          EDUCATION
        </h2>
      </div>

      <div className="mt-[2rem] flex flex-col">
        <div className="rounded-[1.6rem] px-[1.6rem] py-[2.4rem] transition-all duration-[0.3s] hover:bg-[#1C1A19]">
          <div className="flex flex-col justify-between gap-[4rem] sm:flex-row">
            <div>
              <h4 className="text-[2.6rem] font-semibold capitalize leading-[3.12rem]">
                Manchester Metropolitan University
              </h4>

              <h5 className="mt-[.5rem] text-[1.8rem] font-medium capitalize leading-[2.5rem]">
                MSC Management
              </h5>

              <div className="mt-[1.4rem] max-w-[42rem] text-White3">
                <span className="font-semibold">Relevant Courses:</span>{" "}
                Marketing Practice, Project Management, Finance Management,
                Logistic and Supply Chain Management
              </div>
            </div>

            <div className="text-center text-White3">
              Manchester, UK <br /> 2024 - 2025
            </div>
          </div>
        </div>

        <div className="rounded-[1.6rem] px-[1.6rem] py-[2.4rem] transition-all duration-[0.3s] hover:bg-[#1C1A19]">
          <div className="flex flex-col justify-between gap-[4rem] sm:flex-row">
            <div>
              <h4 className="text-[2.6rem] font-semibold capitalize leading-[3.12rem]">
                Shaheed Zulfikar Ali Bhutto <br /> Institute of Science and
                Technology.
              </h4>

              <h5 className="mt-[.5rem] text-[1.8rem] font-medium capitalize leading-[2.5rem]">
                Bachelor of Media Science
              </h5>

              <div className="mt-[1.4rem] max-w-[42rem] text-White3">
                <span className="font-semibold">Relevant Courses:</span>{" "}
                Fundamentals of Digital Advertsing, Brand Management, Consumer
                Behavior, Advertising Design and Concept, Interaction Design.
              </div>
            </div>

            <div className="text-center text-White3">
              Karachi, Pakistan <br /> 2018 - 2023
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
