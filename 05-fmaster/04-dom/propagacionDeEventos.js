/*
 * 📌 Propagación de eventos (Event Propagation)
 * Los eventos en el DOM se propagan en dos fases: captura y burbuja.
 * - Fase de captura: El evento se propaga desde el elemento más externo hacia el elemento objetivo.
 * - Fase de burbuja: El evento se propaga desde el elemento objetivo hacia el elemento más externo.
 * Usando `stopPropagation()`, podemos detener la propagación del evento, impidiendo que llegue a otros listeners en la cadena de propagación.
 */

// Selecciona el elemento con id 'contenedor1'.
const contenedor = document.getElementById("contenedor1");

// Agrega un 'event listener' al 'contenedor'. Escucha por el evento de 'click'.
contenedor.addEventListener("click", (e) => {
  // Imprime un mensaje indicando que se hizo click en el contenedor.
  console.log("Hiciste click en el contenedor");
});

// Selecciona el primer elemento con la clase 'caja'.
const primeraCaja = document.querySelector(".caja");

// Agrega un 'event listener' a la 'primeraCaja'. Escucha por el evento de 'click'.
primeraCaja.addEventListener("click", (e) => {
  // Detiene la propagación del evento.
  e.stopPropagation();
  // Imprime un mensaje indicando que se hizo click en la 'primeraCaja'.
  console.log("Hiciste click en la caja1");
});
