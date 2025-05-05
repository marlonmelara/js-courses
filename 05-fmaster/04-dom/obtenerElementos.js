/*
 * 📌 getElementById
 * Esta función nos permite obtener un elemento del DOM utilizando su atributo "id".
 */
const contenedor1 = document.getElementById("contenedor1");
console.log(contenedor1);

/*
 * 📌 children
 * Propiedad que nos devuelve los elementos hijos directos de un nodo.
 */
console.log(contenedor1.children);

/*
 * 📌 parentElement
 * Propiedad que nos permite acceder al nodo padre de un elemento en el DOM.
 */
console.log(contenedor1.parentElement);

/*
 * 📌 getElementsByTagName
 * Función que retorna una colección de elementos con una etiqueta específica.
 * Importante: Devuelve una colección HTML, la cual no es un arreglo.
 */
const divs = document.getElementsByTagName("div");
console.log(divs);

/*
 * 📌 getElementsByClassName
 * Función que retorna una colección de elementos que tienen una clase CSS específica.
 * Importante: Devuelve una colección HTML.
 */
const containers = document.getElementsByClassName("contenedor");
console.log(containers);

/*
 * 📌 querySelector
 * Retorna el primer elemento que coincida con un selector de estilo CSS.
 * Nota: Devuelve un solo elemento (nodo).
 */
const box = document.querySelector("#contenedor1 .caja");
console.log(box);

/*
 * 📌 querySelectorAll
 * Retorna todos los elementos que coincidan con un selector de estilo CSS.
 * Nota: Devuelve un NodeList, el cual es similar a un arreglo.
 */
const boxAll = document.querySelectorAll("#contenedor1 .caja");
console.log(boxAll);

// Itera sobre cada elemento de la lista.
boxAll.forEach((boxes) => {
  console.log(boxes);
});

/*
 * 📌 closest
 * Esta función busca hacia el ancestro más cercano que coincida con un selector dado.
 * Es útil para encontrar un elemento padre o ancestro que coincida con un selector.
 */
const lastBox = document.querySelector("#contenedor2 .caja:last-child");
console.log(lastBox);
console.log(lastBox.closest(".contenedor-principal"));

/*
 * 📌 Encadenamiento de métodos
 * Los métodos para seleccionar elementos del DOM pueden encadenarse para realizar búsquedas más específicas.
 */
const contenedor2 = document.getElementById("contenedor2");
console.log(contenedor2.querySelector(".caja"));
