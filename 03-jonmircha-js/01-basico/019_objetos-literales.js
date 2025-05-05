// Curso JavaScript: 19. Objetos literales
// https://youtu.be/XhJaPRfJaz0

let nombre = "Gokú",
  edad = 40;

const PERRO = {
  nombre: nombre,
  edad: edad,
  ladrar: function () {
    console.log("Guauu guauu!");
  },
};

console.log(PERRO);
PERRO.ladrar();

const DOG = {
  nombre,
  edad,
  ladrar() {
    console.log("Guauu guauu!");
  },
};

console.log(DOG);
DOG.ladrar();
