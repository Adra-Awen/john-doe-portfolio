import "../index.css";
import { NavLink } from "react-router-dom";

function Projects({ variant }) {
  return (
    <ul className={`navbar-nav ${variant === "footer" ? "footer-menu" : "me-auto mb-2 mb-lg-0"}`}>
      <li className="nav-item">
        <a href="https://www.espacebienetre-ista.com/" target="_blank" rel="noopener noreferrer" className="nav-link">Espace bien-être</a>
      </li>
      <li className="nav-item">
        <a href="https://www.freshfood.fr/" target="_blank" rel="noopener noreferrer" className="nav-link">Fresh Food</a>
      </li>
      <li className="nav-item">
        <a href="https://www.lessakura.fr/" target="_blank" rel="noopener noreferrer" className="nav-link">Sakura Ya</a>
      </li>
      <li className="nav-item">
        <a href="https://www.respire.co/" target="_blank" rel="noopener noreferrer" className="nav-link">SEO respire</a>
      </li>
      <li className="nav-item">
        <a href="https://www.figma.com/proto/yZMwdCazL45pAoveY3g6BU/Probeats---Maquette?node-id=17-135&t=3BqjTjkYBCGGABYj-1&starting-point-node-id=17%3A135" target="_blank" rel="noopener noreferrer" className="nav-link">Maquette Probeats</a>
      </li>
      <li className="nav-item">
        <a href="https://portail-api.meteofrance.fr/web/fr/api/DonneesPubliquesObservation" target="_blank" rel="noopener noreferrer" className="nav-link">API météo</a>
      </li>
    </ul>
  );
}

export default Projects;
