/*
 * Trabajando con propiedades y métodos del objeto `location` y `history`.
 * Estos objetos son parte del objeto global `window` y nos permiten acceder y manipular
 * la información relacionada con la URL del documento y el historial de navegación, respectivamente.
 */

// El método `href` del objeto `location` retorna la URL completa de la página actual.
console.log(window.location.href);

/*
 * No es necesario anteponer el objeto `window` cuando se accede a sus propiedades o métodos,
 * ya que `window` es el objeto global en el contexto del navegador.
 * El método `hostname` del objeto `location` devuelve el nombre del host (dominio) de la página actual.
 */
console.log(location.hostname);

// El método `pathname` del objeto `location` devuelve la ruta y el nombre del archivo de la página actual.
console.log(location.pathname);

// El método `protocol` del objeto `location` devuelve el protocolo utilizado (por ejemplo, 'http:' o 'https:').
console.log(location.protocol);

/*
 * Función `cargarDocumento` que utiliza el método `assign` del objeto `location`
 * para cargar un nuevo documento en la ventana actual. En este caso, redirige al usuario a Google.
 */
const cargarDocumento = () => {
  location.assign("https://google.com");
};

/*
 * Función `irAdelante` que utiliza el método `forward` del objeto `history`
 * para navegar a la siguiente página en el historial de navegación.
 */
const irAdelante = () => {
  history.forward();
};
