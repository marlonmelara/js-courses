// 1. Primitivos: se copian por valor

let a = 1;
let b = a;

b++; // 'b' cambia, pero 'a' no, porque son independientes

console.log(a, b); // 1 2
console.log(a === b); // false → valores distintos

// 2. Objetos: se copian por referencia

let m = {};
let n = m;

m.name = "Juan"; // Modifica el mismo objeto al que apuntan 'm' y 'n'

console.log(m, n); // { name: 'Juan' } { name: 'Juan' }
console.log(m === n); // true → misma referencia en memoria

// 3. Primitivos como argumentos: se pasan por valor
let s = 1;

function increment(num) {
  num++; // Solo modifica una copia local de 's'
  return num;
}

increment(s);

console.log(s); // 1 → no cambia
console.log(s === increment(s)); // false → 1 !== 2

// 4. Objetos como argumentos: se pasan por referencia
let t = { prop: 1 };

function incrementProp(obj) {
  obj.prop++; // Afecta directamente al objeto original
  return obj;
}

incrementProp(t);

console.log(t); // { prop: 2 } → propiedad modificada
console.log(t === incrementProp(t)); // true → misma referencia

// En conclusión:
// - Primitivos se copian por valor: cambios no afectan al original.
// - Objetos se copian por referencia: cambios afectan al original.
// - Primitivos como argumentos: se pasan por valor, no afectan al original.
// - Objetos como argumentos: se pasan por referencia, afectan al original.
