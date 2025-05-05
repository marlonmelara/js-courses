import dataFotos from "./datos/fotos";
import { cargarImagen } from "./galeria/cargarImagen";

// Se obtiene el contenedor de las categorías del DOM y se almacena en la constante contenedorCategorias.
const contenedorCategorias = document.getElementById("categorias");
// Se obtiene el elemento que representa la galería del DOM y se almacena en la constante galeria.
const galeria = document.getElementById("galeria");

// Se añade un listener de evento de clic al contenedor de categorías.
contenedorCategorias.addEventListener("click", (e) => {
  // Se evita el comportamiento por defecto de los enlaces, evitando que la página navegue al hacer clic.
  e.preventDefault();

  // Se verifica si el clic ocurrió dentro de un enlace (elemento <a>) utilizando el método closest.
  if (e.target.closest("a")) {
    // Si el clic fue dentro de un enlace, se añade la clase 'galeria--active' al elemento galeria.
    galeria.classList.add("galeria--active");
    // Se establece el estilo de overflow del cuerpo del documento a "hidden" para evitar el desplazamiento del fondo.
    document.body.style.overflow = "hidden";

    // Se obtiene el identificador de la categoría desde el atributo de datos del enlace clickeado.
    const categoriaActiva = e.target.closest("a").dataset.categoria;

    galeria.dataset.categoria = categoriaActiva;

    // Se recuperan las fotos correspondientes a la categoría activa de los datos importados.
    const fotos = dataFotos.fotos[categoriaActiva];

    // Se obtiene el contenedor de slides del carrusel en la galería.
    const carousel = galeria.querySelector(".galeria__carousel-slides");
    // Se limpia el contenido actual del carrusel.
    carousel.innerHTML = "";

    const { id, nombre, ruta, descripcion } = fotos[0];
    cargarImagen(id, nombre, ruta, descripcion);

    // Por cada foto en la categoría, se crea un elemento de carrusel y se añade al HTML de la galería.
    fotos.forEach((foto) => {
      const slide = `
    <a href="#" class="galeria__carousel-slide">
      <img
      class="galeria__carousel-image"
      src="${foto.ruta}"
      data-id="${foto.id}"
      alt="" />
    </a>
    `;
      // Se añade el slide al contenedor de slides del carrusel en la galería.
      galeria.querySelector(".galeria__carousel-slides").innerHTML += slide;
    });

    // Se añade una clase para activar visualmente el primer slide del carrusel.
    galeria
      .querySelector(".galeria__carousel-slide")
      .classList.add("galeria__carousel-slide--active");
  }
});
