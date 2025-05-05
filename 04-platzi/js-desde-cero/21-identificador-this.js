// Enlace implícito - Implicit binding
// 'dogGreeting' es un método en el objeto 'house', por lo que 'this' se refiere a 'house'.

const house = {
  dogName: "Fido",
  dogGreeting: function () {
    console.log(`Hi, I'm ${this.dogName}`);
  },
};

house.dogGreeting(); // 'this.dogName' implícitamente se refiere a 'house.dogName'.

// Enlace explícito - Explicit binding
function dogGreeting() {
  console.log(`Hi, I'm ${this.dogName}`);
}

const newHouse = {
  dogName: "Coco",
};
dogGreeting.call(newHouse);

function newDogGreeting(owner, address) {
  console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`);
}

const owner = "Lucy";
const address = "Avenue 123";

newDogGreeting.call(newHouse, owner, address);
