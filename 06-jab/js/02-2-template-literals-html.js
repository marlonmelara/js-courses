let nombre = "Audrey";
let imagen = "audrey.png";

/* Aquí se está utilizando la propiedad 'innerHTML' del objeto que retorna
 * 'document.querySelector("body")' para establecer el contenido HTML
 * dentro del elemento <body> de la página.
 *
 * Se utilizan Template Literals (backticks ` `) para definir una cadena de texto
 * que contenga HTML. Los Template Literals permiten escribir cadenas de texto
 * multilínea y también interpolar expresiones JavaScript dentro de la cadena
 * usando la sintaxis ${...}.
 *
 * Dentro del Template Literal, se crean varios elementos HTML, incluyendo un
 * <div> con clase "container", otro <div> con clase "imagen" que contiene un
 * elemento <img> y un elemento <h1> que muestra un mensaje.
 *
 * En el atributo 'src' del elemento <img> se interpola la variable 'imagen'
 * para obtener la ruta de la imagen, y en el elemento <span> se interpola la
 * variable 'nombre1' para mostrar el nombre.
 *
 * Las interpolaciones dentro del Template Literal permiten insertar valores
 * dinámicos directamente dentro de la cadena HTML, lo que facilita la creación
 * de contenido HTML dinámico en JavaScript.
 */

document.querySelector("body").innerHTML = `<div class="container">
<div class="imagen">
<img src="img/${imagen}">
</div>
<h1>Mi nombre es
<span class="name">${nombre}</span></h1>
</div>`;

/* Este código es un ejemplo de cómo se pueden utilizar los Template Literals
 * para crear contenido HTML dinámico en JavaScript, lo que puede ser
 * especialmente útil en aplicaciones web interactivas y dinámicas.
 */
