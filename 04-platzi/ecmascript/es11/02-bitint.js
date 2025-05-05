// BigInt, es una característica introducida en ECMAScript 2020 (ES11) para representar números enteros muy grandes que sobrepasan el límite de los números (Number) en JavaScript.

// Creación de un BigInt usando la notación literal (añadiendo 'n' al final del número).
const aBigNumber = 19541457457893121899n;

// Creación de un BigInt usando la función BigInt().
const anotherBigNumber = BigInt(19541457457893121899);

// Muestra 'aBigNumber' en la consola.
console.log(aBigNumber); // Imprime el valor de 'aBigNumber' como un BigInt.

// Muestra 'anotherBigNumber' en la consola.
console.log(anotherBigNumber); // Imprime el valor de 'anotherBigNumber' como un BigInt.
