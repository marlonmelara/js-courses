// El operador de encadenamiento opcional (Optional Chaining) fue introducido en ECMAScript 2020 (ES11). Este operador ?. permite leer el valor de una propiedad ubicada en lo profundo de una cadena de objetos sin tener que validar explícitamente que cada referencia en la cadena sea válida.

// Declaración de un objeto 'users' con propiedades anidadas.
const users = {
  jhon: {
    country: "US",
  },
  ana: {
    country: "MX",
  },
};

// Acceso seguro a la propiedad 'country' de 'ana'.
console.log(users.ana.country); // Imprime "MX"

// Intenta acceder a la propiedad 'age' de 'jhon', que no está definida.
console.log(users.jhon.age); // Imprime 'undefined' porque 'age' no existe en 'jhon'.

// Utiliza el encadenamiento opcional para acceder a 'country' de 'sarah'.
// Si 'sarah' no existe, el operador ?. detiene la evaluación y devuelve 'undefined'.
console.log(users.sarah?.country); // Imprime 'undefined' porque 'sarah' no existe.
