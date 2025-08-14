import React, { useEffect, useRef, useState } from "react";

const name = "LEOMAR SANGUENZA";

const Home = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // optional: remove this if you want animation only once
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

    return (
    <section id="home" ref={sectionRef} className="h-[100vh] w-full">
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
                  fontFamily: "'Courier New', monospace",
                  color: "white",
                  // textShadow: '0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff'
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
          <h3 className="text-white text-[2rem] mt-4 text-center" style={{color: "white", fontFamily: "'Courier New', monospace" }}>Software Engineer</h3>
        </div>
      </div>

      <div className="h-[35vh] flex justify-between items-center w-full px-10">
        {/* Left side - Facebook button */}
        <div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
            Facebook
          </button>
        </div>

        {/* Right/center - image */}
        <div className="flex justify-center items-center">
        <img
          className="neon-shadow w-68 transform border-3 border-white rotate-12 hover:rotate-0 transition-transform duration-500 ease-in-out rounded-2xl shadow-lg shadow-cyan-500/100"
          src="./src/assets/portfolioPic.jpg"
          alt="Portfolio"
        />
        </div>
        <div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
            Facebook
          </button>
        </div>
    </div>

    </section>
  );
};

export default Home;
