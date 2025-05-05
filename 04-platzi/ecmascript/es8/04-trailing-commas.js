//Trailing commas son una característica en JavaScript que permite poner una coma después del último elemento en un arreglo, un objeto, o en los parámetros de una función. Fueron introducidas para mejorar la legibilidad del código y facilitar la adición de nuevos elementos sin necesidad de modificar la línea anterior.

// Declaración de un arreglo con 'trailing commas' y espacios vacíos.
const ages = [24, 21, 32, 48, , , , , 25, , , 42];

// Muestra el arreglo en la consola. Los espacios vacíos son tratados como 'undefined'.
console.log(ages); // [24, 21, 32, 48, , , , , 25, , , 42]

// Muestra la longitud del arreglo. Los espacios vacíos y las 'trailing commas' cuentan para la longitud total.
console.log(ages.length); //12
