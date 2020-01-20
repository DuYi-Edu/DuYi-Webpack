//希望导入的模块结果是一个可用的资源路径
import png from "./assets/webpack.png"
console.log(png)
var img = document.createElement("img");
img.src = png;
document.body.appendChild(img);