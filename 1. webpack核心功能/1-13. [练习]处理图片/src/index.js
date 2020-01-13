var src = require("./assets/webpack.png")
console.log(src);
var img = document.createElement("img")
img.src = src;
document.body.appendChild(img);