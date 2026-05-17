function Skills() {
  return (
    <section
      id="skills"
      className="bg-black text-white py-24 px-8"
    >

      <h2 className="text-5xl font-bold text-cyan-400 text-center mb-14">
        Skills
      </h2>

      <div className="max-w-5xl mx-auto space-y-8 text-lg">

        {/* Languages */}
        <div className="bg-gray-900 p-6 rounded-2xl border border-cyan-400">
          <h3 className="text-2xl font-bold text-cyan-400 mb-3">
            Languages
          </h3>

          <p className="text-gray-300">
            Python, SQL, C Language
          </p>
        </div>

        {/* Data Tools */}
        <div className="bg-gray-900 p-6 rounded-2xl border border-cyan-400">
          <h3 className="text-2xl font-bold text-cyan-400 mb-3">
            Data Tools
          </h3>

          <p className="text-gray-300">
            Power BI, MS Excel, Pandas, NumPy,
            Matplotlib, Seaborn
          </p>
        </div>

        {/* Platforms */}
        <div className="bg-gray-900 p-6 rounded-2xl border border-cyan-400">
          <h3 className="text-2xl font-bold text-cyan-400 mb-3">
            Platforms
          </h3>

          <p className="text-gray-300">
            Windows
          </p>
        </div>

        {/* Web Technologies */}
        <div className="bg-gray-900 p-6 rounded-2xl border border-cyan-400">
          <h3 className="text-2xl font-bold text-cyan-400 mb-3">
            Web Technologies
          </h3>

          <p className="text-gray-300">
            HTML, CSS, React.js, Flask, FastAPI
          </p>
        </div>

        {/* Cloud */}
        <div className="bg-gray-900 p-6 rounded-2xl border border-cyan-400">
          <h3 className="text-2xl font-bold text-cyan-400 mb-3">
            Cloud
          </h3>

          <p className="text-gray-300">
            Vercel, Render
          </p>
        </div>

        {/* Soft Skills */}
        <div className="bg-gray-900 p-6 rounded-2xl border border-cyan-400">
          <h3 className="text-2xl font-bold text-cyan-400 mb-3">
            Soft Skills
          </h3>

          <p className="text-gray-300">
            Communication, Teamwork, Problem Solving, Time Management
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;