const events = require('events')
const emitter = new events.EventEmitter(); //-> un objeto de la clase events

//console.log(`Me llamo ${persona.nombre}`)

/* //No es muy util dado que repite codigo al momento de crear un evento
// LIBRERIA 1 Y 2
emitter.on('eventoCustom',(mensaje, status)=>{

    console.log(`${status}: ${mensaje}`)
})

emitter.emit('eventoCustom','El mensaje fue cargado con exito',200);*/

//CONTROLANDO OBJETOS, LIBRERIA 3 Y 4



console.log(`Hola soy ${persona.nombre}`)

persona.on('hablar',(cadena)=>{
    console.log(`${persona.nombre} : ${cadena}`)
})

persona.emit('hablar','Hoy fue un gran día.')