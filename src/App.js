import './App.css';
import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/accueil";
import Navbar from "./composents/navbar"


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Accueil />} />
      </Routes>
    </>
  );
}

export default App;
