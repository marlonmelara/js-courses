// Usuario creado de forma literal
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

// Usuario creado con una factory function
// Una factory function es una función que devuelve un objeto. Se utiliza para crear múltiples instancias de un objeto con la misma estructura, pero con diferentes valores. Esto es útil cuando se necesita crear muchos objetos similares sin tener que escribir el mismo código una y otra vez.

function createUser(email, name, age, address, isAdmin, isActive) {
  return {
    email, // email: email,
    name,
    age,
    address,
    isAdmin,
    isActive: true,
    passwordRecovery: function () {
      console.log("Password recovery email sent to " + this.email);
    },
  };
}

let user1 = createUser("charlie@peanuts.com", "Charlie Brown", 5, {
  street: "Peanuts Street",
  number: 123,
  city: "Saint Paul",
  state: "Minnesota",
  country: "USA",
  zip: "12345",
});

console.log(user, user1);
