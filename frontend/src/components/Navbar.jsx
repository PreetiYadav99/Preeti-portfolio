import { FaHome, FaUserAlt, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import profile from "../assets/preeti.jpg";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10 animate-fade-in-up animate-fade-in-delay-1">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-3 md:py-4">
        <a href="#" className="flex items-center gap-3 text-2xl font-semibold tracking-tight text-cyan-300">
          <div className="relative h-12 w-12 rounded-2xl overflow-hidden border-2 border-cyan-300/70 bg-slate-950 transition-transform duration-300 ease-out hover:scale-110">
            <img src={profile} alt="Preeti Yadav" className="h-full w-full object-cover" />
          </div>
          PREETI YADAV
        </a>

        <ul className="hidden md:flex items-center gap-6 text-sm uppercase tracking-[0.2em] text-slate-200">
          <li>
            <a href="#" className="flex items-center gap-2 transition hover:text-cyan-400">
              <FaHome className="text-xs" /> Home
            </a>
          </li>
          <li>
            <a href="#about" className="flex items-center gap-2 transition hover:text-cyan-400">
              <FaUserAlt className="text-xs" /> About
            </a>
          </li>
          <li>
            <a href="#experience" className="flex items-center gap-2 transition hover:text-cyan-400">
              <FaProjectDiagram className="text-xs" /> Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="flex items-center gap-2 transition hover:text-cyan-400">
              <FaProjectDiagram className="text-xs" /> Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="flex items-center gap-2 transition hover:text-cyan-400">
              <FaEnvelope className="text-xs" /> Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;