import  { useState } from "react";
import "../Projects.css";
import { projects } from "../data/projectsData";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            key={project.id}
            className="project-card"
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.shortDesc}</p>
              <div className="project-links">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
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
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="modal-image"
            />
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.details}</p>
            <h4>Tech Stack:</h4>
            <ul>
              {selectedProject.techStack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <div className="modal-links">
              {selectedProject.liveLink && (
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Live
                </a>
              )}
              {selectedProject.repoLink && (
                <a
                  href={selectedProject.repoLink}
                  target="_blank"
                  rel="noreferrer"
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
