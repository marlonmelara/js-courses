function MyEvent(name, duration, tickets) {
  this.name = name;
  this.duration = duration;
  let entranceTickets = tickets; // Propiedad privada: no accesible desde fuera del objeto

  // Método: Mostrar información
  this.getEventInfo = function () {
    return `🎤 Evento: ${this.name}, Duración: ${this.duration} horas, Entradas disponibles: ${entranceTickets}`;
  };
  // Método: Comprar boletos
  this.sellTicket = function (quantity) {
    if (quantity > 5) {
      console.log("⛔ Solo se pueden comprar hasta 5 boletos por compra.");
      return;
    }
    if (entranceTickets >= quantity) {
      entranceTickets -= quantity;
      console.log(
        `✅ Se han vendido ${quantity} entradas para el evento ${this.name}.`
      );
    } else {
      console.log(
        `🚫 No hay suficientes entradas disponibles para el evento ${this.name}.`
      );
    }
  };
  this.cancelTicket = function (quantity) {
    entranceTickets += quantity;
    console.log(
      `🔄 Se han cancelado ${quantity} entradas para el evento ${this.name}.`
    );
  };
}

// Crear un evento
const myEvent = new MyEvent("Concert", 2, 50);

console.log(myEvent);
console.log(myEvent.tickets); // ❌ undefined

// Mostrar información del evento
console.log(myEvent.getEventInfo());
console.log("---------------------------------");

// Vender boletos
myEvent.sellTicket(3);
console.log(myEvent.getEventInfo());
myEvent.tickets = 100;
myEvent.cancelTicket(1);
console.log(myEvent.getEventInfo());
