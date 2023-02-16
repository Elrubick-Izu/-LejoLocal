const fs = require('fs')

// renombrar syncrono
//fs.renameSync('prueba.txt','config.txt')
// renombrar asyncrono
/*
fs.rename('config.txt','prueba.txt',(err)=>{
    if(err){
        throw err;
    }
    console.log('El archivo fue renombrado exitosamente...')
})
*/
//Mover archivos
/*
if(fs.existsSync('src')){
    console.log('La carpeta ya existe...')
}else {
    fs.mkdir('src',function(err){
        if(err) throw err;
        console.log("Se creo la carptea exitosamente")
    })
}


fs.rename('prueba.txt','./src/prueba.txt',(err)=>{
    if(err){
        throw err;
    }
    console.log("El archivo fue movido exitosamente...")
})
*/
//Eliminar el archivo
fs.unlinkSync('./src/prueba.txt')
console.log('El archivo fue eliminado exitosamente.')