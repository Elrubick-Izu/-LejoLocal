
import './App.css';
import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo.png'
import Boton from './componentes/Boton'
import Contador from './componentes/Contador'
import { useState } from 'react';

function App() {

  const [numClics, setnumClics] = useState(0);

  //Funciones
  const manejarClic = ()=>{
    setnumClics(numClics + 1);
  }

  const reiniciarContador = ()=>{
    setnumClics(0);
  }
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'
        />
        <div className='contenedor-principal' >
          <Contador 
          numClics={numClics}
          />
          <Boton
            texto = 'Clic'
            esBotonDeClic={true}
            manejarClic={manejarClic}
          />
          <Boton
            texto = 'Reiniciar'
            esBotonDeClic={false}
            manejarClic={reiniciarContador}
          />

        </div>

      </div>
    </div>
  );
}

export default App;
