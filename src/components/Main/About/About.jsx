import "./About.css";

import Button from "../../common/Button/Button";
import TechStack from "./TechStack/TechStack";

const About = () => {
  return (
    <section className="about-section-container">
      <h2>About me</h2>
      <div className="about-text">
        <p>
          I’m passionate about continous growth and learning - exploring new
          ideas through side projects on my spare time is what’s keeping me
          stimulated.
        </p>
        <p>
          Right now, I have a goal of becoming a Fullstack Developer, so
          currently I’m pursuing that by attending a React.js course. I also
          want to dive a little bit deeper regarding Quality Assurance when
          writing code, so right now I'm attending a course for that too!
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
        <Button text={"Contact me"} />
        <Button text={"My resume"} />
      </div>
      <TechStack />
    </section>
  );
};

export default About;
