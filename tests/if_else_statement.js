/*
Ejercicio 1: Clasificación de Edades

Planteamiento:
Escribe un programa que clasifique a las personas en categorías según su edad. Las categorías son:

    Niño: Menor de 12 años.
    Adolescente: Entre 12 y 18 años.
    Adulto: Entre 19 y 65 años.
    Senior: Mayor de 65 años.

El programa debe tomar la edad como entrada y mostrar la categoría correspondiente.
*/

// let classifyAge = (age) => {
//   if (age <= 12) {
//     return `Es un niño. Tiene ${age} años de edad`;
//   } else if (age > 12 && age <= 18) {
//     return `Es un adolescente. Tiene ${age} años de edad`;
//   } else if (age > 18 && age <= 65) {
//     return `Es un adulto. Tiene ${age} años de edad`;
//   } else {
//     return `Es un senior. Tiene ${age} años de edad`;
//   }
// };

/*
    Rango de Edad para Niños: El código clasifica a alguien de 12 años como un niño, lo cual difiere ligeramente del planteamiento original donde se considera a una persona de 12 años como adolescente. Para corregir esto, el primer if debería ser if (age < 12) en lugar de if (age <= 12).

    Optimización de Condiciones: Las condiciones en tus else if pueden ser simplificadas. Por ejemplo, cuando llegas al segundo else if, ya sabes que la edad es mayor que 12, así que no necesitas verificar age > 12 nuevamente. Esto hace que el código sea un poco más limpio y eficiente.
*/

let classifyAge = (age) => {
  if (age < 12) {
    return `Es un niño. Tiene ${age} años de edad`;
  } else if (age <= 18) {
    // Ya sabemos que es mayor que 12
    return `Es un adolescente. Tiene ${age} años de edad`;
  } else if (age <= 65) {
    // Ya sabemos que es mayor que 18
    return `Es un adulto. Tiene ${age} años de edad`;
  } else {
    return `Es un senior. Tiene ${age} años de edad`;
  }
};

// Pruebas
console.log(classifyAge(10)); // Es un niño. Tiene 10 años de edad
console.log(classifyAge(15)); // Es un adolescente. Tiene 15 años de edad
console.log(classifyAge(30)); // Es un adulto. Tiene 30 años de edad
console.log(classifyAge(70)); // Es un senior. Tiene 70 años de edad

// Pruebas
console.log(classifyAge(10)); // Es un niño. Tiene 10 años de edad
console.log(classifyAge(15)); // Es un adolescente. Tiene 15 años de edad
console.log(classifyAge(30)); // Es un adulto. Tiene 30 años de edad
console.log(classifyAge(70)); // Es un senior. Tiene 70 años de edad

/*
Ejercicio 2: Validación de Contraseña

Planteamiento:
Crea una función que valide la fortaleza de una contraseña. Las reglas para una contraseña fuerte son:

    Debe tener al menos 8 caracteres.
    Debe contener al menos una letra mayúscula.
    Debe contener al menos un número.

La función debe tomar una contraseña como entrada y devolver true si es fuerte, y false si no lo es.
*/

// let validatePassword = (password) => {
//   if (password.length !== 8) {
//     return `La contraseña tiene ${password.length}. Debe tener 8 caracteres`;
//   } else if (){

//   }
// };

const validatePassword = (password) => {
  if (password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password)) {
    return true;
  } else {
    return false;
  }
};

// Pruebas
console.log(validatePassword("Password1")); // true
console.log(validatePassword("password")); // false
console.log(validatePassword("12345678")); // false
console.log(validatePassword("Pass1")); // false
console.log(validatePassword("holaHola2")); // true
