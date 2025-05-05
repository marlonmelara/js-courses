// Definición del objeto 'sofia' con propiedades y un método.
const sofia = {
  // Atributos básicos del objeto.
  nombre: "Sofía",
  edad: 20,
  cursosAprobados: [
    "Curso de HTML y CSS",
    "Curso de introducción a JavaScript",
  ],
  // Método del objeto que añade un nuevo curso a la lista de cursos aprobados.
  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  },
};

// Llamada al método 'aprobarCurso' del objeto 'sofia' para añadir otro curso a 'cursosAprobados'.
sofia.aprobarCurso("Metodología BEM CSS");

sofia.nombre = "Sophie";
sofia.edad += 2;

// Modificación directa de la propiedad 'cursosAprobados' para añadir un nuevo curso.
sofia.cursosAprobados.push("Curso de SASS");

console.log(sofia);

// Define una función constructora 'Student' con tres parámetros.
function Student(name, age, approvedCourses) {
  // Atributos básicos del objeto.
  this.name = name;
  this.age = age;
  this.approvedCourses = approvedCourses; // Establece la propiedad 'approvedCourses', que es un arreglo.

  // Este es un método comentado que podría ser añadido a cada instancia, pero es menos eficiente que usar el prototipo.
  // this.approveCourse = function (newCourse) {
  //   this.approvedCourses.push(newCourse);
  // };
}

// Añade el método 'approveCourse' al prototipo de 'Student'.
Student.prototype.approveCourse = function (newCourse) {
  this.approvedCourses.push(newCourse); // Este método añade un nuevo curso al arreglo 'approvedCourses'.
};

// Crea una instancia de 'Student' llamada 'juanita' utilizando la palabra clave 'new'.
const juanita = new Student("Juanita Alejandra", 18, [
  "Curso de Desarrollo de Videojuegos",
  "Curso de Creación de Personajes de Videojuegos",
]);

// Llama al método 'approveCourse' en la instancia 'juanita' para añadir un nuevo curso.
juanita.approveCourse("Curso de Unreal Engine");

console.log(juanita);
