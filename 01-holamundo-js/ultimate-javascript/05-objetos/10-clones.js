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

// Objeto original con propiedades simples y un objeto anidado
let usuarioOriginal = {
  nombre: "Ana",
  edad: 25,
  preferencias: {
    color: "azul",
    musica: "rock",
  },
};

// ✅ Parte 1: Clonación superficial con Object.assign()
// Se crea un nuevo objeto copiando las propiedades del original,
// pero las propiedades anidadas (como 'preferencias') siguen siendo referencias compartidas.
let usuarioClonado = Object.assign({}, usuarioOriginal, {
  edad: 30, // Sobrescribe el valor de 'edad'
  pais: "México", // Se agrega una nueva propiedad
});

console.log(usuarioOriginal);
console.log(usuarioClonado);

// Modificamos la propiedad anidada 'preferencias.color' en el clon
console.log((usuarioClonado.preferencias.color = "verde"));

// ⚠️ Como 'preferencias' sigue siendo el mismo objeto compartido,
// también se modifica en 'usuarioOriginal'
console.log(usuarioOriginal);

// ✅ Parte 2: Clonación superficial con spread operator (...)
// También crea una copia superficial, pero aquí sobrescribimos completamente
// la propiedad 'preferencias' con un nuevo objeto, rompiendo la referencia.
let usuarioClonado2 = {
  ...usuarioOriginal,
  edad: 27, // Nuevo valor de 'edad'
  pais: "Argentina", // Nueva propiedad
  preferencias: {
    // Se crea un nuevo objeto 'preferencias'
    color: "rojo",
    musica: "pop",
  },
};

console.log(usuarioClonado2);

// Ahora sí: al modificar 'preferencias.color' en el clon,
// el objeto original no se ve afectado, porque ya no comparten referencia
console.log((usuarioClonado2.preferencias.color = "naranja"));
console.log(usuarioOriginal.preferencias.color); // Debería seguir siendo 'verde'

// 🚩 Forma antigua de clonar objetos
// Objeto original
let usuario = {
  nombre: "Ana",
  edad: 25,
};

// Clonación manual (forma antigua)
let copiaUsuario = {}; // Se crea un nuevo objeto vacío

for (let key in usuario) {
  copiaUsuario[key] = usuario[key]; // Se copian las propiedades una por una
}

console.log(usuario); // { nombre: "Ana", edad: 25 }
console.log(copiaUsuario); // { nombre: "Ana", edad: 25 }
