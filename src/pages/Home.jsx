import React, { useEffect, useRef, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa"; // icons

const name = "LEOMAR SANGUENZA";

const Home = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="home" ref={sectionRef} className="h-[100vh] w-full">
      {/* Top name section */}
      <div className="h-[50vh] bg-top bg-cover relative flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-0" />
        <div className="z-10">
          <div className="flex flex-wrap justify-center">
            {name.split("").map((char, index) => (
              <span
                key={index}
                className={`text-[6rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] text-white opacity-0 neon-shadow ${
                  isVisible ? "animate-fade-in-up" : ""
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "forwards",
                  // fontFamily: "'Courier New', monospace",
                  color: "white",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
          <h3
            className="text-white text-[3rem] text-center"
            style={{
              color: "white",
              // fontFamily: "'Courier New', monospace",
            }}
          >
            Software Engineer
          </h3>
        </div>
      </div>

      {/* Floating icon links & centered image */}
      <div className="h-[35vh] relative flex justify-center items-center">
        {/* Centered Image */}
        <div className="absolute left-1/2 -translate-x-1/2 flex justify-center items-center z-50">
          <img
  className="w-72 transform rotate-12 hover:rotate-0 transition-transform duration-500 ease-in-out rounded-2xl border-4 border-[hsl(274,74%,9%)] shadow-[0_8px_20px_hsl(274,74%,9%)]"
  src="./src/assets/portfolioPic.jpg"
  alt="Portfolio"
/>

        </div>


        {/* Floating Links */}
        <a
          href="https://www.facebook.com/leomar.sanguenza/"
          className="absolute left-10 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition flex items-center gap-1"
        >
          <FaFacebook /> Facebook
        </a>

        <a
          href="https://github.com/LeomarSanguenza"
          className="absolute left-20 top-10 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-900 transition flex items-center gap-2"
        >
          <FaGithub /> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/sanguenza-leomar-t-25341827b/"
          className="absolute right-10 top-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition flex items-center gap-2"
        >
          <FaLinkedin /> LinkedIn
        </a>

        <a
          href="/resume.pdf"
          className="absolute right-20 bottom-10 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-700 transition flex items-center gap-2"
        >
          <FaFileAlt /> Resume
        </a>
      </div>
    </section>
  );
};

export default Home;
