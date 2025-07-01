// Ejercicio 04
/** Hacer dos funciones que permita obtener desde un array el número de usuarios Premium y el número de usuarios mayores de edad */

const users = [
  { name: "Charlie", plan: "Premium", age: 25 },
  { name: "Sally", plan: "Freemium", age: 16 },
  { name: "Snoopy", plan: "Gold", age: 30 },
  { name: "Patty", plan: "Freemium", age: 17 },
  { name: "Linus", plan: "Freemium", age: 19 },
  { name: "Marcie", plan: "Premium", age: 22 },
  { name: "Lucy", plan: "Basic", age: 15 },
  { name: "Schroeder", plan: "Basic", age: 18 },
  { name: "Woodstock", plan: "Trial", age: 12 },
];

// Array con los planes de pago
const paymentPlans = ["Basic", "Premium", "Gold"];

// Contar usuarios
const usersPremiumCount = users.reduce((acc, user) => {
  const isPaymentPlan = paymentPlans.includes(user.plan);
  if (isPaymentPlan) {
    return acc + 1;
  }
  return acc;
}, 0);

console.log(usersPremiumCount); // 5

// Contar usuarios mayores de edad
const usersAdultCount = users.reduce((acc, user) => {
  if (user.age >= 18) {
    return acc + 1;
  }
  return acc;
}, 0);

console.log(usersAdultCount); // 5
