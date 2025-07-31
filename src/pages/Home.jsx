import React from "react";
// import bgImage from "../assets/portfoliobg.jpg";

const name = "LEOMAR SANGUENZA";

const Home = () => {
  return (
    <section id="home" className="h-[100vh] w-full">
      {/* Top Background Image with Overlay and Content */}
      <div
        className="h-[65vh] bg-top bg-cover relative flex flex-col justify-center items-center"
        // style={{
        //   backgroundImage: `url(${bgImage})`,
        // }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-0" />

        {/* Content over image */}
        <div className="z-10">
          <div className="flex flex-wrap justify-center">
            {name.split("").map((char, index) => (
              <span
                key={index}
                className="text-[4rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] font-extrabold text-white opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "forwards",
                  fontFamily: "'Courier New', monospace",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
          <h1 className="text-white text-xl mt-4 text-center" style={{ fontFamily: "'Courier New', monospace" }}>Software Engineer</h1>
         </div>
      </div>

      {/* Bottom solid section if you want */}
      <div className="h-[35vh]"></div>
    </section>
  );
};

export default Home;
