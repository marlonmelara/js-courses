// Ejercicio 00-1:
// Hacer una función que reciba un array de lista de precios para obtener el precio promedio de los precios

const prices = [100, 200, 300, 400, 500];

const calculateAveragePrice = (priceList) => {
  if (priceList.length === 0) {
    return 0;
  }
  const sum = priceList.reduce((acc, price) => acc + price, 0);
  return sum / priceList.length;
};

const average = calculateAveragePrice(prices);
console.log(average); // 300
