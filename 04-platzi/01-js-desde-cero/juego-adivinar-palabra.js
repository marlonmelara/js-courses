/*
Juguemos a adivinar la palabra.

El usuario tiene intentos para adivinar la palabra oculta.

Requerimientos:
- El juego debe tener una palabra oculta.
- El juego puede dar 1 pista de la palabra.
- El usuario debe ingresar una suposición.
- El juego debe verificar si la suposición del usuario es correcta.
- El juego debe tener un número limitado de intentos.
- El juego debe terminar cuando el usuario adivine la palabra o se quede sin intentos.
*/

let palabraOculta = "javascript";
let intentos = 3;

function verificarSuposicion(suposicion, palabraOculta) {
  if (suposicion.toLowerCase() === palabraOculta) {
    return true;
  }
  return false;
}

function jugarAdivinaLaPalabra() {
  alert("Bienvenido a jugar Adivina la Palabra Oculta");
  alert("Tienes 3 intentos para adivinar la palabra");
  alert("-pista- la palabra oculta es un lenguaje de programación");

  while (intentos > 0) {
    let suposicion = prompt("Adivina la palabra");
    if (verificarSuposicion(suposicion, palabraOculta)) {
      alert("¡Correcto! Has adivinado la palabra");
      break;
    } else {
      intentos--;
      if (intentos > 0) {
        alert(`Has fallado. Te quedan ${intentos} oportunidades de adivinar`);
      } else {
        alert(`Agotastes tus intentos. La palabra oculta era ${palabraOculta}`);
      }
    }
  }
}

jugarAdivinaLaPalabra();
