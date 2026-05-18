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
  onClick={() => setSelectedProject(project)}
  className="group relative cursor-pointer overflow-hidden rounded-3xl border border-gray-200 bg-white text-left shadow-md transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/10"
>
  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

  <div className="overflow-hidden">
    <img
      src={project.image}
      alt={project.title}
      className="h-52 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
    />
  </div>

  <div className="relative p-6">
    <h3 className="mb-2 text-xl font-semibold text-gray-900">
      {project.title}
    </h3>

    <p className="text-sm leading-6 text-gray-600">
      {project.shortDesc}
    </p>

    <div className="mt-5">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
        Goal
      </p>

      <p className="mt-2 text-sm leading-6 text-gray-700">
        {project.goal}
      </p>
    </div>

    <ul className="mt-5 flex flex-wrap gap-2">
      {project.techStack.slice(0, 4).map((tech) => (
        <li
          key={tech}
          className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700 transition duration-300 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600"
        >
          {tech}
        </li>
      ))}
    </ul>

    <div className="mt-6 flex gap-5">
      {project.liveLink && (
        <a
          href={project.liveLink}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-sm font-semibold text-blue-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-700"
        >
          Live Demo →
        </a>
      )}

      {project.repoLink && (
        <a
          href={project.repoLink}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-sm font-semibold text-gray-700 transition-all duration-300 hover:translate-x-1 hover:text-black"
        >
          Source Code →
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
