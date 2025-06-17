# Ejercicio 06: Copiar un Objeto sin Spread ni `Object.assign()`

Este ejercicio plantea crear una función que genere una **copia superficial** de un objeto sin utilizar el operador de propagación (`...`) ni el método `Object.assign()`.

---

## Inicialización

Se define un objeto `obj` con varias propiedades, incluidas funciones, que simulan métodos:

```javascript
let obj = {
  id: 1,
  name: "Snoopy",
  login: function () {},
  logout: function () {},
};
```

---

## Solución 💡 (con `for...in`)

**Propósito:** Copiar todas las propiedades del objeto fuente en un nuevo objeto usando un bucle `for...in`.

### Funcionamiento

```javascript
function copyObject(obj) {
  let copy = {};
  for (let key in obj) {
    copy[key] = obj[key];
  }
  return copy;
}

let copiedObj = copyObject(obj);
console.log(obj, copiedObj);
```

- Se declara la función `copyObject` que toma un objeto como parámetro.
- Crea un nuevo objeto vacío `copy`.
- Itera con `for...in` sobre todas las propiedades enumerables del objeto original.
- Asigna cada propiedad al nuevo objeto.
- Devuelve la copia generada.

---

## Consideraciones 🧠

- Este método realiza una **copia superficial** del objeto.
- Si el objeto original contiene propiedades que son objetos o arreglos anidados, **no se copian**, sino que se **referencian**.
- Al modificar una propiedad interna (objeto o arreglo) en la copia, también cambiará en el original.

---

## Restricciones del Ejercicio 🧱

✅ **Permitido**:

- Uso de estructuras como `for...in`.

🚫 **No permitido**:

- `Object.assign()`
- Operador spread (`...`)
