import { NavLink } from "react-router-dom";
import HomeIcon from "../../assets/images/icons/home.svg";
import ExperienceIcon from "../../assets/images/icons/experience.svg";
import ProjectsIcon from "../../assets/images/icons/projects.svg";
import ToolsIcon from "../../assets/images/icons/tools.svg";
import ThoughtsIcon from "../../assets/images/icons/thoughts.svg";

const Header = () => {
  return (
    <header className="relative left-[50%] mb-[8.5rem] mt-[3rem] w-[100%] max-w-[29.2rem] translate-x-[-50%] rounded-[1.6rem] bg-Black3 px-[2rem] py-[.5rem]">
      <nav>
        <ul className="flex items-center justify-between">
          {[
            { icon: HomeIcon, link: "/", tag: "Home" },
            { icon: ExperienceIcon, link: "/ExperienceP", tag: "Experience" },
            { icon: ProjectsIcon, link: "/Projects", tag: "Projects" },
            { icon: ToolsIcon, link: "/Tools", tag: "Tools" },
            { icon: ThoughtsIcon, link: "/Thoughts", tag: "Thoughts" },
          ].map((item, i) => (
            <li key={i}>
              <NavLink
                to={item.link}
                className="group relative inline-flex h-[3.6rem] w-[3.6rem] items-center justify-center"
              >
                <img src={item.icon} alt="icon" className="max-w-[2rem]" />

                <span className="pointer-events-none absolute top-[80%] inline-block rounded-[1rem] bg-Black3 px-[1.2rem] py-[.5rem] text-[1.2rem] opacity-[0] transition-all duration-[0.3s] group-hover:pointer-events-auto group-hover:top-[125%] group-hover:opacity-[1]">
                  {item.tag}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
