import "./App.css";

import Header from "./components/Header/Header";
import About from "./components/Main/About/About";
import HeroSection from "./components/Main/Hero/HeroSection";
import Projects from "./components/Main/Projects/Projects";
import ContactForm from "./components/Main/Contact/ContactForm";

function App() {
  return (
    <main className="app-wrapper">
      <Header />
      <HeroSection />
      <About />
      <Projects />
      <ContactForm />
    </main>
  );
}

export default App;
