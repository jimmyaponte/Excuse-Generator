/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#mi_excusa").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let a = ["El", "Un"];
  let b = ["perro", "auto", "ladron", "vendedor", "oso"];
  let c = ["me robo", "me asesino", "me retrasó", "me secuestro"];
  let d = ["en el bosque", "en la avenida", "saliendo de casa", "en el parque"];

  let aIndex = Math.floor(Math.random() * a.length);
  let bIndex = Math.floor(Math.random() * b.length);
  let cIndex = Math.floor(Math.random() * c.length);
  let dIndex = Math.floor(Math.random() * d.length);
  return a[aIndex] + " " + b[bIndex] + " " + c[cIndex] + " " + d[dIndex];
};
