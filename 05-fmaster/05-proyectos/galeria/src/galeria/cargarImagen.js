import data from "../datos/fotos";

// Selecciona el elemento de la galería en el DOM por su ID.
const galeria = document.getElementById("galeria");

/**
 * Función para cargar una imagen y su información en la galería.
 *
 * @param {number} id - El ID único de la imagen.
 * @param {string} nombre - El nombre de la imagen.
 * @param {string} ruta - La ruta de archivo de la imagen.
 * @param {string} descripcion - La descripción de la imagen.
 */
const cargarImagen = (id, nombre, ruta, descripcion) => {
  // Establece el atributo 'src' del elemento de imagen de la galería con la ruta proporcionada.
  galeria.querySelector(".galeria__imagen").src = ruta;
  // Establece un atributo de dato personalizado 'data-id-imagen' con el ID de la imagen.
  galeria.querySelector(".galeria__imagen").dataset.idImagen = id;
  // Actualiza el texto del título de la galería con el nombre proporcionado.
  galeria.querySelector(".galeria__titulo").innerText = nombre;
  // Actualiza el texto de la descripción de la imagen activa con la descripción proporcionada.
  galeria.querySelector(".galeria__descripcion-imagen-activa").innerText =
    descripcion;

  const categoriaActual = galeria.dataset.categoria;
  const fotos = data.fotos[categoriaActual];

  let indexImagenActual;
  fotos.forEach((foto, index) => {
    if (foto.id === id) {
      indexImagenActual = index;
    }
  });

  // Marcamos la imagen del carousel como activa.
  if (galeria.querySelectorAll(".galeria__carousel-slide").length > 0) {
    // Eliminamos la clase active del cualquier slide.
    galeria
      .querySelector(".galeria__carousel-slide--active")
      .classList.remove("galeria__carousel-slide--active");

    galeria
      .querySelectorAll(".galeria__carousel-slide")
      [indexImagenActual].classList.add("galeria__carousel-slide--active");
  }
};

// Funcionalidad de cargar imagen anterior y siguiente
const cargarAnteriorSiguiente = (direccion) => {
  const categoriaActual = galeria.dataset.categoria;
  const fotos = data.fotos[categoriaActual];
  const idImagenActual = parseInt(
    galeria.querySelector(".galeria__imagen").dataset.idImagen
  );

  let indexImagenActual;
  fotos.forEach((foto, index) => {
    if (foto.id === idImagenActual) {
      indexImagenActual = index;
    }
  });

  if (direccion === "siguiente") {
    if (fotos[indexImagenActual + 1]) {
      const { id, nombre, ruta, descripcion } = fotos[indexImagenActual + 1];
      cargarImagen(id, nombre, ruta, descripcion);
    }
  } else if (direccion === "anterior") {
    if (fotos[indexImagenActual - 1]) {
      const { id, nombre, ruta, descripcion } = fotos[indexImagenActual - 1];
      cargarImagen(id, nombre, ruta, descripcion);
    }
  }
};

// Exporta la función cargarImagen para que pueda ser utilizada en otros módulos.
export { cargarImagen, cargarAnteriorSiguiente };
