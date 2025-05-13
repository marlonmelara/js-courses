const now = new Date(); // Fecha actual
console.log(now);

const date = new Date("December 11 1986 03:24 GMT-0400"); // Fecha específica
console.log(date);

const date2 = new Date(1986, 11, 25, 14, 15); // Fecha específica con año, mes, día, hora y minutos
console.log(date2);

let date3 = new Date(1986, 11, 25, 14 + 15, 15);
console.log(date3);

console.log("datestring", date.toDateString()); // Fecha en formato de cadena
console.log("ISOString", date.toISOString()); // 👉 Fecha en formato ISO. Usar este cuando se quiere guardar en una base de datos
console.log("localeString", date.toLocaleString()); // Fecha en formato local
console.log("timeString", date.toTimeString()); // Hora en formato de cadena

console.log(date3.getDate()); // Día del mes
console.log(date3.getDay()); // Día de la semana (0-6)
console.log(date3.getFullYear()); // Año
console.log(date3.setFullYear(2025)); // Cambia el año

console.log(date3); // Muestra la fecha con el año cambiado
