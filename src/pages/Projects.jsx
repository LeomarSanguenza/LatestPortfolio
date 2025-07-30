import React from 'react';

const projects = [
  { title: 'Cool App', description: 'A React app that does stuff.' },
  { title: 'Another Project', description: 'Magic and JavaScript.' },
];

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    {projects.map((proj, idx) => (
      <div key={idx}>
        <h3>{proj.title}</h3>
        <p>{proj.description}</p>
      </div>
    ))}
  </section>
);

export default Projects;
