/** 📌 Delegación de eventos */

// Seleccionamos el elemento con el ID "lista" y lo asignamos a la constante lista.
const lista = document.getElementById("lista");

// Seleccionamos el elemento con el ID "btn-agregar" y lo asignamos a la constante btnAgregar.
const btnAgregar = document.getElementById("btn-agregar");

// Agregamos un event listener de tipo "click" al elemento lista.
lista.addEventListener("click", (e) => {
  // Verificamos si el elemento clickeado (e.target) es una etiqueta "A" (un enlace).
  if (e.target && e.target.tagName === "A") {
    // Si es un enlace, alternamos la clase "activo" en ese enlace.
    e.target.classList.toggle("activo");
  }
});

// Agregamos un event listener de tipo "click" al botón btnAgregar.
btnAgregar.addEventListener("click", () => {
  // Creamos una plantilla de cadena que representa un enlace con un ícono.
  const elemento = `
    <a href="#">
      Elemento <i class="bi bi-check-square-fill"></i>
    </a>
  `;

  // Agregamos el enlace creado anteriormente al final del contenido de la lista.
  lista.innerHTML += elemento;
});
