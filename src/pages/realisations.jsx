import "../index.css"

function Realisations(){
    return (
    <div className="realisations-page">
        <h4 className="portfolio-title">Mes réalisations</h4>
        <p className="portfolio-text">Vous retrouverez ici mes dernières réalisations.</p>
        
        <div className="container-fluid">
            <div className="row justify-content-center g-4 mx-5">
                <div className="col col-12 col-md-6 col-lg-4 mb-4">
                    <div className="card" style={{width:"100%"}}>
                        <img src="/assets/images/espace-bien-etre.jpg" className="card-img-top" alt="image zen"/>
                        <div className="card-body">
                            <h5 className="card-title">Espace bien-être</h5>
                            <p className="card-text">Spa et bien-être.</p>
                            <a href="https://www.espacebienetre-ista.com/" target="_blank" className="btn btn-primary">Voir le site</a>
                        </div>
                    </div>
                </div>

                <div className="col col-12 col-md-6 col-lg-4 mb-4">
                    <div className="card" style={{width:"100%"}}>
                        <img src="/assets/images/fresh-food.jpg" className="card-img-top" alt="image fruits légumes frais"/>
                        <div className="card-body">
                            <h5 className="card-title">Fresh Food</h5>
                            <p className="card-text">Restauration rapide.</p>
                            <a href="https://www.freshfood.fr/" target="_blank" className="btn btn-primary">Voir le site</a>
                        </div>
                    </div>
                </div>

                <div className="col col-12 col-md-6 col-lg-4 mb-4">
                    <div className="card" style={{width:"100%"}}>
                        <img src="/assets/images/restaurant-japonais.jpg" className="card-img-top" alt="image sushis"/>
                        <div className="card-body">
                            <h5 className="card-title">Sakura Ya</h5>
                            <p className="card-text">Restaurant japonais.</p>
                            <a href="https://www.lessakura.fr/" target="_blank" className="btn btn-primary">Voir le site</a>
                        </div>
                    </div>
                </div>

                <div className="col col-12 col-md-6 col-lg-4 mb-4">
                    <div className="card" style={{width:"100%"}}>
                        <img src="/assets/images/seo.jpg" className="card-img-top" alt="image pêle-mêle mots"/>
                        <div className="card-body">
                            <h5 className="card-title">SEO</h5>
                            <p className="card-text">Réferencement du site.</p>
                            <a href="https://www.respire.co/" target="_blank" className="btn btn-primary">Voir le site</a>
                        </div>
                    </div>
                </div>

                <div className="col col-12 col-md-6 col-lg-4 mb-4">
                    <div className="card" style={{width:"100%"}}>
                        <img src="/assets/images/coder.jpg" className="card-img-top" alt="image écran code informatique"/>
                        <div className="card-body">
                            <h5 className="card-title">Sakura Ya</h5>
                            <p className="card-text">Restaurant japonais.</p>
                            <a href="https://www.lessakura.fr/" target="_blank" className="btn btn-primary">Voir le site</a>
                        </div>
                    </div>
                </div>

                <div className="col col-12 col-md-6 col-lg-4 mb-4">
                    <div className="card" style={{width:"100%"}}>
                        <img src="/assets/images/screens.jpg" className="card-img-top" alt="image écrans tablette ordinateur"/>
                        <div className="card-body">
                            <h5 className="card-title">Probeats</h5>
                            <p className="card-text">Maquette du site réalisée sur Figma.</p>
                            <a href="https://www.figma.com/proto/yZMwdCazL45pAoveY3g6BU/Probeats---Maquette?node-id=0-1&t=3BqjTjkYBCGGABYj-1" target="_blank" className="btn btn-primary">Voir le site</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>   
    </div> 
    );
}

export default Realisations;
