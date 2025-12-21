import "../index"

function GoogleMap({ address }) {
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

    return(
        <div className="google-map-code">
            <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7566.807983372492!2d-1.737089715699643!3d48.10459414870742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480ee11a58823847%3A0x98b7caed7a72d4b1!2s24%20Rue%20de%20Lorient%2C%2035000%20Rennes!5e0!3m2!1sfr!2sfr!4v1766318482569!5m2!1sfr!2sfr" 
                width="100%"
                height="100%"
                style={{border: 0}}
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}

export default GoogleMap;