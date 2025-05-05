// Curso JavaScript: 29. Operador de Cortocircuito
// https://youtu.be/SK7CCXjzVgA

/*
Cortocircuito OR - Cuando el valor de la izquierda en la expresión siempre pueda validar a true, es el valor que se cargará por defecto
*/

function saludar1(nombre = "Desconocido") {
  console.log(`Hola ${nombre}`);
}

saludar1("John Rambo");
saludar1();

// Antes se usaba || como un cortocircuito
function saludar2(nombre) {
  nombre = nombre || "El-que-no-puede-ser-nombrado";
  console.log(`Hola ${nombre}`);
}

/**
En la línea nombre = nombre || "El-que-no-puede-ser-nombrado";, se utiliza el operador OR para evaluar si el valor de nombre es un valor verdadero. Si nombre es un valor verdadero (diferente de undefined, null, false, 0, NaN o una cadena vacía), se asigna ese valor a nombre. De lo contrario, si nombre no tiene un valor verdadero, se asigna el valor por defecto "El-que-no-puede-ser-nombrado".
*/

saludar2("John Wick");
saludar2("John Connor");
saludar2();

console.log("***** OR *****");
saludar2("cadena" || "Valor de la derecha");
saludar2(true || "Valor de la derecha");

console.log("cadena" || "Valor de la derecha");
console.log(true || "Valor de la derecha");
console.log(100 || "Valor de la derecha");
console.log(false || "Valor de la derecha");
console.log(undefined || "Valor de la derecha");
console.log(null || "Valor de la derecha");
console.log(0 || "Valor de la derecha");
console.log(-2 || "Valor de la derecha");
console.log("" || "Valor de la derecha");
console.log(NaN || "Valor de la derecha");

/*
Cortocircuito AND - Cuando el valor de la izquierda en la expresión siempre pueda validar a false, es el valor que se cargará por defecto
*/
console.log("***** AND *****");
saludar2("cadena" && "Valor de la derecha");
saludar2(true && "Valor de la derecha");

console.log("cadena" && "Valor de la derecha");
console.log(true && "Valor de la derecha");
console.log(100 && "Valor de la derecha");
console.log(false && "Valor de la derecha");
console.log(undefined && "Valor de la derecha");
console.log(null && "Valor de la derecha");
console.log(0 && "Valor de la derecha");
console.log(-2 && "Valor de la derecha");
console.log("" && "Valor de la derecha");
console.log(NaN && "Valor de la derecha");
