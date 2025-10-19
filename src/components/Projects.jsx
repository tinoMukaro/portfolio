import { useState } from "react";
import { projects } from "../data/projectsData";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="py-10 px-6 bg-gray-100 text-black text-center"
    >
      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 justify-center">
        {projects.map((project) => (
          <article
            key={project.id}
            className="bg-white border border-gray-300 rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
            onClick={() => setSelectedProject(project)}
          >
            {/* Image */}
            <div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-44 object-cover border-b border-gray-200"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-gray-700">{project.shortDesc}</p>

              <div className="mt-3 flex justify-center gap-3">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-black font-medium hover:opacity-60 transition"
                  >
                    Live
                  </a>
                )}
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-black font-medium hover:opacity-60 transition"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-[2000] animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white text-black p-8 rounded-xl w-[90%] max-w-xl relative shadow-2xl animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-4 text-2xl font-bold text-black hover:opacity-60"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>

            {/* Image */}
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-52 object-cover rounded-md border border-gray-200 mb-4"
            />

            {/* Content */}
            <h2 className="text-2xl font-semibold mb-2">
              {selectedProject.title}
            </h2>
            <p className="text-gray-800 mb-4">{selectedProject.details}</p>

            <h4 className="font-semibold mb-2">Tech Stack:</h4>
            <ul className="flex flex-wrap justify-center gap-2 mb-4">
              {selectedProject.techStack.map((tech, index) => (
                <li
                  key={index}
                  className="bg-gray-200 text-sm px-3 py-1 rounded-md"
                >
                  {tech}
                </li>
              ))}
            </ul>

            {/* Modal Links */}
            <div className="flex justify-center gap-4 flex-wrap">
              {selectedProject.liveLink && (
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block border border-black text-black px-4 py-2 rounded-md font-semibold hover:bg-black hover:text-white transition"
                >
                  View Live
                </a>
              )}
              {selectedProject.repoLink && (
                <a
                  href={selectedProject.repoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block border border-black text-black px-4 py-2 rounded-md font-semibold hover:bg-black hover:text-white transition"
                >
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
