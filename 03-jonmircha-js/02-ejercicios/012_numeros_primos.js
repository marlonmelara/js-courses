/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true */

console.log("***** Solución JonMircha modificado *****");

const numeroPrimo = (numero = undefined) => {
  if (typeof numero !== "number") {
    return console.error(`El valor ingresado, no es un número`);
  }
  if (numero <= 0) {
    return console.error(
      `El valor ingresado, no puede ser igual o menor a cero`
    );
  }
  if (numero === 1) {
    return console.error("El valor ingresado, no puede ser 1");
  }

  let divisible = false;

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      divisible = true;
      break;
    }
  }

  return divisible
    ? console.log(`El número ${numero}, NO es primo`)
    : console.log(`El número ${numero}, SÍ es primo`);
};

numeroPrimo();
numeroPrimo(0);
numeroPrimo(-2);
numeroPrimo("7");
numeroPrimo(false);
numeroPrimo(1);
numeroPrimo(13);
numeroPrimo(12);

/**
Esta sección del código está verificando si un número dado es un número primo o no. Un número primo es un número que tiene exactamente dos divisores: 1 y él mismo. En otras palabras, si un número es divisible por algún otro número aparte de 1 y él mismo, entonces no es un número primo.

Aquí está la explicación detallada de esta sección:

1. `let divisible = false;`

   Esta línea declara una variable booleana llamada `divisible` y la inicializa en `false`. Esta variable se utilizará para rastrear si el número dado es divisible por algún número que no sea 1 y él mismo.

2. `for (let i = 2; i < numero; i++) { ... }`

   Este es un bucle `for` que itera desde `2` hasta `numero - 1`. La razón por la cual empieza en `2` es porque todos los números son divisibles por `1`, por lo que no tiene sentido verificarlo. Y la razón por la cual se detiene en `numero - 1` es porque todos los números son divisibles por sí mismos, por lo que tampoco tiene sentido verificarlo.

   En cada iteración del bucle, hace lo siguiente:

   - `if (numero % i === 0) { ... }`

     Esta es una declaración `if` que verifica si `numero` es divisible por `i`. Lo hace utilizando el operador de módulo (`%`), que devuelve el residuo de la división de `numero` por `i`. Si el residuo es `0`, eso significa que `numero` es divisible por `i`.

     Si `numero` es divisible por `i`, entonces hace lo siguiente:

     - `divisible = true;`

       Esto establece `divisible` en `true`, indicando que `numero` es divisible por algún número que no sea 1 y él mismo.

     - `break;`

       Esto interrumpe el bucle `for`. No tiene sentido continuar verificando los demás números porque ya sabemos que `numero` no es un número primo.

Al final del bucle `for`, si `divisible` sigue siendo `false`, eso significa que `numero` no fue divisible por ningún número que no sea 1 y él mismo, por lo que `numero` es un número primo. Si `divisible` es `true`, eso significa que `numero` fue divisible por algún número que no sea 1 y él mismo, por lo que `numero` no es un número primo.
*/
