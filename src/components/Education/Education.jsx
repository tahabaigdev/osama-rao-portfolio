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

              {/* <h5 className="mt-[.5rem] text-[1.8rem] font-medium capitalize leading-[2.5rem]">
                Senior Web Designer
              </h5>

              <ul className="flex list-disc flex-col gap-[2rem] pl-[1.6rem]">
                {[
                  "Design Custom responsive website for start-ups of e-commerce website WordPress Platform.",
                  "Revamp web designs according to Friendly User interface.",
                  "Landing page design with marketing conversion methods.",
                  "Logo Designing for almost 30 start-ups.",
                  "Design and establish user-friendly websites, including optimise check out page, resulting in a increase and user clicks as subsequently 42% in customer purchase.",
                  "Handling all compositions, colours illustration selfie, and branding for projects",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="mt-[1.4rem] max-w-[42rem] leading-[2.24rem] text-White3"
                  >
                    {item}
                  </li>
                ))}
              </ul> */}
            </div>

            <div className="text-center text-White3">Manchester, UK</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
