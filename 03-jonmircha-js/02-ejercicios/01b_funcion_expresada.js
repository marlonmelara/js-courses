function esPositivo1(num = "") {
  if (typeof num !== "number") {
    console.warn("No ingresaste un número valido");
  } else if (num === 0) {
    console.warn(`El número no puede ser cero. Ingresa otro número`);
  } else if (num > 0) {
    console.info(`El número "${num}" es positivo`);
  } else {
    console.info(`El número "${num}" no es positivo`);
  }
}

esPositivo1();
esPositivo1("a");
esPositivo1("5");
esPositivo1(true);
esPositivo1(0);
esPositivo1(5.1);
esPositivo1(-8);

console.log("***** Función expresada  *****");

const esPositivo = (num = "") =>
  typeof num !== "number"
    ? console.warn("No ingresaste un número valido")
    : num === 0
    ? console.warn(`El número no puede ser cero. Ingresa otro número`)
    : num > 0
    ? console.info(`El número "${num}" es positivo`)
    : console.info(`El número "${num}" no es positivo`);

esPositivo();
esPositivo("a");
esPositivo("5");
esPositivo(true);
esPositivo(0);
esPositivo(5);
esPositivo(5.1);
esPositivo(-8);
