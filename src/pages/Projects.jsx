import React from 'react';

const projects = [
  { title: 'Cool App', description: 'A React app that does stuff.' },
  { title: 'Another Project', description: 'Magic and JavaScript.' },
];

const Projects = () => (
  <section
    id="projects"
    className="min-h-screen bg-gray-100 py-20 px-6"
  >
    <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
    
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {projects.map((proj, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition"
        >
          {/* Card Body (flexed) */}
          <div className="flex flex-col md:flex-row items-start gap-6 p-6">
            {/* Thumbnail (placeholder for now) */}
            <div className="w-full md:w-1/3 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Image</span>
            </div>

            {/* Content */}
            <div className="flex-1 text-left">
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-600 mb-4">{proj.description}</p>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                View Project
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
