/**
 * Este módulo importa datos de fotos desde el archivo "fotos.js" y utiliza esta información para
 * exportar un objeto predeterminado que contiene un arreglo de categorías.
 *
 * Cada categoría es un objeto con las siguientes propiedades:
 * - `id`: Un identificador único para la categoría, que se utiliza también como clave en el objeto importado de fotos.
 * - `nombre`: El nombre legible de la categoría, que se muestra en la interfaz de usuario.
 * - `numeroFotos`: Un número que indica cuántas fotos pertenecen a esta categoría. Se calcula accediendo a la propiedad correspondiente en el objeto de fotos importado y contando la longitud del arreglo.
 * - `imagenPortada`: La ruta relativa al archivo de imagen que se utilizará como portada para la categoría.
 */

import data from "./fotos";
const { fotos } = data; // Es una forma abreviadad y más legible de "const fotos = data.fotos;"

export default {
  categorias: [
    {
      id: "america",
      nombre: "América",
      numeroFotos: fotos["america"].length,
      imagenPortada: "./img/america.jpg",
    },
    {
      id: "europa",
      nombre: "Europa",
      numeroFotos: fotos["europa"].length,
      imagenPortada: "./img/europa.jpg",
    },
    {
      id: "africa",
      nombre: "África",
      numeroFotos: fotos["africa"].length,
      imagenPortada: "./img/africa.jpg",
    },
    {
      id: "asia",
      nombre: "Asia",
      numeroFotos: fotos["asia"].length,
      imagenPortada: "./img/asia.jpg",
    },
    {
      id: "oceania",
      nombre: "Oceania",
      numeroFotos: fotos["oceania"].length,
      imagenPortada: "./img/oceania.jpg",
    },
    {
      id: "antartida",
      nombre: "Antártida",
      numeroFotos: fotos["antartida"].length,
      imagenPortada: "./img/antartida.jpg",
    },
  ],
};
