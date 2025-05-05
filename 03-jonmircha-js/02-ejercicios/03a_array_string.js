/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.
     miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'] */

/*
console.log("***** Mi Solución *****");

const crearArrayTextos = (frase, separador) =>
  typeof frase !== "string" || frase.length === 0
    ? console.warn("No ingresaste el texto")
    : typeof separador !== "string" || separador.length === 0
    ? console.warn("No ingresaste separador")
    : console.info(frase.split(" ").map((palabra) => palabra + separador));

crearArrayTextos("Hola a todos", "💛");
crearArrayTextos("", "💛");
crearArrayTextos("Hola a todos", "💥");
crearArrayTextos("Hola mundo", "❤🧡");
crearArrayTextos("Ene Feb Mar Abr May Jun Jul Ago Sep Oct Nov Dic", "-"); */

console.log("***** Solución JonMircha *****");

const cadenaAArreglo = (cadena = "", separador = undefined) =>
  !cadena
    ? console.warn("No ingresaste una cadena de texto")
    : separador === undefined
    ? console.warn("No ingresate el caracter separador")
    : console.info(cadena.split(separador));

cadenaAArreglo("Hello-a-todos", "-");
cadenaAArreglo("Estoy aquí en este lado", "");
cadenaAArreglo("Hola,mundo", ",");
cadenaAArreglo("Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dic", ",");
cadenaAArreglo("Hola7patata7frita7en7salsa", "7");

console.log("***** Mi Solución Modificada *****");

const cadenaAArreglo2 = (cadena, separador) =>
  typeof cadena !== "string" || cadena.length === 0
    ? console.warn("No ingresaste una cadena de texto")
    : typeof separador !== "string" || separador.length === 0
    ? console.warn("No ingresate el caracter separador")
    : console.info(cadena.split(separador));

cadenaAArreglo2("Hello-a-todos", "-");
cadenaAArreglo2("Estoy aquí en este lado", "");
cadenaAArreglo2("Hola,mundo", ",");
cadenaAArreglo2("Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dic", ",");
cadenaAArreglo2("Hola7patata7frita7en7salsa", "7");
