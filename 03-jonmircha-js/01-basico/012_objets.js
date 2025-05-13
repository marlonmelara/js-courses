// Curso JavaScript: 12. Objetos
// https://youtu.be/4xig5UPRC00

/*
  Un objeto es una colección de propiedades y métodos.
  Las propiedades son variables que pertenecen al objeto y los métodos son funciones que pertenecen al objeto.
  Los objetos se pueden crear de diferentes maneras, pero la más común es usando la sintaxis de llaves {}.
  Dentro de un objeto, las propiedades y métodos se separan por comas.
  Las propiedades se pueden acceder usando la notación de punto o la notación de corchetes.
  Las propiedades se definen como "clave: valor" y los métodos como "nombre: function() {}".
*/

// Crear un objeto vacío
const b = {};
console.log(b); // {}

// Crear un objeto con prototipo Object. Casi ya no se usa.
const c = new Object();
console.log(c); // {}

/* Dentro de un objecto a las variables se les van a llamar atributos/propiedades y a las funciones se les llama métodos  */
const jon = {
  nombre: "Jon",
  apellido: "Dowley",
  edad: 35,
  pasatiempos: ["correr", "leer", "dibujar"],
  soltero: false,
  contacto: {
    // Un objeto dentro de otro objeto
    email: "jon@mail.com",
    twitter: "@jon",
    movil: "+5612345678",
  },
  saludar: function () {
    // Esta es una función que se llama método
    console.log("Hola :)");
  },
  decirMiNombre: function () {
    console.log(
      `Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años. Me puedes seguir en Twitter como ${this.contacto.twitter}.` // this hace referencia al objeto jon (objeto con el que se esta trabajando)
    );
  },
  // ✅ Nueva forma de definir métodos desde ES6
  decirMiEdad() {
    console.log(
      `Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`
    );
  },
};

console.log(jon);
console.log(jon.nombre);
console.log(jon.apellido);
console.log(jon.edad);
console.log(jon.soltero);
console.log(jon.pasatiempos);
console.log(jon.pasatiempos[0]);
console.log(jon.pasatiempos[1]);
console.log(jon.contacto);
console.log(jon.contacto.movil);
jon.saludar();
jon.decirMiNombre();
jon.decirMiEdad();

console.log(Object.keys(jon)); // Imprime las claves del objeto jon
console.log(Object.values(jon)); // Imprime los valores del objeto jon
console.log(jon.hasOwnProperty("nombre")); // Imprime true si el objeto jon tiene la propiedad nombre
console.log(jon.hasOwnProperty("nacimiento")); // Imprime false si el objeto jon no tiene la propiedad nacimiento

// Crear un objeto con la sintaxis de llaves
const cat = {
  name: "Jiji",
  color: "black",
  age: 4,
  adopted: true,
  adress: {
    street: "Burgos 153",
    city: "Santiago",
    country: "Chile",
    zipcode: 1234,
  },
};

console.log(cat.color);
console.log(cat.age);
console.log(cat.adress.city);
console.log(cat.adress.zipcode);
console.log({ nombre: "Juan", edad: 25, profesion: "Programador" }.nombre); //En este caso no es necesario crear una variable para acceder a la propiedad del objeto y por ello imprimimos el objeto directamente: "Juan"
