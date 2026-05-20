function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>

        <p className="text-lg leading-relaxed text-gray-600 mb-4">
          I'm <span className="font-semibold text-blue-600">Tinotenda Mukaro</span>, a
          Software Developer with a Bachelor’s degree in Computer Science from the
          National University of Science and Technology (NUST).
        </p>

        <p className="text-lg leading-relaxed text-gray-600 mb-4">
          I enjoy building practical web applications that solve real business problems.
          My main focus is full-stack development, working with technologies like React,
          Node.js, Express, PostgreSQL, Java, and Spring Boot.
        </p>

        <p className="text-lg leading-relaxed text-gray-600 mb-4">
          I have a growing interest in backend systems, APIs, microservices, debugging,
          and understanding how different services work together in real production
          environments. I enjoy learning by building, testing, breaking things, and
          improving them.
        </p>

        <p className="text-lg leading-relaxed text-gray-600 mb-4">
          I am also interested in using Python, APIs, automation, and machine learning
          to create smarter and more useful software solutions.
        </p>

        <p className="text-lg leading-relaxed text-gray-600 mb-8">
          Outside of coding, I enjoy exploring new technologies, gaming, fitness, and
          thinking through business ideas.
        </p>

        <div id="skills" className="pt-10">
          <h2 className="text-4xl font-bold mb-6">Soft Skills</h2>

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {[
              "Fast Learner",
              "Problem Solver",
              "Adaptable",
              "Curious Mindset",
              "Good Communicator",
              "Team Player",
              "Detail Oriented",
              "Willing to Learn",
            ].map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium text-sm shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;