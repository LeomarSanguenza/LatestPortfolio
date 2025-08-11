const About = () => (
  <section
    id="about"
    className="min-h-screen"
    style={{ paddingTop: '7rem' }}
  >
    <h2 className="text-4xl font-bold text-center mb-8 text-white " style={{  fontFamily: "'Courier New', monospace",
 textShadow: '0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff' }}>About</h2>

    <div className="max-w-5xl mx-auto justify-center items-center grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
      {/* Education Column */}
      <div class="text-center">
        <h3 className="text-2xl font-semibold mb-4 text-cyan-600">🎓 Education</h3>
        <ul className="space-y-3">
          <li>
            <h4 className="font-bold text-white">Bachelor of Science in Computer Science</h4>
            <p className="text-sm text-gray-600">Quezon City University, 2019–2023</p>
          </li>
          <li>
            <h4 className="font-bold text-white">Senior High School Diploma</h4>
            <p className="text-sm text-gray-600">ABE International Business College, 2017–2019</p>
          </li>
          <li>
            <h4 className="font-bold text-white ">Junior High School Diploma</h4>
            <p className="text-sm text-gray-600">Justice Cecilia Muñoz Palma High School, 2013–2017</p>
          </li>
        </ul>
      </div>

      {/* Job Experience Column */}
      <div  class="justify-right text-center">
        <h3 className="text-2xl font-semibold mb-4 text-cyan-600">💼 Job Experience</h3>
        <ul className="space-y-3">
          <li>
            <h4 className="font-bold text-white">Frontend Developer</h4>
            <p className="text-sm text-gray-600">TechCorp Inc., 2023–Present</p>
          </li>
          <li>
            <h4 className="font-bold text-white">Intern Developer</h4>
            <p className="text-sm text-gray-600">StartUp Studio, 2022–2023</p>
          </li>
        </ul>
      </div>
      
    </div>
  </section>
);

export default About;
