/**
 * Enhanced Object Literals (Literales de Objeto Mejorados) en ECMAScript 6 (ES6)
 * ES6 introdujo varias mejoras en la sintaxis de los literales de objeto,
 * simplificando la creación de objetos. Una de estas mejoras es la propiedad shorthand (forma abreviada),
 * que permite omitir la clave-valor cuando la clave tiene el mismo nombre que la variable que contiene el valor.
 *
 * Este ejemplo define una función 'newUser' que recibe cuatro argumentos: 'user', 'age', 'country' y 'uId'.
 * La función retorna un objeto que contiene estas propiedades.
 */
function newUser(user, age, country, uId) {
  return {
    user, // Equivalente a user: user en ES5
    age, // Equivalente a age: age en ES5
    country, // Equivalente a country: country en ES5
    id: uId, // En este caso, como la clave 'id' y la variable 'uId' tienen nombres diferentes,
    // se especifica la clave-valor de la manera tradicional.
  };
}

// Llamada a la función 'newUser' con cuatro argumentos y se imprime el resultado en la consola.
// Output: { user: 'xass', age: 45, country: 'BR', id: 1 }
console.log(newUser("xass", 45, "BR", 1));
