/* PRACTICA CON JSON
var cars = `[
    {
        "modelo": "Volkswage T-cross",
        "produccion": 2011,
        "millaje":12000
    },
    {
        "modelo": "Honda accord",
        "produccion": 2011,
        "millaje":4560
    },
    {
        "modelo": "Chevrolet Aveo",
        "produccion": 2015,
        "millaje": 75004
    }
]`;

var newCar = JSON.stringify(cars)
//process.stdout.write(newCar.toString())

var objectCar = JSON.parse(cars);
var objectFitler = objectCar.filter(
    (carro) => carro.produccion >2013
)

var final = JSON.stringify(objectFitler)

process.stdout.write(final.toString())
*/

const { stdin, exit } = require("process");


//                  CLASE 03

/*
process.stdout.write("Dime tu edad: ") //->Imprimi en la terminal un mensaje 

process.stdin.on('data',function(event){
    edad = event.toString().trim(); //El método trim permite quitar los espaciados propuestos por el salto de linea ${}
    process.stdout.write(`Tu edad es : ${edad}!`)
    process.exit();     //La unica forma de salirnos del proceso es matandolo ;(
})*/

var preguntas = ["¿Cómo te llamas?"
                ,"¿Cuántos años tienes?",
                "¿Cuál es tu lenguaje de programación?"];

var respuestas = [];

function cuestionario(index){
        process.stdout.write(preguntas[index].toString() + " : ");
}

process.stdin.on('data', function(event){
    respuestas.push(event.toString().trim())
    if(respuestas.length<preguntas.length){
        cuestionario(respuestas.length)
    } else {
        process.exit();
    }
})

cuestionario(0);


//----------------------------------PRACTICA---------------------------------------------------

