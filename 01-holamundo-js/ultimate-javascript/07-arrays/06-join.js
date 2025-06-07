let arr1 = ["Snoopy", "Woodstock", "Charlie Brown", "Linus"];
let message = arr1.join(", "); // Une los elementos del array con una coma y un espacio
console.log(message); // "Snoopy, Woodstock, Charlie Brown, Linus"

let greeting = "Hello, world from JavaScript!";
let words = greeting.split(" "); // Separa la cadena en palabras
console.log(words); // ["Hello,", "world", "from", "JavaScript!"]

let sentence = words.join("-"); // Une las palabras con un guion
console.log(sentence); // "Hello,-world-from-JavaScript!"
