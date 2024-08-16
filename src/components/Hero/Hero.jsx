import { NavLink } from "react-router-dom";
import Aestrik from "../../assets/images/aestrik.svg";
import Layer from "../../assets/images/icons/layers.svg";
import Layout from "../../assets/images/icons/layout.svg";

const Hero = () => {
  return (
    <section>
      <div>
        <div className="flex items-center justify-center text-center lg:justify-between lg:text-left">
          <h1 className="text-[7rem] font-bold uppercase leading-[7rem] md:text-[11rem] md:leading-[11rem]">
            Brand <span className="block text-Black4">Developer</span>
          </h1>

          <img src={Aestrik} alt="vector" className="hidden lg:block" />
        </div>

        <p className="mx-auto mt-[1rem] max-w-[60rem] text-center text-[1.8rem] leading-[2.52rem] text-White3 lg:mx-0 lg:text-left">
          I’m Osama Saleem, currently doing my master in business management
          from Manchester Metropolitan University. Seasoned Graphic Designer
          with five years of hands-on experience crafting visually stunning and
          user-friendly digital experiences. Proficient in designing responsive
          websites and mobile applications, adept at incorporating cutting-edge
          design trends, and dedicated to delivering high-quality solutions that
          exceed client expectations.
        </p>

        <div className="my-[6rem] flex justify-center gap-[2rem] text-center sm:gap-[4rem] lg:justify-start lg:text-left">
          <div className="flex flex-col">
            <h4 className="text-[7rem] font-semibold leading-[8.4rem] tracking-[-0.7px]">
              +6
            </h4>

            <span className="tracking-[-0.16px] text-White3">
              YEARS OF <br /> EXPERIENCE
            </span>
          </div>

          <div className="flex flex-col">
            <h4 className="text-[7rem] font-semibold leading-[8.4rem] tracking-[-0.7px]">
              +150
            </h4>

            <span className="tracking-[-0.16px] text-White3">
              PROJECTS <br /> COMPLETED
            </span>
          </div>

          <div className="flex flex-col">
            <h4 className="text-[7rem] font-semibold leading-[8.4rem] tracking-[-0.7px]">
              +30
            </h4>

            <span className="tracking-[-0.16px] text-White3">
              WORLDWIDE <br /> CLIENTS
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-[3rem] md:flex-row md:items-stretch lg:justify-start">
          <div className="relative z-[1] w-[36.6rem] overflow-hidden rounded-[1rem] bg-PrimaryColor px-[2rem] pb-[2.2rem] pt-[4rem] md:w-[30rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 388 155"
              className="absolute left-0 top-[2rem] z-[-1]"
            >
              <path
                d="M 400.825 526.501 C 359.981 521.61 275.061 502.161 262.145 463.503 C 249.228 424.845 64.622 467.64 -26.068 493.869 L -1.845 151.05 C 71.348 136.783 216.884 99.23 213.496 63.159 C 209.26 18.069 245.759 11.716 307.691 18.653 C 369.624 25.591 361.774 9.523 393.416 2.626"
                fill="transparent"
                strokeWidth="5"
                stroke="rgba(202,89,46,0.4)"
                strokeMiterlimit="10"
                strokeDasharray=""
              ></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 388 155"
              className="absolute bottom-[2rem] left-0 z-[-1]"
            >
              <path
                d="M 400.825 526.501 C 359.981 521.61 275.061 502.161 262.145 463.503 C 249.228 424.845 64.622 467.64 -26.068 493.869 L -1.845 151.05 C 71.348 136.783 216.884 99.23 213.496 63.159 C 209.26 18.069 245.759 11.716 307.691 18.653 C 369.624 25.591 361.774 9.523 393.416 2.626"
                fill="transparent"
                strokeWidth="5"
                stroke="rgba(202,89,46,0.4)"
                strokeMiterlimit="10"
                strokeDasharray=""
              ></path>
            </svg>

            <img src={Layer} alt="icon" className="w-[3.8rem]" />

            <h4 className="my-[3rem] text-[2.4rem] font-medium uppercase leading-[110%]">
              Pitch Tech <br /> Design
            </h4>

            <div className="text-end">
              <NavLink
                to=""
                className="group inline-flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-[.6rem] border border-solid border-White1 transition-all duration-[0.3s] hover:bg-White1"
              >
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
                  }}
                  width="20"
                  height="20"
                >
                  <path
                    d="M15 5l-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z"
                    fill="#FFFFFF"
                    className="transition-all duration-[0.3s] group-hover:fill-PrimaryColor"
                  ></path>
                </svg>
              </NavLink>
            </div>
          </div>

          <div className="relative z-[1] w-[36.6rem] overflow-hidden rounded-[1rem] bg-SecondaryColor px-[2rem] pb-[2.2rem] pt-[4rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 422 284"
              className="absolute left-[-3rem] top-[-5.5rem] z-[-1]"
            >
              <path
                d="M 33.026 0.557 L 4.893 135.318 L 98.467 61.255 L 128.435 164.831 L 227.513 61.255 L 250.754 164.831 L 310.078 107.475 L 328.426 247.247 L 426.893 107.475 L 433.62 254.486 L 472.762 292.353"
                fill="transparent"
                strokeWidth="5"
                stroke="rgba(108,227,182,0.5)"
                strokeMiterlimit="10"
                strokeDasharray=""
              ></path>
            </svg>

            <img src={Layout} alt="icon" className="w-[3.8rem]" />

            <h4 className="my-[3rem] text-[2.4rem] font-medium uppercase leading-[110%] text-Black1">
              Shopify, Wordpress, Custom Portfolio
            </h4>

            <div className="text-end">
              <NavLink
                to=""
                className="group inline-flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-[.6rem] border border-solid border-Black1 transition-all duration-[0.3s] hover:bg-Black1"
              >
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
                  }}
                  width="20"
                  height="20"
                >
                  <path
                    d="M15 5l-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z"
                    fill="#151312"
                    className="transition-all duration-[0.3s] group-hover:fill-SecondaryColor"
                  ></path>
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
