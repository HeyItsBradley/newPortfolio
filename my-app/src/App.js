import NavBar from "./components/NavBar";
import "./App.css";
import LandingPage from "./components/LandingPage";

import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
