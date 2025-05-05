//Curso JavaScript: 17. break & continue
// https://youtu.be/iv-f163m78A

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

console.log("***** break *****");
for (let i = 0; i < numeros.length; i++) {
  if (i === 5) {
    break;
  }
  console.log(numeros[i]);
}

console.log("***** continue *****");
for (let i = 0; i < numeros.length; i++) {
  if (i === 5) {
    continue;
  }
  console.log(numeros[i]);
}

// Otro ejemplo
const semana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

for (let i = 0; i < semana.length; i++) {
  if (semana[i] === "Jueves") {
    continue;
  }

  console.log(semana[i]);
}
