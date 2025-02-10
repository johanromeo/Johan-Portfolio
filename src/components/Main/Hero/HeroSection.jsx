import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-container">
      <div className="hero-title">
        <h1>Hi, I'm Johan.</h1>
      </div>
      <div className="hero-h2">
        <h2>
          A <span className="h2-colored">Junior Software Developer</span>{" "}
          specialized in Java and Integrations.
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
