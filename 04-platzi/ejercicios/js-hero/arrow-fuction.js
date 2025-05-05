// Define la función constructora 'Alimento'.
let Alimento = function (comida) {
  this.comida = comida; // 'this' se refiere al objeto instancia de 'Alimento'.
};

// Añade 'comerHoy' al prototipo de 'Alimento' usando una función flecha.
Alimento.prototype.comerHoy = () => console.log("Hoy toca comer:", this.comida);
// La función flecha aquí captura el 'this' del ámbito en el cual 'Alimento.prototype.comerHoy' es definido.
// En un entorno de navegador, esto generalmente se refiere al objeto global 'window'.

// Crea una instancia de 'Alimento'.
const alimento = new Alimento("ensalada");

// Intenta llamar al método 'comerHoy' en la instancia 'alimento'.
alimento.comerHoy();
// Esto no funcionará como se esperaba porque 'this.comida' no se refiere a la propiedad 'comida'
// de la instancia 'alimento', sino al 'this' del ámbito donde la función fue definida, que podría ser 'window'.

/*
Una de las limitaciones de las funciones flecha (arrow functions), es que no tienen sus propias referencias
a 'this' o 'super' y no se deben usar como métodos que dependan de su propio contexto 'this'.

'this' en una función flecha siempre apuntará a 'this' desde el contexto léxico en el que la función fue definida,
que, fuera de cualquier función, apunta al objeto global, que es 'window' en un navegador.

Por tal razón, la función flecha () => { ... } no puede acceder a 'this.comida' como se esperaría si 'this'
debería referirse a la instancia del objeto 'Alimento'.
*/
