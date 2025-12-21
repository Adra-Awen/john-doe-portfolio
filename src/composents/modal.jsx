import "../index.css";
import { useState, useEffect } from "react";

function Modal({ id, title, imageSrc, imageAlt }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/github-johndoe");
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données GitHub :", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div
        className="modal fade custom-modal" id={id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={`${id}Label`} aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`${id}Label`}>{title}</h5>
              <button type="button"className="btn-close"data-bs-dismiss="modal"aria-label="Fermer"
              ></button>
            </div>

            <div className="modal-body">
              <div className="row">
                <div className="col-12 col-md-6 text-center mb-3 mb-md-0">
                  <img src={imageSrc} alt={imageAlt} className="img-fluid" />
                </div>
                <div className="col-12 col-md-6">
                  {userData ? (
                    <>
                      <a href={userData.html_url} target="_blank" rel="nofollow noreferrer" aria-label="GitHub"
                      >
                        {userData.name || "John Doe"}
                      </a>
                      <hr />
                      <p>Repositories : {userData.public_repos}</p>
                      <p>Followers : {userData.followers}</p>
                      <p>Following : {userData.following}</p>
                    </>
                  ) : (
                    <p>Chargement...</p>
                  )}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
