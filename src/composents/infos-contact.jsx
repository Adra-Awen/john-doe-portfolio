import "../index.css";

function InfosContact({email, phone, address, variant}){
    return(
        <div className={`infos-contact ${variant}`}>
            {email && <p>Email : <a href={`mailto:${email}`}>{email}</a></p>}
            {phone && <p>Téléphone : <a href={`tel:${phone}`}>{phone}</a></p>}
            {address && <p>Adresse : {address}</p>}
        </div>
    )
}

export default InfosContact;
