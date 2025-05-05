/* 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5 */

const promedio = (arr = undefined) => {
  if (arr === undefined)
    return console.error("No ingresaste un arreglo de números");

  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo");

  if (arr.length === 0) return console.error("El arreglo esta vacio");

  for (let num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor "$(num)" ingresado, NO es un número`);
  }

  return console.info(
    arr.reduce((total, num, index, arr) => {
      total += num;
      if (index === arr.length - 1) {
        return `El promedio de ${arr.join(" + ")} es ${total / arr.length} `;
      } else {
        return total;
      }
    })
  );
};

promedio();
promedio({});
promedio([]);
promedio([2, true]);
promedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
