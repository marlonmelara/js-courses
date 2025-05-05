class Comment {
  constructor({ content, studentName, studenRole = "estudiante" }) {
    this.content = content;
    this.studentName = studentName;
    this.studenRole = studenRole;
    this.likes = 0;
  }

  publicar() {
    console.log(this.studentName + " (" + this.studenRole + ")");
    console.log(this.likes + " likes");
    console.log(this.content);
  }
}

function videoPlay(id) {
  const urlSecreta = "https://academia.com/video1" + id;
  console.log(`Se esta reproduciendo desde ${urlSecreta}`);
}

function videoStop(id) {
  const urlSecreta = "https://academia.com/video1" + id;
  console.log(`Pausamos el video en ${urlSecreta}`);
}

class AcademyClass {
  constructor({ name, videoID }) {
    this.name = name;
    this.videoID = videoID;
  }

  reproducir() {
    videoPlay(this.videoID);
  }

  pausar() {
    videoStop(this.videoStop);
  }
}

class LearningPaths {
  constructor({ name, courses = [], isFree = false, lang = "spanish" }) {
    this.name = name;
    this.courses = courses;
    this.isFree = isFree;
    this.lang = lang;
  }
}

class Course {
  constructor({ name, classes = [], isFree = false, lang = "spanish" }) {
    this._name = name; // Los atributos y métodos que tendrá alguna regla particular lo designaremos con un simbolo _
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }

  /*
  Los setters y getters son métodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase
  */

  get name() {
    return this._name;
  }

  set name(nuevoNombre) {
    if (nuevoNombre === "Curso malo de programación básica") {
      console.error("Wey... no!");
    } else {
      this._name = nuevoNombre;
    }
  }
}

const cursoProgBasica = new Course({
  name: "Curso Gratis de Programación Básica",
  isFree: true,
});

cursoProgBasica.name = "Curso malo de programación básica";

console.log(cursoProgBasica.name);

const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
});

const cursoPracticoHTML = new Course({
  name: "Curso Practico de HTML y CSS",
  lang: "english",
});

const escuelaWeb = new LearningPaths({
  name: "Escuela de Desarrollo Web",
  courses: [cursoProgBasica, cursoDefinitivoHTML, cursoPracticoHTML],
});

const escuelaData = new LearningPaths({
  name: "Escuela de Data Science",
  courses: [cursoProgBasica, "Curso Data Business", "Curso Dataviz"],
});

const escuelaVideoJuegos = new LearningPaths({
  name: "Escuela de Videojuegos",
  courses: [
    cursoProgBasica,
    "Curso introducción a la producción de videojuegos",
    "Curso de Unreal Engine",
    "Curso de Unity 3D",
  ],
});

class Student {
  constructor({
    name,
    email,
    username,
    x = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = { x, instagram, facebook };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
    });
    comment.publicar();
  }
}

class FreeStudent extends Student {
  constructor(props) {
    super(props); // Permite referencia (llamar) a la clase principal Student
  }
  approvedCourse(newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        `Lo sentimos ${this.name}, solo puedes tomar cursos abiertos`
      );
    }
  }
}

class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }
  approvedCourse(newCourse) {
    if (newCourse.lang !== "english") {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        `Lo sentimos ${this.name}, solo puedes tomar cursos en inglés`
      );
    }
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }
  approvedCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

class TeacherStudent extends Student {
  constructor(props) {
    super(props);
  }
  approvedCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studenRole: "profesor",
    });
    comment.publicar();
  }
}

const pricila = new TeacherStudent({
  name: "Pricila",
  username: "prici",
  email: "pricila@mail.com",
  x: "pricila",
});

console.log(pricila);

const jhon2 = new FreeStudent({
  name: "John Doghe",
  username: "john26",
  email: "jhn26@mail.com",
  x: "jhn26j",
});

console.log(jhon2);

const charlie = new BasicStudent({
  name: "Charlie Brown",
  username: "chuck",
  email: "charlie@peanuts.com",
  x: "chuck",
  instagram: "charlieb",
});

console.log(charlie);

jhon2.approvedCourse(cursoProgBasica);

charlie.approvedCourse(cursoProgBasica);
charlie.approvedCourse(cursoPracticoHTML);
charlie.approvedCourse(cursoDefinitivoHTML);

console.log(charlie.approvedCourses);

jhon2.publicarComentario("Me gusto el curso");
pricila.publicarComentario("Hola");
charlie.publicarComentario("Buen curso");
