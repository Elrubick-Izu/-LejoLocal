
// Código que puedo reusar
const eventEmitter = require('events').EventEmitter; //Estamos heredando un evento de la clase emitter para no repetir codigo
const util = require('util');

let Person = function(nombre){
    this.nombre = nombre;
}

var persona = new Person('Bob')

util.inherits(Person,eventEmitter);

// Para llamar el módulo desde otra clase usamos

module.exports = Person;