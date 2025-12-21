import "../index.css"

function ContactForm(){
    return (
        <div className="container contact-page my-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <form className="contact-form">
                        {/*NOM*/}
                        <div classname="mb-4">
                            <label htmlFor="name" className="form-label">
                                Nom Prénom
                            </label>
                            <input type="text" className="form-control" id="name" placeholer="Nom Prénom" required/>
                        </div>

                        {/*E-mail*/}
                        <div classname="mb-4">
                            <label htmlFor="email" className="form-label">
                                E-mail 
                            </label>
                            <input type="email" className="form-control" id="email" placeHolder="nom@exemple.com" required/>
                        </div>

                        {/*Téléphone*/}
                        <div classname="mb-4">
                            <label htmlFor="phone" className="form-label">
                                Numéro de téléphone
                            </label>
                            <input type="email" className="form-control" id="phone" placeHolder="01 02 03 04 05" required/>
                        </div>

                        {/*Objet*/}
                        <div classname="mb-4">
                            <label htmlFor="subject" className="form-label">
                                Objet
                            </label>
                            <input type="text" className="form-control" id="subject" placeHolder="Objet de votre message" required/>
                        </div>

                        {/*Message*/}
                        <div classname="mb-4">
                            <label htmlFor="message" className="form-label">
                                Message
                            </label>
                            <textarea type="text" className="form-control" id="message" placeHolder="Votre message" required/>
                        </div>

                        {/*Bouton*/}
                        <div classname="mb-4">
                            <button type="submit" className="btn btn-primary" id="button"> Envoyer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>     
                
    )
}

export default ContactForm;
