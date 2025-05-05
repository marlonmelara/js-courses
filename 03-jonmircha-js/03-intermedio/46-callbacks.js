// https://youtu.be/TYG2_iUr8XY?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA

/** Una callback es una función que se ejecuta después de que
 * otra función haya terminado su ejecución.
 *
 * Una callback es una función que se pasa como argumento a otra función.
 *
 * Esta característica es esencial en JavaScript para manejar eventos y
 * operaciones asíncronas.
 */

/* En JavaScript, las funciones son tratadas como ciudadanos de primer orden. Esto significa que pueden ser pasadas como argumentos, retornadas por otras funciones, asignadas a variables, y más.

Los callbacks son un ejemplo claro de este concepto, donde una función se pasa a otra como un argumento.*/

function caudradoCallback(valor, callback) {
  setTimeout(() => {
    callback(valor, valor * valor);
  }, 0 | (Math.random() * 1000));
}

/** Problemas con Callbacks Anidados: "callback hell" o "pirámide del infierno" ocurre cuando se anidan múltiples callbacks, llevando a un código difícil de leer y mantener.
 */

caudradoCallback(0, (valor, resultado) => {
  console.log("Inicia callback");
  console.log(`Callback: ${valor}, ${resultado}`);
  caudradoCallback(2, (valor, resultado) => {
    console.log(`Callback: ${valor}, ${resultado}`);
    caudradoCallback(3, (valor, resultado) => {
      console.log(`Callback: ${valor}, ${resultado}`);
      caudradoCallback(4, (valor, resultado) => {
        console.log(`Callback: ${valor}, ${resultado}`);
        caudradoCallback(5, (valor, resultado) => {
          console.log(`Callback: ${valor}, ${resultado}`);
          caudradoCallback(6, (valor, resultado) => {
            console.log(`Callback: ${valor}, ${resultado}`);
          });
        });
      });
    });
  });
});

/** Promesas como Solución: Las promesas en JavaScript son presentadas como una solución al problema del callback hell. Una promesa es un objeto que representa la terminación o el fracaso eventual de una operación asíncrona.
 */
