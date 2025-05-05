// Tipos primitivos

// number
4;

// string
("Hola mundo");

// booleanos
true;
false;

// null y undefined
null; // Es un espacio asignado en memoria, pero esta vacio
undefined; //Es un espacio que esta en memoria sin definir

// null, undefined, false, 0 ==> Todas son falsy
console.log(null === undefined);

if (null) {
  console.log("cumple");
} else {
  console.log("no cumple");
}
