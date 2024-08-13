import { useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Home";
import ExperienceP from "./ExperienceP";
import Projects from "./Projects";
import Tools from "./Tools";
import Thoughts from "./Thoughts";
import Sidebar from "./components/Sidebar/Sidebar";
import BlogPosts from "./components/BlogPosts/BlogPosts";
import gsap from "gsap";

const App = () => {
  const sideBarRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [sideBarRef.current, mainRef.current],
      { opacity: 0, y: "-30px" },
      {
        y: "0px",
        stagger: 0.2,
        opacity: 1,
        duration: 0.6,
        ease: "power1.inOut",
      },
    );
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="container flex flex-col justify-between gap-[4rem] lg:flex-row">
          <div ref={sideBarRef} className="basis-[34.4rem]">
            <Sidebar />
          </div>

          <div ref={mainRef} className="basis-[69.6rem]">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/ExperienceP" element={<ExperienceP />} />

              <Route path="/Projects" element={<Projects />} />

              <Route path="/Tools" element={<Tools />} />

              <Route path="/Thoughts" element={<Thoughts />} />

              <Route path="/BlogPosts" element={<BlogPosts />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
