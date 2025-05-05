let nombre1 = "Audrey";
/* Declara una variable 'nombre1' y la inicializa con el valor "Audrey" */

let edad = 32;
/* Declara una variable 'edad' y la inicializa con el valor 32 */

let actual = new Date().getFullYear();
/* Declara una variable 'actual' y la inicializa con el año actual */

/* Forma 1 para formar un string
 * En esta línea, se está formando una cadena de texto mediante la concatenación
 * tradicional usando el operador '+'
 */
let resultado1 = "Mi nombre es " + nombre1 + " y mi edad es " + edad + " años";

/* Forma 2 usando template literals
 * Aquí se utiliza la sintaxis de Template Literals que permite interpolar variables
 * dentro de una cadena de texto. Las expresiones entre ${} son evaluadas y sus resultados
 * son convertidos a strings e insertados en la cadena resultante.
 * Se llama a la función calcularNacimiento() directamente dentro del Template Literal.
 */
let resultado2 = `Mi nombre es ${nombre1} y mi edad es ${edad} años.
Mi año de nacimiento es ${calcularNacimiento(edad)}`;

/* Definiendo una función que calcula el año de nacimiento basado en la edad proporcionada */
function calcularNacimiento(miEdad) {
  return actual - miEdad;
  /* Resta la edad del año actual para obtener el año de nacimiento */
}

/* Imprimiendo las cadenas formadas en la consola */
console.log(resultado1);
/* Output: "Mi nombre es Audrey y mi edad es 32 años" */

console.log(resultado2);
/* Output: "Mi nombre es Audrey y mi edad es 32 años. Mi año de nacimiento es XXXX" */

/* Este código demuestra dos maneras de formar una cadena de texto en JavaScript:
 * 1. Usando el operador de concatenación '+' de la manera tradicional.
 * 2. Usando Template Literals, que es una característica de ES6 que permite
 *    una sintaxis más limpia y legible para concatenar y formar cadenas.
 * También se muestra cómo se pueden llamar funciones directamente dentro de un Template Literal.
 */
