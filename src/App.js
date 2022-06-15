import logo from './logo.svg';
import './App.css';
import Paisaje from './Components/Paisaje.js';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <h1>Estas son algunas de las ciudades mas hermosas del mundo</h1>
        <Paisaje 
        nameCountry='Venecia' 
        sloganCountry='La ciudad de los canales' 
        countryDescription='Venecia es la ciudad de los canales, capital de la región de Véneto, situada sobre un conjunto de islas que se extiende en una laguna pantanosa en el mar Adriático, entre las desembocaduras de los ríos Po (al sur) y Piave (al norte)'
        nameImage='Venecia'/>
        <Paisaje
        nameCountry='Suecia'
        sloganCountry='La ciudad del turismo'
        countryDescription='Suiza, es un país ubicado en el centro de Europa, rodeado por Alemania, Austria, Liechtenstein, Italia y Francia. Rodeada de montes nevados y atravesada por llanuras y valles, Suiza presenta una variedad de paisajes que deleitan a los viajeros'
        nameImage='Suecia' 
        />

      </div>
      
    </div>
  );
}

export default App;
