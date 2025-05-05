// Curso JavaScript: 20. Parámetros REST & Operador Spread
// https://youtu.be/yGJdRAXHCPM

function sumar(a, b, ...c) {
  let resultado = a + b;
  c.forEach(function (n) {
    resultado += n;
  });
  return resultado;
}

console.log(sumar(1, 2));
console.log(sumar(1, 2, 3));
console.log(sumar(1, 2, 3, 4));
console.log(sumar(1, 2, 3, 4, 5));

const ARR1 = [1, 2, 3, 4, 5],
  ARR2 = [6, 7, 8, 9, 0];

console.log(ARR1, ARR2);

// const ARR3 = [ARR1, ARR2]; // [ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 0 ] ]

const ARR3 = [...ARR1, ...ARR2];
console.log(ARR3);
