/*
 * 📌 .include()
 * - Nos permite saber si el arreglo contiene un elemento especificado
 */

const nombres = [
  "Charlie",
  "Snoppy",
  "Woodstock",
  "Lucy",
  "Sally",
  "Linus",
  "Patty",
  "Marcie",
  "Snoppy",
  "Schroeder",
  "Franklin",
  123,
];

console.log(nombres.includes("Lucy"));

/*
 * 📌 .every()
 * - Nos permite ejecutar un condicional sobre cada elemento y nos devuelve true si TODOS los elementos cumplieron la condición
 */

const nombresValidos = nombres.every((nombre) => {
  if (typeof nombre === "string") {
    return true;
  } else {
    return false;
  }
});

console.log("¿Todos los nombres son validos? " + nombresValidos);

/*
 * 📌 .some()
 * - Nos permite ejecutar un condicional sobre cada elemento y nos devuelve true si algún elemento cumplió la condición.
 */

const nombresVerificados = nombres.some((nombre) => {
  if (typeof nombre !== "string") {
    return true;
  } else {
    return false;
  }
});

console.log("¿El arreglo es invalido? " + nombresVerificados);
