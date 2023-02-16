const fs = require('fs')

let contenido = fs.readFileSync('logs.txt')
console.log(`Tamaño = ${contenido.length}`)

//Si tengo un archivo muy MUY grande, la funcion readFileSync no sirve mucho

let stream = fs.createReadStream('./logs.txt','utf-8')
let data = ''
//Método que detecta el evento 'data' y lo ejecute una vez
stream.once('data',()=>{
    console.log('Iniciando el stream...\n');
});
stream.on('data',function(chunk){
    console.log(`${chunk.length} |`);
    data += chunk;
})

stream.on('end',function(){
    console.log('Fin del stream...\n');
    console.log(data.length)
})