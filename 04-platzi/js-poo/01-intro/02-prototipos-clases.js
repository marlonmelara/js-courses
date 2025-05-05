// Definición de la clase 'Student' utilizando la sintaxis de clases de ES6.
class Student {
  // El constructor es un método especial para crear e inicializar un objeto creado con una clase.
  constructor({ name, age, email, approvedCourses = [] }) {
    // Atributos del objeto.
    this.name = name;
    this.age = age;
    this.email = email;
    this.approvedCourses = approvedCourses; // Inicialización del atributo 'approvedCourses' con un arreglo vacío por defecto.
  }

  // Método de la clase para agregar un nuevo curso al arreglo 'approvedCourses'.
  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

// Creación de una nueva instancia de 'Student'.
const juanita = new Student({
  email: "juanita@email.com",
  name: "Juanita Alejandra",
  age: 28,
  approvedCourses: [
    "Curso de Ciencias de Datos",
    "Curso de Principos de visualización de Datos",
  ],
});

juanita.approveCourse("Curso de BI");

// Impresión de la instancia 'charlie' para verificar sus propiedades.
console.log(juanita);
