// Curso JavaScript: 25. Métodos estáticos, getters y setters
// https://youtu.be/TEzu31q9MVA

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
    this.raza = null;
  }

  //Sobrescritura
  sonar() {
    console.log("Soy un perro y mi sonido es un ladrido");
  }
  ladrar() {
    console.log("Guauuuu,Guauuuu!");
  }

  // Un método estático se pueden ejecutar sin necesidad de instanciar la clase
  static queEres() {
    console.log(
      "Los perros sonmos animales mamiferos que pertenecemos a la familia de los caninos. Somo considerados los mejores amigos del hombre."
    );
  }

  /* Los setters y getters son métodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase */
  get getRaza() {
    return this.raza;
  }

  set setRaza(raza) {
    this.raza = raza;
  }
}

Perro.queEres();

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

console.log(snoopy.getRaza);
snoopy.setRaza = "Beagle";
console.log(snoopy.getRaza);
