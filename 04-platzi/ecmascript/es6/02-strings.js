let hello = "Hello";
let world = "World";
// Concatenación de strings en ECMAScript 5 y anteriores.
// La forma tradicional de concatenar strings en JavaScript es usando el operador +.
let epicPhrase1 = hello + " " + world + "!";

console.log(epicPhrase1);

// Template Literals en ECMAScript 6 (ES6) o ES2015.
// ES6 introdujo Template Literals, que permiten una sintaxis más limpia y legible para concatenar strings.
// Utilizan backticks (` `) en lugar de comillas, y permiten insertar expresiones dentro de ${}.
let epicPhrase2 = `${hello} ${world}!`;

console.log(epicPhrase2);

// Multi-line strings.
// En ECMAScript 5 y anteriores, para crear un string multilínea,
// se necesitaba usar el carácter de escape \n para indicar un salto de línea.
let lorem1 = "-Esto es un string \n" + "y esta es otra cadena de texto.";

// Con ES6, los Template Literals también permiten strings multilínea sin necesidad de caracteres de escape.
// Simplemente se escriben las líneas en diferentes líneas dentro de los backticks (` `).
let lorem2 = `-Esto es una frase épica
y esta es otra.`;

console.log(lorem1);
console.log(lorem2);
