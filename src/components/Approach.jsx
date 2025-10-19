function Approach() {
  const steps = [
    {
      title: "Planning & Strategy",
      desc: "I start by understanding the problem, researching user needs, and mapping out a clear plan for the project. Good code begins with good strategy.",
    },
    {
      title: "Design & Development",
      desc: "Using modern tools and frameworks, I turn ideas into interactive, scalable web applications with clean and maintainable code.",
    },
    {
      title: "Testing & Updates",
      desc: "I test thoroughly, gather feedback, and continuously refine features to ensure smooth performance and a great user experience.",
    },
    {
      title: "Deployment & Launch",
      desc: "Finally, I deploy the app to a reliable platform and monitor performance, ready to make improvements and scale as needed.",
    },
  ];

  return (
    <section id="approach" className="py-20 bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">My Approach</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 "
            >
              <div className="text-2xl font-semibold text-blue-600 mb-3">
                {step.title}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Approach;
