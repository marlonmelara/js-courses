// 📌 Ejemplo #1
const usuario = {
  nombre: "Carlos",
  pais: "Chile",
};

switch (usuario.pais) {
  case "México":
    console.info("El usuario es mexicano");
    break;
  case "Argentina":
    console.info("El usuario es argentino");
    break;
  case "España":
    console.info("El usuario es español");
    break;
  default:
    console.info("El usuario es de otra nacionalidad");
    break;
}
