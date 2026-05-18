const skillGroups = [
  {
    title: "Languages",
    description: "Core programming languages I use to build applications.",
    skills: ["JavaScript", "Java"],
  },
  {
    title: "Frontend",
    description: "Tools for building responsive, interactive user interfaces.",
    skills: ["React", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    description: "Server-side frameworks and API development tools.",
    skills: ["Node.js", "Express", "Spring Boot", "REST APIs"],
  },
  {
    title: "Databases",
    description: "SQL-based data storage and relational database design.",
    skills: ["SQL", "MySQL", "PostgreSQL"],
  },
  {
    title: "Tools",
    description: "Workflow tools for testing, version control, and deployment.",
    skills: ["Git", "GitHub", "Vercel", "Postman"],
  },
];

function Skills() {
  return (
    <section id="skills" className="bg-white px-6 py-20 text-black">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold">Skills & Technologies</h2>
          <p className="mx-auto max-w-2xl text-sm leading-6 text-gray-700">
            Technologies I use to build full-stack applications, grouped by how
            they fit into the development process.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="group rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:bg-white hover:shadow-xl"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-blue-600">
                    {group.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {group.description}
                  </p>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-blue-50 text-sm font-bold text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  {group.skills.length}
                </span>
              </div>

              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm transition-colors duration-300 group-hover:border-gray-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
