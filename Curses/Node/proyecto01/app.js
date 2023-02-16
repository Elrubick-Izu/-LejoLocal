const readline = require('readline')
const Messages = require('./messajes.js')
const Document = require('./document.js')
const Directory = require('./directory.js')

const dir = new Directory();

let interface = readline.createInterface(process.stdin,process.stdout)

const tools= `Comandos :q = salir, :sa = guardar como, :s = guardar----------------------`;

const pantalla = `
            =================
            Editor de texto.\n
            =================
            Elige una opcion:\n
            1 Crear nuevo documento
            2 Abrir documento
            3 Cerrar editor\n`;

mainScreen();

function mainScreen(){
    process.stdout.write('\033c');
    interface.question(pantalla, res =>{
        switch(res.trim()){
            case '1':
                console.log('Elegiste 1')
                    createFile();
                break;
            case '2':
                console.log('Elegiste 2')
                openFileInterface();
                break;
            case '3': 
                console.log('Elegiste 3');
                interface.close();
                break;
                
                default:
                    mainScreen();

        }
    })
}

function createFile(){ 
    let file = new Document(dir.getPath());

}

function openFileInterface(){

}

