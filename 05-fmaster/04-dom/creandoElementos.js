const agregarCaja = () => {
  /*
   * 📌 Paso 1: Creación del elemento
   * Usamos el método 'createElement' del objeto 'document' para crear un nuevo
   * elemento del DOM. Este método recibe como argumento el nombre de la etiqueta del elemento que deseamos crear.
   */
  const nuevaCaja = document.createElement("div");

  /*
   * 📌 Paso 2: Modificación del contenido y los atributos
   * Una vez que el elemento está creado, podemos modificar su contenido interno
   * usando la propiedad 'innerText'. También podemos añadir o modificar sus atributos con el método 'setAttribute'.
   */
  nuevaCaja.innerText = "Nueva Caja!";
  // nuevaCaja.setAttribute("id", "nuevo-id");
  nuevaCaja.setAttribute("class", "caja activa");

  /*
   * 📌 Paso 3: Insertar el elemento en el DOM
   * Para agregar nuestro elemento al documento, primero debemos seleccionar el
   * elemento padre donde queremos insertarlo. Para este ejemplo, el elemento padre es un contenedor con el id 'contenedor1'.
   */

  const contenedor = document.getElementById("contenedor1");

  /*
   * Existen varias formas de insertar el elemento en el DOM:
   */

  // appendChild() - Inserta el nuevo elemento como último hijo del elemento padre.

  // contenedor.appendChild(nuevaCaja);

  // insertAdjacentElement() - Permite insertar el elemento en diferentes posiciones relativas al elemento padre o a un elemento referente.

  // contenedor.insertAdjacentElement("afterbegin", nuevaCaja);

  /*
   * replaceWith() - Reemplaza un elemento existente con otro. En este caso, estamos
   * reemplazando la primera caja dentro de 'contenedor1' con 'nuevaCaja'.
   */
  document.querySelector("#contenedor1 .caja").replaceWith(nuevaCaja);
};
