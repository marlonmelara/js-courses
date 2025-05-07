// Objetos en JavaScript
// Un objeto es una colección de propiedades y métodos. Las propiedades son pares clave-valor, donde la clave es una cadena y el valor puede ser cualquier tipo de dato, incluyendo otros objetos o funciones. Los métodos son funciones que pertenecen a un objeto y pueden acceder a sus propiedades.

let user = {
  email: "snoopy@peanuts.com",
  name: "Snoopy",
  age: 5,
  address: {
    street: "Peanuts Street",
    number: 123,
    city: "Saint Paul",
    state: "Minnesota",
    country: "USA",
    zip: "12345",
  },
  isAdmin: false,
  isActive: true,
  passwordRecovery: function () {
    console.log("Password recovery email sent to " + this.email);
  },
};
