import "../index.css";

function Footer () {
    return (
        <footer className="d-flex justify-content-evenly">
            <div className="d-flex p-2" id="infos">
                <h4 className="footer-titl">John Doe</h4>
            </div>
            <div className="d-flex p-2" id="footer-link-pages">
                <h4 className="footer-titl">Liens utiles</h4>
            </div>
            <div className="d-flex p-2" id="footer-last-projects">
                <h4 className="footer-titl">Dernières réalisations</h4>
            </div>
        </footer>

    )
}

export default Footer;