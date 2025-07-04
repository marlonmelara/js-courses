// Ejercicio 07
/** Crear una función que permita agrupar los usuarios por la propiedad plan de suscripción */

const users = [
  { name: "Charlie", plan: "Premium", age: 25 },
  { name: "Sally", plan: "Freemium", age: 16 },
  { name: "Snoopy", plan: "Gold", age: 30 },
  { name: "Linus", plan: "Freemium", age: 19 },
  { name: "Marcie", plan: "Premium", age: 22 },
  { name: "Lucy", plan: "Basic", age: 15 },
  { name: "Woodstock", plan: "Trial", age: 12 },
];

const groupByPlan = (arr, prop) => {
  return arr.reduce((acc, user) => {
    let planValue = user[prop];
    if (acc[planValue]) {
      acc[planValue].push(user);
    } else {
      acc[planValue] = [user];
    }
    return acc;
  }, {});
};

const grouped = groupByPlan(users, "plan");
console.log({ grouped });
/**
{
  grouped: {
    Premium: [
      { name: 'Charlie', plan: 'Premium', age: 25 },
      { name: 'Marcie', plan: 'Premium', age: 22 }
    ],
    Freemium: [
      { name: 'Sally', plan: 'Freemium', age: 16 },
      { name: 'Linus', plan: 'Freemium', age: 19 }
    ],
    Gold: [ { name: 'Snoopy', plan: 'Gold', age: 30 } ],
    Basic: [ { name: 'Lucy', plan: 'Basic', age: 15 } ],
    Trial: [ { name: 'Woodstock', plan: 'Trial', age: 12 } ]
  }
}
*/
