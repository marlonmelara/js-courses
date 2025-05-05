// Curso JavaScript: 12. Objetos
// https://youtu.be/4xig5UPRC00

const b = {};
console.log(b);

const c = new Object();
console.log(c);

/* Dentro de un objecto a las variables se les van a llamar atributos/propiedades y a las funciones se les llama métodos  */
const jon = {
  nombre: "Jon",
  apellido: "Dowley",
  edad: 35,
  pasatiempos: ["correr", "leer", "dibujar"],
  soltero: false,
  contacto: {
    email: "jon@mail.com",
    twitter: "@jon",
    movil: "+5612345678",
  },
  saludar: function () {
    console.log("Hola :)");
  },
  decirMiNombre: function () {
    console.log(
      `Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años. Me puedes seguir en Twitter como ${this.contacto.twitter}.`
    );
  },
};

console.log(jon);
console.log(jon.nombre);
console.log(jon.contacto.movil);
console.log(jon.soltero);
console.log(jon.pasatiempos[1]);
jon.saludar();
jon.decirMiNombre();

console.log(Object.keys(jon));
console.log(Object.values(jon));
console.log(jon.hasOwnProperty("nombre"));
console.log(jon.hasOwnProperty("nacimiento"));

/* const cat = {
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
console.log({ nombre: "Juan", edad: 25, profesion: "Programador" }.nombre); */ // "Juan"
