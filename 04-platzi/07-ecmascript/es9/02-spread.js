// La sintaxis de propagación permite una manera eficiente de extraer propiedades de un objeto y recoger las propiedades restantes en otro objeto.

// Creación de un objeto 'user'.
const user = { username: "mme", age: 25, country: "CL" };

// Desestructuración del objeto 'user', extrayendo 'username' y recogiendo las propiedades restantes en 'value'.
const { username, ...value } = user;

// Muestra 'username' en la consola.
console.log(username); // Imprime "mme"

// Muestra las propiedades restantes del objeto 'user' en la consola.
console.log(value); // Imprime { age: 25, country: "CL" }

//En esta desestructuración, { username, ...value }, username se extrae del objeto user, mientras que ...value recoge las propiedades restantes (age y country) en un nuevo objeto llamado value. Este es un uso efectivo de la sintaxis de propagación para separar un objeto en propiedades específicas y el resto de las propiedades.
