import { applyStyles } from "./css/util.js"
import { border, redBg } from "./css/common.js"
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");

const styles = {
    width: "400px",
    height: "500px",
    margin: "0 auto"
}

applyStyles(div1, styles, border(), redBg)
applyStyles(div2, styles, border(5, "green"))