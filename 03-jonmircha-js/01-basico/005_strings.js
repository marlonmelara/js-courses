// Curso JavaScript: 5. Cadenas de Texto (Strings)
// https://youtu.be/s-C8OpALC6E

//Cadenas de texto (string)
let firstName = "Jon";
let lastName = "Dodley";
let regards = new String("Hello!");

console.log(firstName, lastName);
console.log(regards);
console.log(
  firstName.length, // 3
  lastName.length, // 6
  regards.length, // 12
  firstName.toUpperCase(), // JON
  lastName.toLowerCase(), // dodley
  regards.includes("world") // true
);
