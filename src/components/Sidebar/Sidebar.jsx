import { NavLink } from "react-router-dom";
import MainImg from "../../assets/images/osama-rao.jpg";
import LinkedinIcon from "../../assets/images/icons/linkedin.svg";
import BehanceIcon from "../../assets/images/icons/behance.svg";
import MailIcon from "../../assets/images/icons/mail.svg";
import DashLine from "../../assets/images/dash-line.svg";
import DashlineFire from "../../assets/images/dash-line-fire.svg";

const Sidebar = () => {
  return (
    <aside className="sticky top-[4rem] overflow-hidden rounded-[1.6rem] bg-White1 px-[2rem] py-[3rem]">
      <img
        src={DashLine}
        alt="vector"
        className="absolute left-0 top-[-1.8rem] z-[1]"
      />

      <img
        src={DashlineFire}
        alt="vector"
        className="absolute left-[-13.5rem] top-[34.8rem] z-[-1] hidden sm:block"
      />

      <div className="relative flex h-[100%] flex-col items-center text-center">
        <div className="flex flex-col items-center gap-[2.4rem]">
          <div className="h-[28.4rem] w-[24rem] overflow-hidden rounded-[1.6rem]">
            <img
              src={MainImg}
              alt="Main Image"
              className="h-[100%] w-[100%] object-cover"
            />
          </div>

          <h3 className="text-[3.6rem] font-bold uppercase tracking-[-1.44px] text-Black2">
            OSAMA SALEEM
          </h3>
        </div>

        <div className="mt-[2rem] flex flex-col gap-[3rem] lg:mt-[10rem]">
          <p className="max-w-[30rem] text-[1.8rem] font-medium text-White4">
            Phone: +44 7940508493 <br /> Location: Manchester, United Kingdom
          </p>

          <ul className="flex items-center justify-center gap-[1.6rem]">
            {[
              {
                icon: LinkedinIcon,
                link: "https://www.linkedin.com/in/osamasaleem61",
              },
              {
                icon: BehanceIcon,
                link: "https://www.behance.net/osamashaikh1",
              },
              { icon: MailIcon, link: "mailto:osamasalim61@gmail.com " },
            ].map((item, i) => (
              <li key={i}>
                <NavLink
                  to={item.link}
                  className="inline-flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-[.6rem] transition-all duration-[0.3s] hover:bg-White5"
                >
                  <img src={item.icon} alt="icon" className="max-w-[2rem]" />
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
