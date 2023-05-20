
import { useState } from 'react';
import './App.css';
import Boton from './componentes/Boton'
import Contador from './componentes/Contador';

function App() {

  //Funciones
  const [numclics, setnumClics] = useState(0);

  const manejarBoton= () => {
    console.log('Click')
    setnumClics(numclics + 1);
  }

  const manejarReiniciar = () =>{
    console.log('Reiniciar')
    setnumClics(0);
  }

  return (


    <div className="App">
        <div className='contenedor-principal'>
            <Contador
              numClicks={numclics}
            />
            <Boton
              texto = 'Click'
              esUnBotonClick={true}
              manejarBoton={manejarBoton}
            />

            <Boton
              texto = 'Reiniciar'
              esUnBotonClick={false}
              manejarBoton={manejarReiniciar}
            />
        </div>
    </div>
  );
}

export default App;
