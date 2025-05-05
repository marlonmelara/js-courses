'use strict';

/**
 * Este archivo define un módulo de exportación que contiene un objeto con datos de fotos organizados por regiones geográficas.
 * La estructura del objeto es la siguiente:
 * - `fotos` es un objeto que actúa como un mapa donde cada clave corresponde a un nombre de región.
 * - Cada región tiene un arreglo de objetos, donde cada objeto representa una foto individual con su metadata.
 *
 * Cada objeto de foto tiene las siguientes propiedades:
 * - `id`: Un número único que identifica la foto dentro de su región.
 * - `nombre`: El nombre o título de la foto.
 * - `descripcion`: Una descripción detallada de la foto, que puede contener información adicional como el contexto o la ubicación donde se tomó la foto.
 * - `ruta`: La ruta relativa al archivo de imagen correspondiente a la foto.
 */

var datos = {
  fotos: {
    america: [
      {
        id: 1,
        nombre: "América 1",
        descripcion:
          "América 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/america/1.jpg",
      },
      {
        id: 2,
        nombre: "América 2",
        descripcion:
          "América 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/america/2.jpg",
      },
      {
        id: 3,
        nombre: "América 3",
        descripcion:
          "América 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/america/3.jpg",
      },
      {
        id: 4,
        nombre: "América 4",
        descripcion:
          "América 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/america/4.jpg",
      },
      {
        id: 5,
        nombre: "América 5",
        descripcion:
          "América 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/america/5.jpg",
      },
      {
        id: 6,
        nombre: "América 6",
        descripcion:
          "América 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/america/6.jpg",
      },
      {
        id: 7,
        nombre: "América 7",
        descripcion:
          "América 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/america/7.jpg",
      },
      {
        id: 8,
        nombre: "América 8",
        descripcion:
          "América 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/america/8.jpg",
      },
      {
        id: 9,
        nombre: "América 9",
        descripcion:
          "América 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/america/9.jpg",
      },
      {
        id: 10,
        nombre: "América 10",
        descripcion:
          "América 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/america/10.jpg",
      },
    ],
    europa: [
      {
        id: 11,
        nombre: "Europa 1",
        descripcion:
          "Europa 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/europa/1.jpg",
      },
      {
        id: 12,
        nombre: "Europa 2",
        descripcion:
          "Europa 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/europa/2.jpg",
      },
      {
        id: 13,
        nombre: "Europa 3",
        descripcion:
          "Europa 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/europa/3.jpg",
      },
      {
        id: 14,
        nombre: "Europa 4",
        descripcion:
          "Europa 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/europa/4.jpg",
      },
      {
        id: 15,
        nombre: "Europa 5",
        descripcion:
          "Europa 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/europa/5.jpg",
      },
      {
        id: 16,
        nombre: "Europa 6",
        descripcion:
          "Europa 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/europa/6.jpg",
      },
      {
        id: 17,
        nombre: "Europa 7",
        descripcion:
          "Europa 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/europa/7.jpg",
      },
      {
        id: 18,
        nombre: "Europa 8",
        descripcion:
          "Europa 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/europa/8.jpg",
      },
      {
        id: 19,
        nombre: "Europa 9",
        descripcion:
          "Europa 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/europa/9.jpg",
      },
      {
        id: 20,
        nombre: "Europa 10",
        descripcion:
          "Europa 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/europa/10.jpg",
      },
    ],

    africa: [
      {
        id: 21,
        nombre: "África 1",
        descripcion:
          "África 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/africa/1.jpg",
      },
      {
        id: 22,
        nombre: "África 2",
        descripcion:
          "África 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/africa/2.jpg",
      },
      {
        id: 23,
        nombre: "África 3",
        descripcion:
          "África 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/africa/3.jpg",
      },
      {
        id: 24,
        nombre: "África 4",
        descripcion:
          "África 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/africa/4.jpg",
      },
      {
        id: 25,
        nombre: "África 5",
        descripcion:
          "África 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/africa/5.jpg",
      },
      {
        id: 26,
        nombre: "África 6",
        descripcion:
          "África 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/africa/6.jpg",
      },
      {
        id: 27,
        nombre: "África 7",
        descripcion:
          "África 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/africa/7.jpg",
      },
      {
        id: 28,
        nombre: "África 8",
        descripcion:
          "África 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/africa/8.jpg",
      },
      {
        id: 29,
        nombre: "África 9",
        descripcion:
          "África 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/africa/9.jpg",
      },
      {
        id: 30,
        nombre: "África 10",
        descripcion:
          "África 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/africa/10.jpg",
      },
    ],
    asia: [
      {
        id: 31,
        nombre: "Asia 1",
        descripcion:
          "Asia 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/asia/1.jpg",
      },
      {
        id: 32,
        nombre: "Asia 2",
        descripcion:
          "Asia 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/asia/2.jpg",
      },
      {
        id: 33,
        nombre: "Asia 3",
        descripcion:
          "Asia 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/asia/3.jpg",
      },
      {
        id: 34,
        nombre: "Asia 4",
        descripcion:
          "Asia 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/asia/4.jpg",
      },
      {
        id: 35,
        nombre: "Asia 5",
        descripcion:
          "Asia 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/asia/5.jpg",
      },
      {
        id: 36,
        nombre: "Asia 6",
        descripcion:
          "Asia 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/asia/6.jpg",
      },
      {
        id: 37,
        nombre: "Asia 7",
        descripcion:
          "Asia 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/asia/7.jpg",
      },
      {
        id: 38,
        nombre: "Asia 8",
        descripcion:
          "Asia 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/asia/8.jpg",
      },
      {
        id: 39,
        nombre: "Asia 9",
        descripcion:
          "Asia 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/asia/9.jpg",
      },
      {
        id: 40,
        nombre: "Asia 10",
        descripcion:
          "Asia 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/asia/10.jpg",
      },
    ],
    oceania: [
      {
        id: 41,
        nombre: "Oceania 1",
        descripcion:
          "Oceania 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/oceania/1.jpg",
      },
      {
        id: 42,
        nombre: "Oceania 2",
        descripcion:
          "Oceania 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/oceania/2.jpg",
      },
      {
        id: 43,
        nombre: "Oceania 3",
        descripcion:
          "Oceania 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/oceania/3.jpg",
      },
      {
        id: 44,
        nombre: "Oceania 4",
        descripcion:
          "Oceania 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/oceania/4.jpg",
      },
      {
        id: 45,
        nombre: "Oceania 5",
        descripcion:
          "Oceania 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/oceania/5.jpg",
      },
      {
        id: 46,
        nombre: "Oceania 6",
        descripcion:
          "Oceania 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/oceania/6.jpg",
      },
      {
        id: 47,
        nombre: "Oceania 7",
        descripcion:
          "Oceania 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/oceania/7.jpg",
      },
      {
        id: 48,
        nombre: "Oceania 8",
        descripcion:
          "Oceania 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/oceania/8.jpg",
      },
      {
        id: 49,
        nombre: "Oceania 9",
        descripcion:
          "Oceania 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/oceania/9.jpg",
      },
      {
        id: 50,
        nombre: "Oceania 10",
        descripcion:
          "Oceania 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/oceania/10.jpg",
      },
    ],
    antartida: [
      {
        id: 51,
        nombre: "Antártida 1",
        descripcion:
          "Antártida 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/antartida/1.jpg",
      },
      {
        id: 52,
        nombre: "Antártida 2",
        descripcion:
          "Antártida 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/antartida/2.jpg",
      },
      {
        id: 53,
        nombre: "Antártida 3",
        descripcion:
          "Antártida 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/antartida/3.jpg",
      },
      {
        id: 54,
        nombre: "Antártida 4",
        descripcion:
          "Antártida 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/antartida/4.jpg",
      },
      {
        id: 55,
        nombre: "Antártida 5",
        descripcion:
          "Antártida 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/antartida/5.jpg",
      },
      {
        id: 56,
        nombre: "Antártida 6",
        descripcion:
          "Antártida 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/antartida/6.jpg",
      },
      {
        id: 57,
        nombre: "Antártida 7",
        descripcion:
          "Antártida 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/antartida/7.jpg",
      },
      {
        id: 58,
        nombre: "Antártida 8",
        descripcion:
          "Antártida 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/antartida/8.jpg",
      },
      {
        id: 59,
        nombre: "Antártida 9",
        descripcion:
          "Antártida 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/antartida/9.jpg",
      },
    ],
  },
};

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

