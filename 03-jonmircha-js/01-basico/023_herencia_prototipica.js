// Curso JavaScript: 23. Herencia Prototípica
// https://youtu.be/1-m7xtwvH1E

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

// Herencia Prototípica
function Perro(nombre, genero, tamanio) {
  this.super = PersonajeAnimado;
  this.super(nombre, genero);
  this.tamanio = tamanio;
}

// Perro está heredando de PersonajeAnimado
Perro.prototype = new PersonajeAnimado();
Perro.prototype.constructor = Perro;

// Sobreescritura de métodos del Prototipo padre en el hijo
Perro.prototype.sonar = function () {
  console.log("Soy un perro y mi sonido es un ladrido");
};
Perro.prototype.ladrar = function () {
  console.log("Guauuuu,Guauuuu!");
};

// Objetos
const snoopy = new Perro("Snoopy", "Macho", "Mediano");
const patoLucas = new PersonajeAnimado("Lucas", "Macho");

console.log(snoopy);
console.log(patoLucas);

snoopy.sonar(); // Soy un perro y mi sonido es un ladrido
snoopy.ladrar(); // Guauuuu,Guauuuu!
snoopy.saludar(); // Hola, me llamo Snoopy

patoLucas.sonar(); // Hago sonidos porque estoy vivo!
patoLucas.saludar(); // Hola, me llamo Lucas
