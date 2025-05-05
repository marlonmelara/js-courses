/* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60] */

const arrayMinMax = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de números");
  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo");
  if (arr.length === 0) return console.error("El arreglo esta vacío");

  for (let num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor "${num}" ingresado, NO es un número`);
  }
  return console.info(
    `Arreglo origina ${arr},\nValor mayor: ${Math.max(
      ...arr
    )},\nValor menor:${Math.min(...arr)}`
  );
};

arrayMinMax();
arrayMinMax([]);
arrayMinMax([2, 3, true]);
arrayMinMax([2, 3, "50"]);
arrayMinMax([1, 4, 5, 99, -60]);
