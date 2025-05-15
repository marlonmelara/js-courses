function MyEvent(name, duration, tickets) {
  this.name = name;
  this.duration = duration;
  this.tickets = tickets;
  // Método: Mostrar información
  this.getEventInfo = function () {
    return `🎤 Evento: ${this.name}, Duración: ${this.duration} horas, Entradas disponibles: ${this.tickets}`;
  };
  // Método: Comprar boletos
  this.sellTicket = function (quantity) {
    if (quantity > 5) {
      console.log("⛔ Solo se pueden comprar hasta 5 boletos por compra.");
      return;
    }
    if (this.tickets >= quantity) {
      this.tickets -= quantity;
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
    this.tickets += quantity;
    console.log(
      `🔄 Se han cancelado ${quantity} entradas para el evento ${this.name}.`
    );
  };
}

// Crear un evento
const myEvent = new MyEvent("Concierto", 2, 50);
console.log(myEvent.tickets); // 50 Propiedad pública que puede ser accedida directamente y modificada
// myEvent.tickets = 100; // Modificando la propiedad pública
// console.log(myEvent.tickets); // 100

// Mostrar información del evento
console.log(myEvent.getEventInfo());
console.log("---------------------------------");
// Vender boletos
myEvent.sellTicket(3);
console.log(myEvent.getEventInfo());

myEvent.sellTicket(6);
myEvent.cancelTicket(2);
console.log(myEvent.getEventInfo());
