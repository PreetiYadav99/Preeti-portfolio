import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  const [status, setStatus] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    // ensure FormSubmit receives _replyto so the received email has Reply-To set
    if (formData.get("email")) {
      formData.set("_replyto", formData.get("email"));
    }

    try {
      const response = await fetch("https://formsubmit.co/preetiyadav7068@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        setStatus("Thanks! Your message has been sent. I'll get back to you soon.");
        event.target.reset();
      } else {
        setStatus("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Unable to send the message right now. Please try again later.");
    }
  };

  return (
    <section id="contact" className="bg-[#020814] text-white py-24 px-6 sm:px-10 animate-fade-in-up">
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.3fr_0.9fr] rounded-[2rem] border border-cyan-400/10 bg-white/5 p-10 shadow-[0_35px_90px_-45px_rgba(14,165,233,0.45)] animate-fade-in-up animate-fade-in-delay-1">
        <div>
          <div className="text-center lg:text-left mb-10">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/70 mb-4">
              Let’s connect
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-white">
              Contact Me
            </h2>
            <p className="mt-4 text-slate-300 max-w-xl leading-7">
              Have a project, collaboration, or freelance opportunity? Send a message and I will get back to you soon.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="_subject" value="New contact request from portfolio" />
            <input type="hidden" name="_captcha" value="false" />

            {status && (
              <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-4 text-cyan-100">
                {status}
              </div>
            )}

            <label className="block text-sm font-medium text-slate-200">
              Name
              <input
                type="text"
                name="name"
                required
                className="mt-2 w-full rounded-2xl border border-cyan-400/20 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
              />
            </label>

            <label className="block text-sm font-medium text-slate-200">
              Email
              <input
                type="email"
                name="email"
                required
                className="mt-2 w-full rounded-2xl border border-cyan-400/20 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
              />
            </label>

            <label className="block text-sm font-medium text-slate-200">
              Message
              <textarea
                name="message"
                rows="5"
                required
                className="mt-2 w-full rounded-2xl border border-cyan-400/20 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
              ></textarea>
            </label>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-black font-semibold shadow-lg shadow-cyan-400/20 transition hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-6 text-center lg:text-left">
          <div className="rounded-[1.5rem] border border-cyan-400/15 bg-slate-950/80 px-6 py-8 transition hover:border-cyan-400/50 hover:bg-slate-950 animate-fade-in-up animate-fade-in-delay-1">
            <FaEnvelope className="mx-auto mb-4 text-3xl text-cyan-400" />
            <p className="text-lg font-semibold">Email</p>
            <p className="text-slate-300 mt-2">preetiyadav7068@gmail.com</p>
          </div>

          <a
            href="https://github.com/PreetiYadav99"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-[1.5rem] border border-cyan-400/15 bg-slate-950/80 px-6 py-8 transition hover:border-cyan-400/50 hover:bg-slate-950 animate-fade-in-up animate-fade-in-delay-2"
          >
            <FaGithub className="mx-auto mb-4 text-3xl text-gray-300" />
            <p className="text-lg font-semibold">GitHub</p>
            <p className="text-slate-300 mt-2">github.com/PreetiYadav99</p>
          </a>

          <a
            href="https://www.linkedin.com/in/preeti-yadav-6b5a6b300"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-[1.5rem] border border-cyan-400/15 bg-slate-950/80 px-6 py-8 transition hover:border-cyan-400/50 hover:bg-slate-950 animate-fade-in-up animate-fade-in-delay-3"
          >
            <FaLinkedin className="mx-auto mb-4 text-3xl text-blue-500" />
            <p className="text-lg font-semibold">LinkedIn</p>
            <p className="text-slate-300 mt-2">linkedin.com/in/preeti-yadav</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;