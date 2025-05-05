/*
 * 📌 Tipos de propagación de eventos en el DOM:
 *
 * - Capturing (true): Es la fase en la cual el evento desciende desde el elemento más externo (por ejemplo, document)
 *   hacia el elemento que disparó el evento. En esta fase, si se establece el tercer argumento de 'addEventListener' como 'true',
 *   el manejador del evento se ejecuta cuando el evento está "capturando".
 *
 * - Bubbling (false, por defecto): Es la fase en la cual el evento asciende desde el elemento que disparó el evento hacia
 *   el elemento más externo (por ejemplo, document). Esta es la fase por defecto. Si se omite el tercer argumento de
 *   'addEventListener' o se establece como 'false', el manejador del evento se ejecuta en esta fase.
 */

// Selecciona el elemento con id 'contenedor1'.
const contenedor = document.getElementById("contenedor1");

// Agrega un 'event listener' al 'contenedor'. Escucha por el evento de 'click'.
// Aquí, el tercer argumento está establecido como 'true', lo que significa que el manejador del evento
// se ejecutará durante la fase de "captura".
contenedor.addEventListener(
  "click",
  (e) => {
    // Imprime un mensaje indicando que se hizo click en el contenedor.
    console.log("Hiciste click en el contenedor");
  },
  true
);

// Selecciona el primer elemento con la clase 'caja'.
const primeraCaja = document.querySelector(".caja");

// Agrega un 'event listener' a la 'primeraCaja'. Escucha por el evento de 'click'.
// Aquí, el tercer argumento está omitido, lo que significa que el manejador del evento
// se ejecutará durante la fase por defecto, que es "bubbling".
primeraCaja.addEventListener("click", (e) => {
  // Imprime un mensaje indicando que se hizo click en la 'primeraCaja'.
  console.log("Hiciste click en la caja1");
});
