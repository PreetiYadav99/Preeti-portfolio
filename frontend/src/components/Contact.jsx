import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-950 text-white py-20 px-8"
    >

      <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
        Contact Me
      </h2>

      <div className="flex flex-col items-center gap-8 text-xl">

        {/* Email */}
        <a
          href="mailto:preetiyadav7068@gmail.com"
          className="flex items-center gap-4 hover:text-cyan-400 transition"
        >
          <FaEnvelope className="text-3xl text-red-400" />
          <span>preetiyadav7068@gmail.com</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/PreetiYadav99"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 hover:text-cyan-400 transition"
        >
          <FaGithub className="text-3xl text-gray-300" />
          <span>github.com/PreetiYadav99</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/preeti-yadav-6b5a6b300"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 hover:text-cyan-400 transition"
        >
          <FaLinkedin className="text-3xl text-blue-500" />
          <span>linkedin.com/in/preeti-yadav</span>
        </a>

      </div>

    </section>
  );
}

export default Contact;