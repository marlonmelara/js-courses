/*
 * 📌 Alerta
 * Es una ventana modal proporcionada por los navegadores para mostrar un mensaje al usuario.
 * La función `alert()` muestra el mensaje y se detiene hasta que el usuario lo cierre.
 */
alert("Hola");

/*
 * 📌 Ventana de confirmación
 * Es una ventana modal que pregunta algo al usuario y ofrece dos opciones: Aceptar o Cancelar.
 * La función `confirm()` muestra el mensaje y retorna:
 * - `true` si el usuario hace clic en Aceptar.
 * - `false` si el usuario hace clic en Cancelar.
 */
const ingresar = () => {
  const accesoPermitido = confirm("¿Eres mayor de edad?");
  if (accesoPermitido) {
    alert("Bienvenido");
  } else {
    alert("No es permitido el acceso");
  }
};

/*
 * 📌 Ventana con input
 * Es una ventana modal que permite al usuario ingresar un valor.
 * La función `prompt()` muestra un mensaje y un cuadro de texto.
 * Retorna:
 * - El valor ingresado por el usuario como una cadena de texto.
 * - `null` si el usuario hace clic en Cancelar.
 */
const saludar = () => {
  const nombre = prompt("Escribe tu nombre");
  alert(`Bienvenido ${nombre}`);
};
