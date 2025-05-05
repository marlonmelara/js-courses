/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH" */

let invertirTexto = (texto) =>
  typeof texto !== "string" || texto.length === 0
    ? console.warn("No ingresaste el texto")
    : console.info(texto.split("").reverse().join(""));

invertirTexto();
invertirTexto("Hola mundo!");
