import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Project from "./components/Project";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/newPortfolio" element={<LandingPage />} />
          <Route path="/newPortfolio/aboutMe" element={<AboutMe />} />
          <Route path="/newPortfolio/projects" element={<Project />} />
          <Route path="/newPortfolio/contactMe" element={<ContactMe />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
