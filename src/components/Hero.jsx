import { FaInstagram, FaWhatsapp, FaGithub, FaEnvelope } from 'react-icons/fa';
function Hero(){
    return(
          <section className="hero">
            <div className="hero-text">
                <h1>Full-Stake Web developer and aspiring Cloud engineer</h1>
                <p>
                    Hey, I’m Tino Mukaro <br />
                    A passionate Full-Stack Developer who enjoys turning ideas into scalable web apps. <br /> 
                    Always learning, always building.<br />
 
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