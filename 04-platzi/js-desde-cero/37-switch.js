// Ejemplo 1
let producto = "Limones";

switch (producto) {
  case "Naranjas":
    console.log("Hay naranjas");
    break;
  case "Manzanas":
    console.log("No hay manzanas");
    break;
  case "Platanos":
    console.log("Hay platanos");
    break;
  case "Papayas":
    console.log("Hay papayas");
    break;
  default:
    console.log(`No hay ${producto}, lo sentimos.`);
    break;
}

console.log("¿Deseas otro producto?");

// Ejemplo 2
// Definición de una función llamada realizarTarea que toma un argumento llamado 'dia'
function realizarTarea(dia) {
  // Inicia la declaración switch, que evaluará el valor de 'dia'
  switch (dia) {
    // Si 'dia' es igual a cualquiera de estos casos ('lunes', 'martes', 'miércoles', 'jueves', 'viernes')
    case "lunes":
    case "martes":
    case "miércoles":
    case "jueves":
    case "viernes":
      // Imprime en la consola que es un día laboral y se están realizando tareas laborales
      console.log("Es un día laboral. Realizando tareas laborales.");
      // Sale del bloque switch
      break;

    // Si 'dia' es igual a 'sábado' o 'domingo'
    case "sábado":
    case "domingo":
      // Imprime en la consola que es fin de semana y se está disfrutando del tiempo libre
      console.log("Es fin de semana. Disfrutando del tiempo libre.");
      // Sale del bloque switch
      break;

    // Si 'dia' no coincide con ninguno de los casos anteriores
    default:
      // Imprime en la consola que el día no es reconocido y sugiere verificar la entrada
      console.log("Día no reconocido. Verifica la entrada.");
  }
}

// Ejemplos de uso de la función realizarTarea con diferentes días como argumentos
realizarTarea("lunes"); // Día laboral
realizarTarea("sábado"); // Fin de semana
realizarTarea("domingo"); // Fin de semana
realizarTarea("miércoles"); // Día laboral
realizarTarea("julio"); // Día no reconocido
