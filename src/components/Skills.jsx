const skillGroups = [
  {
    title: "Languages",
    skills: ["JavaScript", "Java"],
  },
  {
    title: "Frontend",
    skills: ["React", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Spring Boot", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["SQL", "MySQL", "PostgreSQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Vercel", "Postman"],
  },
];

function Skills() {
  return (
    <section id="skills" className="bg-white px-6 py-16 text-black">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold">Skills & Technologies</h2>
          <p className="mx-auto max-w-2xl text-sm leading-6 text-gray-700">
            Technologies I use to build full-stack applications, grouped by how
            they fit into the development process.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-lg border border-gray-200 bg-gray-50 p-5"
            >
              <h3 className="mb-4 text-lg font-semibold">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm"
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
