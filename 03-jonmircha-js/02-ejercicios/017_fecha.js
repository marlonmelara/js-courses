/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020) */

console.log("***** Solución JonMircha *****");

const calcularAnnios = (fecha = undefined) => {
  if (fecha === undefined) return console.warn("No ingresaste la fecha");
  if (!(fecha instanceof Date))
    return console.error("El valor que ingresaste no es una fecha válida");

  let hoyMenosFecha = new Date().getTime() - fecha.getTime();
  let anniosEnMilesegundos = 1000 * 60 * 60 * 24 * 365;
  let anniosHumanos = Math.floor(hoyMenosFecha / anniosEnMilesegundos);

  return Math.sign(anniosHumanos) === -1
    ? console.info(
        `Faltan ${Math.abs(anniosHumanos)} años para el ${fecha.getFullYear()}`
      )
    : Math.sign(anniosHumanos) === 1
    ? console.info(
        `Han pasado ${anniosHumanos} años, desde ${fecha.getFullYear()}`
      )
    : console.info(`Estamos en el año actual ${fecha.getFullYear()}`);
};

calcularAnnios();
calcularAnnios({});
calcularAnnios(new Date());
calcularAnnios(new Date(1975, 1, 4));
calcularAnnios(new Date(1978, 6, 9));
