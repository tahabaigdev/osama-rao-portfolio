import { useEffect, useRef } from "react";
import { PremiumToolsData } from "../../constants";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PremiumTools = () => {
  const premiumRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      premiumRef.current,
      { opacity: 0, y: "-30px" },
      {
        y: "0px",
        opacity: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: premiumRef.current,
          start: "top 70%",
          end: "bottom 20%",
        },
      },
    );
  }, []);

  return (
    <section ref={premiumRef}>
      <div>
        <h2 className="text-center text-[6rem] font-bold leading-[6rem] md:text-[9rem] md:leading-[9rem] lg:text-left">
          PREMIUM <span className="block text-Black4">TOOLS</span>
        </h2>
      </div>

      <div className="mt-[2rem] grid grid-cols-1 gap-[1rem] lg:grid-cols-2">
        {PremiumToolsData.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-[1.6rem] rounded-[.8rem] p-[1.6rem] transition-all duration-[0.3s] hover:bg-[#1C1A19]"
          >
            <div>
              <img src={item.iconURL} alt="icon" className="max-w-[4rem]" />
            </div>

            <div className="flex flex-col gap-[.6rem]">
              <h5 className="text-[1.8rem] font-semibold leading-[2.16rem]">
                {item.title}
              </h5>

              <h6 className="text-[1.2rem] leading-[1.44rem] text-[#998F8F]">
                {item.subTitle}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PremiumTools;
