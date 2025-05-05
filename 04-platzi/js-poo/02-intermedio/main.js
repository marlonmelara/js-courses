const juan = {
  name: "Juanito",
  age: 18,
  approvedCourses: ["Curso 1"], // Arrays donde se agregaran los cursos aprovados
  addCourse(newCourse) {
    console.log("This", this);
    console.log("This.aprrovedCourses", this.aprrovedCourses);

    // Función para agregar un nuevo curso
    this.approvedCourses.push(newCourse);
  },
};

// juan.name = "Juan"; // Cambiar el nombre
juan.addCourse("Curso 2"); // Agregar un nuevo curso aprobado
juan.approvedCourses;

console.log("************");
//Uso de método estaticos del prototipo Object
// console.log(Object.keys(juan));
// console.log(Object.getOwnPropertyNames(juan));
// console.log(Object.entries(juan));
console.log(Object.getOwnPropertyDescriptors(juan));

Object.defineProperty(juan, "pruebaNASA", {
  value: "et",
  enumerable: true,
  writable: true,
  configurable: true,
});

// console.log(Object.entries(juan)[3]);
// console.log(Object.entries(juan)[3][1]);
