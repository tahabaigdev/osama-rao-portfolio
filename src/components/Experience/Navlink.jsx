import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";

const Navlink = ({ to, icon, title, content, date }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const boxRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const box = boxRef.current;
    const icon = iconRef.current;

    const updatePosition = (event) => {
      if (box && icon) {
        const { left, top } = box.getBoundingClientRect();
        const x = event.clientX - left;
        const y = event.clientY - top;

        gsap.to(icon, {
          duration: 0.4,
          x: x - icon.offsetWidth / 2, // Center the icon
          y: y - icon.offsetHeight / 2,
          ease: "power1.out",
        });

        setPosition({ x, y });
      }
    };

    box.addEventListener("mousemove", updatePosition);

    return () => {
      box.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <NavLink
      ref={boxRef}
      to={to}
      className="group relative flex rounded-[1.6rem] px-[1.6rem] py-[2.4rem] transition-all duration-[0.3s] hover:bg-[#1C1A19]"
    >
      <img
        ref={iconRef}
        src={icon}
        alt="icon"
        className="pointer-events-none absolute left-0 top-0 hidden max-w-[8rem] rotate-[10deg] opacity-[0] group-hover:opacity-[1] lg:block"
      />
      <div className="max-w-[42rem]">
        <h4 className="text-[2.6rem] font-semibold capitalize leading-[3.12rem]">
          {title}
        </h4>

        <p className="mb-[2rem] mt-[1.4rem] leading-[2.24rem] text-White3">
          {content}
        </p>

        <div className="leading-[1.76rem] text-White3">{date}</div>
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
  );
};

export default Navlink;
