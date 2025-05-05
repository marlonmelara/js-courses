// Define una función asíncrona que devuelve una Promesa.
const fnAsync = () => {
  return new Promise((resolve, reject) => {
    // Decide si resolver o rechazar la promesa.
    true
      ? setTimeout(() => resolve("AsynC!!"), 2000) // Se resuelve después de 2 segundos.
      : reject(new Error("Error!")); // Se rechaza con un error.
  });
};

// Define otra función asíncrona usando 'async'.
const anotherFn = async () => {
  const something = await fnAsync(); // Espera hasta que fnAsync() se resuelva.
  console.log(something); // Imprime el resultado de fnAsync().
  console.log("Hello"); // Se ejecuta después de que fnAsync() se resuelva.
};

console.log("Before"); // Primero se imprime "Before".
anotherFn(); // Llama a anotherFn() pero no espera a que finalice.
console.log("After"); // Se imprime "After" inmediatamente después de llamar a anotherFn().
