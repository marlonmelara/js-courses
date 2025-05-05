// Curso JavaScript: 13. Tipos de Operadores
// https://youtu.be/_8Z5AeGVIXE

// Operadores

// Aritméticos +-*/%()*/
let a = 5 + 5 - 10;
let modulo = 5 % 2; // Nos devuelve el residuo de una división

console.log("****** Aritméticos ******");
console.log(a);
console.log(modulo);

// Relacionales >, <, >=, <=, =, ==,=== , !=, !==
console.log(8 > 9);
console.log(9 > 8);
console.log(9 >= 9);
console.log(7 <= 7);

/* = 1 igual es asignación de variable
== 2 iguales es comparación de valores
=== 3 iguales es comparación de tipo de dato y de valor
*/
console.log("****** Relacionales con 2 = ******");
console.log(7 == 7);
console.log("7" == 7);
console.log(0 == false);
console.log("****** Relacionales con 3 = ******");
console.log(7 === 7);
console.log("7" === 7);
console.log(0 === false);

// Incremento Decremento
let i = 2;
//i = i + 1;
//i += 1;
i /= 2;
console.log("****** Incremento Decremento ******");
console.log(i);

//operador unario
i++;
//++i; No es lo más recomendable
//i--;
console.log("****** Operador unario ******");
console.log(i);

//Lógicos
/* ! - Not: niega, es decir que lo verdadero lo vuelve falso y viceversa
|| - Or: Cuando tengo 2 o más condiciones, con que se cumpla una, es decir es verdadera, el OR será verdadero
&& - And: Cuando tengo 2 o más condiciones, todas tienen que cumplirse, es decir que AND valide
*/
console.log("****** Lógicos ******");
console.log(!true);
console.log(!false);
console.log(9 === 9 || "9" === 9);
console.log(9 === 9 && "9" === 9);

// Usando OR - || junto a condicionales
let numero1 = 3;

if (numero1 > 2 || numero1 == 10) {
  console.log("Se cumple la condicion");
} else {
  console.log("No se cumple la condición");
}

// Usando AND - && junto a condicionales
let numero2 = 3;

if (numero2 > 2 && numero2 == 10) {
  console.log("Se cumple la condicion");
} else {
  console.log("No se cumple la condición");
}

// Usando NOT - ! junto a condicionales
let numero3 = 1;

if (!(numero3 > 2)) {
  console.log("Se cumple la condicion");
} else {
  console.log("No se cumple la condición");
}
