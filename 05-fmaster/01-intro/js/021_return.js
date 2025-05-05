/**
 * Realiza una operación matemática (suma o resta) entre dos números.
 *
 * @param {string} tipo - El tipo de operación a realizar, puede ser "suma" o "resta".
 * @param {number} a - El primer número para la operación.
 * @param {number} b - El segundo número para la operación.
 * @returns {number|null} El resultado de la operación, o null si el tipo de operación no es reconocido.
 */
const operacion = (tipo, a, b) => {
  if (tipo === "suma") {
    return a + b;
  } else if (tipo === "resta") {
    return a - b;
  } else {
    console.error(`Tipo de operación no reconocido: ${tipo}`);
    return null;
  }
};

const miOperacion = operacion("suma", 2, 5);

if (miOperacion !== null) {
  console.log(`El resultado de la operación es ${miOperacion}`);
} else {
  console.log("Operación no realizada debido a un error.");
}
