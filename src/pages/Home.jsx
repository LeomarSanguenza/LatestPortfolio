import React from "react";

const name = "LEOMAR SANGUENZA";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-white p-8"
    >
      <div className="flex flex-wrap justify-center">
        {name.split("").map((char, index) => (
          <span
            key={index}
            className={`text-[100px] font-extrabold text-gray-800 opacity-0 animate-fade-in-up`}
            style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "forwards",
            }}
            >
            {char === " " ? "\u00A0" : char}
        </span>

        ))}
      </div>
    </section>
  );
};

export default Home;
