// Importar el módulo de datos de fotos y la función cargarImagen de sus respectivos archivos.
import datos from "./../datos/fotos";
import { cargarImagen } from "./cargarImagen";

/**
 * Manejador del evento de clic para una diapositiva de la galería.
 *
 * @param {Event} e - El objeto evento que se dispara cuando se hace clic en una diapositiva.
 */
const slideClick = (e) => {
  // Inicializar variables para la ruta, el nombre y la descripción de la imagen.
  let ruta, nombre, descripcion;

  // Obtener el ID de la imagen a partir del atributo de datos del elemento clickeado y convertirlo a un número entero.
  const id = parseInt(e.target.dataset.id);

  // Seleccionar el elemento de la galería en el DOM por su ID.
  const galeria = document.getElementById("galeria");

  // Obtener la categoría activa de los datos de la galería.
  const categoriaActiva = galeria.dataset.categoria;

  // Iterar sobre el arreglo de fotos de la categoría activa para encontrar la foto correspondiente al ID.
  datos.fotos[categoriaActiva].forEach((foto) => {
    if (foto.id === id) {
      // Si se encuentra la foto con el ID correspondiente, asignar su ruta, nombre y descripción a las variables.
      ruta = foto.ruta;
      nombre = foto.nombre;
      descripcion = foto.descripcion;
    }
  });

  // Llamar a la función cargarImagen con los detalles de la foto seleccionada para actualizar la galería.
  cargarImagen(id, nombre, ruta, descripcion);
};

// Exportar la función slideClick como predeterminada para su uso en otros archivos.
export default slideClick;
