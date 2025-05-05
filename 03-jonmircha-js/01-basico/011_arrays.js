// Curso JavaScript: 11. Arreglos (Arrays)
// https://youtu.be/o3c8cW73weQ

const a = [];
const b = [1, true, "hola", ["a", "b", "c", [1, 2, 3]]];
console.log(a);
console.log(b);
console.log(b.length);
console.log(b[2]);
console.log(b[3]);
console.log(b[3][2]);
console.log(b[3][3][2]);

const c = Array.of("x", "y", "z", 3, 2, 1, 0);
console.log(c);

const d = Array(20).fill(false);
console.log(d);

// A partir de su constructor (ya no suele usarse actualmente)
const e = new Array(1, 2, 3, true, false, "a");
console.log(e);

const colores = ["rojo", "verde", "azul"];
console.log(colores);

colores.push("negro");
console.log(colores);

colores.pop();
console.log(colores);

colores.pop();
console.log(colores);

colores.push("amarillo");
console.log(colores);

colores.forEach(function (el) {
  console.log(`<li>${el}</li>`);
});

colores.forEach(function (el, index) {
  console.log(`<li id="$(index)">${el}</li>`);
});

const semana = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
  "domingo",
];

/* for (let i = 0; i < semana.length; i++) {
  console.log(semana[i]);
} */

for (elemento in semana) {
  console.log(semana[elemento]);
}
