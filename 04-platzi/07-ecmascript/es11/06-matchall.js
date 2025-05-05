// matchAll es una característica introducida en ECMAScript 2020 (ES11). Este método devuelve un iterador de todas las coincidencias de una expresión regular en una cadena, incluyendo los grupos de captura.

// Define una expresión regular para buscar la palabra 'Apple'.
const regex = /\b(Apple)+\b/g;

// Cadena de texto en la que se buscará.
const fruit = "Apple, Banana, Kiwi, Apple, Orange, etc.";

// Utiliza 'matchAll' para encontrar todas las coincidencias de 'regex' en 'fruit'.
for (const match of fruit.matchAll(regex)) {
  console.log(match); // Imprime cada coincidencia encontrada.
}
