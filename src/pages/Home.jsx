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

  {/* ========== Facebook ========== */}
  <div className="absolute left-80 top-1/2 -translate-y-1/2">
    {/* Thumbtack */}
    <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full shadow-md border border-yellow-600 z-20"></div>

    {/* Thread + Button */}
    <div className="relative origin-top hanging-sign">
      <svg
        className={`absolute -top-11 left-1/2 -translate-x-1/2 ${
          isVisible ? "thread-animate" : ""
        }`}
        width="60"
        height="90"
        viewBox="0 0 60 90"
        fill="none"
      > 
        <path
          d="M30 5 C 30 15, 30 25, 30 35"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <a
        href="https://www.facebook.com/leomar.sanguenza/"
        className="bg-blue-600 text-white px-4 py-4 rounded-lg shadow-md 
                  hover:bg-blue-700 transition flex items-center gap-1"
      >
        <FaFacebook /> Facebook
      </a>
    </div>
  </div>

  {/* ========== GitHub ========== */}
  <div className="absolute left-60 top-10">
    <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full shadow-md border border-yellow-600 z-20"></div>

    <div className="relative origin-top hanging-sign">
      <svg
        className="absolute -top-11 left-1/2 -translate-x-1/2 thread-animate"
        width="60"
        height="90"
        viewBox="0 0 60 90"
        fill="none"
      >
        <path
          d="M30 5 C 30 15, 30 25, 30 35"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <a
        href="https://github.com/LeomarSanguenza"
        className="bg-gray-800 text-white px-4 py-4 rounded-lg shadow-md 
                  hover:bg-gray-900 transition flex items-center gap-2"
      >
        <FaGithub /> GitHub
      </a>
    </div>
  </div>

  {/* ========== LinkedIn ========== */}
  <div className="absolute right-80 top-1/2 -translate-y-1/2">
    <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full shadow-md border border-yellow-600 z-20"></div>

    <div className="relative origin-top hanging-sign">
      <svg
        className="absolute -top-11 left-1/2 -translate-x-1/2 thread-animate"
        width="60"
        height="90"
        viewBox="0 0 60 90"
        fill="none"
      >
        <path
          d="M30 5 C 30 15, 30 25, 30 35"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <a
        href="https://www.linkedin.com/in/sanguenza-leomar-t-25341827b/"
        className="bg-blue-500 text-white 
                  px-6 py-4 text-lg rounded-xl shadow-lg 
                  hover:bg-blue-600 transition flex items-center gap-2"
      >
        <FaLinkedin /> LinkedIn
      </a>
    </div>
  </div>

  {/* ========== Resume ========== */}
  <div className="absolute top-10 right-60">
    <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full shadow-md border border-yellow-600 z-20"></div>

    <div className="relative origin-top hanging-sign">
      <svg
        className="absolute -top-11 left-1/2 -translate-x-1/2 thread-animate"
        width="60"
        height="90"
        viewBox="0 0 60 90"
        fill="none"
      >
        <path
          d="M30 5 C 30 15, 30 25, 30 35"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <a
        href="/resume.pdf"
        className="bg-purple-600 text-white px-4 py-4 rounded-lg shadow-md 
                  hover:bg-purple-700 transition flex items-center gap-2"
      >
        <FaFileAlt /> Resume
      </a>
    </div>
  </div>
      </div>

    </section>
  );
};

export default Home;
