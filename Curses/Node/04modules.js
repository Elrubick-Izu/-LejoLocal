    //importamos modulos para extender las operaciones dentro de node.js
//PARA MÁS INFO https://nodejs.org/api/

var path = require('path'); 
var v8 = require('v8') //motor de nodejs
var util = require('util'); //libreria utils
//Muestra solo el nombre del archivo gracias al modulo
console.log(path.basename(__filename));
//Retorna el path completo
console.log(__filename);
//join añade más carpetasa al path
console.log(path.join(__dirname,"wwww","img","load"))

util.log("hola"); // ya está desactualizado

var nombre = "Gabriel";
var edad = 25;
var formato = util.format("Hola %s tienes %d años",nombre,edad)
console.log(formato)

console.log(v8.getHeapCodeStatistics());