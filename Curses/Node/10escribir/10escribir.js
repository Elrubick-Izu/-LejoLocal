var fs = require('fs')

//const archivo = 'prueba.txt'

//validar si existe un archivo
/*if(fs.existsSync(archivo)){
    console.log("El archivo existe")
} else {
    console.log("El archivo no existe.")
}*/

/*fs.access(archivo, fs.constants.F_OK,(err)=>{
    if(err){
        console.log("El archivo no existe");
    } else {
        console.log("El archivo existe")
    }
})*/

                //escribir en un archivo 
const contenido = 'Este es el contenido de un texto';
/*
fs.writeFileSync(archivo,contenido);
console.log('Se ha escrito en el archivo')
*/
                // Forma asincrona
/*
fs.writeFile(archivo,contenido,(err)=>{
    if(err){
        console.log("El archivo no existe")
    } else {
        console.log("Se escribió en el archivo")
    }
    
})*/

                //Agregar contenido a un archivo
/*const textoAdicional = '\nAquí va otra linea de código '

fs.appendFile(archivo,textoAdicional,(err)=>{
    if(err) throw err;
    console.log("Se ha implementado más texto al archivo")
})*/


//----------------------------------PRACTICA---------------------------------------------------
const archivoDos = 'prueba.txt';

//Crear un archivo
const contenidoDos = "Aqui se ingresa un texto";
//Sync
//fs.writeFileSync(archivoDos,contenidoDos)
//async
fs.writeFile(archivoDos,contenidoDos,function(err){
    if(err) throw err;
    console.log("Se creo el archivo")
})
//Añadir nuevo texto
var lineas = ["\nVota por tu favorita","\nHola cristiano","\nComenta algo más"]
/*
fs.appendFile(archivoDos,nuevaLinea,(err)=>{
    if(err){
        throw err;
    }
    console.log("Se insertó una linea.")
})*/

function ingresar(arreglo){
    for(var i =0;i<lineas.length;i++){
        fs.appendFile(archivoDos,lineas[i],(err)=>{
            if(err) throw err;
            console.log("Se añadieron más lineas")
        })
    }
}

ingresar(lineas);
