import { FaBriefcase } from "react-icons/fa";

import InfosysLogo from "../assets/infosys.svg";
import IbmLogo from "../assets/ibm.svg";
import InternshalaLogo from "../assets/internshala.svg";

function Experience() {
  const experience = [
    {
      title: "Python Stack Intern",
      company: "Infosys Springboard",
      logo: InfosysLogo,
      period: "Nov 2025 – Present",
      summary: "Delivered backend services and reusable Python modules for data-driven applications.",
      points: [
        "Built scalable APIs and automation pipelines.",
        "Improved code structure with modular design patterns.",
        "Collaborated across teams to deliver production-ready features."
      ]
    },
    {
      title: "Data Analytics Intern",
      company: "IBM PBL CSRBOX",
      logo: IbmLogo,
      period: "July – August 2025",
      summary: "Created actionable insights from complex datasets using Python and visualization tools.",
      points: [
        "Designed dashboards and reports for stakeholder reviews.",
        "Explored data patterns using Pandas, NumPy, and Seaborn.",
        "Presented results with a strong focus on business impact."
      ]
    }
    ,
    {
      title: "Artificial Intelligence Intern",
      company: "Internshala (Virtual)",
      logo: InternshalaLogo,
      period: "May – June 2025",
      summary: "Completed hands-on training and real-world AI projects focused on model building and problem solving.",
      points: [
        "Built and evaluated small ML models as part of practical projects.",
        "Learned model design, training, and deployment best practices.",
        "Applied AI techniques to real-world problem statements."
      ]
    },
    {
      title: "Data Analytics Intern",
      company: "IBM PBL CSRBOX (Virtual)",
      period: "July – August 2025",
      summary: "Worked with real datasets to perform data cleaning, visualization, and analytics using Python and Excel.",
      points: [
        "Performed data preprocessing and feature engineering.",
        "Built dashboards and business-insight reports using IBM analytics tools.",
        "Communicated findings to stakeholders through visualizations."
      ]
    },
    {
      title: "Python Stack Intern",
      company: "Infosys Springboard (Remote)",
      period: "Nov 2025 – Present",
      summary: "Gaining hands-on experience in Python development, data handling, and backend logic implementation.",
      points: [
        "Write clean, efficient, and modular code for scalable applications.",
        "Collaborate with the team to design and optimize backend solutions.",
        "Implement data handling and integration features for production systems."
      ]
    }
  ];

  return (
    <section id="experience" className="relative overflow-hidden bg-[#020814] text-white py-24 px-6 sm:px-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-cyan-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/70 mb-4">
            Professional Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Experience
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {experience.map((item, index) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-white/5 p-8 shadow-[0_30px_80px_-40px_rgba(14,165,233,0.45)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 animate-fade-in-up ${index === 0 ? "animate-fade-in-delay-1" : "animate-fade-in-delay-2"}`}
            >
              <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200 mb-4">
                {item.period}
              </span>
              <div className="flex items-center gap-3 mb-3">
                  {item.logo && (
                    <img src={item.logo} alt={`${item.company} logo`} className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-md" />
                  )}
                  <FaBriefcase className="text-cyan-400 text-xl sm:text-2xl" />
                  <h3 className="text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              <p className="text-cyan-300 mb-4">
                {item.company}
              </p>
              <p className="text-slate-300 leading-7 mb-5">
                {item.summary}
              </p>
              <ul className="space-y-3 text-slate-300">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;