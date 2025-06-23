// Invertir un array. A pesar que existe un método para invertir los array vamos a generar una lógica para invertir de forma distinta

const numbers = [1, 2, 3, 4, 5];

// Usando un ciclo for
const customReversed = (array) => {
  const newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
};

const reversedNumbers = customReversed(numbers);
console.log(numbers); // [ 1, 2, 3, 4, 5]
console.log(reversedNumbers); // [5, 4, 3, 2, 1]

// Usando reverse()
// const reversedNumbers2 = numbers.reverse();
// console.log(reversedNumbers2); // [5, 4, 3, 2, 1]
// console.log(numbers); // [5, 4, 3, 2, 1]

// Usando reverse() sin modificar el array original
const reversedNumbers3 = [...numbers];
console.log(reversedNumbers3); // [ 1, 2, 3, 4, 5]
reversedNumbers3.reverse();
console.log(reversedNumbers3); // [5, 4, 3, 2, 1]
console.log(numbers); // [ 1, 2, 3, 4, 5]
