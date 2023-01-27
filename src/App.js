import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Project from "./components/Project";

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contactMe" element={<ContactMe />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
