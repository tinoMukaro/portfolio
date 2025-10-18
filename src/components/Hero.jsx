import { FaInstagram, FaWhatsapp, FaGithub, FaEnvelope } from 'react-icons/fa';
function Hero(){
    return(
          <section className="hero">
            <div className="hero-text">
                <h1>Full-Stake Web developer and aspiring Cloud engineer</h1>
                <p>
                    Hi, My name is Tino Mukaro i am a fullstake web developer with expertise in node.js.<br />
                    i focus on building scalable web apps using various technologies, <br />
                    i enjoy using technology to solve day to day problems and learning new skills. <br />
                    i am always looking for challenges and opportunities to grow as a developer <br />
                </p>
                <div className="socials">
                    <a href="https://www.instagram.com/tinomukaro/" target="_blank" rel="noreferrer"><FaInstagram /></a>
                    <a href="https://wa.me/+263786020205" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
                    <a href="mailto:vamukaro3@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope /></a>
                    <a href="https://github.com/tinomukaro" target="_blank" rel="noreferrer"><FaGithub /></a>
                </div>
            </div>
            <div className="hero-img">
                <img src="/this.jpg" alt="picture of me" />
            </div>

        </section>
    )

}

export default Hero