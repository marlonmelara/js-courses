// Ejercicio 07
/** Crear diversas funciones para:
    1. Obtener los usuarios de pago
    2. Ordenar de mayor a menor edad
    3. Devolver el nombre del usuario
    4. Crear plantilla HTML de lista desordenada
    5. Imprimir en consola
*/

const users = [
  { name: "Charlie", plan: "Premium", age: 25 },
  { name: "Sally", plan: "Freemium", age: 16 },
  { name: "Snoopy", plan: "Gold", age: 30 },
  { name: "Linus", plan: "Freemium", age: 19 },
  { name: "Marcie", plan: "Premium", age: 22 },
  { name: "Lucy", plan: "Basic", age: 15 },
  { name: "Woodstock", plan: "Trial", age: 12 },
];

const subscriptionPlan = ["Basic", "Premium", "Gold"];

// 1. Función para obtener usuarios de pago
const getPayingUsers = (users) => {
  return users.filter((user) => subscriptionPlan.includes(user.plan));
};

// 2. Función para ordenar por edad (mayor a menor)
const sortByAgeDesc = (users) => {
  return users.sort((a, b) => {
    if (a.age < b.age) return 1;
    if (a.age > b.age) return -1;
    return 0;
  });
  // O más simple: return users.sort((a, b) => b.age - a.age);
};

// 3. Función para obtener nombres
const getUserNames = (users) => {
  return users.map((user) => user.name);
};

// 4. Función para crear plantilla HTML
const createHtmlList = (users) => {
  const listItems = users.map((user) => `<li>${user.name}</li>`);
  return `
<ul>
${listItems.join(`
`)}
</ul>`;
};

// 5. Ejecutar y imprimir en consola
const payingUsers = getPayingUsers(users);
const sortedUsers = sortByAgeDesc(payingUsers);
const htmlList = createHtmlList(sortedUsers);

console.log("Usuarios de pago ordenados:", sortedUsers);
console.log("Lista HTML:", htmlList);
