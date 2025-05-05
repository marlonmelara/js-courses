/*
 * 📌 elemento.innerHTML
 * Este método nos permite obtener o establecer el contenido HTML interno de un elemento.
 * Puedes insertar texto, etiquetas HTML y más.
 */
const primeraCaja = document.querySelector(".caja");
primeraCaja.innerHTML = "<b>Hola!</b>";

/*
 * 📌 elemento.attribute
 * Esta propiedad nos da acceso a los atributos del elemento. Podemos leer o modificar
 * el valor de un atributo usando esta propiedad.
 */
primeraCaja.id = "nuevo-id";

/*
 * 📌 elemento.setAttribute()
 * Este método nos permite establecer o cambiar el valor de un atributo específico.
 * Si el atributo no existe, este método lo crea.
 */
primeraCaja.setAttribute("class", "caja activa");
primeraCaja.setAttribute("data-id", "123-456-789");

/*
 * 📌 elemento.style.property
 * Esta propiedad nos permite acceder y modificar estilos CSS inline de un elemento.
 * Puedes cambiar cualquier propiedad CSS utilizando esta sintaxis.
 */
const contenedor2caja1 = document.querySelector("#contenedor2 .caja");
contenedor2caja1.style.background = "gray";
contenedor2caja1.style.color = "#fff";
contenedor2caja1.style.textTransform = "uppercase";
