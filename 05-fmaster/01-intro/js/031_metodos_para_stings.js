console.log("**** Propiedad .length ****");
/* Propiedad
 * 📌 .length
 * - Devuelve el número de caracteres de una cadena de texto.
 */

const texto = "¡Hola mundo!";
console.log(texto.length);

console.log("**** Método .indexOf() .lastIndexOf() ****");
/*
 * 📌 .slice(start, end)
 * - Extrae una sección de una cadena y devuelve una nueva cadena sin modificar la cadena original.
 * - 'start': El índice base cero en el que comienza la extracción.
 * - 'end': (Opcional) El índice base cero antes del cual terminar la extracción.
 */

const resultado = texto.slice(1, 5);
console.log(resultado); // Output: Hola

console.log("**** Método .slice() ****");

/*
 * 📌 .slice()
 * - El método .slice() es usado para extraer una sección de una cadena de texto sin modificar la cadena original.
 * - Devuelve una nueva cadena de texto que contiene los caracteres de la cadena original desde el índice proporcionado
 *   en el primer parámetro hasta el índice proporcionado en el segundo parámetro (no incluido).
 * - 1er parámetro (obligatorio): El índice desde donde queremos empezar a cortar.
 * - 2do parámetro (opcional): El índice hasta donde queremos cortar (este índice no se incluye en el resultado).
 *   Si se omite este parámetro, se extraerá hasta el final de la cadena.
 */

// Encuentra el índice de la letra 'm' en la cadena 'texto'
const index = texto.indexOf("m");

// Encuentra el último índice de la letra 'o' en la cadena 'texto'
const lastIndex = texto.lastIndexOf("o");

// Usa .slice() para cortar la cadena desde el índice de 'm' hasta el índice de 'o' + 1
// El +1 es necesario porque el segundo parámetro del método .slice() no se incluye en el resultado.
// Así que al agregar +1, estamos incluyendo la letra 'o' en la nueva cadena.
console.log(texto.slice(index, lastIndex + 1)); // salida: "mundo"

/*
 * Alternativa usando índices negativos:
 * - .slice() también acepta índices negativos, que cuentan desde el final de la cadena hacia atrás.
 * - Un índice negativo -1 representa el último carácter de la cadena, -2 el penúltimo, y así sucesivamente.
 * - Por lo tanto, .slice(-6, -1) también cortará la cadena desde el índice de 'm' hasta el índice de 'o'.
 * - Nota: Al igual que antes, -1 no se incluye en el resultado, por lo que se corta hasta 'o' (índice -2).
 */
console.log(texto.slice(-6, -1)); // salida: "mundo"

console.log("**** Método .replace() ****");

/*
 * 📌 .replace()
 * - Devuelve una cadena de texto en donde se ha sustituido un valor por otro.
 * - 1er parámetro: el texto que queremos reemplazar.
 * - 2do parámetro: el texto con el que queremos reemplazar el texto original.
 *
 * En este caso:
 * - Se busca la palabra "mundo" en la cadena 'texto'.
 * - Se reemplaza la palabra "mundo" con la palabra "amigos".
 * - Como resultado, obtenemos una nueva cadena de texto con el reemplazo hecho,
 *   pero la cadena original 'texto' permanece sin cambios.
 *
 * Nota: .replace() solo reemplaza la primera coincidencia encontrada,
 * si se desea reemplazar todas las coincidencias, sería necesario usar una expresión regular con la bandera 'g'.
 */

console.log(texto.replace("mundo", "amigos")); // salida: "¡Hola amigos!"

console.log("**** Método .split() ****");
/*
 * 📌 .split()
 * - Este método divide una cadena de texto en un arreglo de subcadenas, usando un delimitador especificado.
 * - 1er parámetro: el caracter o la cadena que se usará como punto de división para separar la cadena original.
 *   En este caso, se usa un espacio en blanco (" ") como delimitador.
 *
 * En este caso:
 * - La cadena 'texto' se divide en dos subcadenas en cada lugar donde hay un espacio en blanco.
 * - Como resultado, obtenemos un arreglo con dos elementos: ["¡Hola", "mundo!"].
 * - Cada elemento del arreglo es una parte de la cadena original 'texto', dividida por los espacios en blanco.
 *
 * Nota: Si la cadena original no contiene el delimitador especificado, el arreglo resultante tendrá un solo elemento,
 * que será la cadena original completa.
 */

const arrayText = texto.split(" "); // Retorna un arreglo: ["¡Hola", "mundo!"]
console.log(arrayText);

console.log("**** Método .toUpperCase() .toLowerCase ****");
/*
 * 📌 .toUpperCase()
 * - Este método convierte todas las letras de una cadena de texto a mayúsculas.
 * - No toma ningún parámetro.
 * - Retorna una nueva cadena con todas las letras en mayúsculas.
 *
 * 📌 .toLowerCase()
 * - Este método convierte todas las letras de una cadena de texto a minúsculas.
 * - No toma ningún parámetro.
 * - Retorna una nueva cadena con todas las letras en minúsculas.
 */

console.log(texto.toUpperCase()); // Retorna la cadena 'texto' con todas las letras en mayúsculas
console.log(texto.toLowerCase()); // Retorna la cadena 'texto' con todas las letras en minúsculas
