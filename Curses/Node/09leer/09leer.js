/*var fs = require('fs')

//var files = fs.readdirSync('./'); //Toma un string que queremos leer y el SYNC es de sincrona, es decir que la termina

//Otra manera
fs.readdir('./',(err,files)=>{
    if(err){
        throw err;
    }
    console.log(files)
    //Syncrono
    //var archivo = fs.readFileSync('./archivo.txt','UTF-8');
    //Asincrono
    fs.readFile('./archivo.txt','UTF-8',function(err,files){
        if(err){
            throw err;
        }
        console.log("Se está imprimiendo el archivo...")
        console.log(files)
    })

    
}) // Función asincrona, es decir que no sabe cuando parar

*/
//----------------------------------PRACTICA---------------------------------------------------
var fs = require('fs')
/* De manera syncrona
var files = fs.readdirSync("./")
console.log(files)*/

/*fs.readdir('./',function(err,file){
    if(err){
        throw err;
    }
    console.log("El arhivo se está abriendo");
    console.log(file)
})*/

//Para abrir archivos   Syncrono
var archivo = fs.readFileSync('./archivo.txt','utf-8')
console.log("Se abre el archivo de manera sync")
console.log(archivo)
//Para abrir archivos   Asyncrona
fs.readFile('./archivo.txt','utf-8',function(err,file){
    if(err){
        throw err;
    }
    console.log("Se abre el archivo de manera asincrona")
    console.log(file)
})









