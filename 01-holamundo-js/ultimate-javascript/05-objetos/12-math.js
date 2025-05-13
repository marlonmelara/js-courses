console.log(
  Math.PI,
  Math.E,
  Math.round(2.4),
  Math.round(2.5),
  Math.floor(15.9),
  Math.ceil(15.100001),
  Math.random(),
  Math.pow(2, 3)
);

// Math.random() devuelve un número aleatorio entre 0 y 1
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(random(1, 10));
