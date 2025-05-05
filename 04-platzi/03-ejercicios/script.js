console.log("Hello, world!");

const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafo = document.getElementsByClassName(".parrafo");
const pid = document.getElementById("pid");
const input = document.querySelector("input");

/* console.log(h1);
console.log(input.value);
console.log({
  h1,
  p,
  parrafo,
  pid,
  input,
}); */

// h1.innerHTML = "Patito <br> Feo";
// h1.innerText = "Patito <br> Feo";
// console.log(h1.getAttribute("class"));
// h1.setAttribute("class", "rojo");
h1.classList.add("rojo");
h1.classList.remove("verde");
// input.value = "444";
const img = document.createElement("img");
img.setAttribute(
  "src",
  "https://adnmedialab.com/wp-content/uploads/2020/04/inteligencia-artificial-y-chatbots.jpg"
);
console.log(img);

// pid.innerHTML = "";
// pid.appendChild(img);

const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const pResult = document.querySelector("#result");

const sumarInputValues = (e) => {
  e.preventDefault();
  let num1 = +input1.value;
  let num2 = +input2.value;
  const sumaInputs = num1 + num2;
  pResult.innerText = `El resultado es: ${sumaInputs}`;
};

form.addEventListener("submit", sumarInputValues);
