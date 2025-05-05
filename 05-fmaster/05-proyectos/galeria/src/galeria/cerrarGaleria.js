// Obtener el elemento del DOM con el id 'galeria'.
const galeria = document.getElementById("galeria");

// Definir la función 'cerrarGaleria'.
const cerrarGaleria = () => {
  // Remover la clase 'galeria--active' del elemento 'galeria'.
  // Esto probablemente haga que la galería se oculte o cambie su estilo a no activo.
  galeria.classList.remove("galeria--active");

  // Restablecer el estilo 'overflow' del cuerpo del documento a su valor por defecto.
  // Esto permite que la página vuelva a desplazarse si se había deshabilitado anteriormente.
  document.body.style.overflow = "";
};

// Exportar la función 'cerrarGaleria' para que pueda ser utilizada en otros módulos.
export default cerrarGaleria;
