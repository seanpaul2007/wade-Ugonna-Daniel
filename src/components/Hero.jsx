import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I am <span>IGWE BRIGHT SUNDAY</span></h1>
            <h2>Frontend Developer</h2>
            <p>I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive.</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn primary-btn">Contact Me</a>
              <a href="#projects" className="btn secondary-btn">Projects</a>
            </div>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/br-1-ght" target="_blank" rel="noopener noreferrer">
              <i class="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/bright-igwe-a705ba361" target="_blank" rel="noopener noreferrer">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <i class="bi bi-twitter"></i>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <img src="./assets/images/bright1.jpg" alt="Igwe Bright" />
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;