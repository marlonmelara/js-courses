class MyEvent {
  #entranceTickets; // propiedad privada real

  constructor(name, duration, tickets) {
    this.name = name;
    this.duration = duration;
    this.#entranceTickets = tickets;
  }

  // Método: Mostrar información del evento
  getEventInfo() {
    return `🎤 Evento: ${this.name}, Duración: ${
      this.duration
    } horas, Entradas disponibles: ${this.#entranceTickets}`;
  }

  // Método: Comprar boletos
  sellTicket(quantity) {
    if (quantity > 5) {
      console.log("⛔ Solo se pueden comprar hasta 5 boletos por compra.");
      return;
    }

    if (this.#entranceTickets >= quantity) {
      this.#entranceTickets -= quantity;
      console.log(
        `✅ Se han vendido ${quantity} entradas para el evento ${this.name}.`
      );
    } else {
      console.log(
        `🚫 No hay suficientes entradas disponibles para el evento ${this.name}.`
      );
    }
  }

  // Método: Cancelar boletos
  cancelTicket(quantity) {
    this.#entranceTickets += quantity;
    console.log(
      `🔄 Se han cancelado ${quantity} entradas para el evento ${this.name}.`
    );
  }
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
