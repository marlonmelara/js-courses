// Desestructuración de Arrays en ECMAScript 6 (ES6).
// ES6 introdujo una sintaxis más limpia y concisa para extraer valores de arrays.
// En lugar de acceder a los elementos del array por índice, podemos asignar los valores a variables directamente.
let fruit = ["Apple", "Banana"];
let [a, b] = fruit; // a obtiene el valor "Apple", b obtiene el valor "Banana"
console.log(a, b);

// Desestructuración de Objetos en ECMAScript 6 (ES6).
// Similar a la desestructuración de arrays, ES6 permite extraer propiedades de objetos y asignarlas a variables.
// Esto elimina la necesidad de acceder a las propiedades del objeto una por una.
let user = { username: "Pepe", age: 25 };
// username obtiene el valor "Pepe", age obtiene el valor 25
let { username, age } = user;
console.log(username, user.age);

// Forma tradicional (antes de ES6) de acceder a los valores en arrays y objetos:
// Para arrays:
let aTraditional = fruit[0]; // aTraditional obtiene el valor "Apple"
let bTraditional = fruit[1]; // bTraditional obtiene el valor "Banana"
// Para objetos:
let usernameTraditional = user.username; // usernameTraditional obtiene el valor "Pepe"
let ageTraditional = user.age; // ageTraditional obtiene el valor 25
