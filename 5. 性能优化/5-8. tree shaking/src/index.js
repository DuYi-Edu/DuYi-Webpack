import { add } from "./myMath";
import "./common";
import "./index.css";

const div = document.createElement("div");
div.innerText = "myDiv";
div.className = "red";
document.body.appendChild(div);
console.log(add(1, 2));
