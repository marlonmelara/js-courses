/*
 * 📌 Event Listeners
 * Son funciones que escuchan eventos específicos en elementos del DOM.
 */

// Selecciona el elemento con id 'boton1'.
const boton1 = document.getElementById("boton1");

// Selecciona el primer elemento con la clase 'caja'.
const primeraCaja = document.querySelector(".caja");

// Agrega un 'event listener' al 'boton1'. Escucha por el evento de 'click'.
boton1.addEventListener("click", (e) => {
  // Al hacer click en el botón, alterna la clase 'activa' de la 'primeraCaja'.
  primeraCaja.classList.toggle("activa");
});

/*
 * 📌 Agregando el evento a multiples elementos
 * - Podemos agregar el evento a multiples elementos recorriéndolos mediante un ciclo.
 * 👉 Nota: Esta no es la forma más óptima, pero sirve para ejemplificar el proceso.
 */

// Selecciona todos los elementos con la clase 'caja'.
const cajas = document.querySelectorAll(".caja");

// Itera sobre cada caja.
cajas.forEach((caja) => {
  // Agrega un 'event listener' a cada 'caja'. Escucha por el evento de 'click'.
  caja.addEventListener("click", (e) => {
    // Imprime el objeto del evento.
    console.log(e);
    // Imprime un mensaje que indica en cuál caja se hizo click.
    console.log(`Haz hecho click en la caja ${e.target.innerHTML}`);
  });
});
