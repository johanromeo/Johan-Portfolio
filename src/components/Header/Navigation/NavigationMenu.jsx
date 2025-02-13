import ScrollSpy from "react-scrollspy-navigation";
import "./NavigationMenu.css";

const NavigationMenu = () => {
  return (
    <ScrollSpy activeClass="nav-active" offsetTop={80}>
      <nav className="nav-container">
        <a href="#target-0">Home</a>
        <a href="#target-1">About</a>
        <a href="#target-2">Projects</a>
        <a href="#target-3">Contact</a>
      </nav>
    </ScrollSpy>
  );
};

export default NavigationMenu;
