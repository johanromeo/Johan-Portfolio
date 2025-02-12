import "./App.css";

import Header from "./components/Header/Header";
import About from "./components/Main/About/About";
import HeroSection from "./components/Main/Hero/HeroSection";
import Projects from "./components/Main/Projects/Projects";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <HeroSection />
      <About />
      <Projects />
    </div>
  );
}

export default App;
