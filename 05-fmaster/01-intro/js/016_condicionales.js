// 🔔 Estructura de una condicional

// Ejemplo #1:
const usuarioUno = {
  edad: 17,
  pais: "México",
  ticket: true,
};

if (usuarioUno.edad > 17) {
  console.info(
    `El usuario es mayor de edad con ${usuarioUno.edad} años, por lo cual puede entrar al concierto`
  );
} else {
  console.info(
    `El usuario es menor de edad con ${usuarioUno.edad} años, por lo cual NO puede entrar al concierto`
  );
}

// Ejemplo #2:
const usuarioDos = {
  edad: 17,
  pais: "México",
  ticket: true,
};

if (usuarioDos.edad >= 18 && usuarioDos.ticket) {
  console.info(
    `El usuario es mayor de edad con ${usuarioDos.edad} años y posee ticket, por lo cual puede entrar al concierto`
  );
} else {
  console.info(
    `El usuario es menor de edad con ${usuarioDos.edad} años o no posee ticket, por lo cual NO puede entrar al concierto`
  );
}

/**
Puedo omitir que en el primer IF lleve usuarioDos.ticket === true
*/

// 📌 Ejemplo #3 - Anidando condicionales
const usuarioTres = {
  edad: 27,
  pais: "México",
  ticket: false,
};

if (usuarioTres.edad >= 18) {
  if (usuarioTres.ticket) {
    console.info(
      "EL usuario es mayor de edad y tiene ticket, por lo cual puede entrar al concierto"
    );
  } else {
    console.info(
      "El usuario es mayor de edad, pero no tiene ticket, por lo cual NO puede entrar al concierto"
    );
  }
} else {
  console.info(
    "El usuario es menor de edad, por lo cual NO puede entrar al concierto"
  );
}

// 📌 Ejemplo #4 - elseif
const usuarioCuatro = {
  edad: 27,
  pais: "Chile",
  ticket: false,
};

if (usuarioCuatro.pais === "México") {
  console.info("El usuario es mexicano");
} else if (usuarioCuatro.pais === "Argentina") {
  console.info("El usuario es argentino");
} else if (usuarioCuatro.pais === "España") {
  console.info("El usuario es español");
} else {
  console.info("El usuario es de otra nacionalidad");
}
