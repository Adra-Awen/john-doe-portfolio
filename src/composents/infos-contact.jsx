import "../index.css";

function InfosContact({email, phone, address, variant}){
    return(
        <div className={`infos-contact ${variant}`}>
            {email && <a href={`mailto:${email}`} target="_blank" rel="nofollow noopener noreferrer">{email}</a>} <br/>
            {phone && <a href={`tel:${phone}`}>{phone}</a>}<br/>
            {address && (
                <div className="address">
                    <span>{address.street}</span><br/>
                    <span>{address.city}</span>
                </div>
            )}
        </div>
    )
}

export default InfosContact;
