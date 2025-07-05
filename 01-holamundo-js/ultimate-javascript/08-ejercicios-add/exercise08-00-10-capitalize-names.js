// Ejercicio 10:
/**
Crear una función llamada capitalizeNames que reciba un array de objetos, donde cada objeto representa una persona y tiene una propiedad name (string). La función debe retornar un nuevo array donde cada objeto tenga el mismo id (si existe) y name, pero con la propiedad name convertida a mayúsculas.
*/

const users = [
  { id: 1, name: "alice" },
  { id: 2, name: "bob" },
  { id: 3, name: "charlie" },
];

const capitalizeNames = (userArray) => {
  return userArray.map((user) => {
    // Retornamos un NUEVO objeto para cada usuario
    return {
      ...user, // Copia todas las propiedades del objeto 'user' original (como 'id')
      name: user.name.toUpperCase(), // Sobrescribe o añade la propiedad 'name' con su valor en mayúsculas
    };
  });
};

const capitalizedUsers = capitalizeNames(users);
console.log(capitalizedUsers);
/*
Salida esperada:
[
  { id: 1, name: "ALICE" },
  { id: 2, name: "BOB" },
  { id: 3, name: "CHARLIE" },
]
*/
