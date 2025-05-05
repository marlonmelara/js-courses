/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }*/

const ordenarArreglo = (arr = undefined) => {
  if (arr === undefined)
    return console.error("No ingresaste un arreglo de números");

  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo");

  if (arr.length === 0) return console.error("El arreglo esta vacio");

  for (let num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor "$(num)" ingresado, NO es un número`);
  }

  return console.info({
    arr,
    asc: arr.map((el) => el).sort(),
    desc: arr
      .map((el) => el)
      .sort()
      .reverse(),
  });
};

/*
Este código define una función llamada `ordenarArreglo` que toma un arreglo de números como parámetro y devuelve un objeto con dos arreglos: uno con los números ordenados de forma ascendente y otro con los números ordenados de forma descendente.

Aquí está el análisis del código paso a paso:

1. Se define una función llamada `ordenarArreglo` que acepta un parámetro `arr` que por defecto es `undefined`.

2. Se inicia una serie de comprobaciones utilizando condicionales `if` para verificar si el parámetro `arr` es válido.

3. Si el parámetro `arr` es `undefined`, la función muestra un mensaje de error "No ingresaste un arreglo de números".

4. Si el parámetro `arr` no es un arreglo, la fucnción muestra un mensaje de error "El valor que ingresaste no es un arreglo".

5. Si el arreglo está vacío, la función muestra un mensaje de error "El arreglo está vacío".

6. Luego, se realiza un bucle `for...of` para iterar a través de los elementos del arreglo `arr`.

7. Dentro del bucle, se verifica si cada elemento es un número utilizando `typeof`. Si algún elemento no es un número, la función muestra un mensaje de error indicando que el valor ingresado no es un número.

8. Finalmente, la función retorna un objeto que contiene el arreglo original (`arr`), el arreglo ordenado de forma ascendente (`asc`), y el arreglo ordenado de forma descendente (`desc`). Para lograr esto, se utiliza el método `map` para crear copias de los elementos y luego se aplica el método `sort` para ordenar los elementos. Para el arreglo descendente, se utiliza `sort` y luego se invierte el arreglo con `reverse`.

9. Se invoca la función `ordenarArreglo` varias veces con diferentes argumentos para demostrar cómo maneja diferentes situaciones de entrada.

En resumen, esta función toma un arreglo de números como entrada y devuelve un objeto con dos arreglos: uno ordenado de manera ascendente y otro de manera descendente, realizando validaciones en cada paso para asegurarse de que los datos sean válidos.


*/

ordenarArreglo();
ordenarArreglo("Hola");
ordenarArreglo([]);
ordenarArreglo([3, {}]);
ordenarArreglo([7, 5, 7, 8, 6]);