const { fotos } = datos; // Es una forma abreviadad y más legible de "const fotos = data.fotos;"

var dataCategorias = {
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

// Importa el objeto dataCategorias desde el archivo especificado en la ruta "./datos/categorias".

// Destructura para obtener el array 'categorias' del objeto importado.
const { categorias } = dataCategorias;

// Obtiene el elemento del DOM con el ID 'categorias' y lo almacena en la constante contenedorCategorias.
const contenedorCategorias$1 = document.getElementById("categorias");

// Recorre el array de 'categorias' usando forEach.
categorias.forEach((categoria) => {
  // Crea un nuevo elemento de enlace (anchor <a>).
  const nuevaCategoria = document.createElement("a");

  // Genera la plantilla HTML para el contenido de cada categoría, incluyendo imagen y datos.
  const plantilla = `<img class="categoria__img"
  src="${categoria.imagenPortada}" alt="" />
  <div class="categoria__datos">
  <p class="categoria__nombre">${categoria.nombre}</p>
  <p class="categoria__numero-fotos">${categoria.numeroFotos} fotos</p>
  </div>`;

  // Establece el HTML interno del enlace a la plantilla creada.
  nuevaCategoria.innerHTML = plantilla;

  // Añade la clase 'categoria' al enlace para aplicar estilos CSS correspondientes.
  nuevaCategoria.classList.add("categoria");

  // Define el atributo 'href' del enlace como '#', probablemente para un comportamiento de ancla.
  nuevaCategoria.href = "#";

  // Añade un atributo de data personalizado con el ID de la categoría para posible uso en JS.
  nuevaCategoria.dataset.categoria = categoria.id;

  // Añade el enlace completo al contenedor de categorías en el DOM.
  contenedorCategorias$1.append(nuevaCategoria);
});

// Selecciona el elemento de la galería en el DOM por su ID.
const galeria$3 = document.getElementById("galeria");

/**
 * Función para cargar una imagen y su información en la galería.
 *
 * @param {number} id - El ID único de la imagen.
 * @param {string} nombre - El nombre de la imagen.
 * @param {string} ruta - La ruta de archivo de la imagen.
 * @param {string} descripcion - La descripción de la imagen.
 */
const cargarImagen = (id, nombre, ruta, descripcion) => {
  // Establece el atributo 'src' del elemento de imagen de la galería con la ruta proporcionada.
  galeria$3.querySelector(".galeria__imagen").src = ruta;
  // Establece un atributo de dato personalizado 'data-id-imagen' con el ID de la imagen.
  galeria$3.querySelector(".galeria__imagen").dataset.idImagen = id;
  // Actualiza el texto del título de la galería con el nombre proporcionado.
  galeria$3.querySelector(".galeria__titulo").innerText = nombre;
  // Actualiza el texto de la descripción de la imagen activa con la descripción proporcionada.
  galeria$3.querySelector(".galeria__descripcion-imagen-activa").innerText =
    descripcion;

  const categoriaActual = galeria$3.dataset.categoria;
  const fotos = datos.fotos[categoriaActual];

  let indexImagenActual;
  fotos.forEach((foto, index) => {
    if (foto.id === id) {
      indexImagenActual = index;
    }
  });

  // Marcamos la imagen del carousel como activa.
  if (galeria$3.querySelectorAll(".galeria__carousel-slide").length > 0) {
    // Eliminamos la clase active del cualquier slide.
    galeria$3
      .querySelector(".galeria__carousel-slide--active")
      .classList.remove("galeria__carousel-slide--active");

    galeria$3
      .querySelectorAll(".galeria__carousel-slide")
      [indexImagenActual].classList.add("galeria__carousel-slide--active");
  }
};

// Funcionalidad de cargar imagen anterior y siguiente
const cargarAnteriorSiguiente = (direccion) => {
  const categoriaActual = galeria$3.dataset.categoria;
  const fotos = datos.fotos[categoriaActual];
  const idImagenActual = parseInt(
    galeria$3.querySelector(".galeria__imagen").dataset.idImagen
  );

  let indexImagenActual;
  fotos.forEach((foto, index) => {
    if (foto.id === idImagenActual) {
      indexImagenActual = index;
    }
  });

  if (direccion === "siguiente") {
    if (fotos[indexImagenActual + 1]) {
      const { id, nombre, ruta, descripcion } = fotos[indexImagenActual + 1];
      cargarImagen(id, nombre, ruta, descripcion);
    }
  } else if (direccion === "anterior") {
    if (fotos[indexImagenActual - 1]) {
      const { id, nombre, ruta, descripcion } = fotos[indexImagenActual - 1];
      cargarImagen(id, nombre, ruta, descripcion);
    }
  }
};

// Se obtiene el contenedor de las categorías del DOM y se almacena en la constante contenedorCategorias.
const contenedorCategorias = document.getElementById("categorias");
// Se obtiene el elemento que representa la galería del DOM y se almacena en la constante galeria.
const galeria$2 = document.getElementById("galeria");

// Se añade un listener de evento de clic al contenedor de categorías.
contenedorCategorias.addEventListener("click", (e) => {
  // Se evita el comportamiento por defecto de los enlaces, evitando que la página navegue al hacer clic.
  e.preventDefault();

  // Se verifica si el clic ocurrió dentro de un enlace (elemento <a>) utilizando el método closest.
  if (e.target.closest("a")) {
    // Si el clic fue dentro de un enlace, se añade la clase 'galeria--active' al elemento galeria.
    galeria$2.classList.add("galeria--active");
    // Se establece el estilo de overflow del cuerpo del documento a "hidden" para evitar el desplazamiento del fondo.
    document.body.style.overflow = "hidden";

    // Se obtiene el identificador de la categoría desde el atributo de datos del enlace clickeado.
    const categoriaActiva = e.target.closest("a").dataset.categoria;

    galeria$2.dataset.categoria = categoriaActiva;

    // Se recuperan las fotos correspondientes a la categoría activa de los datos importados.
    const fotos = datos.fotos[categoriaActiva];

    // Se obtiene el contenedor de slides del carrusel en la galería.
    const carousel = galeria$2.querySelector(".galeria__carousel-slides");
    // Se limpia el contenido actual del carrusel.
    carousel.innerHTML = "";

    const { id, nombre, ruta, descripcion } = fotos[0];
    cargarImagen(id, nombre, ruta, descripcion);

    // Por cada foto en la categoría, se crea un elemento de carrusel y se añade al HTML de la galería.
    fotos.forEach((foto) => {
      const slide = `
    <a href="#" class="galeria__carousel-slide">
      <img
      class="galeria__carousel-image"
      src="${foto.ruta}"
      data-id="${foto.id}"
      alt="" />
    </a>
    `;
      // Se añade el slide al contenedor de slides del carrusel en la galería.
      galeria$2.querySelector(".galeria__carousel-slides").innerHTML += slide;
    });

    // Se añade una clase para activar visualmente el primer slide del carrusel.
    galeria$2
      .querySelector(".galeria__carousel-slide")
      .classList.add("galeria__carousel-slide--active");
  }
});

// Obtener el elemento del DOM con el id 'galeria'.
const galeria$1 = document.getElementById("galeria");

// Definir la función 'cerrarGaleria'.
const cerrarGaleria = () => {
  // Remover la clase 'galeria--active' del elemento 'galeria'.
  // Esto probablemente haga que la galería se oculte o cambie su estilo a no activo.
  galeria$1.classList.remove("galeria--active");

  // Restablecer el estilo 'overflow' del cuerpo del documento a su valor por defecto.
  // Esto permite que la página vuelva a desplazarse si se había deshabilitado anteriormente.
  document.body.style.overflow = "";
};

// Importar el módulo de datos de fotos y la función cargarImagen de sus respectivos archivos.

/**
 * Manejador del evento de clic para una diapositiva de la galería.
 *
 * @param {Event} e - El objeto evento que se dispara cuando se hace clic en una diapositiva.
 */
const slideClick = (e) => {
  // Inicializar variables para la ruta, el nombre y la descripción de la imagen.
  let ruta, nombre, descripcion;

  // Obtener el ID de la imagen a partir del atributo de datos del elemento clickeado y convertirlo a un número entero.
  const id = parseInt(e.target.dataset.id);

  // Seleccionar el elemento de la galería en el DOM por su ID.
  const galeria = document.getElementById("galeria");

  // Obtener la categoría activa de los datos de la galería.
  const categoriaActiva = galeria.dataset.categoria;

  // Iterar sobre el arreglo de fotos de la categoría activa para encontrar la foto correspondiente al ID.
  datos.fotos[categoriaActiva].forEach((foto) => {
    if (foto.id === id) {
      // Si se encuentra la foto con el ID correspondiente, asignar su ruta, nombre y descripción a las variables.
      ruta = foto.ruta;
      nombre = foto.nombre;
      descripcion = foto.descripcion;
    }
  });

  // Llamar a la función cargarImagen con los detalles de la foto seleccionada para actualizar la galería.
  cargarImagen(id, nombre, ruta, descripcion);
};

// Creación de función carousel
const carousel = (direction) => {
  console.log(direction);
};

// Obtener el elemento del DOM con el id 'galeria'.
const galeria = document.getElementById("galeria");

// Añadir un manejador de eventos de tipo 'click' al elemento 'galeria'.
galeria.addEventListener("click", (e) => {
  // Intentar encontrar el elemento 'button' más cercano al lugar donde ocurrió el evento 'click'.
  // Esto es útil si hay varios botones o elementos interactivos dentro de la galería y se quiere
  // asegurar de reaccionar solo al botón correcto.
  const boton = e.target.closest("button");

  // Comprobar si el botón existe y tiene un atributo de 'data-accion' con el valor 'cerrar-galeria'.
  // El operador opcional '?' asegura que no se produzca un error si 'boton' es null o undefined.

  // - - - CERRAR GALERIA
  if (boton?.dataset?.accion === "cerrar-galeria") {
    // Si la condición se cumple, se llama a la función 'cerrarGaleria' importada anteriormente.
    cerrarGaleria();
  }

  // - - - CAROUSEL SLIDE CLICK
  if (e.target.dataset.id) {
    slideClick(e);
  }

  // - - - SIGUIENTE IMAGEN
  if (boton?.dataset?.accion === "siguiente-imagen") {
    cargarAnteriorSiguiente("siguiente");
  }

  // - - - ANTERIOR IMAGEN
  if (boton?.dataset?.accion === "anterior-imagen") {
    cargarAnteriorSiguiente("anterior");
  }

  // - - - CAROUSEL ADELANTE
  if (boton?.dataset?.accion === "siguiente-slide") {
    carousel("Adelante");
  }

  // - - - CAROUSEL ATRAS
  if (boton?.dataset?.accion === "anterior-slide") {
    carousel("Atras");
  }
});
