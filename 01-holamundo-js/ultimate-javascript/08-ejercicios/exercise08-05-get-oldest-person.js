// Ejercicio 05
/** Crear una función que permita obtener el objeto con la persona de mayor edad del array users */

const users = [
  { name: "Charlie", plan: "Premium", age: 25 },
  { name: "Sally", plan: "Freemium", age: 16 },
  { name: "Snoopy", plan: "Gold", age: 30 },
  { name: "Patty", plan: "Freemium", age: 17 },
  { name: "Linus", plan: "Freemium", age: 19 },
  { name: "Marcie", plan: "Premium", age: 22 },
  { name: "Lucy", plan: "Basic", age: 15 },
  { name: "Schroeder", plan: "Basic", age: 18 },
  { name: "Woodstock", plan: "Trial", age: 12 },
];

// Usando find() solo retorna el primer elemento que satisface la condición, o undefined si no encuentra ninguno
const getOldestUserWithFind = users.find((user) => Math.max(user.age));

console.log(getOldestUserWithFind); // { name: 'Charlie', plan: 'Premium', age: 25}

// Usando el ciclo for...of
const getOldestUserWithForOf = (arr) => {
  let oldest = arr[0];
  console.log(oldest);
  for (let user of arr) {
    if (oldest.age < user.age) {
      oldest = user;
    }
  }
  return oldest;
};

console.log(getOldestUserWithForOf(users)); // { name: 'Snoopy', plan: 'Gold', age: 30}

// Usando reduce ()
const getOldestUserWithReduce = (usersArray) => {
  if (!usersArray || usersArray.length === 0) {
    console.warn("The users array is empty or invalid. Returning null.");
    return null; // O un objeto predeterminado si es necesario
  }
  return usersArray.reduce((max, user) => {
    return user.age > max.age ? user : max;
  }, usersArray[0]);
};

// Ejemplo de uso
console.log(getOldestUserWithReduce(users)); // Prueba con array vacío // { name: 'Snoopy', plan: 'Gold', age: 30}
console.log(getOldestUserWithReduce([])); // null
