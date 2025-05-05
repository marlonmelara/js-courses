/**
En este desafío vas a recibir un parámetro arraySecreto en la función solution. Debes retornar true si el primer elemento del arraySecreto es de tipo string y debes retornar false si es de cualquier otro tipo.

Input

solution(["Huevo", "Gallina", "Vaca"])
solution([1, "Gallina", "Vaca"])

Output

true
false
*/

/* export function solution(arraySecreto) {
  return typeof arraySecreto[0] === "string" ? true : false;
}

solution(["Huevo", "Gallina", "Vaca"]); */

/* const estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

let saludar = (estudiante) => console.info(`Hola ${estudiante}`);

for (let i = 0; i < estudiantes.length; i++) {
  saludar(estudiantes[i]);
} */

/* const estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

let saludar = (estudiante) => console.info(`Hola ${estudiante}`);

for (let estudiante of estudiantes) {
  saludar(estudiante);
} */

const estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

let saludar = (estudiante) => console.info(`Hola ${estudiante}`);

while (estudiantes.length > 0) {
  console.log(estudiantes);
  let estudiante = estudiantes.shift();
  saludar(estudiante);
}

/**
En este desafío tu función solution recibirá 3 parámetros:

estudiantes: un array de strings con varios nombres de estudiantes.
deathCount: un número entero.
nuevo: un string con el nombre de un nuevo estudiante (que no aparecía antes en el array).
Tu función debe retornar un array de elementos con las siguientes indicaciones:

Si el parámetro deathCount es igual a 0, debes retornar un array con los mismos elementos que tenía el array de estudiantes y agregando el elemento nuevo al final.

Si el parámetro deathCount es mayor a 0, debes retornar un array con los mismos elementos del array estudiantes pero eliminando la cantidad de estudiantes que indica el número deathCount y agregando el elemento nuevo al final.

💡 Aclaración: NO debes eliminar TODOS los elementos del array original de estudiantes, sino eliminar la cantidad de estudiantes que indica el número deathCount.

Ejemplo 1:

El array estudiantes contiene los elementos "Nico" y "Zulle". El número deathCount es igual a 0. Y el nuevo estudiante es "Santi". Al deathCount ser igual a 0, "Nico" y "Zulle" se quedan. Y agregamos "Santi" al final.

// Input
solution(["Nico", "Zule"], 0, "Santi")

// Output
["Nico", "Zule", "Santi"]

Ejemplo 2:

El array estudiantes contiene los elementos "Juan". "Juanita" y "Daniela". El número deathCount es igual a 1. Y el nuevo estudiante es "Julian". Al deathCount ser igual a 1, el último elemento del array de estudiantes ("Daniela") se debe ir. Y agregamos "Julian" al final.

// Input
solution(["Juan", "Juanita", "Daniela"], 1, "Julian")

// Output
["Juan", "Juanita", "Julian"]

Ejemplo 3:

El array estudiantes contiene los elementos "Nath". "Luisa" y "Noru". El número deathCount es igual a 2. Y el nuevo estudiante es "Cami". Al deathCount ser igual a 2, los últimos 2 elementos del array de estudiantes ("Luisa" y "Noru") se deben ir. Y agregamos "Cami" al final.

// Input
solution(["Nath", "Luisa", "Noru"], 2, "Cami")

// Output
["Nath", "Cami"]
*/

/**
En este desafío vas a recibir un objeto car como parámetro de la función solution.

Este objeto puede contener diferentes propiedades. Debes asegurarte de que tenga la propiedad licensePlate (la placa del auto). Si sí la tiene, devuelve el objeto original con la propiedad drivingLicense como true. Si no la tiene, devuelve el objeto original con la propiedad drivingLicense como false.

Input

// Prueba 1
solution({
  color: 'red',
  brand: 'Kia',
});

// Prueba 2
solution({
  color: 'gray',
  brand: 'Chevrolet',
  licensePlate: 'AAA111',
});

// Prueba 3
solution({ licensePlate: 'RGB255'  });

Output

// Prueba 1
{
  color: 'red',
  brand: 'Kia',
  drivingLicense: false,
}

// Prueba 2
{
  color: 'gray',
  brand: 'Chevrolet',
  licensePlate: 'AAA111',
  drivingLicense: true,
}

// Prueba 3
{
  licensePlate: 'RGB255',
  drivingLicense: true,
}
*/

// Imprimir el primer elemento del array
function imprimirPrimerElementoArray(arr) {
  console.log(arr[0]);
}

imprimirPrimerElementoArray(["hola", "mundo", "hello"]);

// Imprimir elemento por elemento del array con una función declarativa
function imprimirElementoPorElemento(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

imprimirElementoPorElemento(["hola", "mundo", "hello"]);

// Imprimir elemento por elemento del array con una función expresiva
const imprimirElementoPorElemento2 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

imprimirElementoPorElemento2(["uno", "dos", "tres"]);

const obj1 = {
  nombre: "John",
  edad: 33,
  comidaFavorita: ["Pollo frito", "Pasta", "Pizza"],
};

function imprimirElementoPorElementoObjeto(obj1) {
  const arr = Object.values(obj1);
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

imprimirElementoPorElementoObjeto(obj1);
