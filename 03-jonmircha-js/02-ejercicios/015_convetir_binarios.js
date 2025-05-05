/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10 */

console.log("***** Solución JonMircha *****");

const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
  if (numero === undefined)
    return console.warn(`No ingresaste el número a convertir`);
  if (typeof numero !== "number")
    return console.error(
      `El valor número ${numero} ingresado, NO es un número`
    );
  if (base === undefined)
    return console.warn(`No ingresaste la base a convertir`);
  if (typeof base !== "number")
    return console.error(`El valor base ${base} ingresado, NO es un número`);
  if (base === 2) {
    return console.info(
      `${numero} base ${base} = ${parseInt(numero, base)} base 10`
    );
  } else if (base === 10) {
    return console.info(
      `${numero} base ${base} = ${numero.toString(2)} base 2`
    );
  } else {
    return console.error(`El tipo de base a convertir NO es válido`);
  }
};

convertirBinarioDecimal();
convertirBinarioDecimal("2");
convertirBinarioDecimal(100, "2");
convertirBinarioDecimal(100, 2);
convertirBinarioDecimal(101, 2);
convertirBinarioDecimal(4, 10);
convertirBinarioDecimal(114, 10);
convertirBinarioDecimal(114, 3);
