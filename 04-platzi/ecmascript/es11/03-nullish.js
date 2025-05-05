// El operador de coalescencia nula (??), introducido en ECMAScript 2020 (ES11). Este operador se utiliza para proporcionar un valor predeterminado para una variable si la variable original es null o undefined.

// Declaración de una variable con valor 'null'.
const anotherNumber = null;

// Utiliza el operador de coalescencia nula para asignar un valor predeterminado.
// Si 'anotherNumber' es 'null' o 'undefined', 'validate' será 5.
const validate = anotherNumber ?? 5;

// Muestra 'validate' en la consola.
console.log(validate); // Imprime 5, ya que 'anotherNumber' es null.
