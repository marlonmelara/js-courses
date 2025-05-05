/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800 */

console.log("***** Solución JonMircha modificado *****");

const aplicarDescuento = (monto = undefined, descuento = 0) => {
  if (monto === undefined) return console.warn(`No ingresaste el monto`);
  if (typeof monto !== "number")
    return console.error(`El valor ${monto} ingresado, NO es un número`);
  if (monto <= 0) return console.error(`El monto no puede ser 0 o negativo`);
  if (typeof descuento !== "number")
    return console.error(`El valor ${descuento} ingresado, NO es un número`);
  if (Math.sign(descuento) === -1)
    return console.error(`El descuento no puede ser negativo`);

  return console.info(
    `$${monto} - ${descuento}% = $${monto - (monto * descuento) / 100}`
  );
};

aplicarDescuento();
aplicarDescuento("200");
aplicarDescuento(0);
aplicarDescuento(-1000);
aplicarDescuento(1000, "20");
aplicarDescuento(1000, -20);
aplicarDescuento(1000);
aplicarDescuento(1000, 25);
