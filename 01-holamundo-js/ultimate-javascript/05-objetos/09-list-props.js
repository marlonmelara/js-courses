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

for (let key of Object.keys(point)) {
  // Itera sobre las claves del objeto
  console.log(key, point[key]); // Muestra cada clave y su valor
}

for (let entry of Object.entries(point)) {
  // Itera sobre pares [clave, valor]
  console.log(entry); // Ej. ['x', 10]
}

for (let key in point) {
  // Itera sobre todas las propiedades enumerables del objeto
  console.log(key, point[key]); // Similar al anterior, pero también incluiría heredadas si hubiera
}
