import { useState } from "react";
import ScrollSpy from "react-scrollspy-navigation";
import "./NavigationMenu.css";

const NavigationMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <ScrollSpy activeClass="nav-active" offsetTop={80}>
        <nav className={`nav-container ${menuOpen ? "open" : ""}`}>
          <a href="#target-0">Home</a>
          <a href="#target-1">About</a>
          <a href="#target-2">Projects</a>
          <a href="#target-3">Contact</a>
        </nav>
      </ScrollSpy>
    </div>
  );
};

export default NavigationMenu;
