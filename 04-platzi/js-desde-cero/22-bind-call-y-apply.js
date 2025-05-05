const owner = "Harry";
const address = "Privet Drive 4";

function owlGreeting(owner, address) {
  console.log(`Hi, I'm ${this.owlName} and I live with ${owner} on ${address}`);
}

const newHouse = {
  owlName: "Hedwing",
};

owlGreeting.call(newHouse, owner, address);

const necessaryValues = [owner, address];
owlGreeting.apply(newHouse, necessaryValues);

const bindingWithBind = owlGreeting.bind(newHouse, owner, address);
bindingWithBind();

// Otro ejemplo
const caricatura = { nombre: "Vaca y pollito" };

function recuerdo(personaje) {
  console.log(
    `${this.nombre} era mi caricatura favorita. Me encantaba ver las aventuras de ${personaje}`
  );
}

recuerdo.call(caricatura, "Vaca");

const caricaturaRecuerdo = recuerdo.bind(caricatura, "Pollito");
caricaturaRecuerdo();
