/**
1.- Calcular la suma de todos los números en un array

En este caso, puedes usar un bucle for para recorrer cada elemento del array y sumarlo a una variable total.
*/

const numeros = [1, 2, 3, 4, 5];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}

console.log(suma); // Esto imprimirá 15

/**


1. `const numeros = [1, 2, 3, 4, 5];`

Aquí estamos declarando y asignando un array de números a la constante `numeros`. Este array contiene cinco elementos: 1, 2, 3, 4, y 5.

2. `let suma = 0;`

Luego, estamos declarando una variable llamada `suma` y asignándole un valor inicial de 0. Esta variable se utilizará para acumular la suma de los números en el array.

3. `for(let i = 0; i < numeros.length; i++) {`

Aquí comienza nuestro bucle `for`. La variable `i` es nuestra variable de control (también conocida como índice) que comienza en 0. El bucle continuará mientras `i` sea menor que la longitud del array `numeros` (es decir, mientras haya elementos en el array que no hayamos procesado). Después de cada iteración, `i` se incrementará en 1 (`i++`).

4. `suma += numeros[i];`

Dentro del bucle, añadimos el valor del elemento actual del array (que se obtiene con `numeros[i]`) a la variable `suma`. Esto se hace usando el operador `+=`, que es un atajo para `suma = suma + numeros[i]`.

Así, en la primera iteración, cuando `i` es 0, añadimos `numeros[0]` (que es 1) a `suma`. En la segunda iteración, añadimos `numeros[1]` (que es 2) a `suma`, y así sucesivamente.

5. `console.log(suma);`

Finalmente, una vez que el bucle ha terminado (es decir, hemos procesado todos los elementos en el array `numeros`), imprimimos el valor de `suma` en la consola. En este caso, debería ser la suma de los números en el array, que es 15.

Espero que esto te ayude a entender mejor cómo funciona este ejemplo. Si tienes más preguntas, ¡no dudes en preguntar!
*/

/**
2.- Imprimir una cuenta regresiva

Puedes usar un bucle for con un contador que se decrementa para imprimir una cuenta regresiva.
*/

for (let i = 10; i > 0; i--) {
  console.log(i);
}

console.log("¡Despegue!"); // Esto imprimirá una cuenta regresiva desde 10 hasta 1, seguida de "¡Despegue!"

/**


1. `for(let i = 10; i > 0; i--) {`

Aquí comienza nuestro bucle `for`. La variable `i` es nuestra variable de control que comienza en 10. El bucle continuará mientras `i` sea mayor que 0. Después de cada iteración, `i` se decrementará en 1 (`i--`).

2. `console.log(i);`

Dentro del bucle, se imprime el valor actual de `i` en la consola. Entonces, en la primera iteración, cuando `i` es 10, se imprimirá 10. En la segunda iteración, cuando `i` es 9, se imprimirá 9, y así sucesivamente.

3. `console.log("¡Despegue!");`

Finalmente, una vez que el bucle ha terminado (es decir, hemos contado hacia atrás desde 10 hasta 1), se imprime la cadena "¡Despegue!" en la consola.

Así que, en resumen, este código imprimirá una cuenta regresiva desde 10 hasta 1, seguida de "¡Despegue!" en la consola.
*/

/**
3.- Imprimir los números pares en un rango

Puedes usar un bucle for con un contador que se incrementa en 2 para imprimir todos los números pares en un rango.
*/

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
} // Esto imprimirá los números pares del 0 al 10

/**

1. `for(let i = 0; i <= 10; i += 2) {`

Aquí es donde comienza nuestro bucle `for`. La variable `i` es nuestra variable de control que inicialmente está establecida en 0. El bucle continuará mientras `i` sea menor o igual a 10. Después de cada iteración, `i` se incrementará en 2 (`i += 2`).

2. `console.log(i);`

Dentro del bucle, se imprime el valor actual de `i` en la consola. En la primera iteración, cuando `i` es 0, se imprimirá 0. En la segunda iteración, cuando `i` es 2, se imprimirá 2, y así sucesivamente hasta que `i` sea mayor que 10.

Por lo tanto, en resumen, este código imprimirá los números pares del 0 al 10 en la consola.
*/
