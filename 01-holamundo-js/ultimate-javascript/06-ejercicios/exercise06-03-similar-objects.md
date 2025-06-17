# Ejercicio 03: Comparación de Objetos Similares en JavaScript

Este archivo, `exercise03-similar-objects.js`, demuestra tres enfoques diferentes para comparar dos objetos en JavaScript y determinar si son "similares". El nivel de similitud se vuelve más riguroso con cada solución.

## Desglose de cada función

### 1. `similar(obj1, obj2)` — Solución 1️⃣

**Propósito:** Verificar si todas las propiedades presentes en `obj1` también existen en `obj2` con los mismos valores exactos.

#### Funcionamiento `similar`

- Inicializa una bandera `different` en `false`.
- Itera cada clave de `obj1` con un bucle `for...in`.
- Compara el valor de cada clave en `obj1` y `obj2` con `!==`.
- Si encuentra alguna diferencia, establece `different = true`.
- Devuelve `!different` (true si no se encontraron diferencias).

#### Ejemplo `similar(obj1, obj2)`

```javascript
similar({ id: 1, name: "Snoopy" }, { id: 1, name: "Snoopy" }); // true
```

### Limitaciones

- **Verificación unilateral:** No importa si obj2 tiene propiedades extra.

- **Comparación superficial:** Compara valores primitivos, no objetos anidados.

- **Ineficiencia:** No corta el bucle al encontrar una diferencia.

### Versión mejorada

```javascript
function similar_improved(obj1, obj2) {
  for (let key in obj1) {
    if (!(key in obj2) || obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}
```

### 2. `similar2(obj1, obj2)` — Solución 2️⃣

**Propósito:** Compara si dos objetos tienen exactamente las mismas propiedades y valores.

### Funcionamiento `similar2`

Obtiene las claves de ambos objetos con Object.keys().

- Verifica longitud: Si difieren en número de claves, retorna false.

- Verifica valores: Compara cada valor con !==.

- Si todas las claves y valores coinciden, retorna true.

#### Ejemplos `similar2(obj1, obj2)`

```javascript
console.log(similar2({ id: 1, name: "Snoopy" }, { id: 1, name: "Snoopy" })); // true
console.log(similar2({ id: 1 }, { id: 1, extra: true })); // false
```

### Mejoras sobre similar

- Verificación bidireccional de claves.

- Retorna false en cuanto encuentra una diferencia.

### Limitación

-**Comparación superficial:** No compara objetos anidados por contenido.

### 2. `similar3(obj1, obj2)` — Solución 3️⃣

**Propósito:** Realiza una comparación profunda (deep comparison), incluyendo objetos anidados.

### Funcionamiento

- Obtiene las claves con Object.keys().

- Verifica longitud: Si difieren en cantidad de claves, retorna false.

- Comparación recursiva:

  - Si ambos valores son objetos no nulos, llama recursivamente a similar3.

  - Si no, compara directamente con !==.

### Ejemplos `similar3(obj1, obj2)`

```javascript
console.log(
  similar3(
    { id: 1, name: "Snoopy", owner: { name: "Charlie Brown" } },
    { id: 1, name: "Snoopy", owner: { name: "Charlie Brown" } }
  )
); // true
```

### Mejoras sobre similar2

- **Comparación profunda:** Compara contenido de objetos anidados.

### Consideraciones

- **Referencias circulares:** No las maneja, puede causar recursión infinita.

- **Tipos específicos:** Trata todos los objetos igual, sin lógica especial para Date, RegExp, etc.

- **Prototipos:** Solo compara propiedades propias, no del prototipo.

## Resumen

| Función    | Tipo de Comparación     | Verificación Bidireccional | Comparación Profunda |
| ---------- | ----------------------- | -------------------------- | -------------------- |
| `similar`  | Superficial, unilateral | ❌                         | ❌                   |
| `similar2` | Superficial, bilateral  | ✅                         | ❌                   |
| `similar3` | Profunda, bilateral     | ✅                         | ✅                   |
