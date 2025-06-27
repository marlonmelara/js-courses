// Ejercicio 03
/** Hacer una función que permita obtener desde un array los nombres de los usuarios que han pagado su suscripción. Basic, Premium y Gold son planes de paga */

const users = [
  { name: "Charlie", plan: "Premium" },
  { name: "Sally", plan: "Freemium" },
  { name: "Snoopy", plan: "Gold" },
  { name: "Patty", plan: "Freemium" },
  { name: "Linus", plan: "Freemium" },
  { name: "Marcie", plan: "Premium" },
  { name: "Lucy", plan: "Basic" },
  { name: "Schroeder", plan: "Basic" },
  { name: "Woodstock", plan: "Trial" },
];

// Usando operadores
const getPaidUsers = users.filter(
  (user) =>
    user.plan === "Basic" || user.plan === "Premium" || user.plan === "Gold"
);

console.log(getPaidUsers);

// Array con los planes de pago
const paymentPlans = ["Basic", "Premium", "Gold"];

// Usando Includes
const getPaidUsersWithIncludes = users.filter((user) =>
  paymentPlans.includes(user.plan)
);

console.log(getPaidUsersWithIncludes);

// Usando Some
const getPaidUsersWithSome = users.filter((user) => {
  return paymentPlans.some((plan) => plan === user.plan);
});

console.log(getPaidUsersWithSome);
