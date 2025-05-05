class Banda {
  constructor({ nombre, generos = [] }) {
    this.nombre = nombre;
    this.generos = generos;
    this.integrantes = [];
  }

  agregarIntegrante(integranteNuevo) {
    // Revisa si el integranteNuevo es baterista.
    if (integranteNuevo.instrumento === "Batería") {
      // Revisa si ya existe un baterista en la banda.
      const yaHayBaterista = this.integrantes.some(
        (integrante) => integrante.instrumento === "Batería"
      );
      if (yaHayBaterista) {
        console.log("Ya existe un baterista en la banda.");
        return; // Detiene la función si ya hay un baterista.
      }
    }
    // Agrega el nuevo integrante si no hay conflicto.
    this.integrantes.push(integranteNuevo);
  }
}

class Integrante {
  constructor({ nombre, instrumento }) {
    this.nombre = nombre;
    this.instrumento = instrumento;
  }
}

// Ejemplo de uso
const banda = new Banda({
  nombre: "Los Ejemplo",
  generos: ["Rock", "Jazz"],
});

const snoopy = new Integrante({
  nombre: "Snoopy",
  instrumento: "guitarra",
});

const charlie = new Integrante({
  nombre: "Charlie",
  instrumento: "Batería",
});

// Agregar integrantes
banda.agregarIntegrante(snoopy);
banda.agregarIntegrante(charlie);

// Intentando agregar otro baterista
const otroBaterista = new Integrante({
  nombre: "Linus",
  instrumento: "Batería",
});
banda.agregarIntegrante(otroBaterista);

console.log(banda);

/*
Dadas la siguientes clases:

Clase Banda con las propiedades:
nombre - string
generos - Array
integrantes - Array

Crea una clase llamada "Integrante" con las propiedades:
nombre - string
instrumento - string

Escribe la lógica para agregar integrantes a la clase Banda en la función agregarIntegrante. En esta función no debe dejar agregar más de un baterista, es decir hay que validar que solo se pueda agregar un integrante con instrumento "Bateria".
*/
