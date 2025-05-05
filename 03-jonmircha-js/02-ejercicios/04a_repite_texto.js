/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo */

console.log("***** Solución JonMircha *****");

const repetirTexto = (texto = "", veces = undefined) => {
  if (!texto) return console.warn("No ingresaste un texto");

  if (veces === undefined)
    return console.warn("No ingresaste el número de veces a repetir el texto");

  if (veces === 0) return console.error("El número de veces no puede ser cero");

  if (Math.sign(veces) === -1)
    return console.error("El número de veces no puede ser negativo");

  for (let i = 1; i <= veces; i++) console.info(`${texto}, ${i}`);
};

repetirTexto("Hola Mundo 1 ", 3);
repetirTexto("Hola Mundo 2", 0);
repetirTexto("Hola Mundo 3", 3.5);
repetirTexto("Hola Mundo 4", -3);
repetirTexto("", 3);
