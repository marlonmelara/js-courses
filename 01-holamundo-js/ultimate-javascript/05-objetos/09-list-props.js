// Ejemplo de uso de Object.keys(), Object.entries() y Object.values()
const point = {
  x: 10, // Coordenada horizontal
  y: 15, // Coordenada vertical
  draw() {
    // Método para mostrar el punto
    console.log(`Drawing point at (${this.x}, ${this.y})`);
  },
};

// delete point.draw; // Eliminaría la propiedad 'draw' del objeto

if ("draw" in point) {
  // Verifica si la propiedad 'draw' existe en el objeto
  point.draw(); // Ejecuta el método si existe
}

console.log(Object.keys(point));
// Devuelve un array con las claves propias: ['x', 'y', 'draw']

console.log(Object.values(point));
// Devuelve un array con los valores propios: [10, 15, ƒ]

for (let key of Object.keys(point)) {
  // Itera sobre las claves propias enumerables del objeto
  console.log(key, point[key]); // ['x', 10], ['y', 15], ['draw', ƒ]
}

for (let entry of Object.entries(point)) {
  // Itera sobre pares [clave, valor] propios y enumerables
  console.log(entry); // ['x', 10], ['y', 15], ['draw', ƒ]
}

for (let key in point) {
  // Itera sobre todas las propiedades enumerables, incluyendo heredadas del prototipo. Es una nueva forma de consultar propiedades de un objeto.
  console.log(key, point[key]); // ['x', 10], ['y', 15], ['draw', ƒ]
}
