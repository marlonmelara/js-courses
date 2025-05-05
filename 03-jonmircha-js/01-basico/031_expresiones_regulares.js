// Curso JavaScript: 31. Expresiones Regulares
// https://youtu.be/aPkBloR9MEI

/**
Expresiones regulares:
Son una secuencia de caracteres que forman un patrón de búsqueda, principalmente utilizada para la búsqueda de patrones de cadenas de caracteres */

let cadena =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui lorem officia deserunt mollit anim id est laborum.";

let expReg1 = new RegExp("lorem", "ig");
let expReg2 = /lorem/;

console.log(expReg1.test(cadena));
console.log(expReg1.exec(cadena));
