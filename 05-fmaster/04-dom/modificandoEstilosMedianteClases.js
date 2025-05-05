/*
 * 📌 Modificar estilos CSS mediante clases
 */

// Obtenemos una referencia al primer elemento con la clase 'caja' dentro del contenedor con id 'contenedor1'.
const primeraCaja = document.querySelector("#contenedor1 .caja");

// classList.add() - Nos permite agregar clases a un elemento
const agregarClase = () => primeraCaja.classList.add("activa");

// classList.remove() - Nos permite eliminar clases de un elemento
const eliminarClase = () => primeraCaja.classList.remove("activa");

// classList.toggle() - Nos permite alternar ((agrega o elimina)) clases de un elemento
const toggleClase = () => primeraCaja.classList.toggle("activa");

// classList.contains() - Nos permite comprobar si el elemnento contiene una clase
const comprobarClase = () => {
  // Si 'primeraCaja' contiene la clase 'activa', imprime un mensaje en consola.
  if (primeraCaja.classList.contains("activa")) {
    console.log("La caja tiene la clase activa");
  } else {
    // Si no la tiene, imprime otro mensaje en consola.
    console.log("La caja no tiene la clase activa");

    console.log("Y contiene las siguiente clases:");
    primeraCaja.classList.forEach((clase) => {
      console.log(clase);
    });
  }
};
