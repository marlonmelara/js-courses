const greeting = function (name) {
  return `Hi, ${name}`;
};

// Arrow function - explicit return
const NewGreeting = (name) => {
  return `Hi, ${name}`;
};

// Arrow function - implicit return
const NewGreetingImplicit = (name) => `Hi, ${name}`;

// Lexical Binding
const finctionalCharacter = {
  name: "Uncle Ben",
  messageWithTraditionalFunction: function (message) {
    console.log(`${this.name} says: ${message}`);
  },

  messageWithArrowFunction: (message) => {
    console.log(`${this.name} says: ${message}`);
  },
};

finctionalCharacter.messageWithTraditionalFunction(
  "With great power comes great responsability."
);

finctionalCharacter.messageWithArrowFunction("Beware of Doctor Octupus.");
