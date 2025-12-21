import "../index.css";
import Modal from "../composents/modal";

function Accueil() {
  return (
    <>
    <header className="header-hero">
      <img className="image-hero" src="/assets/images/hero-bg.jpg" alt="Image de présentation"/>
      <div className="hero-infos">
        <div className="hero-text">
          <strong>
            <h1>John Doe</h1>
            <h2>Développeur Web & Mobile</h2>
          </strong>
        </div>
        <button
          type="button"
          className="btn btn-warning hero-btn"
          data-bs-toggle="modal"
          data-bs-target="#modal"
        >
      En savoir plus
    </button>
      </div>
    </header>

    <Modal
          id="modal"
          title="Mon profil GitHub"
          imageSrc="/assets/images/photo-profil.png"
          imageAlt="Photo de profil GitHub">
            <a href="https://api.github.com/users/github-johndoe" target="_blank" rel="nofollow noreferrer" aria-label="GitHub">
            John  Doe</a>
            <p>Repositories : 1</p>
            <p>Followers : 0</p>
            <p>Following : 0</p>
        </Modal>

    
    </>
  );
}

export default Accueil;
