/*
 * 📌 Agregar y eliminar eventos:
 *
 * Este código demuestra cómo agregar y eliminar manejadores de eventos en elementos del DOM.
 * En este caso, tenemos dos botones: 'boton1' y 'boton2'.
 * Al hacer clic en 'boton1', se agrega un manejador de evento al elemento 'primeraCaja', que
 * alterna una clase cuando se hace clic en 'primeraCaja'.
 * Al hacer clic en 'boton2', se elimina este manejador de evento de 'primeraCaja'.
 */

// Selecciona el elemento con id 'boton1'.
const boton1 = document.getElementById("boton1");

// Selecciona el elemento con id 'boton2'.
const boton2 = document.getElementById("boton2");

// Función que alterna (agrega/elimina) la clase "activa" en el elemento 'primeraCaja'.
const toggleClase = () => {
  primeraCaja.classList.toggle("activa");
};

// Selecciona el primer elemento con la clase 'caja'.
const primeraCaja = document.querySelector(".caja");

// Al hacer clic en 'boton1', se agrega un manejador de evento a 'primeraCaja' que
// invoca la función 'toggleClase' cada vez que se hace clic en 'primeraCaja'.
boton1.addEventListener("click", () => {
  primeraCaja.addEventListener("click", toggleClase);
});

// Al hacer clic en 'boton2', se elimina el manejador de evento previamente agregado a 'primeraCaja'.
boton2.addEventListener("click", () => {
  primeraCaja.removeEventListener("click", toggleClase);
});
