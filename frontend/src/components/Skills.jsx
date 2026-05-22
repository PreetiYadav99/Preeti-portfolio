import { FaPython, FaChartBar, FaReact, FaCloud, FaUsers } from "react-icons/fa";

function Skills() {
  const skillGroups = [
    {
      name: "Languages",
      items: "Python, SQL, C",
      icon: FaPython
    },
    {
      name: "Data Tools",
      items: "Power BI, Excel, Pandas, NumPy, Matplotlib, Seaborn",
      icon: FaChartBar
    },
    {
      name: "Web Technologies",
      items: "HTML, CSS, React.js, Flask, FastAPI",
      icon: FaReact
    },
    {
      name: "Cloud & Platforms",
      items: "Vercel, Render, Windows",
      icon: FaCloud
    },
    {
      name: "Soft Skills",
      items: "Communication, Teamwork, Problem Solving, Time Management",
      icon: FaUsers
    }
  ];

  return (
    <section id="skills" className="bg-[#020814] text-white py-24 px-6 sm:px-10 animate-fade-in-up">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up animate-fade-in-delay-1">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/70 mb-4">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Skills
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={skill.name} className={`rounded-[2rem] border border-cyan-400/10 bg-white/5 p-8 shadow-[0_25px_80px_-40px_rgba(14,165,233,0.45)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 animate-fade-in-up ${index === 0 ? "animate-fade-in-delay-1" : index === 1 ? "animate-fade-in-delay-2" : index === 2 ? "animate-fade-in-delay-3" : "animate-fade-in-delay-2"}`}>
                <div className="flex items-center gap-4 mb-3">
                      {Icon && <Icon className="text-2xl sm:text-3xl text-cyan-300" />}
                      <h3 className="text-2xl font-semibold text-cyan-300">
                        {skill.name}
                      </h3>
                    </div>
                <p className="text-slate-300 leading-7">
                  {skill.items}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;