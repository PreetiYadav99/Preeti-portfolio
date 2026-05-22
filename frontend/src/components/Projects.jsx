import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Quiz Generator Using OpenAI",
      desc: "AI-powered MCQ generation system built with Flask and OpenAI for fast learning content creation.",
      link: "https://github.com/PreetiYadav99/quiz-generator-openai",
      tags: ["Flask", "OpenAI", "Python"]
    },
    {
      title: "GeoPulse",
      desc: "Soil quality detection using deep learning and image analysis to support precision agriculture.",
      link: "https://github.com/PreetiYadav99/geopulse",
      tags: ["Deep Learning", "Computer Vision", "Data Science"]
    },
    {
      title: "Flight Booking Simulator",
      desc: "Full stack booking experience with dynamic pricing and responsive user interface.",
      link: "https://github.com/PreetiYadav99/flight-booking-simulator",
      tags: ["React", "Node.js", "UI/UX"]
    },
    {
      title: "BIT Tutorials",
      desc: "Educational platform for AKTU first-year students, centralizing academic resources and study materials.",
      link: "https://github.com/PreetiYadav99/bit-tutorials",
      tags: ["Education", "Web App", "Student Resources"]
    },
    {
      title: "Heart Disease Detection",
      desc: "Predictive model for heart disease likelihood using patient health data, feature selection, and model evaluation.",
      link: "https://github.com/PreetiYadav99/heart-disease-detection",
      tags: ["Machine Learning", "Data Science", "Health AI"]
    }
  ];

  return (
    <section id="projects" className="bg-[#020814] text-white py-24 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/70 mb-4">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Projects
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`overflow-hidden rounded-[2rem] border border-cyan-400/10 bg-white/5 p-7 shadow-[0_25px_80px_-40px_rgba(14,165,233,0.45)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 animate-fade-in-up ${index === 0 ? "animate-fade-in-delay-1" : index === 1 ? "animate-fade-in-delay-2" : "animate-fade-in-delay-3"}`}
            >
              <h3 className="text-2xl font-semibold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-slate-300 leading-7 mb-5">
                {project.desc}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100 transition hover:border-cyan-400/50 hover:bg-cyan-400/20 mb-4"
                >
                  View Project <FaExternalLinkAlt className="text-sm" />
                </a>
              )}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;