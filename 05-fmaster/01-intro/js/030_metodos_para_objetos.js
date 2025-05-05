console.log("****Métodos propios****");

const usuario = {
  nombre: "Charlie",
  edad: 27,
  amigos: ["Snoopy", "Lucy", "Linus", 1, true],
  saludo: () => {
    console.log("¡Hola amigos!");
  },
};

/*
 * 📌 Métodos propios
 * Los objetos pueden tener métodos personalizados.
 */

usuario.saludo();

console.log("****Object.keys****");
/*
 * 📌 Object.keys();
 * Nos devuelve un arreglo con las llaves (keys) del objecto.
 */

const resultadosPropiedades = Object.keys(usuario);
console.log(resultadosPropiedades);

console.log("****Object.values****");
/*
 * 📌 Object.values();
 * Nos devuelve un arreglo con las valores (values) del objecto.
 */

const resultadosValues = Object.values(usuario);
console.log(resultadosValues);

console.log("****Object.entries****");

/*
 * 📌 Object.entries();
 * Nos devuelve un arreglo con los pares de clave y valor del objeto.
 */

const resultadosEntries = Object.entries(usuario);
console.log(resultadosEntries);

console.log(`El objeto tiene ${resultadosEntries.length} propiedades`);
