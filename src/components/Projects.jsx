import { useState } from "react";
import { projects } from "../data/projectsData";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="py-10 px-6 bg-gray-100 text-black text-center"
    >
      <h2 className="text-3xl font-bold mb-2">Projects</h2>
      <p className="mx-auto mb-8 max-w-2xl text-sm text-gray-700">
        Selected builds presented as compact case studies: problem, stack,
        outcome, and the technical decisions behind them.
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 justify-center">
        {projects.map((project) => (
          <article
            key={project.id}
            className="bg-white border border-gray-300 rounded-lg overflow-hidden cursor-pointer text-left transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
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

              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Goal
                </p>
                <p className="mt-1 text-sm text-gray-800">{project.goal}</p>
              </div>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.techStack.slice(0, 4).map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex gap-3">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-sm text-black font-medium hover:opacity-60 transition"
                  >
                    Live Demo
                  </a>
                )}
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-sm text-black font-medium hover:opacity-60 transition"
                  >
                    Source Code
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
            className="max-h-[90vh] w-[92%] max-w-3xl overflow-y-auto rounded-lg bg-white p-6 text-left text-black shadow-2xl animate-slideUp md:p-8"
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
            <p className="text-gray-800 mb-6 whitespace-pre-line">
              {selectedProject.details}
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <section className="rounded-md border border-gray-200 p-4">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                  Goal
                </h3>
                <p className="text-sm leading-6 text-gray-800">
                  {selectedProject.goal}
                </p>
              </section>

              <section className="rounded-md border border-gray-200 p-4">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                  Challenge / Solution
                </h3>
                <p className="text-sm leading-6 text-gray-800">
                  <span className="font-semibold text-black">Challenge:</span>{" "}
                  {selectedProject.challenge}
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-800">
                  <span className="font-semibold text-black">Solution:</span>{" "}
                  {selectedProject.solution}
                </p>
              </section>
            </div>

            <h4 className="mt-6 mb-2 font-semibold">Tech Stack</h4>
            <ul className="flex flex-wrap gap-2 mb-6">
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
            <div className="flex gap-4 flex-wrap">
              {selectedProject.liveLink && (
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block border border-black text-black px-4 py-2 rounded-md font-semibold hover:bg-black hover:text-white transition"
                >
                  Live Demo
                </a>
              )}
              {selectedProject.repoLink && (
                <a
                  href={selectedProject.repoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block border border-black text-black px-4 py-2 rounded-md font-semibold hover:bg-black hover:text-white transition"
                >
                  Source Code
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
