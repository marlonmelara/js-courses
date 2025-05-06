// Pasar funciones como argumentos -> callback
function funcionA() {}
function funcionB(callback) {}
funcionB(funcionA);

// Retornar funciones
function retornaFuncion() {
  function interna() {}
  return interna;
}

// Expresión de función
const expresion = function () {};

// Usar métodos y propiedades de funciones
function metodoEjemplo() {}
const obj = {};
metodoEjemplo.call(obj);

// Anidar funciones -> nested functions
function externa() {
  function intermedia() {
    function interna() {}
    interna();
  }
  intermedia();
}
externa();
