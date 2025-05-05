const user1 = {
  name: "Ryan",
  lastname: "Perez",
  age: 30,
  showFullName() {
    return `${this.name} ${this.lastname}`;
  },
};

// Función Constructora de objetos
function Person() {
  this.name = "";
  this.lastname = "";
  this.age = 0;
  this.showFullName = function () {
    return `${this.name} ${this.lastname}`;
  };
}

// Nueva Instancia del objeto Person
const user2 = new Person();
user2.name = "Joe";
user2.lastname = "McMillan";
user2.age = 30;

console.log(user2.showFullName());

const user3 = new Person();
const user4 = new Person();
const user5 = new Person();
console.log(user3);
console.log(user4);
console.log(user5);
