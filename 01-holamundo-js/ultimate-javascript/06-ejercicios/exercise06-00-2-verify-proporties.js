// Ejercicio 00-2: Función constructora para crear un objeto de usuario

function User(
  name,
  lastname,
  birthdate,
  address,
  age,
  countryOfBirth,
  isSuscriber
) {
  this.name = name;
  this.lastname = lastname;
  this.birthdate = birthdate;
  this.address = address;
  this.age = age;
  this.countryOfBirth = countryOfBirth;
  this.isSuscriber = isSuscriber;
}

// Crear el usuario
const user = new User(
  "Charlie",
  "Brown",
  "30 de octubre de 1950",
  "Calle Principal 1",
  74,
  "Estados Unidos",
  true
);

// Mostrar el objeto original
console.log(user);

// Verificar y modificar 'isSuscriber'
if ("isSuscriber" in user) {
  console.log(`La propiedad "isSuscriber" existe en el objeto.`);
  user.isSuscriber = !user.isSuscriber; // alterna true <=> false
}

// Verificar y eliminar 'address'
if ("address" in user) {
  console.log(`La propiedad "address" existe en el objeto.`);
  delete user.address;
}

// Verificar y eliminar 'height' si existiera
if ("height" in user) {
  console.log(`La propiedad "height" existe en el objeto.`);
  delete user.height;
} else {
  console.log(`La propiedad "height" no existe en el objeto.`);
}

// Mostrar objeto modificado
console.log(user);
