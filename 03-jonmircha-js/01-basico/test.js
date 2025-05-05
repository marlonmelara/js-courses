function calcularDescuento(articulos, precio) {
  let precioFinal;

  if (articulos <= 5) {
    //Hasta 5 artículos
    precioFinal = precio * (1 - 0.1);
  } else if (articulos > 5 && articulos <= 10) {
    //De 6 a 10 artículos
    precioFinal = precio * (1 - 0.15);
  } else {
    //De 10 artículos en adelante
    precioFinal = precio * (1 - 0.2);
  }

  return precioFinal;
}

calcularDescuento(4, 10); // 9
calcularDescuento(8, 20); // 17
calcularDescuento(15, 50); // 40

const cuadrado = (x) => x * x;
console.log(cuadrado(4)); // 16

const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map((x) => x * x);
console.log(cuadrados); // [1, 4, 9, 16, 25]

console.log(1 | 3);
console.log(1 | 4);
console.log(1 | 5);

console.log(1 & 3);
console.log(1 & 4);
console.log(1 & 5);
