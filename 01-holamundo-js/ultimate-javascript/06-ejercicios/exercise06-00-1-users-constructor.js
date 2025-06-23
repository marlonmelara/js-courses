// Ejercicio 1: Crear un objeto de usuario

// Función constructora para crear un objeto de usuario
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

// Instancias de usuarios con datos ficticios basados en Peanuts
const user1 = new User(
  "Charlie",
  "Brown",
  "30 de octubre de 1950",
  "Calle Principal 1",
  74,
  "Estados Unidos",
  true
);

const user2 = new User(
  "Lucy",
  "van Pelt",
  "3 de marzo de 1952",
  "Av. del Psiquiatra 5",
  72,
  "Estados Unidos",
  false
);

const user3 = new User(
  "Snoopy",
  "Dog",
  "4 de octubre de 1950",
  "Casa Roja en el Jardín",
  74,
  "Estados Unidos",
  true
);

// Imprimir los objetos de usuario en la consola
console.log(user1);
console.log(user2);
console.log(user3);

// Script moderna con class
// Clase Usuario con propiedades definidas en el constructor
class Usuario {
  constructor(
    nombre,
    apellido,
    fechaNacimiento,
    direccion,
    edad,
    paisNacimiento,
    suscripcionActiva
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.direccion = direccion;
    this.edad = edad;
    this.paisNacimiento = paisNacimiento;
    this.suscripcionActiva = suscripcionActiva;
  }
}

// Instancias de usuarios con datos ficticios basados en Peanuts guardados en un array
// Array de usuarios
const usuarios = [
  new Usuario(
    "Charlie",
    "Brown",
    "30 de octubre de 1950",
    "Calle Principal 1",
    74,
    "Estados Unidos",
    true
  ),
  new Usuario(
    "Lucy",
    "van Pelt",
    "3 de marzo de 1952",
    "Av. del Psiquiatra 5",
    72,
    "Estados Unidos",
    false
  ),
  new Usuario(
    "Snoopy",
    "Dog",
    "4 de octubre de 1950",
    "Casa Roja en el Jardín",
    74,
    "Estados Unidos",
    true
  ),
];

// Mostrar usuarios en consola
console.log(usuarios[0]);
console.log(usuarios[1]);
console.log(usuarios[2]);
