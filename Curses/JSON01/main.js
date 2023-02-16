// En una aplicación web los datos JSON se reciben como una cadena
// Para colocar la tilde invertida es alt + 96

const cars=`[
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
]`
document.write(typeof cars)
// Para convertir la cadena en un Objeto JavaScript usamos el método parse
let jsonData = JSON.parse(cars)
document.write("<br>  --  Se convierte en objeto <br>")
document.write(typeof jsonData)
// Despues el objeto se puede manipular como cualquier otro objeto
    const nuevosCarros = jsonData.filter(
        (carro) => carro.produccion > 2010 && carro.millaje < 6000
    );
    console.log("\tEmpieza el jsonData.filter")
    console.log(nuevosCarros)  // SI MUESTRA EL ARCHIVO EN CONSOLA
    console.log(typeof nuevosCarros) 
    document.write("<br>")      // document aparece solos [Object]
    document.write(nuevosCarros)

//Para convertir los datos en una cadena usa el método stringify
const newCars = JSON.stringify(nuevosCarros)
console.log("\tEmpieza el Stringify")
console.log(newCars)
console.log(typeof newCars)

//Modificar una archivo JSON (node) mediante "fs" file System
const fs = required('fs');

// 1. Creamos un objeto nuevo

let carroNuevo = {
    "modelo": "Toyota ABC",
    "produccion": 2012,
    "millaje": 3201
}

// 2. Usamos el método stringifi

const newCar = JSON.stringify(carroNuevo);

// 3. Método de fs
fs.writeFile('cars.json',newCar, (error)=>{
    if(error) throw error;
    console.log("Información recibida");
})