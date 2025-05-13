// ✅ 1. Primitivos: se copian por valor

let a = 1;
let b = a;

console.log(a, b); // 1 1
console.log(a === b); // true → mismos valores. Son iguales porque 'b' tiene una copia del valor de 'a'

b++; // 'b' cambia, pero 'a' no, porque son independientes

console.log(a, b); // 1 2
console.log(a === b); // false → valores distintos. Cada variable tiene su propia copia del valor

// ✅ 2. Objetos: se copian por referencia. Aplica también a arrays y funciones.
// Al copiar un objeto, ambas variables apuntan al mismo lugar en memoria.
// Cambios en una referencia afectan a todas las que apuntan al mismo objeto.

let m = {};
let n = m;

m.name = "Juan"; // Modifica el mismo objeto al que apuntan 'm' y 'n'

console.log(m, n); // { name: 'Juan' } { name: 'Juan' }
console.log(m === n); // true → misma referencia: apuntan al mismo objeto
console.log(m.name, n.name); // 'Juan' 'Juan'

// ✅ 3. Primitivos como argumentos: se pasan por valor
// Al pasar un primitivo a una función, se copia su valor.
// Cambios dentro de la función no afectan a la variable original.

let s = 1;

function increment(num) {
  num++; // 'num' es una copia de 's', no el mismo valor
  return num;
}

increment(s);

console.log(s); // 1 → 's' no cambia, sigue siendo 1
console.log(s === increment(s)); // false → 1 !== 2, porque 'increment' devuelve una copia incrementada

// ✅ 4. Objetos como argumentos: se pasan por referencia. Aplica también a arrays y funciones

let t = { prop: 1 };

function incrementProp(obj) {
  obj.prop++; // Modifica directamente la propiedad del objeto original
  return obj;
}

incrementProp(t);

console.log(t); // { prop: 2 } → 't' fue modificado por la función
console.log(t === incrementProp(t)); // true → se devuelve el mismo objeto al que apunta 't'
console.log(t.prop); // 3 → se incrementó nuevamente
console.log(t.prop === incrementProp(t).prop); // false → se vuelve a incrementar, por eso ya no son iguales

// En resumen:
// - ✅ Los primitivos se copian por valor: cada variable recibe una copia independiente.
// - ✅ Los objetos (incluyendo arrays y funciones) se copian por referencia: comparten la misma instancia.
// - ✅ Los primitivos como argumentos se pasan por valor: la función recibe una copia, no afecta al original.
// - ✅ Los objetos como argumentos se pasan por referencia: la función puede modificar el objeto original.
// - ✅ Los objetos son mutables: se pueden modificar sus propiedades y métodos.
// - ✅ Los primitivos son inmutables: no se pueden cambiar directamente, solo se reemplazan por nuevos valores.
