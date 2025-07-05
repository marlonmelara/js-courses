// Ejercicio 09:
/**
Crear una función llamada findUserById que reciba dos argumentos: un array de objetos users (donde cada objeto tiene una propiedad id) y un userId (un número) que queremos buscar. La función debe retornar el objeto de usuario que tenga el id correspondiente. Si no encuentra ningún usuario con ese id, debe retornar undefined.
*/

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const findUserById = (usersArray, userIdToFind) => {
  return usersArray.find((user) => user.id === userIdToFind);
};

const foundUser1 = findUserById(users, 2);
console.log(foundUser1); // Salida esperada: { id: 2, name: "Bob" }

const foundUser2 = findUserById(users, 4);
console.log(foundUser2); // Salida esperada: undefined
