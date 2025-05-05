// el método string.replace, una característica de JavaScript que permite reemplazar una parte de una cadena de texto con otra. Aunque string.replace ha existido desde versiones anteriores de ECMAScript, en ECMAScript 2021 (ES12) se introdujeron mejoras relacionadas con el manejo de expresiones regulares en replace. Sin embargo, en tu ejemplo específico, no se utilizan estas nuevas características de ES12, sino el comportamiento clásico de replace.

// Define una cadena de texto.
const string = "JavaScript es un lenguaje de programación";

// Reemplaza 'JavaScript' por 'PHP' en la cadena.
const replacedString = string.replace("JavaScript", "PHP");

// Muestra la cadena modificada en la consola.
console.log(replacedString); // Imprime "PHP es un lenguaje de programación"
