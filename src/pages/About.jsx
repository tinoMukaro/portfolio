function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>

        <p className="text-lg leading-relaxed text-gray-600 mb-4">
          I'm <span className="font-semibold text-blue-600">Tinotenda Mukaro</span>, a Full-Stack Web Developer
          with a Bachelor’s degree in Computer Science from the National University of Science and Technology (NUST).
        </p>

        <p className="text-lg leading-relaxed text-gray-600 mb-4">
          I enjoy building scalable web applications that solve real-world problems. I have experience working with 
          modern technologies like React, Node.js, Express, and integrating machine learning into applications.
        </p>

        <p className="text-lg leading-relaxed text-gray-600 mb-4">
          Outside of coding, I enjoy exploring new technologies, gaming, and Physical exercise. 
        </p>

        <section id="skills" className="py-20 bg-gray-50 text-gray-800">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold mb-6">Soft Skills</h2>
    
    <div className="flex flex-wrap justify-center gap-4 mt-4">
      {["Fast Learner", "Excellent Communication", "Adaptable", "Problem Solver"].map((skill, idx) => (
        <span
          key={idx}
          className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium text-sm shadow-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
</section>

      </div>
    </section>
  );
}

export default About;
