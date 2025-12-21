import './App.css';
import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/accueil";
import Navbar from "./composents/navbar"
import Banner from './composents/banner';
import Footer from "./composents/footer"
import Realisations from './pages/realisations';
import Services from './pages/services';
import Contact from './pages/contact';
import Mentions from './pages/mentions';



function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/mentions" element={<Mentions />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
