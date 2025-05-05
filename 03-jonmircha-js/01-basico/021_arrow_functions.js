// Curso JavaScript: 21. Arrow Functions
// https://youtu.be/WuCw9agV3Rc

console.log("***** function sin flechas *****");
const saludo1 = function () {
  console.log("hola mundo 1");
};

saludo1();

console.log("***** function con flechas *****");
const saludo2 = () => {
  console.log("hola mundo 2");
};

saludo2();

console.log("***** function con flechas y sin llaves *****");
const saludo3 = () => console.log("hola mundo 3");
saludo3();

/* const saludar = nombre => console.log(`Hola ${nombre}`);
saludar("Jon"); */ /** No es necesario agregar parentesis cuando solo hay un parámetro  */

function saludar(nombre) {
  return console.log(`Hola ${nombre}`);
}
saludar("Jon");

// Otra transformación de función con arrow
const sumar1 = function (a, b) {
  return a + b;
};

console.log(sumar1(2, 2));

const sumar2 = (a, b) => a + b;

console.log(sumar2(2, 2));

// Función con varias líneas
const funcionDeVariasLineas = () => {
  console.log("uno");
  console.log("dos");
  console.log("tres");
};

funcionDeVariasLineas();

const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function (el, index) {
  console.log(`${el} esta en la posición ${index}`);
});

function perro1() {
  console.log(this);
}

perro1();

const perro2 = {
  nombre: "Góku",
  ladrarRegular: function () {
    console.log(this);
  },
  ladrarArrow: () => {
    console.log(this);
  },
};

perro2.ladrarRegular();
perro2.ladrarArrow();

const objeto = {
  nombre: "Ejemplo",
  funcionRegular: function () {
    console.log(this.nombre);
  },
  funcionArrow: () => {
    console.log(this.nombre);
  },
};

objeto.funcionRegular(); // Imprime "Ejemplo"
objeto.funcionArrow(); // Imprime undefined (o el valor de nombre en el contexto global)
