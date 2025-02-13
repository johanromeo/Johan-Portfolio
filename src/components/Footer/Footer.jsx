import "./Footer.css";

import PersonalBrand from "../Header/PersonalBrand/PersonalBrand";

const Footer = () => {
  return (
    <footer className="footer-container">
      <PersonalBrand />
      <div className="author">
        <p>Developed by &copy; Johan Romeo 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
