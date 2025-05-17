// Ejercicio 3: Similar Objects
// Crea una función que reciba dos objetos y devuelva true si son similares (tienen las mismas propiedades y valores) o false si no lo son.

function similar(obj1, obj2) {
  let different = false;
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      different = true;
    }
  }

  return !different;
}

let result = similar({ id: 1, name: "Snoopy" }, { id: 1, name: "Snoopy" });
console.log(result); // true

// Compara dos objetos para verificar si tienen exactamente las mismas propiedades y valores (comparación superficial)
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
