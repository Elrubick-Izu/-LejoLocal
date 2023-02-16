/*
clase 02 
node .\procesos.js --nombre 'Gabriel' --edad '22'  ->Devuelve un path y separa las sentencias
*/ 

// devuelve un arreglo de procesos, Donde se ejecuta node y el archivo al que llama

//console.log(process.argv)

function param(p){
    var index = process.argv.indexOf(p);
    //console.log(index)
    return process.argv[index + 1];
}                   

var nombre = param('--nombre');
var edad = param('--edad');
console.log(`El nombre del usuario es: ${nombre} y su edad : ${edad}`)

