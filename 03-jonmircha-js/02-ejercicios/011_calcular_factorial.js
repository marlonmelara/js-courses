/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120 */

console.log("***** Solución JonMircha modificado *****");

const factorial = (numero = undefined) => {
  if (typeof numero !== "number") {
    return console.error(`El valor "${numero}" ingresado, no es un número`);
  }
  if (numero <= 0) {
    return console.error(
      `El valor "${numero}" ingresado, no puede ser igual o menor a cero`
    );
  }

  let factorial = 1;

  for (let i = numero; i > 1; i--) {
    factorial = factorial * i;
  }

  return console.info(`El factorial de ${numero} es ${factorial}`);
};

factorial();
factorial("9");
factorial({});
factorial(-5);
factorial(5);

/*

1. La función `factorial` toma un único parámetro llamado `numero`. El valor predeterminado de este parámetro es `undefined`, lo que significa que si no pasas un argumento cuando llamas a la función, `numero` será `undefined`.

2. La función comienza comprobando si `numero` es del tipo "number". Si no es así, imprime un error y finaliza la ejecución de la función con la declaración `return`.

3. Luego, la función verifica si `numero` es menor o igual a cero. Si es así, imprime otro error y finaliza la ejecución de la función.

4. Si `numero` es un número válido y mayor que cero, la función procede a calcular el factorial. Inicializa una variable `factorial` a 1.

5. Luego, la función ejecuta un bucle `for` que comienza con `i` igual a `numero` y disminuye `i` en uno en cada iteración, hasta que `i` sea mayor que 1.

6. Dentro del bucle, la función multiplica el valor actual de `factorial` por `i`, y asigna el resultado a `factorial`. Este proceso se repite hasta que `i` sea igual a 1.

7. Finalmente, después de que el bucle haya terminado, la función imprime el valor calculado del factorial.

Así que, si pasas, por ejemplo, el número 5 a la función, calculará el factorial de 5 (que es 5 * 4 * 3 * 2 * 1 = 120) y luego imprimirá "El factorial de 5 es 120".
*/
