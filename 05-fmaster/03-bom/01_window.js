/***
 * 📌 window.open()
 * - Este método nos permite abrir nuevas ventanas o tabs en el navegador.
 * - Nota: Es posible que el navegador te pida permisos para abrir una nueva ventana debido a las configuraciones de privacidad.
 *
 * Parámetros:
 * - 1er parámetro: Dirección URL de la nueva ventana (opcional).
 * - 2do parámetro: Nombre de la nueva ventana (opcional).
 * - 3ro parámetro: Cadena de texto de opciones para configurar cómo se mostrará la nueva ventana (opcional).
 *
 * Retorno:
 * - Nos devuelve un objeto Window que representa la nueva ventana, permitiendo interactuar con ella.
 *
 * Ejemplo:
 */

// Definición de la variable ventana que almacenará la referencia a la nueva ventana creada.
let ventana;

// Función para abrir una nueva ventana
const abrirVentana = () => {
  // Abre una nueva ventana sin URL específica, con un nombre específico y dimensiones específicas
  ventana = window.open("", "Mi nueva ventana", "width=600, height=700");
  // Escribe contenido HTML en la nueva ventana
  ventana.document.write("<h1>Hola, escribiendo en la nueva ventana!</h1>");
};

// Función para cerrar la ventana abierta previamente
const cerrarVentana = () => {
  ventana.close(); // Cierra la ventana referenciada por la variable ventana
};

/*
 * 📌 Window Object
 * - Representa la ventana del navegador en la que se está ejecutando el script.
 * - Puedes obtener información y controlar características de la ventana del navegador.
 *
 * Ejemplo:
 */

// Imprime las dimensiones interiores de la ventana del navegador
console.log(
  `La ventana de tu navegador mide ${window.innerHeight}px de alto y ${window.innerWidth}px de ancho`
);

/*
 * 📌 Screen Object
 * - Representa la pantalla del usuario, proporcionando información sobre sus características.
 *
 * Ejemplo:
 */

// Imprime las dimensiones totales de la pantalla del usuario
console.log(
  `La ventana de tu pantalla mide ${window.screen.height}px de alto y ${window.screen.width}px de ancho`
);

// Imprime las dimensiones disponibles de la pantalla del usuario (excluyendo las áreas ocupadas por la barra de tareas, etc.)
console.log(
  `La ventana de tu pantalla sin barra de Windows mide ${window.screen.availHeight}px de alto y ${window.screen.availWidth}px de ancho`
);

/*
 * En este código, se demuestra cómo abrir, escribir y cerrar una nueva ventana del navegador usando JavaScript,
 * así como cómo acceder a la información sobre las dimensiones de la ventana del navegador y la pantalla del usuario
 * mediante los objetos Window y Screen, respectivamente.
 */
