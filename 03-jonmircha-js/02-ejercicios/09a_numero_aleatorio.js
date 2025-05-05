/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600 */
console.log("***** Solución JonMircha *****");
const obtenerAleatorio = () => {
  console.info(Math.round(Math.random() * 100) + 500);
};

obtenerAleatorio();

console.log("***** Solución Modificada *****");
const obtenerNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(obtenerNumeroAleatorio(501, 600));

/**
1. `const obtenerNumeroAleatorio = (min, max) => { ... }`: Aquí estamos declarando una función de flecha llamada `obtenerNumeroAleatorio`. Esta función toma dos argumentos: `min` y `max`, que definen el rango dentro del cual queremos generar un número aleatorio.

2. `Math.random()`: Este es un método incorporado de JavaScript que genera un número aleatorio entre 0 (inclusive) y 1 (exclusivo). Es decir, el número generado puede ser 0, pero nunca será 1. Siempre será un número con decimales (por ejemplo, 0.123456789).

3. `Math.random() * (max - min + 1)`: Aquí multiplicamos el número aleatorio generado por la diferencia entre el máximo y el mínimo (más uno). Esto escala el número aleatorio al rango que queremos. Por ejemplo, si `min` es 501 y `max` es 600, entonces `max - min + 1` es 100. Así que estamos generando un número aleatorio entre 0 y 100.

4. `Math.floor(...)`: Esto redondea hacia abajo el número aleatorio que generamos a un número entero. Por ejemplo, si `Math.random() * (max - min + 1)` generó 99.654321, `Math.floor(...)` lo redondeará a 99.

5. `Math.floor(Math.random() * (max - min + 1)) + min`: Finalmente, sumamos el `min` al número aleatorio que hemos generado y redondeado. Esto asegura que el número aleatorio que generamos esté dentro del rango especificado. Siguiendo el ejemplo anterior, si `min` es 501, sumamos 501 a 99 para obtener 600, que es un número en el rango entre 501 y 600.

6. `console.log(obtenerNumeroAleatorio(501, 600));`: Aquí estamos llamando a la función con los argumentos 501 y 600, y luego imprimimos el resultado en la consola. Cada vez que ejecutes este código, verás un número aleatorio entre 501 y 600 en la consola.
*/
