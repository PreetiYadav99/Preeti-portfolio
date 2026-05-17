function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black text-white shadow-lg z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-3xl font-bold text-cyan-400">
          PREETI YADAV 
        </h1>

        <ul className="flex gap-8 text-lg">

  <a href="#">
    <li className="cursor-pointer hover:text-cyan-400 transition">
      Home
    </li>
  </a>

  <a href="#about">
    <li className="cursor-pointer hover:text-cyan-400 transition">
      About
    </li>
  </a>

  <a href="#projects">
    <li className="cursor-pointer hover:text-cyan-400 transition">
      Projects
    </li>
  </a>

  <a href="#contact">
    <li className="cursor-pointer hover:text-cyan-400 transition">
      Contact
    </li>
  </a>

</ul>

      </div>
    </nav>
  );
}

export default Navbar;