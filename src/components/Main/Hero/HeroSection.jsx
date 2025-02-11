import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-container">
      <div className="hero-title">
        <h1>Hi, I'm Johan</h1>
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
            <img src="/public/icons/linkedin.svg" alt="" />
            <a
              href="https://www.linkedin.com/in/johanromeo/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/johanromeo
            </a>
          </div>
          <div className="social-media-links--item">
            <img src="/public/icons/github.svg" alt="" />
            <a
              href="https://github.com/johanromeo"
              target="_blank"
              rel="noreferrer"
            >
              github.com/johanromeo
            </a>
          </div>
          <div className="social-media-links--item">
            <img src="/public/icons/mail.svg" alt="" />
            <a href="mailto:johan_romeo123@live.se">johan_romeo123@live.se</a>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default HeroSection;
