// Curso JavaScript: 24. Clases y Herencia
// https://youtu.be/C86JvqET61A

class PersonajeAnimado {
  /* El constructor es un método especial que se ejecuta en el momento de instanciar la clase */
  constructor(nombre, genero) {
    // Atributos
    this.nombre = nombre;
    this.genero = genero;
  }

  // Métodos
  sonar() {
    console.log("Hago sonidos porque estoy vivo!");
  }
  saludar() {
    console.log(`Hola, me llamo ${this.nombre}`);
  }
}

class Perro extends PersonajeAnimado {
  constructor(nombre, genero, tamanio) {
    /* Con el método super () se manda a llamar el constructor de la clase padre*/
    super(nombre, genero);
    this.tamanio = tamanio;
  }

  //Sobrescritura
  sonar() {
    console.log("Soy un perro y mi sonido es un ladrido");
  }
  ladrar() {
    console.log("Guauuuu,Guauuuu!");
  }
}

// Objetos
const snoopy = new Perro("Snoopy", "Macho", "Mediano"),
  patoLucas = new PersonajeAnimado("Lucas", "Macho");

console.log(snoopy);
console.log(patoLucas);

snoopy.sonar(); // Soy un perro y mi sonido es un ladrido
/* snoopy.ladrar(); // Guauuuu,Guauuuu! */
snoopy.saludar(); // Hola, me llamo Snoopy

patoLucas.sonar(); // Hago sonidos porque estoy vivo!
patoLucas.saludar();
