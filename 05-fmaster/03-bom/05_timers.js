/*
 * 📌 window.setTimeout()
 * Esta función nos permite programar la ejecución de una función tras un tiempo específico.
 */
const saludo = () => {
  console.log("Hola!");
};

// Establece un temporizador para mostrar un saludo después de 5 segundos.
setTimeout(() => {
  console.log("Primer");
  saludo();
}, 5000);

let id;

const iniciar = () => {
  console.log("Iniciando timer");
  // Establece otro temporizador para mostrar un saludo después de 5 segundos.
  id = setTimeout(() => {
    console.log("Segundo");
    saludo();
  }, 5000);
};

// La función parar cancela el temporizador establecido anteriormente.
const parar = () => {
  console.log("Parando timer");
  clearTimeout(id);
};

/*
 * 📌 window.setInterval()
 * Esta función nos permite ejecutar repetidamente una función en intervalos de tiempo establecidos.
 */

let cuenta = 0;
let idConteo;

const iniciarConteo = () => {
  // Comienza un conteo que incrementa y muestra un número cada segundo.
  idConteo = setInterval(() => {
    console.log(cuenta);
    cuenta++;
  }, 1000);
};

// La función pararConteo detiene el conteo en curso.
const pararConteo = () => {
  console.log("Paramos el conteo");
  clearInterval(idConteo);
};
