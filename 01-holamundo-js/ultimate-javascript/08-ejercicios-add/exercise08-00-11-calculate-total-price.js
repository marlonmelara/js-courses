// Ejercicio 11:
/**
Crear una función llamada calculateTotalPriceInStock que reciba un array de objetos, donde cada objeto representa un producto y tiene las propiedades name (string), price (number) y inStock (boolean). La función debe retornar la suma total de los precios de solo los productos que estén en stock (inStock: true)
*/

const products = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
  { name: "Webcam", price: 50, inStock: false },
];

const calculateTotalPriceInStock = (inStockArray) => {
  return inStockArray
    .filter((p) => p.inStock)
    .reduce((total, p) => total + p.price, 0);
};

const totalAvailablePrice = calculateTotalPriceInStock(products);
console.log(totalAvailablePrice); // Salida esperada: 1575 (1200 + 75 + 300)
