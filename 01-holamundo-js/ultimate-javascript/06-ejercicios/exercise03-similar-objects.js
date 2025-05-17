// Ejercicio 3: Similar Objects
// Crea una función que reciba dos objetos y devuelva true si son similares (tienen las mismas propiedades y valores) o false si no lo son.

function similar(obj1, obj2) {
  let different = false;
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      different = true;
    }
  }

  return !different;
}

let result = similar({ id: 1, name: "Snoopy" }, { id: 1, name: "Snoopy" });
console.log(result); // true
