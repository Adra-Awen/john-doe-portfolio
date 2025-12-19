import "../index.css";
import InfosContact from "./infos-contact";
import Menu from "./menu";
import Projects from "./projects";

function Footer() {
  return (
    <footer className="d-flex justify-content-evenly">
      <div className="d-flex flex-column p-2" id="footer-infos">
        <h4 className="footer-titl">John Doe</h4>
        <div className="InfosContact-component">
          <InfosContact
            email="contact@john-doe.fr"
            phone="33 6 01 02 04 05"
            address="2 route de Lorient 35000 Rennes"
            variant="footer"
          />
        </div>
      </div>

      <div className="d-flex flex-column p-2" id="footer-link-pages">
        <h4 className="footer-titl">Liens utiles</h4>
        <div className="Menu-component">
          <Menu variant="footer" />
        </div>
      </div>

      <div className="d-flex flex-column p-2" id="footer-last-projects">
        <h4 className="footer-titl">Dernières réalisations</h4>
        <div className="projects-component">
          <Projects variant="footer" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;