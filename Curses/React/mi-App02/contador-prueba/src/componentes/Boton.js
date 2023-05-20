import React from 'react'
import '../hoja-de-estilos/Boton.css'
function Boton ({texto,esUnBotonClick,manejarBoton}){
    return (
        <div className='Botones'>
            <button className={esUnBotonClick ? 'boton-click' : 'boton-reiniciar'}
            onClick={manejarBoton}>
                {texto}
        </button>
        </div>

    )
};

export default Boton;