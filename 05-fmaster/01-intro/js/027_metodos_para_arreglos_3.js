/* 📌.filter()
 * - Nos permite ejecutar una función por cada elemento y luego crear un arreglo con base a los resultados de esa función
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
];

const nombre4Letras = nombres.filter((nombre) => {
  if (nombre.length === 5) {
    return nombre;
  }
});

console.log(nombre4Letras);
