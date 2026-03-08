import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";

const App = () => {
  return (
    <div className="app-container">
      <div className="glow-bg"></div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  )
}

export default App;
