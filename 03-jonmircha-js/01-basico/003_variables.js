// Curso JavaScript: 3. Variables: var 🥊VS🥊 let
//https://youtu.be/tmRa0_EvMoc

// Variable var tiene alcance de ámbito global
var hello = "Hola mundo";
console.log(hello);

// Con el ECMAScript6 2015 se definieron alcance de bloque
var hello = "Hello world!";
let hola = "Hola mundo";
console.log(hello);
console.log(hola);

console.log("****** VAR ******");
var music = "Rock";
console.log("Variable música entes del bloque", music);
// Ámbito de bloque
{
  var music = "Pop";
  console.log("Variable música dentro del bloque", music);
}

console.log("Variable música después del bloque", music); // La lógica indica que se imprimira el valor de Rock

console.log("****** LET ******");

let musica = "Rock";
console.log("Variable música entes del bloque", musica);
// Ámbito de bloque
{
  let musica = "Pop";
  console.log("Variable música dentro del bloque", musica);
}

console.log("Variable música después del bloque", musica);
