/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25] */

if (arr === undefined)
  return console.warn("No ingresaste un arreglo de números");
if (!(arr instanceof Array))
  return console.error("El valor que ingresaste no es un arreglo");
if (arr.length === 0) return console.error("El arreglo esta vacío");

for (let num of arr) {
  if (typeof num !== "number")
    return console.error(`El valor "${num}" ingresado, NO es un número`);
}
const devolverCuadrados = (arr = undefined) => {
  const newArr = arr.map((el) => el * el);
  return console.info(
    `Arreglo original: ${arr},\nArreglo elevador al cuadrado: ${newArr}`
  );
};

devolverCuadrados();
devolverCuadrados(true);
devolverCuadrados([2, "3", 4]);
devolverCuadrados([2, 3, 4]);
