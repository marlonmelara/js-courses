// Ejercicio 5: Crear una función que determine si un objeto tiene una propiedad y devolverla

let obj = {
  id: 1,
  name: "Snoopy",
  login: function () {},
  logout: function () {},
};

let property = "name";

// Solución 1️⃣
// Usando un bucle for in
function hasProperty(obj, property) {
  for (let prop in obj) {
    if (prop === property) {
      return true;
    }
  }
  return false;
}

console.log(hasProperty(obj, property)); // true

// Solución 2️⃣
// Usando Object.keys
function hasProperty2(obj, property) {
  let props = Object.keys(obj);
  for (let prop of props) {
    if (prop === property) {
      return true;
    }
  }
  return false;
}

console.log(hasProperty2(obj, property)); // true

// Solución 3️⃣ (Alternative using Object.keys and includes)
function hasProperty3(obj, property) {
  return Object.keys(obj).includes(property);
}

console.log(hasProperty3(obj, property)); // true
