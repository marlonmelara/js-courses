//Las expresiones regulares no son una novedad de ECMAScript 9 (ES9), pero han sido una parte fundamental de JavaScript durante mucho tiempo, y ES9 introdujo algunas mejoras adicionales en las expresiones regulares.

// Define una expresión regular para coincidir con fechas en formato 'YYYY-MM-DD'.
const regex = /(\d{4})-(\d{2})-(\d{2})/;

// Utiliza 'exec' para aplicar la expresión regular a una cadena de texto y obtener los resultados.
const matchers = regex.exec("2023-01-01");

// Muestra los resultados de la coincidencia en una tabla en la consola.
console.table(matchers);

//El patrón de la expresión regular (\d{4})-(\d{2})-(\d{2}) busca tres grupos de dígitos separados por guiones. \d{4} busca un grupo de cuatro dígitos (representando el año), \d{2} busca un grupo de dos dígitos (para el mes y el día), y los paréntesis alrededor de estos patrones indican que deseamos capturar estos grupos para su uso posterior. La función exec aplica esta expresión regular a la cadena '2023-01-01', y devuelve un arreglo con la coincidencia completa y cada uno de los grupos capturados.
