import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";

const App = () => {
  return (
    <div className="app-container">
      <div className="glow-bg"></div>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App;
