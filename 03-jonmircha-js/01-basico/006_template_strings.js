// Curso JavaScript: 6. Template Strings
// https://youtu.be/arOXcy7K4XQ

//Cadenas de texto (string)
let firstName = "Jon";
let lastName = "Dodley";

// Concatenación
let regard = "Hi! My name is" + " " + firstName + " " + lastName;
console.log(regard);

// Interpolación de variables
// Template string
let regard2 = `Hola mi nombre es ${firstName} ${lastName}`;
console.log(regard2);

let ul =
  "<ul><li>Primavera</li><li>Verano</li><li>Otoño</li><li>Invierno</li></ul>";
console.log(ul);

let ul2 = `
<ul>
  <li>Primavera</li>
  <li>Verano</li>
  <li>Otoño</li>
  <li>Invierno</li>
</ul>`;
console.log(ul2);
