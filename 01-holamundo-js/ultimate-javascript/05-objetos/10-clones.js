let point = {
  x: 10,
  y: 15,
  draw() {
    console.log(`Drawing point at (${this.x}, ${this.y})`);
  },
};

// ❌ Primera parte: modificación del objeto original usando Object.assign()
let modifiedPoint = Object.assign(point, {
  z: 20, // Se agrega nueva propiedad
  x: 1, // Se sobrescribe 'x'
});

console.log("Después de Object.assign() sin clonar:");
console.log("Original (point):", point); // { x: 1, y: 15, draw: ƒ, z: 20 }
console.log("Modificado (modifiedPoint):", modifiedPoint); // Apunta al mismo objeto que 'point'

// ✅ Segunda parte: clonación correcta usando Object.assign() con objeto vacío
point = {
  x: 10,
  y: 15,
  draw() {
    console.log(`Drawing point at (${this.x}, ${this.y})`);
  },
};

let clonePoint = Object.assign({}, point, {
  z: 30,
  x: 5,
});

console.log("\nDespués de Object.assign() con clonación:");
console.log("Original (point):", point); // { x: 10, y: 15, draw: ƒ }
console.log("Clonado (clonePoint):", clonePoint); // { x: 5, y: 15, draw: ƒ, z: 30 }

// Ejemplo de clonación de un objeto usando Object.assign()
let user = {
  name: "Ana",
  age: 25,
};

// 1️⃣ Clonamos el objeto user, pero también modificamos la edad
let clone = Object.assign(user, { age: 30 });

// 2️⃣ Mostramos los dos objetos
console.log("user:", user);
console.log("clone:", clone);

// ✅ Forma moderna de clonar objetos
let user2 = {
  name: "Ana",
  age: 25,
};

// Clonamos el objeto user2 usando el operador de propagación
let clone2 = { ...user2, age: 30 };
// Mostramos los dos objetos
console.log("user2:", user2);
console.log("clone2:", clone2);
