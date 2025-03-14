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
      <main className="app-main-container">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/series" element={<Media programType={"series"} />} />
          <Route path="/peliculas" element={<Media programType={"movie"} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
