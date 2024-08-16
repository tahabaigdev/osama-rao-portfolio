import { useEffect, useRef } from "react";
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
          EXPERIENCE
        </h2>
      </div>

      <div className="mt-[2rem] flex flex-col">
        <div className="rounded-[1.6rem] px-[1.6rem] py-[2.4rem] transition-all duration-[0.3s] hover:bg-[#1C1A19]">
          <div className="flex flex-col justify-between gap-[4rem] sm:flex-row">
            <div>
              <h4 className="text-[2.6rem] font-semibold capitalize leading-[3.12rem]">
                Aghosh UK
              </h4>

              <h5 className="mt-[.5rem] text-[1.8rem] font-medium capitalize leading-[2.5rem]">
                Senior Graphic Designer and Social Media Manager
              </h5>

              <ul className="flex list-disc flex-col gap-[2rem] pl-[1.6rem]">
                {[
                  "Design high-quality visual content for a variety of platforms, including social media, websites, email campaigns, print materials, and more.",
                  "Redesign web interfaces to enhance user-friendliness.",
                  "Develop and implement comprehensive social media strategies across multiple platforms to increase brand visibility, engagement, and follower growth.",
                  "Maintain consistent visual branding across all platforms, ensuring that all digital content aligns with the overall brand guidelines and voice.",
                  "Track, analyze, and report on the performance of social media campaigns, using insights to optimize.",
                  "future content and strategies for maximum impact.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="mt-[1.4rem] max-w-[42rem] leading-[2.24rem] text-White3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center text-White3">
              Manchester, UK <br />
              Mar2024 –Aug2024
            </div>
          </div>
        </div>

        <div className="rounded-[1.6rem] px-[1.6rem] py-[2.4rem] transition-all duration-[0.3s] hover:bg-[#1C1A19]">
          <div className="flex flex-col justify-between gap-[4rem] sm:flex-row">
            <div>
              <h4 className="text-[2.6rem] font-semibold capitalize leading-[3.12rem]">
                Eagle Production
              </h4>

              <h5 className="mt-[.5rem] text-[1.8rem] font-medium capitalize leading-[2.5rem]">
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
              </ul>
            </div>

            <div className="text-center text-White3">
              Pakistan <br />
              Mar2021 – Jan2024
            </div>
          </div>
        </div>

        <div className="rounded-[1.6rem] px-[1.6rem] py-[2.4rem] transition-all duration-[0.3s] hover:bg-[#1C1A19]">
          <div className="flex flex-col justify-between gap-[4rem] sm:flex-row">
            <div>
              <h4 className="text-[2.6rem] font-semibold capitalize leading-[3.12rem]">
                Upwork Freelancer
              </h4>

              <h5 className="mt-[.5rem] text-[1.8rem] font-medium capitalize leading-[2.5rem]">
                Senior Designer
              </h5>

              <ul className="flex list-disc flex-col gap-[2rem] pl-[1.6rem]">
                {[
                  "Having a strong portfolio that showcases their best work and demonstrates their expertise in various design areas, such as logo designing, brand guidelines, web design, graphic design.",
                  "Strong understanding of design principles, such as color theory, typography, and layout, and be able to apply these principles to create visually appealing designs that are also functional and easy to use.",
                  "Excellent communication skills, both written and verbal, and be able to effectively communicate with clients to understand their needs, provide updates, and answer any questions.",
                  "Able to work independently and be self-motivated, but also be able to collaborate effectively with clients and team members, such as developers or project managers",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="mt-[1.4rem] max-w-[42rem] leading-[2.24rem] text-White3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center text-White3">
              Pakistan <br />
              Sep2019 – Nov2023
            </div>
          </div>
        </div>

        <div className="rounded-[1.6rem] px-[1.6rem] py-[2.4rem] transition-all duration-[0.3s] hover:bg-[#1C1A19]">
          <div className="flex flex-col justify-between gap-[4rem] sm:flex-row">
            <div>
              <h4 className="text-[2.6rem] font-semibold capitalize leading-[3.12rem]">
                Cnergyico
              </h4>

              <h5 className="mt-[.5rem] text-[1.8rem] font-medium capitalize leading-[2.5rem]">
                Marketing trainee
              </h5>

              <ul className="flex list-disc flex-col gap-[2rem] pl-[1.6rem]">
                {[
                  "Supported all locations with design, layout, printing, and mailing of marketing collateral materials including flyers, advertisements, labels, forms, etc.",
                  "Responsible for collecting data from the client in order to achieve the formation of a graphics.",
                  "Designed new logo for a company with input and direction from the customer; worked to ensure deadline and customer requirements were addressed.",
                  "Deliver top projects that please clients and attract new business, with a 14% increase in client referral rate.",
                  "Collaborated with Marketing, PR and social media team to design graphics boosting social engagement by 32%.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="mt-[1.4rem] max-w-[42rem] leading-[2.24rem] text-White3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center text-White3">
              Pakistan <br />
              Nov2021 – Jan2022
            </div>
          </div>
        </div>

        <div className="rounded-[1.6rem] px-[1.6rem] py-[2.4rem] transition-all duration-[0.3s] hover:bg-[#1C1A19]">
          <div className="flex flex-col justify-between gap-[4rem] sm:flex-row">
            <div>
              <h4 className="text-[2.6rem] font-semibold capitalize leading-[3.12rem]">
                Mavericks Event Management
              </h4>

              <h5 className="mt-[.5rem] text-[1.8rem] font-medium capitalize leading-[2.5rem]">
                Founder & Head of Marketing
              </h5>

              <ul className="flex list-disc flex-col gap-[2rem] pl-[1.6rem]">
                {[
                  "Managed all the social media pages and helped them gain 3.7k likes on FB in a span of 8 weeks.",
                  "Was responsible for the omni channel marketing plan.",
                  "Was responsible for creating engaging content and promotional campaign for all the TPs (social, print, Used Facebook Ads to reach their audience.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="mt-[1.4rem] max-w-[42rem] leading-[2.24rem] text-White3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center text-White3">
              Pakistan <br />
              Apr2019 – Jul 2019
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
