const About = () => (
  <section
    id="about"
    className="min-h-screen bg-gray-100"
    style={{ paddingTop: '7rem' }}
  >
    <h2 className="text-4xl font-bold text-center mb-8">About</h2>

    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
      {/* Education Column */}
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-cyan-600">🎓 Education</h3>
        <ul className="space-y-3">
          <li>
            <h4 className="font-bold">Bachelor of Science in Computer Science</h4>
            <p className="text-sm text-gray-600">Cool University, 2018–2022</p>
          </li>
          <li>
            <h4 className="font-bold">High School Diploma</h4>
            <p className="text-sm text-gray-600">Awesome High School, 2014–2018</p>
          </li>
        </ul>
      </div>

      {/* Job Experience Column */}
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-cyan-600">💼 Job Experience</h3>
        <ul className="space-y-3">
          <li>
            <h4 className="font-bold">Frontend Developer</h4>
            <p className="text-sm text-gray-600">TechCorp Inc., 2023–Present</p>
          </li>
          <li>
            <h4 className="font-bold">Intern Developer</h4>
            <p className="text-sm text-gray-600">StartUp Studio, 2022–2023</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default About;
