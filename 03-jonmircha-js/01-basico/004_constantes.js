// Curso JavaScript: 4. Constantes (const)
// https://youtu.be/PIHZRj99nHU

let a;

const PI = 3.1416;
console.log(PI);
// PI = 3.15; A una constante no se puede cambiar valor cuando este es un valor primitivo

// const NUEVE; No se puede crear una constante sin valor

//Sucede lo contrario con una variable como el caso de const a; que posteriormente le fue asignado el string "Goku"

a = "Gokú";
console.log(a);

// A una constante se le puede cambiar valor cuando son valores compuestos
const USER = {
  firstName: "Jon",
  age: 35,
};

const colors = ["white", "black", "blue"];

console.log(USER);
console.log(colors);

USER.mail = "jon@mail.com";
colors.push("orange");
USER.age = 36;

console.log(USER);
console.log(colors);
