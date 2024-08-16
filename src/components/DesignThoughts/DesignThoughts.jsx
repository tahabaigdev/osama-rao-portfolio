import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const DesignThoughts = () => {
  const designRef = useRef(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    gsap.fromTo(
      designRef.current,
      { opacity: 0, y: "-30px" },
      {
        y: "0px",
        opacity: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: designRef.current,
          start: "top 70%",
          end: "bottom 20%",
        },
      },
    );

    // Fetch blog posts from WordPress REST API
    fetch("https://osamarao.com/wp-json/wp/v2/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <section ref={designRef}>
      <div>
        <h2 className="text-center text-[6rem] font-bold leading-[6rem] md:text-[9rem] md:leading-[9rem] lg:text-left">
          DESIGN <span className="block text-Black4">THOUGHTS</span>
        </h2>
      </div>

      <div className="mt-[2rem] flex flex-col">
        {posts.map((post) => (
          <div key={post.id}>
            <NavLink
              className="group relative flex flex-col rounded-[1.6rem] px-[1.6rem] py-[3rem] transition-all duration-[0.3s] hover:bg-[#1C1A19]"
              to={`/posts/${post.id}`} // Adjust based on your routing
            >
              <div className="max-w-[48rem]">
                <h4 className="text-[2.6rem] font-semibold leading-[3.12rem]">
                  {post.title.rendered}
                </h4>

                <p className="mb-[2rem] mt-[1.4rem] leading-[2.24rem] text-[#998F8F]">
                  {post.excerpt.rendered.replace(/<[^>]+>/g, "")}{" "}
                  {/* Remove HTML tags */}
                </p>
              </div>

              <div className="flex items-center justify-between text-[1.6rem] text-[#998F8F]">
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span>{new Date(post.date).toLocaleTimeString()}</span>{" "}
                {/* Adjust based on time format */}
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default DesignThoughts;
