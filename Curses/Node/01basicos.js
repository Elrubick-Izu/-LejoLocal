/*
Clase 01
node - para iniciar NodeJS en consola
Con alt + 96 ponemos las comillas invertidas ` para decirle a nodejs que ejecutaremos un template

*/
const { basename } = require("path");
var path = require("path");
const { pathToFileURL } = require("url");
let a = 5;
let b = 10;

//Forma de ejecutar un template: 
console.log(`El resultado es ${a+b}`);

//comando __dirname
console.log(__dirname);

//comando __filename que depliega con el nombre del archivo
console.log(__filename)

console.log(path.basename(__filename))