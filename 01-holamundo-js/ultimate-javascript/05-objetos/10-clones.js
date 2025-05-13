let point = {
  x: 10, // Coordenada horizontal
  y: 15, // Coordenada vertical
  draw() {
    // Método para mostrar el punto
    console.log(`Drawing point at (${this.x}, ${this.y})`);
  },
};

let clonePoint = Object.assign({}, point, {
  z: 20, // Nueva propiedad
  x: 1, // Sobrescribe la propiedad 'x'
});

console.log(point, clonePoint);
