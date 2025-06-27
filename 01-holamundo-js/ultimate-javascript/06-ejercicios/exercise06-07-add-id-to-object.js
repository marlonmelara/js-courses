// Ejercicio 07: Crear una función que agregue la propiedad de id a un objeto. Este id se debe crear de forma aletoria y debe ser un número entre 1 y 1000. La función no debe modificar el objeto original, sino que debe devolver un nuevo objeto con la propiedad id agregada.

let obj = {
  name: "Snoopy",
};

function addIdToObject(obj) {
  if (typeof obj === "object") {
    obj.id = Math.floor(Math.random() * 1000) + 1; // Genera un número aleatorio entre 1 y 1000
  }
  return obj;
}

addIdToObject(obj);
console.log(obj); // { name: 'Snoopy', id: 123 } (el id será un número aleatorio entre 1 y 1000)
