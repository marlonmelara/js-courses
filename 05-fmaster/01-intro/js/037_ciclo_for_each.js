/*
 * 📌 Ciclo forEach
 * - Es un método que los arreglos poseen, y se utiliza para recorrer (iterar) cada uno de los elementos del arreglo.
 * - Recibe una función como argumento, que se ejecutará para cada elemento del arreglo.
 * - Esta función puede recibir tres argumentos: el elemento actual, el índice del elemento actual y el arreglo completo.
 *
 */

const ligaDeLaJusticia = ["Batman", "Wonder Woman", "Superman", "Flash"];

ligaDeLaJusticia.forEach((heroe, index) => {
  // La función se ejecutará una vez para cada elemento del arreglo 'ligaDeLaJusticia'.
  // 'heroe' es el elemento actual en la iteración.
  // 'index' es la posición (índice) del elemento actual en el arreglo.
  // En cada iteración, se imprime en consola el índice del héroe y el nombre del héroe.
  console.log(`El heroe #${index} es: ${heroe}`);
});

/*
 * 📌 Ciclo for in
 * - Es utilizado para recorrer las propiedades de un objeto.
 * - La variable 'propiedad' tomará el nombre de cada propiedad del objeto en cada iteración del ciclo.
 *
 */

const heroe = {
  nombre: "Anthony Edward Stark",
  edad: 53,
  correo: "soyironman@starkindustries.com",
};

// Mostrar propiedades
for (propiedad in heroe) {
  // En cada iteración, 'propiedad' es el nombre de la propiedad actual, y se imprime en consola.
  console.log(propiedad);
}

// Mostrar valores
for (propiedad in heroe) {
  // En cada iteración, se accede al valor de la propiedad actual usando heroe[propiedad], y se imprime en consola.
  console.log(heroe[propiedad]);
}

// Aunque el ciclo for in puede ser usado para recorrer las propiedades de un objeto,
// hay otros métodos más recomendados para mostrar propiedades o valores.

// Borrar valores
for (propiedad in heroe) {
  // En cada iteración, se establece el valor de la propiedad actual a una cadena vacía.
  heroe[propiedad] = "";
}
// Se imprime el objeto 'heroe' en consola para verificar que todos los valores de las propiedades han sido borrados.
console.log(heroe);

/*
 * 📌 Ciclo for of
 * - Este ciclo nos permite recorrer los valores de un objeto iterable.
 * - Podemos recorrer diferentes tipos de datos como: Arreglos, cadenas de textos, mapas, listas de nodos, entre otros.
 *
 */

// 'etiquetas' es una lista de nodos que contiene todos los elementos hijos directos del elemento <head> en el documento HTML.
const etiquetas = document.head.children;
// Imprime en consola la lista de nodos 'etiquetas'.
console.log(etiquetas);

// Ciclo for of
// Recorre cada elemento en la lista de nodos 'etiquetas', y en cada iteración, 'elemento' es un nodo individual.
for (elemento of etiquetas) {
  // Imprime en consola el nodo 'elemento' en la iteración actual.
  console.log(elemento);
}

// Alternativa al ciclo for of
// Convertir 'etiquetas' a un arreglo usando el operador Spread (...), luego usar el método forEach para recorrer cada elemento.
[...etiquetas].forEach((elemento) => {
  // Imprime en consola el elemento en la iteración actual.
  console.log(elemento);
});
