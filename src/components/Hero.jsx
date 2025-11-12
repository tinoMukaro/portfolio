import { FaInstagram, FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section id="hero" className="flex justify-between items-center py-28 px-5 gap-10 flex-col md:flex-row">
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Full-Stack Web Developer and Aspiring Cloud Engineer
        </h1>
        <p className="text-gray-700 leading-relaxed">
          Hey, I’m <span className="font-semibold">Tino Mukaro</span> <br />
          A passionate Full-Stack Developer who enjoys turning ideas into
          scalable web apps. <br />
          Always learning, always building.
        </p>

        <div className="flex justify-center md:justify-start gap-5 mt-5 text-2xl">
          <a
            href="https://www.instagram.com/tino.mukaro/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-blue-500 transition-transform transform hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/+263786020205"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-blue-500 transition-transform transform hover:scale-110"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:vamukaro3@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-blue-500 transition-transform transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/tinomukaro"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-blue-500 transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center">
        <img
          src="/this.png"
          alt="picture of me"
          className="w-72 h-72 rounded-2xl object-cover transform rotate-3 transition-transform duration-700 hover:scale-110"
        />
      </div>
    </section>
  );
}

export default Hero;
