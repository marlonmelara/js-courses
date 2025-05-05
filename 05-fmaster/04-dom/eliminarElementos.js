const eliminarCaja = () => {
  // Obtenemos una referencia al elemento padre, que en este caso tiene el id 'contenedor1'.
  const padre = document.getElementById("contenedor1");

  // Buscamos dentro del elemento padre el primer elemento con la clase 'caja'.
  const cajaAEliminar = padre.querySelector(".caja");

  // Verificamos si el elemento que queremos eliminar existe.
  if (cajaAEliminar) {
    // Si el elemento existe, usamos el método 'removeChild' del objeto 'padre'
    // para eliminar el elemento 'cajaAEliminar' del DOM.
    padre.removeChild(cajaAEliminar);
  }
};
