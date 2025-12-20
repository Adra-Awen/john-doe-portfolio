import "../index.css"
import InfosContact from "../composents/infos-contact";
import Banner from "../composents/banner";

function Mentions(){
    return(
        <>
            <Banner
                image="/assets/images/banner.jpg"
        />

        <div className="container mentions-page my-5">
        <h4 className="portfolio-title">Mentions légales</h4>

            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Editeur du site
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                                <h3 className="accordion-body-title">John Doe</h3>
                                <InfosContact
                                    email="contact@john-doe.fr"
                                    phone="+33 6 01 02 04 05"
                                    address={{
                                        street:"24 route de Lorient",
                                        city:"35000 Rennes"
                                    }}
                                    variant="accordion"
                                />
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Hébergeur
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <h3 className="accordion-body-title">o2switch</h3><br />
                            <p>Chem. des Pardiaux<br />
                            63000 Clermont-Ferrand<br />
                            04 44 44 60 40</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Crédits
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <h3 className="accordion-body-title">Crédits</h3><br />
                            <p>
                            Ce site a été réalisé par John Doe, élève au <a href="https://www.centre-europeen-formation.fr/" target="_blank">Centre Européen de Formation.</a><br />
                            Les images utilisées dans ce site sont libres de droits et ont été téléchargées sur <a href="https://www.pixabay.com" target="_blank">Pixabay</a><br />
                            Le favicon utilisé pour ce site a été fourni par <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe" target="_blank">John Don - Flaticon.</a>
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Mentions;