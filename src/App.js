import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Footer from "./components/Footer";
import Media from "./components/Media";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/series" element={<Media programType={"movie"} />} />
          <Route path="/peliculas" element={<Media programType={"series"} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
