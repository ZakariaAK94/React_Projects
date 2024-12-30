/* eslint-disable react/prop-types */
export default function Entry(props){
    return(
        <>
            <article className="journal-entry">
                <div className="main-image-container">
                    <img src={props.img.src} alt={props.img.title} className="main-image" />
                </div>                
                <div className="info-container">
                    <img src="/images/marker.png" className="marker" alt="map marker icon"/>
                    <span className="country">{props.country}</span>
                    <a href={props.googleMapslink}>
                    View on google Maps
                    </a>              
                    <h2>{props.title}</h2>
                    <p className="trip-date">{props.date}</p>
                    <p className="entry-text">{props.text}</p>
                </div>
            </article>
        </>
    )
}


   