const events = require('events')
const emitter = new events.EventEmitter(); //-> un objeto de la clase events
const eventEmitter = require('events').EventEmitter; //Estamos heredando un evento de la clase emitter para no repetir codigo
const util = require('util');

//console.log(`Me llamo ${persona.nombre}`)

/* //No es muy util dado que repite codigo al momento de crear un evento
// LIBRERIA 1 Y 2
emitter.on('eventoCustom',(mensaje, status)=>{

    console.log(`${status}: ${mensaje}`)
})

emitter.emit('eventoCustom','El mensaje fue cargado con exito',200);*/

//CONTROLANDO OBJETOS, LIBRERIA 3 Y 4
/*
let Person = function(nombre){
    this.nombre = nombre;
}

var persona = new Person('Bob')

util.inherits(Person,eventEmitter);

console.log(`Hola soy ${persona.nombre}`)

persona.on('hablar',(cadena)=>{
    console.log(`${persona.nombre} : ${cadena}`)
})

persona.emit('hablar','Hoy fue un gran día.')

*/
//----------------------------------PRACTICA---------------------------------------------------

/*
var Persona = function(nombre){
    this.nombre = nombre;
}

var persona = new Persona('Alejo');
console.log(`Me llamo: ${persona.nombre}`)

util.inherits(Persona,eventEmitter)

persona.on('data',function(event){
    console.log(`Hola soy ${persona.nombre} : ${event}`)
})

persona.emit('data','Que buen día')*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/**
*   The variables 'firstInteger', 'firstDecimal', and 'firstString' are declared for you -- do not modify them.
*   Print three lines:
*   1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
*   2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
*   3. The concatenation of 'firstString' and 'secondString' ('firstString' must be first).
*
*	Parameter(s):
*   secondInteger - The string representation of an integer.
*   secondDecimal - The string representation of a floating-point number.
*   secondString - A string consisting of one or more space-separated words.
**/
function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
    
    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
    console.log(firstInteger + secondInteger)
    
    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    
    console.log(firstDecimal + secondDecimal)
    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    console.log(`${firstString}${secondString}`)
}


function main() {
    const secondInteger = 12;
    const secondDecimal = 4.32;
    const secondString = "is the best place to learn and practice coding!";
    
    performOperation(secondInteger, secondDecimal, secondString);
}

main()