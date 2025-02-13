import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-container">
      <div className="hero-title">
        <h1 id="target-0" className="nav-active">
          Hi, I'm Johan.
        </h1>
      </div>
      <div className="hero-h2">
        <h2>
          A <span className="h2-colored">Junior Software Developer</span>{" "}
          specialized in Java and Integrations.
        </h2>
      </div>
      <div className="social-media-container">
        <nav className="social-media-links">
          <div className="social-media-links--item">
            {/* https://devicon.dev/ */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />

            <a
              href="https://www.linkedin.com/in/johanromeo/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/johanromeo
            </a>
          </div>
          <div className="social-media-links--item">
            {/* https://devicon.dev/ */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />

            <a
              href="https://github.com/johanromeo"
              target="_blank"
              rel="noreferrer"
            >
              github.com/johanromeo
            </a>
          </div>
          <div className="social-media-links--item">
            <img src="/mail.svg" alt="" />
            <a href="mailto:johan_romeo123@live.se">johan_romeo123@live.se</a>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default HeroSection;
