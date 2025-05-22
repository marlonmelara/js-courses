# Ejercicio 05: Verificar si un Objeto Tiene una Propiedad

Este script presenta tres formas distintas de crear una función que verifique si un objeto contiene una propiedad específica.

---

## Inicialización

Se define un objeto `obj` con algunas propiedades y una variable `property` con el nombre de la propiedad que queremos buscar:

```javascript
let obj = {
  id: 1,
  name: "Snoopy",
  login: function () {},
  logout: function () {},
};

let property = "name";
```

---

## Solución 1️⃣ (con `for...in`)

**Propósito:** Verifica si una propiedad existe en el objeto usando un bucle for...in.

### Funcionamiento solución 1

```javascript
function hasProperty(obj, property) {
  for (let prop in obj) {
    if (prop === property) {
      return true;
    }
  }
  return false;
}

console.log(hasProperty(obj, property)); // true
```

- Itera sobre todas las propiedades enumerables (incluidas las heredadas).

- Compara cada clave con el nombre de la propiedad buscada.

- Retorna true si encuentra coincidencia.

---

## Solución 2️⃣ (con `Object.keys()`)

_Propósito:_ Iterar solo sobre las propiedades propias del objeto y buscar coincidencias.

### Funcionamiento solución 2

```javascript
function hasProperty2(obj, property) {
  let props = Object.keys(obj);
  for (let prop of props) {
    if (prop === property) {
      return true;
    }
  }
  return false;
}

console.log(hasProperty2(obj, property)); // true
```

- Object.keys(obj) devuelve un arreglo con las claves propias del objeto.

- El bucle for...of recorre ese arreglo para buscar coincidencias.

## Solución 3️⃣ (moderna y concisa)

_Propósito:_ Usar una expresión más funcional con includes() para mayor claridad.

### Funcionamiento solución 3

```javascript
function hasProperty3(obj, property) {
  return Object.keys(obj).includes(property);
}

console.log(hasProperty3(obj, property)); // true
```

- Usa Object.keys() para obtener las claves propias del objeto.

- Aplica includes() para verificar si el arreglo contiene la propiedad deseada.

---

## Alternativas con operadores de JavaScript

### Verificación con in

```javascript
console.log(property in obj); // true
```

- Verifica si una propiedad está en el objeto, incluyendo las heredadas.

### Verificación con hasOwnProperty

```javascript
console.log(obj.hasOwnProperty(property)); // true
console.log(property in obj); // true
```

- Verifica si una propiedad es propia del objeto.

- También puede usarse de forma más segura así:

```javascript
console.log(Object.prototype.hasOwnProperty.call(obj, property)); // true
```

---

## Comparación General

| Función          | Incluye heredadas | Verifica propias | Modernidad | Concisión | Comentario                                    |
| ---------------- | ----------------- | ---------------- | ---------- | --------- | --------------------------------------------- |
| `hasProperty`    | ✅                | ❌               | ❌         | ❌        | Requiere cuidado con la herencia              |
| `hasProperty2`   | ❌                | ✅               | ✅         | ❌        | Más segura y estructurada                     |
| `hasProperty3`   | ❌                | ✅               | ✅         | ✅        | La opción más clara y recomendada             |
| `in`             | ✅                | ✅               | ✅         | ✅        | Útil pero puede incluir propiedades heredadas |
| `hasOwnProperty` | ❌                | ✅               | ✅         | ✅        | Ideal para validar propiedades propias        |
