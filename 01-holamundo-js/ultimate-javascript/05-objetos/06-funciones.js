// 1. Ejemplo de función como objeto
// Las funciones en JavaScript son objetos de primera clase, lo que significa que pueden ser tratadas como cualquier otro objeto. Esto incluye la capacidad de asignar funciones a variables, pasarlas como argumentos a otras funciones y devolverlas desde otras funciones.
function User(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hola, soy ${this.name} y tengo ${this.age} años.`);
  };
}

console.log(User.name);
console.log(User.length);

// 2. Variable que almacena la función User
// Las funciones son objetos, por lo que puedes asignarlas a variables o pasarlas como argumentos
const U = User; // Asignar la función a una variable

let user = new U("Juan", 30); // Crear un nuevo objeto usando la función constructor
console.log(user); // { name: 'Juan', age: 30, greet: [Function] }

// 3. Función que toma otra función como argumento y la ejecuta
function of(Fn, arg) {
  return new Fn(arg); // Crear un nuevo objeto usando la función constructor Fn con el argumento arg
}

let user1 = of(User, "Pedro"); // Crear un nuevo objeto usando la función constructor User con el argumento "Pedro"
console.log(user1); // { name: 'Pedro', age: undefined, greet: [Function] }

// 4. Función que devuelve otra función
function returned() {
  return function () {
    console.log("Hola desde la función devuelta");
  };
}

let greet = returned(); // Asignar la función devuelta a la variable greet
greet(); // Llamar a la función devuelta
