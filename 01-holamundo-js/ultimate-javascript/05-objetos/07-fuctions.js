// Función constructora tradicional
function Punto(x, y) {
  this.x = x;
  this.y = y;
  this.dibujar = function () {
    console.log("Dibujando...");
  };
}

// Crear un objeto existente al que le asignaremos propiedades manualmente
let punto = { z: 7 };

// Usamos .call para invocar la función constructora con argumentos individuales
Punto.call(punto, 1, 2); // Asigna x = 1, y = 2 al objeto 'punto'

// Usamos .apply para lo mismo, pero pasando los argumentos como un arreglo
Punto.apply(punto, [1, 2]); // También asigna x = 1, y = 2 (sobrescribe si ya existía)

console.log(punto);
// Resultado: { z: 7, x: 1, y: 2, dibujar: [Function] }
// → El objeto 'punto' ahora tiene las propiedades asignadas por la función Punto

// Constructor usando el objeto global Function (forma no recomendada)
const Point = new Function(
  "x",
  "y",
  `
  this.x = x;
  this.y = y;
  this.dibujar = function () {
    console.log('Dibujando...');
  }`
);

// Crear un nuevo objeto con 'new' y el constructor dinámico
const p = new Point(1, 2);

console.log(p);
// Resultado: { x: 1, y: 2, dibujar: [Function] }
// → El constructor funciona, pero su uso es menos seguro y legible
