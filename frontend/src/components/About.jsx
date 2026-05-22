import { FaUserCircle } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="bg-[#020814] text-white py-24 px-6 sm:px-10 animate-fade-in-up">
      <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.4fr_0.9fr] items-center">
        <div className="animate-fade-in-up animate-fade-in-delay-1">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/70 mb-4">
            Who I am
          </p>
          <div className="flex items-center gap-3">
            <FaUserCircle className="text-cyan-300 text-3xl" />
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              About Me
            </h2>
          </div>
          <p className="text-lg text-slate-300 leading-8 mb-6">
            I am a B.Tech Data Science student focused on building intelligent web experiences and solving real-world problems with data-driven solutions. My work combines AI, scalable backend systems, and thoughtful user interfaces.
          </p>
          <p className="text-lg text-slate-300 leading-8">
            I enjoy designing clean applications, exploring new machine learning techniques, and delivering projects that make information easier to understand.
          </p>
        </div>

        <div className="rounded-[2rem] border border-cyan-400/10 bg-white/5 p-8 shadow-[0_25px_80px_-40px_rgba(56,189,248,0.45)] animate-fade-in-up animate-fade-in-delay-2">
          <h3 className="text-2xl font-semibold text-cyan-300 mb-4">
            What I bring
          </h3>
          <ul className="space-y-4 text-slate-300">
            <li className="flex gap-3">
              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
              Strong problem solving with data and algorithms.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
              Experience with AI, analytics, and clean web UI design.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
              Collaborative mindset and thoughtful communication.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;