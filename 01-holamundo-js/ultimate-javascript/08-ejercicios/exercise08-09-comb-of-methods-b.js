// Ejercicio 08
/**
    1. Crear función para uniformar ambos arrays
    2. Fusionar los array
    3. Ordenar por edad
    4. Crear plantilla de HTML para mostrar:
      <li>Nombre: name, Edad: age</li>
 */

const users = [
  { name: "Charlie", membership: "Premium", age: 25 },
  { name: "Sally", membership: "Freemium", age: 16 },
  { name: "Snoopy", membership: "Gold", age: 30 },
];

const usuarios = [
  { nombre: "Marcie", plan: "Premium", edad: 22 },
  { nombre: "Lucy", plan: "Basic", edad: 15 },
  { nombre: "Woodstock", plan: "Trial", edad: 12 },
];

// 1. Función para uniformar estructura de arrays
const uniformUserStructure = (users) => {
  return users.map((user) => ({
    nombre: user.name,
    plan: user.membership,
    edad: user.age,
  }));
};

// 2. Función para fusionar arrays
const mergeUserArrays = (array1, array2) => {
  return [...array1, ...array2];
};

// 3. Función para ordenar por edad (mayor a menor)
const sortByAgeDesc = (users) => {
  return users.sort((a, b) => b.edad - a.edad);
};

// 4. Función para crear plantilla HTML
const createHtmlTemplate = (users) => {
  return users.map(
    (user) => `<li>Nombre: ${user.nombre}, Edad: ${user.edad}</li>`
  );
};

// 5. Función para crear lista HTML completa
const createHtmlList = (htmlItems) => {
  return `
      <ul>
      ${htmlItems.join(`
      `)}
      </ul>`;
};

// Ejecutar proceso completo
const uniformedUsers = uniformUserStructure(users);
const allUsers = mergeUserArrays(usuarios, uniformedUsers);
const sortedUsers = sortByAgeDesc(allUsers);
const htmlTemplate = createHtmlTemplate(sortedUsers);
const completeHtmlList = createHtmlList(htmlTemplate);

// Imprimir resultados
console.log("Usuarios ordenados por edad:", sortedUsers);
console.log("Plantilla HTML:", htmlTemplate);
console.log("Lista HTML completa:", completeHtmlList);
