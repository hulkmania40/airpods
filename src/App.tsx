import "./App.css";
import About from "./components/About/About.";
import HeroLightpass from "./components/HeroLightpass/HeroLightpass";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <HeroLightpass />
      <About />
    </div>
  );
}

export default App;
