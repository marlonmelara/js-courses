/*
 * 📌 Modificar estilos CSS mediante "inline styles"
 * Estos estilos se aplican directamente a los elementos individuales y suelen tener la prioridad más alta.
 */

// Selecciona la última caja dentro del contenedor con id 'contenedor2'.
const ultimaCaja = document.querySelector("#contenedor2 .caja:last-child");

// Modifica los estilos de fondo y color de la última caja.
ultimaCaja.style.background = "#333"; // Establece el color de fondo a "#333" (un gris oscuro).
ultimaCaja.style.color = "#fff"; // Establece el color del texto a blanco.

// Selecciona todas las cajas con la clase 'caja'.
const cajas = document.querySelectorAll(".caja");

// Inicializa una variable 'tamanio' con el valor 24, que representará el tamaño de la fuente.
let tamanio = 24;

// Define una función que incrementa el tamaño de la fuente de todas las cajas en 1 pixel.
const incrementarFuente = () => {
  cajas.forEach((caja) => {
    // Itera sobre cada caja.
    tamanio++;
    caja.style.fontSize = `${tamanio}px`; // Ajusta el tamaño de la fuente de la caja actual.
  });
};

// Define una función que disminuye el tamaño de la fuente de todas las cajas en 1 pixel.
const disminuirFuente = () => {
  cajas.forEach((caja) => {
    // Itera sobre cada caja.
    tamanio--;
    caja.style.fontSize = `${tamanio}px`; // Ajusta el tamaño de la fuente de la caja actual.
  });
};
