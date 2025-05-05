const personalizeMessage = () => "Goodbye everybody";

function Rocket(name, ownMessage) {
  this.name = name;
  this.lauchMessage = () => ownMessage;
}

const falcon9Rocket = new Rocket("Falcon 9", "Goodbye everybody");
const falconHeavyRocket = new Rocket("Falcon Heavy", "See you soon");
console.log(falcon9Rocket.name);
console.log(falcon9Rocket.lauchMessage());
console.log(falconHeavyRocket.lauchMessage());

const RocketWithArrowFunction = (name, ownMessage) => ({
  name: name,
  lauchMessage: ownMessage,
});

const personalizeMessageForArrowFunction = () => "Succesful launch!";
const falcon9Rocket1 = RocketWithArrowFunction(
  "Falcon 9",
  personalizeMessageForArrowFunction
);

console.log(falcon9Rocket1.name);
console.log(falcon9Rocket1.lauchMessage());
