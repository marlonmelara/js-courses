/* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero */

const validarNombre = (nombre = "") => {
  if (!nombre) return console.warn("NO ingresaste un nombre");
  if (typeof nombre !== "string")
    return console.error(
      `El valor "${nombre}" ingresado, NO es una cadena de texto`
    );
  let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚuÜü\s]+$/g.test(nombre);
  return expReg
    ? console.info(`"${nombre}, es un nombre válido`)
    : console.warn(`"${nombre}", NO es un nombre válido`);
};

validarNombre("");
validarNombre(89);
validarNombre();
validarNombre("Ñando");
