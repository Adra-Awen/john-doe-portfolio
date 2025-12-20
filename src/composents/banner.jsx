import "../index.css"

function Banner({image}){
    return(
        <div className="banner" style={{backgroundImage :`url(${image})`}}>
        </div>
    )
}

export default Banner;