/**
 * Block Scope / Alcance de tipo bloque:
 * - Pertenecen las variables declaradas con const o let dentro de un bloque {}.
 * - Solo podemos acceder a ellas dentro del bloque en el que fueron declaradas.
 */

// Declaración de una variable 'edad' con alcance global.
const edad = 19;

// Declaración de una variable 'accesoPermitido' con alcance global.
let accesoPermitido = false;

// Bloque de código del if, donde se verifica si 'edad' es mayor o igual a 18.
if (edad >= 18) {
  // Declaración de una nueva variable 'accesoPermitido' con alcance de bloque dentro del bloque if.
  const accesoPermitido = true;

  // Acceso a la variable 'accesoPermitido' del alcance de bloque y se imprime su valor en la consola.
  // Output: true
  console.log(accesoPermitido);

  // Bloque de código anidado if, que siempre se ejecutará ya que la condición es true.
  if (true) {
    // Acceso a la variable 'accesoPermitido' del alcance de bloque del primer if y se imprime su valor en la consola.
    // Output: true
    console.log(accesoPermitido);
  }

  /**
   * Definición de una función 'miFuncion' dentro del bloque if.
   * Esta función intenta acceder a la variable 'accesoPermitido' del alcance de bloque del if.
   */
  const miFuncion = () => {
    // Acceso a la variable 'accesoPermitido' del alcance de bloque del primer if y se imprime su valor en la consola.
    // Output: true
    console.log(accesoPermitido);
  };

  // Llamada a la función 'miFuncion', que accede a la variable 'accesoPermitido' del alcance de bloque del if.
  miFuncion();
}

// Acceso a la variable 'accesoPermitido' del alcance global y se imprime su valor en la consola.
// Output: false
// Aquí se accede a la variable 'accesoPermitido' del alcance global, no a la del alcance de bloque del if.
console.log(accesoPermitido);
