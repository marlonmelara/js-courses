/*
Un objeto literal en JavaScript es una manera de definir un objeto y sus propiedades directamente en el código, utilizando una sintaxis que es una colección de pares clave-valor dentro de llaves {}. Por ejemplo, natalia es un objeto literal.
*/

const natalia = {
  name: "Natalia",
  age: 20,
  points: 700,
};

natalia; // { name: "Natalia", age: 20, points: 700 }

/*
En contraste, Student es una función constructora, que es una plantilla para crear objetos. Las funciones constructoras son utilizadas con la palabra clave new para crear instancias de objetos que heredan de Student.prototype.
*/

/*
La instancia juanita tiene las propiedades name, age, y points, y también hereda todas las propiedades y métodos de Student.prototype.
*/

function Student() {
  (this.name = "Nombre"), (this.age = 18), (this.points = 750);
}

const juanita = new Student();

juanita; // Student { name: "Nombre", age: 18, points: 750 }
