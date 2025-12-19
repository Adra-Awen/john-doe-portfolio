import "../index.css";

function Accueil() {
  return (
    <header className="header-hero">
      <img className="image-hero" src="/assets/images/hero-bg.jpg" alt="Image de présentation"/>
      <div className="hero-infos">
      <div className="hero-text">
        <h1>John Doe</h1>
        <h2>Développeur Web & Mobile</h2>
      </div>
      <div classname="hero-button" type="button">
        <button type="button" className="btn btn-warning">En savoir plus</button>
      </div>
      </div>
    </header>
  );
}

export default Accueil;
