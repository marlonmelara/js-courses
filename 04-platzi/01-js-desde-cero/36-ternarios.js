let mensaje;

const edad = 15;

if (edad >= 18) {
  mensaje = "Puede entrar";
} else {
  mensaje = "No puede entrar";
}

console.log(mensaje);

const mensaje2 =
  edad >= 18
    ? "Es mayor de edad, puede entrar"
    : "Es menor de edad, no puede entrar";

console.log(mensaje2);

edad >= 18 ? console.log("Puede entrar") : console.log("No puede entrar");
