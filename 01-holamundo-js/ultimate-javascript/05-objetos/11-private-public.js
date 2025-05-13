// Constructor de tipo "clase" en JavaScript usando función tradicional
function Usuario() {
  // 🔒 Variable privada: solo accesible dentro de esta función
  let id = 1;

  // 🔓 Propiedad pública: accesible desde fuera con 'usuario.name'
  this.name = "Charlie";

  // 🔒 Método privado: solo accesible dentro de la función 'Usuario'
  let login = function () {
    console.log("Usuario logueado");
  };

  // 🔓 Método público: puede llamarse desde fuera con 'usuario.save()'
  this.save = function () {
    login(); // Accede a la función privada (encapsulamiento)
    console.log("Usuario guardado");
  };
}

// Se crea una instancia del objeto usando 'new'
const usuario = new Usuario();

// Acceso a una propiedad pública
console.log(usuario.name); // Charlie

// Llamada a un método público que a su vez usa un método privado
usuario.save(); // Usuario logueado, Usuario guardado
