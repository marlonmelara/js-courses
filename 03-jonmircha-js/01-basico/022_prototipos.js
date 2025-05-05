//POO
/**
Clases: es un modelo a seguir
Objetos: es una instancia de una clase
-Atributos: es una característica o propiedad del objeto (son variables dentro de un objeto)
-Métodos: son las acciones que un objeto puede realizar (son funciones dentro de un objeto)
*/

/**
Un prototipo es un mecanismo por el cual un objecto puede heredar de un objecto padre atributos y metódos (funciones)
*/

const personajeAnimado1 = {
  nombre: "Snoopy",
  sonar() {
    console.log("Hago guau guau");
  },
};

const personajeAnimado2 = {
  nombre: "Pato Lucas",
  sonar() {
    console.log("Hago cuaa cuaa");
  },
};

console.log(personajeAnimado1);
console.log(personajeAnimado2);

// Función constructora
/* function PersonajeAnimado(nombre, genero) {
 * Atributos
  this.nombre = nombre;
  this.genero = genero;
 * Métodos
this.sonar = function () {
    console.log("Hago sonidos porque estoy vivo!");
} */

// Función constructora
function PersonajeAnimado(nombre, genero) {
  // Atributos
  this.nombre = nombre;
  this.genero = genero;
}

// Métodos agregados al prototipo de la función constructora
PersonajeAnimado.prototype.sonar = function () {
  console.log("Hago sonidos porque estoy vivo!");
};
PersonajeAnimado.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre}`);
};

// Objetos
const snoopy = new PersonajeAnimado("Snoopy", "Macho");
const patoLucas = new PersonajeAnimado("Lucas", "Macho");

console.log(snoopy);
console.log(patoLucas);

snoopy.sonar(); // Hago sonidos porque estoy vivo!
snoopy.saludar(); // Hola, me llamo Snoopy

patoLucas.sonar(); // Hago sonidos porque estoy vivo!
patoLucas.saludar(); // Hola, me llamo Lucas
