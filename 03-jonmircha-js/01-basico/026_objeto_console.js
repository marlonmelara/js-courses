// Curso JavaScript: 26. Objeto console
// https://youtu.be/qM9Rsv3LCWc

console.log(console);
console.error("Esto es un error");
console.warn("Esto es una alerta");
console.info("Esto es un mensaje informativo");
console.log("Esto es un registro de lo que ha pasado en nuestra aplicación");
console.clear();

const numeros = [1, 2, 3, 4, 5];
const vocales = ["a", "e", "i", "o", "u"];

console.table(numeros);
console.table(vocales);

const perro = {
  nombre: "Góku",
  raza: "Boxer",
  color: "Blanco",
};

console.table(perro);
