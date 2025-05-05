/*
En ECMAScript 5 y anteriores, la forma tradicional de asignar valores por defecto a los parámetros de una función era mediante el uso del operador OR (||).
Si el parámetro no se proporcionaba o su valor era falsy (como undefined, null, 0, '', false), entonces se asignaba el valor por defecto.
*/
function newUser(name, age, country) {
  var name = name || "Pepe";
  var age = age || 20;
  var country = country || "ES";
  console.log(name, age, country);
}

newUser();
newUser("José", 30, "MX");

/* En ECMAScript 6 (ES6) o ES2015, se introdujo una nueva sintaxis para asignar valores por defecto a los parámetros de una función, lo cual es más legible y expresivo.
Simplemente se asigna el valor por defecto al parámetro en la declaración de la función.
Si el parámetro no se proporciona, se utilizará el valor por defecto.*/
function newAdmin(name = "Pipo", age = 18, country = "ES") {
  console.log(name, age, country);
}

newAdmin();
newAdmin("Felipe", 22, "CL");
newAdmin("Carla", 19, "AR");
