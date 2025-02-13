import "./About.css";

import Button from "../../common/Button/Button";
import TechStack from "./TechStack/TechStack";

const About = () => {
  return (
    <section className="about-section-container">
      <h2 id="target-1" className="nav-active">
        About me
      </h2>
      <div className="about-text">
        <p>
          I’m passionate about continuous growth and learning - exploring new
          ideas through side projects on my spare time is keeping me stimulated.
        </p>
        <p>
          Right now, I have a goal of becoming a Fullstack Developer, so
          currently I’m pursuing that by attending a React.js course at
          Folkuniversitet. I also want to dive a little bit deeper regarding
          Quality Assurance when writing code, so right now I'm attending a
          course for that too!
        </p>
        <p>
          Looking ahead, I’m on the hunt for a company where I can continue to
          grow both professionally and personally, where knowledge sharing and
          strong core values are at the center.
        </p>
        <p>
          <strong>Hey recruiter</strong>, does this sound interesting? Either
          way, I’d love to buy you a coffee (or tea) and have a chat!{" "}
        </p>
      </div>
      <div className="about-buttons">
        <a href="#target-3">
          <Button text={"Contact me"} />
        </a>
        <a
          href="Johan_Romeo_Resume_Diploma_Grades_Employer_Certificate.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <Button text={"My resume"} />
        </a>
      </div>
      <div className="tech-stack-grid">
        <TechStack />
      </div>
    </section>
  );
};

export default About;
