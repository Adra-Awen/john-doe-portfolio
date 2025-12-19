import "../index.css";
import { NavLink } from "react-router-dom";

function Menu({variant="navbar"}) {
    return (
        <ul className={`navbar-nav ${variant === "footer" ? "" : "me-auto mb-2 mb-lg-0"}`}>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" end>Accueil</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/realisations" className="nav-link">Réalisations</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/services" className="nav-link">Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-link">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/mentions" className="nav-link">Mentions</NavLink>
                    </li>
                </ul>
    )
}

export default Menu;