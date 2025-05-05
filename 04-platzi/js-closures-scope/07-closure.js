// Define la función 'greeting', que establece un ámbito léxico.
function greeting() {
  // 'username' es una variable en el ámbito léxico de 'greeting'.
  let username = "Snoopy";

  // Define 'displayUserName', un closure que tiene acceso a 'username'.
  function displayUserName() {
    // Accede a 'username' del ámbito léxico de la función exterior 'greeting'.
    return `Hello ${username}`;
  }

  // Retorna el closure 'displayUserName'.
  return displayUserName;
}

// Al llamar a 'greeting', se retorna el closure 'displayUserName' y se asigna a 'g'.
const g = greeting();

// 'g' es ahora una referencia al closure 'displayUserName'. Al imprimirlo, muestra la definición de la función.
console.log(g); // Muestra la función 'displayUserName'.

// Al invocar 'g', se ejecuta 'displayUserName', que tiene acceso al 'username' debido al closure.
console.log(g()); // Imprime "Hello Snoopy".
