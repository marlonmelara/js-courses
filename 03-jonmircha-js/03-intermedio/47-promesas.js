// https://youtu.be/ppzrpTjwEC8?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA

/** Funcionamiento de las Promesas: Las promesas en JavaScript se presentan como objetos que representan el resultado eventual (ya sea éxito o error) de una operación asíncrona. Utilizan dos métodos principales: resolve (para éxito) y reject (para errores).
 */

/** Centralización del Manejo de Errores: Las promesas permiten centralizar el manejo de errores en un solo lugar a través del método .catch(). En lugar de tener que manejar los errores en cada callback individual, puedes capturar cualquier error que ocurra en la cadena de promesas en un único bloque .catch() al final de la cadena.
 */

/** Promesas Rechazadas: Una promesa puede ser explícitamente rechazada con el método reject, lo que desencadena el flujo hacia el bloque .catch(). Esto ofrece una manera clara y estructurada de indicar fallos o situaciones erróneas en operaciones asíncronas.
 */

function caudradoPromise(valor) {
  if (typeof valor !== "number")
    return Promise.reject(
      `Error, el valor "${valor}" ingresado no es un número`
    );
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        valor,
        resultado: valor * valor,
      });
    }, 0 | (Math.random() * 1000));
  });
}

caudradoPromise(0)
  .then((obj) => {
    console.log("Inicia Promise");
    console.log(`Promise: ${obj.valor}, ${obj.resultado}`);
    return caudradoPromise(2);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.valor}, ${obj.resultado}`);
    return caudradoPromise(3);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.valor}, ${obj.resultado}`);
    return caudradoPromise(4);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.valor}, ${obj.resultado}`);
    return caudradoPromise(5);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.valor}, ${obj.resultado}`);
    return caudradoPromise(6);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.valor}, ${obj.resultado}`);
    console.log("Fin de la promesa");
  })
  .catch((err) => {
    console.error(err);
  });
