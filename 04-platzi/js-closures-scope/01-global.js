// Variables

var a; // declarando
var b = "b"; // declaramos y asignamos
b = "bb"; // reasignación
var a = "aa"; // redeclaración

// Global Scope

var fruit = "Apple"; // global

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
  country = "El Salvador"; // global
  console.log(country);
}

countries();
console.log(country);
