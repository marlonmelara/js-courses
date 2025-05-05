// Importa el objeto dataCategorias desde el archivo especificado en la ruta "./datos/categorias".
import dataCategorias from "./datos/categorias";

// Destructura para obtener el array 'categorias' del objeto importado.
const { categorias } = dataCategorias;

// Obtiene el elemento del DOM con el ID 'categorias' y lo almacena en la constante contenedorCategorias.
const contenedorCategorias = document.getElementById("categorias");

// Recorre el array de 'categorias' usando forEach.
categorias.forEach((categoria) => {
  // Crea un nuevo elemento de enlace (anchor <a>).
  const nuevaCategoria = document.createElement("a");

  // Genera la plantilla HTML para el contenido de cada categoría, incluyendo imagen y datos.
  const plantilla = `<img class="categoria__img"
  src="${categoria.imagenPortada}" alt="" />
  <div class="categoria__datos">
  <p class="categoria__nombre">${categoria.nombre}</p>
  <p class="categoria__numero-fotos">${categoria.numeroFotos} fotos</p>
  </div>`;

  // Establece el HTML interno del enlace a la plantilla creada.
  nuevaCategoria.innerHTML = plantilla;

  // Añade la clase 'categoria' al enlace para aplicar estilos CSS correspondientes.
  nuevaCategoria.classList.add("categoria");

  // Define el atributo 'href' del enlace como '#', probablemente para un comportamiento de ancla.
  nuevaCategoria.href = "#";

  // Añade un atributo de data personalizado con el ID de la categoría para posible uso en JS.
  nuevaCategoria.dataset.categoria = categoria.id;

  // Añade el enlace completo al contenedor de categorías en el DOM.
  contenedorCategorias.append(nuevaCategoria);
});
