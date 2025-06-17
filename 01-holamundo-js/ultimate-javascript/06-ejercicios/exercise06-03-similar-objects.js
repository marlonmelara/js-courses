// Ejercicio 3: Similar Objects
// Solución 1️⃣
// Crea una función que reciba dos objetos y devuelva true si son similares (tienen las mismas propiedades y valores) o false si no lo son.

function similar(obj1, obj2) {
  // Variable para verificar si son diferentes
  let different = false;

  // Iteramos sobre las propiedades del primer objeto
  for (let key in obj1) {
    // Para cada propiedad del primer objeto, verificamos si existe en el segundo objeto
    if (obj1[key] !== obj2[key]) {
      // Si la propiedad no existe o los valores son diferentes, marcamos different como true
      different = true;
    }
  }
  // Finalmente, retornamos el valor de different negado
  // Si different es true, significa que los objetos son diferentes, por lo que retornamos false
  return !different;
}

let result = similar({ id: 1, name: "Snoopy" }, { id: 1, name: "Snoopy" });
console.log(result); // true

// Solución 2️⃣
// Compara dos objetos para verificar si tienen exactamente las mismas propiedades y valores (comparación completa)
function similar2(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Si la cantidad de propiedades no es igual, ya no son iguales
  if (keys1.length !== keys2.length) return false;

  // Comparar claves y valores
  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}

console.log(similar2({ id: 1, name: "Snoopy" }, { id: 1, name: "Snoopy" })); // ✅ true
console.log(similar2({ id: 1 }, { id: 1, extra: true })); // ❌ false

// Solución 3️⃣
// Comparar dos objetos que a su vez contienen otros objetos (comparación profunda)
function similar3(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Si la cantidad de propiedades no es igual, ya no son iguales
  if (keys1.length !== keys2.length) return false;

  // Comparar claves y valores
  for (let key of keys1) {
    if (
      typeof obj1[key] === "object" &&
      typeof obj2[key] === "object" &&
      obj1[key] !== null &&
      obj2[key] !== null
    ) {
      if (!similar3(obj1[key], obj2[key])) return false;
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

console.log(
  similar3(
    { id: 1, name: "Snoopy", owner: { name: "Charlie Brown" } },
    { id: 1, name: "Snoopy", owner: { name: "Charlie Brown" } }
  )
); // ✅ true
