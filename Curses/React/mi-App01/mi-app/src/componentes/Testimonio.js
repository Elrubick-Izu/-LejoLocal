import React from 'react';
import '../hojas-de-estilo/Testimonio.css'

function Testimonio(promps){
    return(
        <div className='contenedor-testimonio'>                    
           
            <img className='imagen-testimonio'
            /*src={/*require(`../imagenes/testimonio-${promps.imagen}.png`)}*/
            src={require(`../imagenes/testimonio-${promps.imagen}.png`)}
            alt='Foto de Emma'/>
            
            <div className='contenedor-texto-testimonio'>
            
            {/* Para resaltar el testo puedo usar <strong>*/}
                <p className='nombre-testimonio'><strong>{promps.nombre}</strong> en {promps.pais}</p>

                <p className='cargo-testimonio'>{promps.cargo} en <b>{promps.empresa}</b></p>

                <p className='texto-testimonio'>"{promps.testimonio}".</p>
            </div>
        </div>
    );
}

export default Testimonio;