function Projects() {

  const projects = [
    {
      title: "Quiz Generator Using OpenAI",
      desc: "AI-based MCQ generation system using Flask and OpenAI API."
    },
    {
      title: "GeoPulse",
      desc: "Deep learning based soil quality detection system."
    },
    {
      title: "Flight Booking Simulator",
      desc: "Full stack flight booking platform with dynamic pricing."
    }
  ];

  return (
<section id="projects" className="bg-black text-white py-20 px-8">
          <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-950 border border-cyan-400 p-6 rounded-2xl hover:scale-105 transition"
          >
            <h3 className="text-2xl font-bold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400">
              {project.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Projects;