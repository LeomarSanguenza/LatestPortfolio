import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
      } else {
        setInView(false); // reset when out of view
      }
    },
    { threshold: 0.2 }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => {
    if (sectionRef.current) observer.unobserve(sectionRef.current);
  };
}, []);


  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen"
      style={{ paddingTop: "7rem" }}
    >
      <h2
        className="text-4xl font-bold text-center mb-8 text-white"
        style={{
          textShadow:
            "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff",
        }}
      >
        About
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {/* Education Column */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[rgba(0,0,0,0.6)] border border-cyan-500 rounded-xl shadow-lg p-6 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">🎓 Education</h3>
          <ul className="space-y-3">
            <li>
              <h4 className="font-bold text-white">
                Bachelor of Science in Computer Science
              </h4>
              <p className="text-sm text-gray-400">
                Quezon City University, 2019–2023
              </p>
            </li>
            <li>
              <h4 className="font-bold text-white">Senior High School Diploma</h4>
              <p className="text-sm text-gray-400">
                ABE International Business College, 2017–2019
              </p>
            </li>
            <li>
              <h4 className="font-bold text-white">Junior High School Diploma</h4>
              <p className="text-sm text-gray-400">
                Justice Cecilia Muñoz Palma High School, 2013–2017
              </p>
            </li>
          </ul>
        </motion.div>

        {/* Job Experience Column */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="bg-[rgba(0,0,0,0.6)] border border-cyan-500 rounded-xl shadow-lg p-6 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">💼 Job Experience</h3>
          <ul className="space-y-3">
            <li>
              <h4 className="font-bold text-white">Capstone Developer</h4>
              <p className="text-sm text-gray-400">
                2023 Capstone Project Learning Management System
              </p>
            </li>
            <li>
              <h4 className="font-bold text-white">Programmer</h4>
              <p className="text-sm text-gray-400">
                2023 - 2025 MedFord Solution Rx.
              </p>
            </li>
            <li>
              <h4 className="font-bold text-white">Software Engineer</h4>
              <p className="text-sm text-gray-400">2025 - Present Sugartech</p>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
