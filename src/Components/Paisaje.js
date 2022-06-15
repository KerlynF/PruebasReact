import React from "react";

function Paisaje()
{
    return(
        <div className='country-description-container'>
            <img className='country-image' src={require('../Images/Paisaje-Venecia.jpg')} alt='Imagen de Venecia'/>
            <div className="country-text-container">
                <p className="name-country">Venecia</p>
                <p className="slogan-country">"La ciudad de los canales"</p>
                <p className="description-country">"Venecia es la ciudad de los canales, capital de la región de Véneto, situada sobre un conjunto de islas que se extiende en una laguna pantanosa en el mar Adriático, entre las desembocaduras de los ríos Po al sur y Piave al norte."</p>
            </div>
        </div>
    );
}

export default Paisaje;