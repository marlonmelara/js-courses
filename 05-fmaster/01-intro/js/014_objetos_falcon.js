// 14. Objetos
// https://www.udemy.com/course/curso-javascript-desde-cero/learn/lecture/37358786#overview

const personaArreglo = ["Carlos", 27, "correo@correo.com", true, true];

console.info(personaArreglo);

const persona = {
  nombre: "Carlos",
  edad: 27,
  correo: "correo@correo.com",
  suscripciones: {
    web: true,
    correo: true,
  },
  coloresFavoritos: ["Azul", "Verde", "Naranja"],
  saludo: function () {
    console.log("Hola");
  },
};

console.log(persona);
console.log(persona.nombre);
console.log(persona.suscripciones.web);
console.log(persona["edad"]);

const variable = "correo"; // A una variable le podemos asignar una propiedad del objeto

console.log(persona[variable]);

persona.pais = "Canada"; // Podemos agregar nueva información al objetoc
persona.pais = "España"; // También podemos modificarla
console.log(persona);

persona.saludo(); // A las funciones dentro de un objeto se le llama métodos y para ejecutarlos debemos agregar los parentesis ()
