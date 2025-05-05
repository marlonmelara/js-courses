/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo */

console.log("***** Mi Solución A *****");

const repetirPalabras1 = (frase, veces) =>
  typeof frase !== "string" || frase.length === 0
    ? console.warn("No ingresaste el texto")
    : typeof veces !== "number"
    ? console.error("No escribiste las veces que se tiene que repetir")
    : veces <= 0
    ? console.error("El número de veces no puede ser negativo")
    : !Number.isInteger(veces)
    ? console.warn("La longitud debe ser un número entero")
    : console.info(frase.repeat(veces));

repetirPalabras1(3, 3);
repetirPalabras1("Hola Mundo ", "3");
repetirPalabras1("Hola Mundo ", -2);
repetirPalabras1("Hola Mundo ", 3.5);
repetirPalabras1("Hola Mundo ", 4);

//: console.info(`${" ".repeat(veces - 1)}${frase}`.repeat(veces));*/

console.log("***** Mi Solución B *****");

const repetirPalabras2 = (frase, veces) => {
  if (typeof frase !== "string" || frase.length === 0)
    return console.warn("No ingresaste un texto");

  if (typeof veces !== "number")
    return console.warn("No escribiste las veces que se tiene que repetir");

  if (veces <= 0)
    return console.error("El número de veces no puede ser negativo");

  if (!Number.isInteger(veces))
    return console.warn("La longitud debe ser un número entero");

  console.info(frase.repeat(veces));
};

repetirPalabras2(3, 3);
repetirPalabras2("Hola Mundo ", "3");
repetirPalabras2("Hola Mundo ", -2);
repetirPalabras2("Hola Mundo ", 3.5);
repetirPalabras2("Hola Mundo ", 10);

/**
Ambas formas de declaración de la función `repetirPalabras` realizan la misma tarea, que es validar los parámetros y repetir una frase determinada cantidad de veces. Sin embargo, hay diferencias en cuanto a la estructura y legibilidad del código.

La Forma de declaración B utiliza una estructura más tradicional con bloques de `if` y `return` para realizar las validaciones y retornar tempranamente en caso de error. Esto permite una mayor claridad en el flujo del código y facilita la comprensión de las condiciones y los posibles casos de error.

La Forma de declaración A utiliza el operador ternario para realizar las validaciones y ejecutar diferentes instrucciones según los resultados. Si bien esta forma puede resultar más compacta, puede ser más difícil de leer y comprender, especialmente cuando hay múltiples condiciones anidadas.

En términos de conveniencia y legibilidad, la Forma de declaración B sería la más recomendable. Proporciona una estructura más clara y permite identificar rápidamente las validaciones realizadas en cada paso. Además, es más fácil de mantener y modificar en caso de futuros cambios en las condiciones.

En resumen, la Forma de declaración B es más conveniente debido a su legibilidad y claridad en el flujo del código.
*/
