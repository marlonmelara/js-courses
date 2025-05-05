// trimStart() y trimEnd() son métodos introducidos en ECMAScript 2019 (ES10). Estos métodos son variaciones del método trim() que se utilizan para eliminar espacios en blanco, pero a diferencia de trim(), que elimina los espacios al principio y al final de una cadena, trimStart() y trimEnd() eliminan espacios sólo al inicio y al final de la cadena, respectivamente.

// Declaración de una cadena con espacios en blanco al inicio y al final.
const hello = "       Hello World!    ";

// Utiliza 'trimStart' para eliminar espacios en blanco al inicio de la cadena.
console.log(hello.trimStart()); // Imprime: "Hello World!    "

// Utiliza 'trimEnd' para eliminar espacios en blanco al final de la cadena.
console.log(hello.trimEnd()); // Imprime: "       Hello World!"
