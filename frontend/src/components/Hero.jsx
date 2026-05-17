import profile from "../assets/preeti.jpg";

function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center px-10 gap-16">

      {/* Left Side */}
      <div className="text-center md:text-left">

        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          Hi, I'm Preeti Yadav
        </h1>

        <p className="text-2xl text-cyan-400 mb-6">
          Aspiring Data Scientist | AI & Full Stack Developer
        </p>

        <p className="max-w-2xl text-gray-400 text-lg mb-8">
          Passionate about AI, Data Science, Machine Learning,
          and building modern full stack applications.
        </p>

        <a
  href="#projects"
  className="bg-cyan-400 text-black px-8 py-3 rounded-xl font-bold hover:bg-cyan-300 hover:scale-105 transition duration-300"
>
  View Projects
</a>
         <a
    href="/resume.pdf"
    download
    className="border border-cyan-400 px-8 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition"
  >
    Download Resume
  </a>


      </div>

      {/* Right Side Image */}
      <div>

        <img
          src={profile}
          alt="Preeti Yadav"
          className="w-80 h-80 object-cover rounded-full border-4 border-cyan-400 shadow-2xl"
        />

      </div>

    </section>
  );
}

export default Hero;