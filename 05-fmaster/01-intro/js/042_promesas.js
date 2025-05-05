/**
 * 📌Promesas:
 * - Una promesa en JavaScript es un objeto que representa la terminación o el fracaso eventual de una operación asíncrona.
 * - Principalmente se usan para manejar operaciones asíncronas, proporcionando una manera más limpia y poderosa que los callbacks.
 *
 * Una promesa tiene tres estados:
 * 1. Pendiente (Pending): Estado inicial, ni cumplida ni rechazada.
 * 2. Resuelta (Fulfilled): Significa que la operación se completó con éxito.
 * 3. Rechazada (Rejected): Significa que la operación falló.
 */

// Creando una nueva promesa llamada 'promesa'.
const promesa = new Promise((resolve, reject) => {
  // Simulando una operación asíncrona con setTimeout.
  setTimeout(() => {
    // Variable que determina si la operación fue exitosa.
    const exito = true;

    // Si la operación fue exitosa, se llama a 'resolve' con un mensaje.
    if (exito) {
      resolve("La operación tuvo éxito");
    }
    // Si la operación no fue exitosa, se llama a 'reject' con un mensaje.
    else {
      reject("La operación no tuvo éxito");
    }
  }, 4000); // La operación asíncrona se simula con un retardo de 4 segundos (4000 milisegundos).
});

// Manejando la resolución de la promesa con '.then()'.
// Cuando la promesa se resuelve, se muestra una alerta con el mensaje proporcionado por 'resolve'.
promesa.then((mensaje) => {
  alert(mensaje);
});

// Manejando el rechazo de la promesa con '.catch()'.
// Cuando la promesa es rechazada, se muestra una alerta con el mensaje proporcionado por 'reject'.
promesa.catch((mensaje) => {
  alert(mensaje);
});

/*
 * En este código:
 * - Se crea una nueva promesa llamada 'promesa', que simula una operación asíncrona con setTimeout.
 * - Dentro de la promesa, se verifica si la operación fue exitosa o no usando una variable 'exito'.
 * - Si 'exito' es verdadero, se llama a 'resolve' con un mensaje de éxito.
 * - Si 'exito' es falso, se llama a 'reject' con un mensaje de error.
 * - Se utilizan los métodos '.then()' y '.catch()' para manejar la resolución y el rechazo de la promesa respectivamente,
 *   mostrando una alerta con el mensaje correspondiente en cada caso.
 */
