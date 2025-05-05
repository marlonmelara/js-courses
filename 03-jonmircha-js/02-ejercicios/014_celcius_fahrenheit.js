/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F

Formulas:

(0 °C × 9/5) + 32 = 32 °F

(0 °F − 32) × 5/9 = -17.78 °C
*/

console.log("***** Solución JonMircha modificado *****");

const convertirGrados = (grados = undefined, unidad = undefined) => {
  if (typeof grados !== "number")
    return console.error(
      `El valor ingresado, no es un dato valido de grados a convertir`
    );

  if (typeof unidad !== "string" || unidad.length !== 1)
    return console.error(
      `El valor ingresado ${unidad}, no es un dato valido. Debes ingresar C o F`
    );

  if (!/(C|F)/.test(unidad))
    return console.error(`Valor de unidad no reconocido. Debes ingresar C o F`);

  if (unidad === "C")
    return console.info(`${grados}°C = ${Math.round(grados * (9 / 5) + 32)}°F`);
  else unidad === "F";
  return console.info(`${grados}°F = ${Math.round(((grados - 32) * 5) / 9)}°C`);
};

convertirGrados();
convertirGrados(50, true);
convertirGrados(100, "C");
convertirGrados(0, "F");
convertirGrados(0, "C");
