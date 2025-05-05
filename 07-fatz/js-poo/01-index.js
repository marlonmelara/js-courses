const user1 = {
  name: "Ryan", // propiedades que dentro del objeto son pares clave-valor definido detro de {}
  lastname: "Perez",
  age: 30,
  showFullName() {
    // función que dentro del objeto se denomina métodos
    return `${this.name} ${this.lastname}`;
  },
};

console.log(user1.showFullName());

/* this es una palabra clave que en el contexto de un método se refiere al propio objeto en el que el método está definido o "vive". Entonces, this.name y this.lastname están extrayendo los valores de las propiedades name y lastname del objeto user. */
