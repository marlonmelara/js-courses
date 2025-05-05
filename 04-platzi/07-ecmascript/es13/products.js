// await fuera de una función async es una característica introducida en ECMAScript 2022 (ES12). Anteriormente, la palabra clave await solo podía usarse dentro de funciones asíncronas (async), pero con ES12, ahora es posible usar await en el nivel superior de un módulo ES.

// Importa el módulo 'fetch' para realizar solicitudes HTTP.
import fetch from "node-fetch";

// Realiza una solicitud HTTP y espera a que se resuelva.
const response = await fetch("https://api.escuelajs.co/api/v1/products");

// Espera a que la respuesta se convierta a JSON.
const products = await response.json();

// Exporta la variable 'products'.
export { products };
