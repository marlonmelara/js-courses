// Variable global que puede ser accesada desde cualquier lugar del código.
const myGlobal = 0;

// Función 'myFunction' que establece su propio ámbito léxico.
function myFuction() {
  const myNumber = 1;
  // Accede a la variable global 'myGlobal'.
  console.log(myGlobal);

  // Función 'parent' que establece otro ámbito léxico anidado dentro de 'myFunction'.
  function parent() {
    const inner = 2;
    // Accede a 'myNumber' y 'myGlobal' desde el ámbito léxico superior.
    console.log(myNumber, myGlobal);

    // Función 'child' que es un closure. Tiene acceso a 'inner', 'myNumber' y 'myGlobal'.
    function child() {
      // Accede a 'inner' y 'myNumber' del ámbito léxico de 'parent', y a 'myGlobal' del ámbito global.
      console.log(inner, myNumber, myGlobal);
    }
    // Invoca 'child', que es un ejemplo de closure, accediendo a su ámbito léxico ancestral.
    return child();
  }

  // Invoca 'parent', iniciando la cadena de closures y ámbitos léxicos anidados.
  return parent();
}

// Al llamar a 'myFuction', se inicia la ejecución que involucra la creación de closures.
myFuction();
