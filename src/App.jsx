import "./App.css";

import Header from "./components/Header/Header";
import About from "./components/Main/About/About";
import HeroSection from "./components/Main/Hero/HeroSection";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <HeroSection />
      <About />
    </div>
  );
}

export default App;
