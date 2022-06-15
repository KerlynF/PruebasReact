import React from "react";
import '../styleSheets/Paisaje.css'

function Paisaje(props)
{
    return(
        <div className='country-description-container'>
            <img className='country-image' src={require(`../Images/Paisaje-${props.nameImage}.jpg`)} alt='Imagen de Venecia'/>
            <div className="country-text-container">
                <p className="name-country">{props.nameCountry}</p>
                <p className="slogan-country">{props.sloganCountry}</p>
                <p className="description-country">{props.countryDescription}</p>
            </div>
        </div>
    );
}

export default Paisaje;