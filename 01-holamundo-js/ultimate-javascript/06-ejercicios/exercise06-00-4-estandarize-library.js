// Ejercicio 00-4: Estandarizar biblioteca

// Lista de libros
const libros = [
  {
    titulo: "El gran Gatsby",
    autor: "F. Scott Fitzgerald",
    categoria: "Ficción",
  },
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anioPublicacion: 1967,
    numeroPaginas: 400,
  },
  {
    titulo: "1984",
    categoria: "Ciencia ficción",
    numeroPaginas: 328,
  },
];

// Función que asegura que cada libro tenga todas las propiedades requeridas
function estandarizarLibros(libro) {
  const propiedadesRequeridas = [
    "titulo",
    "autor",
    "anioPublicacion",
    "categoria",
    "paginas",
  ];

  // Verificar si el libro tiene todas las propiedades requeridas
  for (let i = 0; i < propiedadesRequeridas.length; i++) {
    const propiedad = propiedadesRequeridas[i];
    if (!(propiedad in libro)) {
      libro[propiedad] = null;
    }
  }
}

// Estandarizar cada libro en la lista
for (let i = 0; i < libros.length; i++) {
  estandarizarLibros(libros[i]);
}

// Imprimir los libros estandarizados
console.log(libros);
