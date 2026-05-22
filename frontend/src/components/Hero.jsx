import profile from "../assets/preeti.jpg";

function Hero() {
  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top_right,_rgba(6,182,212,0.22),transparent_18%),radial-gradient(circle_at_bottom_left,_rgba(56,189,248,0.12),transparent_24%),#01050f] text-white flex flex-col md:flex-row items-center justify-center px-8 md:px-16 gap-16 pt-24 md:pt-0 animate-fade-in-up">

      <div className="max-w-2xl space-y-8 text-center md:text-left animate-fade-in-up animate-fade-in-delay-1">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 tracking-[0.14em] uppercase">
          Data Science · AI · Full Stack
        </div>

        <h1 className="text-5xl md:text-7xl font-semibold leading-tight">
          Hi, I'm <span className="text-cyan-400">Preeti Yadav</span>
        </h1>

        <p className="text-xl text-slate-300 max-w-xl leading-relaxed">
          I create polished data-driven applications and AI-powered experiences using clean frontend design and strong backend systems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-3 text-black font-semibold shadow-lg shadow-cyan-400/20 transition hover:scale-[1.02]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-cyan-400/60 px-8 py-3 text-cyan-200 transition hover:bg-cyan-400/10 hover:text-cyan-100"
          >
            Hire Me
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center rounded-full border border-cyan-400/60 px-8 py-3 text-cyan-200 transition hover:bg-cyan-400/10 hover:text-cyan-100"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="relative animate-fade-in-up animate-fade-in-delay-2">
        <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-cyan-400/30 via-transparent to-slate-800/30 blur-2xl opacity-80 animate-glow" />
        <img
          src={profile}
          alt="Preeti Yadav"
          className="relative w-72 h-72 rounded-[2rem] object-cover border-4 border-cyan-400/30 shadow-2xl"
        />
      </div>
    </section>
  );
}

export default Hero;