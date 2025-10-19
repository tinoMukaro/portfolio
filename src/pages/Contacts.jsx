import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section id="contacts" className="py-20 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Contact Me</h2>
        <p className="text-gray-700 leading-relaxed my-10">
            Im always available to talk
        </p>


        <div className="flex flex-col md:flex-row justify-center gap-10 text-gray-700">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-blue-600 text-xl" />
            <a href="mailto:vamukaro3@gmail.com" className="hover:text-blue-600 transition-colors">
              vamukaro3@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaPhone className="text-blue-600 text-xl" />
            <span>+263 786 020 205 || +263 713 603 359</span>
          </div>
          

          <div className="flex items-center gap-3">
            <FaGithub className="text-blue-600 text-xl" />
            <a href="https://github.com/tinomukaro" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
              GitHub
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaLinkedin className="text-blue-600 text-xl" />
            <a href="https://www.linkedin.com/in/tinomukaro/" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
