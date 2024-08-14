import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WorkTogether = () => {
  const workRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      workRef.current,
      { opacity: 0, y: "-30px" },
      {
        y: "0px",
        opacity: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: workRef.current,
          start: "top 70%",
          end: "bottom 20%",
        },
      },
    );
  }, []);

  return (
    <section ref={workRef}>
      <div>
        <h2 className="text-center text-[6rem] font-bold leading-[6rem] md:text-[9rem] md:leading-[9rem] lg:text-left">
          LET'S WORK <span className="block text-Black4">TOGETHER</span>
        </h2>
      </div>

      <form className="mt-[5rem]">
        <div className="grid grid-cols-2 gap-[2rem]">
          <div className="flex flex-col gap-[1rem]">
            <label
              htmlFor="name"
              className="text-[1.2rem] font-medium leading-[1.44rem] text-[#888888]"
            >
              Name
            </label>

            <input
              type="text"
              placeholder="Your Name"
              className="h-[4rem] w-[100%] rounded-[.8rem] border border-solid border-[transparent] bg-Black4 p-[1rem] text-[1.4rem] placeholder:text-[#998F8F] focus:border-PrimaryColor focus:outline-0"
            />
          </div>

          <div className="flex flex-col gap-[1rem]">
            <label
              htmlFor="email"
              className="text-[1.2rem] font-medium leading-[1.44rem] text-[#888888]"
            >
              Email
            </label>

            <input
              type="email"
              placeholder="Your@email.com"
              className="h-[4rem] w-[100%] rounded-[.8rem] border border-solid border-[transparent] bg-Black4 p-[1rem] text-[1.4rem] placeholder:text-[#998F8F] focus:border-PrimaryColor focus:outline-0"
            />
          </div>
        </div>

        <div className="my-[2rem] grid grid-cols-1">
          <div className="flex flex-col gap-[1rem]">
            <label
              htmlFor="budget"
              className="text-[1.2rem] font-medium leading-[1.44rem] text-[#888888]"
            >
              Budget
            </label>

            <div className="h-[4rem] w-[100%] rounded-[.8rem] bg-Black4 p-[1rem]">
              <select className="h-[100%] w-[100%] cursor-pointer bg-[transparent] text-[1.4rem] text-[#888888] focus:border-none focus:outline-none">
                <option defaultValue hidden>
                  Select...
                </option>

                <option>1</option>

                <option>2</option>

                <option>3</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1">
          <div className="flex flex-col gap-[1rem]">
            <label
              htmlFor="message"
              className="text-[1.2rem] font-medium leading-[1.44rem] text-[#888888]"
            >
              Message
            </label>

            <textarea
              placeholder="Message"
              className="h-[13.2rem] w-[100%] rounded-[.8rem] border border-solid border-[transparent] bg-Black4 p-[1rem] text-[1.4rem] placeholder:text-[#998F8F] focus:border-PrimaryColor focus:outline-0"
            ></textarea>
          </div>
        </div>

        <div className="mt-[2rem] grid grid-cols-1">
          <button className="h-[4rem] w-[100%] rounded-[.8rem] bg-PrimaryColor text-center text-[1.4rem] font-semibold">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default WorkTogether;
