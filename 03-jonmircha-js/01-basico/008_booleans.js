// Curso JavaScript: 8. Booleans
// https://youtu.be/Csu9tRuuX0M

let verdadero = true;
let falso = false;
let v = Boolean(true); //No muy recomendado usar contructores
let f = Boolean(false);

console.log(verdadero, falso, v);
console.log(typeof verdadero, typeof falso);

console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(-7));
console.log(Boolean(""));
console.log(Boolean(" "));
