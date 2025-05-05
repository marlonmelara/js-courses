// Curso JavaScript: 14. Condicionales
// https://youtu.be/9h5hyh_wDjo

/* Una estructura de control es aquel mecanismo que permite controlar el flujo de programación */

// if - else
let edad = 15;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

// if - else if - else

/*
Déjame dormir 0 - 5hrs
Buenos días 5 - 12hrs
Buenas tardes 12 - 18hrs
Buenas noches 18 - 24
*/

let hora = 4;

if (hora <= 5) {
  console.log("Déjame dormir");
} else if (hora < 12) {
  console.log("Buenos días");
} else if (hora < 18) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}

// Operador ternario (condición) ? verdadero:falsa
console.log("***** Operador ternario *****");

let eresMayor = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(eresMayor);

// Switch - Case
/*
0 - domingo
1 - lunes
2 - martes
3 - miércoles
4 - jueves
5 - viernes
6 - sábado
*/

let dia = 7;

switch (dia) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  default:
    console.log("❗No existe");
    break;
}
