/*
 * Trabajando con propiedades del objeto `navigator`.
 * El objeto `navigator` ofrece información sobre el navegador del usuario y el sistema.
 * Es una forma de obtener detalles sobre el entorno del cliente.
 */

// La propiedad `cookieEnabled` indica si las cookies están habilitadas en el navegador del usuario.
console.log("Cookies activadas:", navigator.cookieEnabled);

/*
 * La propiedad `userAgent` devuelve una cadena que representa la identificación del agente de usuario.
 * Esta cadena contiene información sobre el nombre del navegador, su versión, el sistema operativo,
 * y otros detalles del entorno del cliente.
 */
console.log(navigator.userAgent);

/*
 * La propiedad `language` devuelve el idioma preferido del usuario.
 * Esta es la configuración de idioma que el usuario ha establecido en su navegador.
 */
console.log(navigator.language);

/*
 * La propiedad `online` indica si el navegador está en línea o no.
 * Si es verdadero, significa que el navegador tiene una conexión a la red.
 * Nota: Hay un pequeño error en el código original, 'Online' debe estar en minúsculas 'online'.
 */
console.log(navigator.online);
