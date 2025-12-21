import "../index.css"
import Banner from "../composents/banner";
import ContactForm from '../composents/contact-form';
import InfosContact from "../composents/infos-contact";
import GoogleMap from "../composents/googlemap";

function Contact(){
    return(
        <>
            <Banner
                image="/assets/images/banner.jpg"
        />
        <div className="container contact-page my-5">
            <h4 className="portfolio-title">Formulaire de contact</h4>
            <p className="portfolio-text">Contactez moi via ce formulaire.</p>
            <ContactForm/>
            <InfosContact
              email="contact@john-doe.fr"
              phone="33 6 01 02 04 05"
              address={{
                street:"24 rue de Lorient",
                city:"35000 Rennes"}}
              variant="contact-page"                
            />
            <GoogleMap adress="24 Rue de Lorient, 35000 Rennes"/>
        </div>
        </>
    )
}

export default Contact;