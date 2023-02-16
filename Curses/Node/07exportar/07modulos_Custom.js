// llamo al modulo de persona
const person = require('C:\\Users\\Gabriel\\Desktop\\@lejo-Local\\VScode\\Udemy\\Node\\07exportar\\libs\\07persona');

let pablo = new person('pablo');

pablo.on('hablar',(mensaje)=>{
     console.log(`Hola soy ${pablo.nombre}`)
})

pablo.emit('hablar','Hoy va a ser un buen día')