/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true  */

console.log("***** Solución JonMircha modificado *****");
const capicua = (numero = 0) => {
  if (typeof numero !== "number" || numero <= 0) {
    return console.error(`El valor "${numero}" ingresado, no es un número`);
  }
  numero = numero.toString();
  let alReves = numero.split("").reverse().join("");

  return numero === alReves
    ? console.info(
        `Si es capicúa, número original ${numero}, número al reves ${alReves}`
      )
    : console.info(
        `No es capicúa, número original ${numero}, número al reves ${alReves}`
      );
};

capicua();
capicua("2002");
capicua({});
capicua(2002);
capicua(2012);
