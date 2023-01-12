import NavBar from "./components/NavBar";
import "./App.css";
import LandingPage from "./components/LandingPage";

import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
