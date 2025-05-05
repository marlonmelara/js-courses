/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar */

console.log("***** Solución JonMircha modificado *****");

const numeroParImpar = (numero = undefined) => {
  if (typeof numero !== "number") {
    return console.error(`El valor ingresado, no es un número`);
  }

  let par = false;

  return numero % 2 === 0
    ? console.log(`El número ${numero},es PAR`)
    : console.log(`El número ${numero}, es IMPAR`);
};

numeroParImpar();
numeroParImpar("4");
numeroParImpar({});
numeroParImpar(false);
numeroParImpar(0);
numeroParImpar(20);
numeroParImpar(15);
numeroParImpar(-115);
numeroParImpar(-40);
