// Curso JavaScript: 10. Funciones
// https://youtu.be/H6U1Pm7x60E

/* Una función es un bloque de código autocontenido independiente al scope o al ámbito global. Pueden o no recibir parámetros y pueden o no devolver valores */

// Función declarada
/* function estoEsUnaFuncion() {
  console.log("Uno");
  console.log("Dos");
  console.log("Tres");
} */

// Invocación de función
//estoEsUnaFuncion();
//estoEsUnaFuncion();

function unaFuncionQueDevuelveValor() {
  console.log("Uno");
  return 19;
  console.log("Dos");
  console.log("Tres");
  return "La función ha retornado una cadena de texto";
}

//let valorDeFuncion = unaFuncionQueDevuelveValor();
//console.log(valorDeFuncion);

function saludar(nombre = "Luffy", edad = 19) {
  console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`);
}

saludar("Gokú", 44);
saludar();

// Funciones declaradas Vs. funciones expresadas
funcionDeclarada();

function funcionDeclarada() {
  console.log(
    "Esto es una función declarada, puede invocarse en cualquier lugar de nuestro código, incluso antes de que la función sea declarada"
  );
}

funcionDeclarada();

// Función anónima
//funcionExpresada(); // Nos dará un error por invocarla antes de definirla

const funcionExpresada = function () {
  console.log(
    "Esto es una función expresada, es decir, una función que se ha asignado como valor a una variable. Si invocamos esta función antes de su definición JS nos dirá..."
  );
};

funcionExpresada();
