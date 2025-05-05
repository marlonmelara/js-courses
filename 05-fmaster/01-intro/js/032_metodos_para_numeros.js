console.log("**** Método .toString() ****");
/*
 * 📌 .toString()
 * - Este método convierte un número a una cadena de texto (string).
 * - No toma ningún parámetro.
 * - Retorna una nueva cadena de texto que representa el número.
 */

const numero = 10;
console.log(numero, typeof numero); // Imprime: 10 "number"

const texto = numero.toString(); // Convierte el número a una cadena de texto
console.log(texto, typeof texto); // Imprime: "10" "string"

console.log("**** Método .toFixed() ****");
/*
 * 📌 .toFixed()
 * - Este método convierte un número a una cadena de texto, redondeando a una cantidad específica de decimales.
 * - 1er parámetro (opcional) - el número de decimales a los que se quiere redondear, el valor predeterminado es 0.
 */

const num = 3.1415;
console.log(num.toFixed()); // Imprime: "3"
console.log(num.toFixed(3)); // Imprime: "3.142"

// console.log("**** .parseInt() y .parseFloat()  ****");
/*
 * 📌 .parseInt() y .parseFloat()
 *
 * - .parseInt():
 *   - Intenta convertir el valor que recibe como argumento a un número entero.
 *   - Si el valor tiene decimales, los ignora.
 *
 * - .parseFloat():
 *   - Intenta convertir el valor que recibe como argumento a un número decimal (un número que puede tener decimales).
 *
 * Ambos métodos:
 * - 1er parámetro - el valor que queremos intentar convertir a un número.
 *
 * En este código:
 * 1. Se invoca la función prompt() dos veces para solicitar al usuario que escriba dos números.
 *    - Para el primer número, se usa parseInt() y se guarda en una variable llamada 'numero1'.
 *    - Para el segundo número, se usa parseFloat() y se guarda en una variable llamada 'numero2'.
 * 2. Se imprime en consola la suma de 'numero1' y 'numero2'.
 *    - Si ambos valores pudieron ser convertidos a números, se realizará la suma correctamente.
 *    - Si alguno de los valores no pudo ser convertido a un número, 'numero1' o 'numero2' tendrán el valor NaN (Not a Number), y el resultado de la suma también será NaN.
 *
 * Ejemplo:
 * - Si el usuario ingresa '5' y '3.5', el código imprimirá '8.5' en la consola.
 * - Si el usuario ingresa '5' y 'tres', el código imprimirá 'NaN' en la consola ya que 'tres' no puede ser convertido a un número.
 */

// 👉
// const numero1 = parseInt(prompt("Escribe un número"));
// const numero2 = parseFloat(prompt("Escribe un número"));
// console.log(numero1 + numero2);

// Si los valores ingresados pueden ser convertidos a números, imprimirá la suma de ambos. Si no, imprimirá NaN.

console.log("****  Math.random  ****");

/*
 * 📌 Math.random()
 * - Genera un número aleatorio entre 0 (inclusive) y 1 (exclusive).
 * - Este método no toma ningún argumento.
 * - Para obtener un rango diferente de números aleatorios, puedes realizar operaciones adicionales.
 *
 * Ejemplo 1: Obtener un número aleatorio entre 0 y 1
 * - Este es el uso básico de Math.random sin modificaciones.
 */
console.log(Math.random()); // Puede imprimir, por ejemplo, 0.12345678901234567

/*
 * Ejemplo 2: Obtener un número aleatorio entre 0 y 10
 * - Multiplicando el resultado de Math.random por 10, obtenemos un número aleatorio entre 0 y 10.
 */
console.log(Math.random() * 10); // Puede imprimir, por ejemplo, 5.67890123456789

/*
 * Ejemplo 3: Obtener un número aleatorio entre 1 y 10 (inclusive)
 * - Para obtener un número aleatorio entre 1 y 10 (inclusive), podemos multiplicar el resultado de Math.random por 10 y luego usar Math.ceil para redondear al entero más cercano.
 */
console.log(Math.ceil(Math.random() * 10)); // Puede imprimir cualquier número entero entre 1 y 10, incluyendo 1 y 10.

/*
 * Ejemplo 4: Obtener un número aleatorio entre 5 y 15 (inclusive)
 * - Para obtener un número aleatorio entre 5 y 15 (inclusive), podemos multiplicar el resultado de Math.random por 11 (diferencia entre 15 y 5 más 1), sumar 5 al resultado, y luego usar Math.floor para redondear al entero más cercano.
 */
console.log(Math.floor(Math.random() * 11) + 5); // Puede imprimir cualquier número entero entre 5 y 15, incluyendo 5 y 15.

console.log("****  Math.round  ****");

/*
 *
 * 📌 Math.round
 * - Redondea un número al entero más cercano.
 * - Si la fracción decimal es 0.5 o mayor, redondea hacia arriba.
 * - Si la fracción decimal es menor que 0.5, redondea hacia abajo.
 *
 */

// Ejemplo 1: Redondeando un número hacia arriba
const numero1 = 2.5;
console.log(Math.round(numero1)); // salida: 3

// Ejemplo 2: Redondeando un número hacia abajo
const numero2 = 2.4;
console.log(Math.round(numero2)); // salida: 2

// Ejemplo 3: Redondeando un número negativo hacia arriba
const numero3 = -2.5;
console.log(Math.round(numero3)); // salida: -2

// Ejemplo 4: Redondeando un número negativo hacia abajo
const numero4 = -2.6;
console.log(Math.round(numero4)); // salida: -3
