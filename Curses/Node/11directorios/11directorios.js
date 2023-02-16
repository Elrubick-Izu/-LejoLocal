const fs = require('fs')

//mkdirsync -> Para crear directorios syncrona
//fs.mkdirSync('./img')

//mkdir
/*
fs.mkdir('css',function(err){
    if(err) throw('Error',   err);
    console.log('Carpeta creada...')
})*/
//Validar si existe una carpeta
if(fs.existsSync('css')){
    console.log('La carpeta ya existe')
} else {
    fs.mkdir('css',function(err){
        if(err){
            throw console.log('Error' + err);
        }
        console.log("La carpeta ha sido creada...")
    })
}