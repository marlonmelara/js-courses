// Ejercicio 06: Crear una función que cree una copia del objeto que le pasemos como parámetro sin usar operador spread ni Object.assign

let obj = {
  id: 1,
  name: "Snoopy",
  login: function () {},
  logout: function () {},
};

function copyObject(obj) {
  let copy = {};
  for (let key in obj) {
    copy[key] = obj[key];
  }
  return copy;
}

let copiedObj = copyObject(obj);
console.log(obj, copiedObj); // { id: 1, name: 'Snoopy', login: [Function: login], logout: [Function: logout] } { id: 1, name: 'Snoopy', login: [Function: login], logout: [Function: logout] }
