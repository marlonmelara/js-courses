# Ejercicio 04: Obtener Métodos de un Objeto en JavaScript

Este archivo, `exercise04-get-object-methods.js`, demuestra tres formas distintas de identificar y extraer los nombres de métodos (funciones) de un objeto en JavaScript.

## Objetivo

Crear una función que reciba un objeto como parámetro y devuelva un arreglo con los nombres (claves) de todas las propiedades del objeto cuyo valor sea una función.

## Objeto de ejemplo

El código define un objeto de prueba llamado `obj`:

```javascript
let obj = {
  id: 1,
  name: "Lucy",
  login: function () {},
  logout: function () {},
};
```

En este objeto

- `id` y `name` son propiedades con valores que no son funciones.
- `login` y `logout` son propiedades con valores que sí son funciones, por lo tanto, se consideran métodos.

---

## 1. getMethods(obj) — Solución 1️⃣ (con for...in)

**Propósito:** Iterar sobre todas las propiedades enumerables del objeto (incluyendo las heredadas por la cadena de prototipos) y verificar cuáles son funciones.

### Funcionamiento `getMethods(obj)`

```javascript
function getMethods(obj) {
  let methods = [];
  for (let prop in obj) {
    if (typeof obj[prop] === "function") {
      methods.push(prop);
    }
  }
  return methods;
}
```

- Utiliza for...in para recorrer todas las propiedades enumerables.

- Verifica si el valor de cada propiedad es una función con typeof.

- Si lo es, agrega el nombre de la propiedad al arreglo methods.

- Finalmente, retorna ese arreglo.

### Salida esperada

```javascript
console.log(getMethods(obj)); // ["login", "logout"]`
```

### Consideración importante

El bucle `for...in` también recorre propiedades heredadas del prototipo si son enumerables. En objetos simples como el del ejemplo, esto no representa un problema, pero en objetos más complejos podría requerirse una verificación adicional:

```javascript
if (obj.hasOwnProperty(prop) && typeof obj[prop] === "function")
```

---

## 2. getMethods2(obj) — Solución 2️⃣ (con Object.keys)

**Propósito:** Recorrer únicamente las propiedades propias del objeto y verificar cuáles son funciones.

### Funcionamiento `getMethods2(obj)`

```javascript
function getMethods2(obj) {
  const methods = [];
  for (let key of Object.keys(obj)) {
    if (typeof obj[key] === "function") {
      methods.push(key);
    }
  }
  return methods;
}
```

- Usa Object.keys(obj) para obtener las claves propias y enumerables.

- Recorre esas claves con un bucle for...of.

- Verifica si el valor de cada clave es una función con typeof.

- Si el valor es una función, agrega la clave al arreglo.

### Ventajas

- No incluye propiedades heredadas.

- Es más seguro si queremos solamente métodos definidos directamente en la instancia.

---

## 3. getMethods3(obj) - Solución 3️⃣ (usando Object.keys y filter)

Una versión más concisa usando programación funcional:

```javascript
function getMethods3(obj) {
  return Object.keys(obj).filter((key) => typeof obj[key] === "function");
}
```

- Usa filter para devolver solo las claves cuyo valor es una función.

- Logra el mismo resultado que getMethods2 con una sintaxis más compacta.

## Comparación de soluciones

| Función       | Incluye prototipo | Sintaxis moderna | Concisa | Comentario                                 |
| ------------- | ----------------- | ---------------- | ------- | ------------------------------------------ |
| `getMethods`  | ✅                | ❌               | ❌      | Puede incluir métodos heredados            |
| `getMethods2` | ❌                | ✅               | ❌      | Recomendada si solo se quieren los propios |
| `getMethods3` | ❌                | ✅               | ✅      | Alternativa funcional y más concisa        |
