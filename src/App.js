import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/accueil";
import Reaslisations from "./pages/realisations";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Mentions from "./pages/mentions";
import Navbar from "./composents/navbar"
import Cards from "./composent/cards";
import Footer from "./composents/footer";

function App(){
  return(
    <>
      <Accueil/>
      <Reaslisations/>
      <Mentions/>
      <Contact/>
      <Services/>
      <Navbar/>
      <Footer/>

      <Routes>
        <Route path="/" element={<Accueil/>} />
        <Route path="realisations" element={<Reaslisations/>} />
        <Route path="services" element={<Services/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="mentions" element={<Mentions/>} />
      </Routes>
    </>
  )
}
export default App;
