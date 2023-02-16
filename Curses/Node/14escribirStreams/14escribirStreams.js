const fs = require('fs')
const readline = require('readline')

let i = readline.createInterface(process.stdin,process.stdout);

i.question('¿Cómo te llamas? :',(nombre)=>{
    //Con archivos
    //fs.writeFileSync(`${nombre}.txt`,`Esto dijo ${nombre}\n`);
    //Con streams
    let stream = fs.createWriteStream(`${nombre}.txt`)
    stream.write(`Esto dijo ${nombre}\n`)
    process.stdout.write(`Quieres decir algo más: \n`);

    i.on('line',(contenido)=>{
        if(contenido.trim()==='salir'){
            stream.close()
            i.close();
        } else {
            stream.write(contenido.trim()+'\n')
            //fs. appendFileSync(`${nombre}.txt`,contenido.trim() + '\n')
        }
    })
})