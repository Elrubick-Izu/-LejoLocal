const { exit } = require('process');
var readline = require('readline')
var util = require("util");
var rl = readline.createInterface(process.stdin, process.stdout); // crea una interface para manipular el stdin y stdout
/*
var preguntas = ["¿Cómo te llamas?"]
rl.question(preguntas, (respuesta)=>{
    for(index in preguntas){
        console.log(`La pregunta : ${preguntas[index]} tiene como respuesta ${respuesta}`)
    }
    process.exit();  
})

var persona = {
    nombre: '',
    comentarios: []
}

rl.question('Cual es tu nombre ', (answer) =>{
    persona.nombre = answer;   
    rl.setPrompt('Dime un comentario')
    rl.prompt()
    rl.question('Tienes algún comentario', (comentario)=>{  
        persona.comentarios=comentario
        //Se puede usar el método setPrompt para llamar a la consola
        rl.setPrompt('Tienes algún otro comentario');
        rl.prompt()
        })   
    }
)

//Para evitar usar tantas question, vamos a usar eventos
rl.on('line',(entrada)=>{
    console.log("Escribiste una linea...")
    }
)
//Para que me reconozca otras lineas

rl.on('line',(input)=>{
    if(input.trim()==='salir'){
        var mensaje = util.format("Te llamas %s y me dijiste : %j",persona.nombre,persona.comentarios)
        console.log(mensaje);
        process.exit();
    }
    persona.comentarios.push(input.trim())
    rl.setPrompt('Ingresa un nuevo comentario: ');
    rl.prompt()

})

*/
//----------------------------------PRACTICA---------------------------------------------------
//Simplificado

var persona ={
    nombre : '',
    comentarios: []
}
rl.question('Como te llamas :',(answer)=>{
    persona.nombre = answer;
    console.log(`El nombre ingresado es: ${persona.nombre}`)
    let respuesta = util.format('Di algo: ')
    rl.setPrompt(respuesta);
    rl.prompt();
    rl.on('line',function(answer){
        if(answer.trim()=== 'salir'){
            var mensaje = util.format(`Me llamo %s y dije de comentario %j`,persona.nombre,persona.comentarios)
            console.log(mensaje)
            process.exit()
        }
        persona.comentarios.push(answer.trim());
        rl.setPrompt('¿Tienes algo qué añadir? : ');
        rl.prompt()
    })

})



