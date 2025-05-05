/*
El modo estricto ("use strict";) es una característica que se puede activar para un script completo o funciones individuales. Impone una capa extra de restricciones para prevenir o lanzar errores para ciertas acciones que son permitidas en modo no estricto, como asignar valores a variables no declaradas.

En el ejemplo proporcionado, asignar un valor a pi sin declararla es permitido fuera de myFunction() porque el modo estricto está comentado, pero dentro de myFunction(), el mismo acto produce un ReferenceError porque el modo estricto está activado.
*/

// Al comentar "use strict", estamos desactivando el modo estricto de JavaScript para todo el script.

// "use strict";

pi = 3.1416; // Asigna un valor a 'pi' sin declararla explícitamente. Esto crea una variable global en modo no estricto.
console.log(pi); // Imprime el valor de 'pi', que es 3.1416.

function myFunction() {
  "use strict";
  // Aquí se activa el modo estricto. Dentro de este modo, las variables deben declararse antes de usarse.
  return (pi = 3.1416); // Lanza ReferenceError debido a que 'pi' no está declarada y estamos en modo estricto.
}

// Al llamar a 'myFunction', se producirá un error porque 'pi' no está declarada en modo estricto.
console.log(myFunction());
