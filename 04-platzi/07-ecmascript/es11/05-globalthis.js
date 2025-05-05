// globalThis es una característica introducida en ECMAScript 2020 (ES11). globalThis proporciona una forma estándar de acceder al objeto global, independientemente del entorno en el que se ejecute el código JavaScript. Antes de ES11, el objeto global se accedía de diferentes maneras en diferentes entornos (como window en navegadores, global en Node.js y self en Web Workers).

// Las siguientes líneas están comentadas, pero muestran cómo se accedía al objeto global en diferentes entornos.
console.log(window); // En un navegador, el objeto global es 'window'.
console.log(global); // En Node.js, el objeto global es 'global'.
console.log(self); // En Web Workers, el objeto global es 'self'.

// Utiliza 'globalThis' para acceder al objeto global de forma estandarizada en cualquier entorno.
console.log(globalThis); // Imprime el objeto global, independientemente del entorno.
