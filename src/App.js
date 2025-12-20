import './App.css';
import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/accueil";
import Navbar from "./composents/navbar"
import Footer from "./composents/footer"
import Realisations from './pages/realisations';
import Services from './pages/services';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
