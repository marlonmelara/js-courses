/** Operadores lógicos */
const a = 10;
const b = 20;
const c = "10";

// && : AND (y lógico)
// || : OR (o lógico)
// !  : NOT (no lógico)

console.log(a == b); // false
// Comparamos si "a" es igual a "b" en valor. Como no son iguales, retorna false.

console.log(a !== b); // true
// Comparamos si "a" no es estrictamente igual a "b". Como no son estrictamente iguales en valor y tipo, retorna true.

console.log(a == b && a === c); // false
// Evaluamos si "a" es igual a "b" (false) y si "a" es estrictamente igual a "c" (false).
// Como ambos son false, el resultado de la operación con "&&" es false.

console.log(a == b && a == c); // false
// Evaluamos si "a" es igual a "b" (false) y si "a" es igual a "c" (true).
// Para que el resultado de "&&" sea true, ambas expresiones deben ser true. En este caso, no lo son, así que retorna false.

console.log(a != b || a === c); // true
// Evaluamos si "a" es diferente de "b" (true) o si "a" es estrictamente igual a "c" (false).
// Al menos una condición es true, así que el resultado de "||" es true.

console.log(a == b || a == c); // true
// Evaluamos si "a" es igual a "b" (false) o si "a" es igual a "c" (true).
// Como al menos una condición es true, el resultado de "||" es true.

console.log(!(a != b || a === c)); // false
// Evaluamos la expresión dentro del paréntesis: (a != b || a === c) es true.
// Luego, negamos ese resultado con "!", lo que da como resultado final false.

console.log(!(a === c)); // true
// Evaluamos si "a" es estrictamente igual a "c" (false).
// Luego, negamos ese resultado con "!", lo que da como resultado final true.
